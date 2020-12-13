import React, { useState } from "react";
import { useEffect, useRef } from "react";
interface NaverMapProps {
  $elementId?: string;
  width?: string;
  height?: string;
  clientId: string;
  center?: naver.maps.LatLng;
  zoom?: number;
  onInitialized: (map: naver.maps.Map) => void;
}

export function NaverMap(props: NaverMapProps) {
  const {
    clientId,
    $elementId,
    width,
    height,
    center,
    zoom,
    onInitialized: callback,
  } = props;
  const naverMapScriptUrl = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}`;

  const $mapRef = useRef<HTMLDivElement | null>(null);

  const [map, setMap] = useState<naver.maps.Map>();

  useEffect(() => {
    if (!map) {
      loadScript(naverMapScriptUrl, initialMap);
    }
  }, []);

  useEffect(() => {
    if (map && center) {
      map.setCenter(center);
    }
    if (map && zoom) {
      map.setZoom(zoom, true);
    }
  }, [center, zoom]);

  function initialMap() {
    if (!$mapRef.current) {
      throw new Error("cannot get map element");
    }

    const mapOptions: naver.maps.MapOptions = {
      center,
      zoom: 11,
    };

    const map = new naver.maps.Map($mapRef.current, mapOptions);
    setMap(map);
    callback(map);
  }

  return (
    <div id={$elementId} className="naver-map-container">
      <div
        id="map"
        ref={$mapRef}
        style={{
          width: `${width ? width : "600px"}`,
          height: `${height ? height : "600px"}`,
        }}
      ></div>
    </div>
  );
}

function loadScript(url: string, callBack: () => void) {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  script.onload = callBack;
  document.body.appendChild(script);
}

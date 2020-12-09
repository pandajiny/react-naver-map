import React, { useEffect, useRef } from "react";
interface NaverMapProps {
  $elementId?: string;
  width?: string;
  height?: string;
  clientId: string;
}
export function NaverMap(props: NaverMapProps) {
  const { clientId, $elementId, width, height } = props;
  const naverMapScriptUrl = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}`;

  const $mapRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    initialMap();
  });
  function initialMap() {
    if (!$mapRef.current) {
      throw new Error("cannot get map element");
    }

    const mapOptions: naver.maps.MapOptions = {
      // center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 11,
    };
    const map = new naver.maps.Map($mapRef.current, mapOptions);
  }

  return (
    <div id={$elementId} className="naver-map-container">
      <div
        id="map"
        ref={$mapRef}
        style={{
          width: `${width ? width : "400px"}`,
          height: `${height ? height : "400px"}`,
        }}
      ></div>
    </div>
  );
}

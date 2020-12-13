import ReactDOM from "react-dom";

export function setMarker(options: naver.maps.MarkerOptions) {
  // const marker = new naver.maps.Marker({
  //   map,
  //   position: new naver.maps.LatLng(place.lat, place.lng),
  //   title: place.name,
  // });
  const marker = new naver.maps.Marker(options);
  // console.log(marker);
}

export function renderHTMLIcon(element: JSX.Element): HtmlIcon {
  const $icon = document.createElement("div") as HTMLDivElement;
  $icon.className = "icon";
  ReactDOM.render(element, $icon);
  return {
    content: $icon,
  };
}

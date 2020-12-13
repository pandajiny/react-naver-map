declare namespace naver.maps {
  type hello = "WORLD";

  class Map {
    constructor(
      mapDiv: string | HTMLElement,
      mapOptions?: naver.maps.MapOptions
    );

    setCenter(center: Coord);
    setZoom(zoom: number, effect?: boolean);
  }

  interface MapOptions {
    //   지도 요소의 배경으로 사용할 이미지 URL 또는 CSS 색상값입니다.
    background?: string;
    // 지도 기본 타일의 불투명도를 설정합니다. 값의 범위는 0~1이며, 기본값은 1입니다.
    baseTileOpacity?: number;

    // 지도의 초기 좌표 경계입니다. 이 값을 설정하면 지도 옵션 중 center와 zoom 옵션을 무시하고, 지정한 좌표 경계에 맞게 지도를 생성합니다.
    // bounds: Bounds | BoundsLiteral;

    center?: Coord;
    // 지도의 초기 중심 좌표입니다. 기본값은 서울 시청 좌표(37.5666103, 126.9783882)입니다.

    // disableDoubleClickZoom	boolean	false
    // 사용자가 지도 위에서 마우스 버튼을 더블 클릭해 지도를 확대하는 기능의 사용 여부입니다.

    // disableDoubleTapZoom	boolean	false
    // 사용자가 지도 위에서 한 손가락으로 더블 탭해 지도를 확대하는 기능의 사용 여부입니다.

    // disableKineticPan	boolean	true
    // 사용자가 지도를 드래그했을 때 관성 효과(사용자가 동작을 끝낸 후에도 계속되는 지도의 움직임)의 사용 여부입니다.

    // disableTwoFingerTapZoom	boolean	false
    // 사용자가 지도 위에서 두 손가락으로 두 번 탭해 지도를 축소하는 기능의 사용 여부입니다.

    // draggable	boolean	true
    // 마우스 또는 손가락을 이용한 지도 이동(패닝) 허용 여부입니다.

    // keyboardShortcuts	boolean	false
    // 키보드 방향 키를 이용한 지도 이동(패닝) 허용 여부입니다.

    // logoControl	boolean	true
    // NAVER 로고 컨트롤의 표시 여부입니다. (항상 노출로 변경)

    // logoControlOptions	LogoControlOptions
    // NAVER 로고 컨트롤의 옵션입니다.

    // mapDataControl	boolean	true
    // 지도 데이터 저작권 컨트롤의 표시 여부입니다.

    // mapDataControlOptions	MapDataControlOptions
    // 지도 데이터 저작권 컨트롤의 옵션입니다.

    // mapTypeControl	boolean	false
    // 지도 유형 컨트롤의 표시 여부입니다.

    // mapTypeControlOptions	MapTypeControlOptions
    // 지도 유형 컨트롤의 옵션입니다.

    // mapTypeId	string	NORMAL
    // 지도의 초기 지도 유형 id입니다.

    // mapTypes	naver.maps.MapTypeRegistry
    // 지도 유형의 컬렉션을 포함하는 객체입니다. 이 값을 설정하지 않으면 사전에 정의된 NAVER 지도의 기본 지도 유형으로 설정합니다.

    // maxBounds	Bounds | BoundsLiteral	null
    // 지도에서 보이는 최대 좌표 경계입니다. 지도의 중심 좌표는 지정한 최대 좌표 경계 내에서만 설정할 수 있습니다.

    // maxZoom	number
    // 지도의 최대 줌 레벨입니다. 이 값을 설정하지 않으면 지정된 초기 지도 유형의 최고 줌 레벨로 설정합니다.

    // minZoom	number
    // 지도의 최소 줌 레벨입니다. 이 값을 설정하지 않으면 지정된 초기 지도 유형의 최저 줌 레벨로 설정합니다.

    // padding	padding
    // 지도 뷰포트의 안쪽 여백(패딩)입니다. 단위는 화면 픽셀이며, 기본값은 {top: 0, right: 0, bottom: 0, left: 0}입니다.

    // pinchZoom	boolean	true
    // 핀치 제스처를 이용한 지도 확대/축소 허용 여부입니다.

    // resizeOrigin	naver.maps.Position	CENTER
    // 지도 크기 조정 시 고정할 원점입니다.

    // scaleControl	boolean	true
    // 지도 축척 컨트롤의 표시 여부입니다.

    // scaleControlOptions	ScaleControlOptions
    // 지도 축척 컨트롤의 옵션입니다.

    // scrollWheel	boolean	true
    // 마우스 스크롤 휠을 이용한 지도 확대/축소 허용 여부입니다.

    // size	naver.maps.Size | SizeLiteral
    // 지도의 초기 크기입니다. 이 값을 설정하지 않으면, 지도 DOM 요소의 CSS 크기에 따라 지도 크기가 자동으로 조정됩니다.

    // overlayZoomEffect	null | string	null
    // 도형, 마커 등 오버레이의 줌 효과 적용 대상입니다. 적용할 대상의 창(pane) 이름을 문자열로 지정합니다. 이 값이 all이면 모든 오버레이에 줌 효과가 적용됩니다. 오버레이의 개수가 많을 때는 성능에 영향을 줄 수 있으므로 주의해서 사용해야 합니다.

    // tileSpare	number	0
    // 지도의 크기보다 여유있게 로딩할 타일의 개수를 지정합니다.

    // tileTransition	boolean	true
    // 지도 타일을 전환할 때 페이드 인 효과(타일이 서서히 나타나는 것)의 사용 여부입니다.

    // 지도의 초기 줌 레벨입니다.
    // default : 11
    zoom?: number;

    // zoomControl	boolean	false
    // 줌 컨트롤의 표시 여부입니다.

    // zoomControlOptions	ZoomControlOptions
    // 줌 컨트롤의 옵션입니다.

    // zoomOrigin	Coord | CoordLiteral	null
    // 줌 효과 시 고정하여 적용할 기준 좌표입니다. 해당 좌표가 현재 지도 화면 밖에 위치해 있으면 기본 기준 좌표를 적용합니다.

    // blankTileImage	null | string	null
    // 빈 타일 이미지 URL을 설정할 수 있는 옵션입니다. 기본값은 투명 gif 입니다.
  }

  class KVO {}

  class OverlayView extends KVO {}

  class Marker extends OverlayView {
    constructor(options: MarkerOptions);
  }

  interface MarkerOptions {
    map: Map;
    position: Coord;
    title?: string;

    //     animation	naver.maps.Animation	<optional>
    // 마커가 지도에 추가될 때 시작할 애니메이션입니다.

    // map	naver.maps.Map
    // 마커를 표시할 Map 객체입니다.

    // position	Coord | CoordLiteral
    // 마커의 위치를 나타내는 지도 좌표입니다.

    icon?: string | ImageIcon | SymbolIcon | HtmlIcon;
    // 마커의 모양입니다. 이 속성을 설정하지 않으면 기본 아이콘으로 설정합니다. 문자열로 입력할 때는 마커의 아이콘으로 사용할 이미지의 URL을 입력합니다.

    // shape	MarkerShape	<optional>
    // 마커의 인터랙션 영역입니다.

    // title	string	<optional>
    // null
    // 마커에 마우스 오버 시 나타나는 툴팁 문자열입니다. 이 속성을 설정하지 않거나 빈 문자열로 설정하면 툴팁을 노출하지 않습니다.

    // cursor	string	<optional>
    // pointer
    // 마커에 마우스 오버 시 나타나는 포인터 모양입니다.

    // clickable	boolean	<optional>
    // true
    // 마커의 클릭 허용 여부입니다. 이 값이 false이면 마커는 사용자 인터랙션을 받지 않습니다. 또한 cursor 속성값도 반영되지 않습니다.

    // draggable	boolean	<optional>
    // false
    // 마커의 드래그 허용 여부입니다. 이 속성은 clickable 속성보다 우선합니다. 즉, clickable 속성이 false라도 이 값이 true이면 클릭 등의 사용자 인터랙션을 받습니다.

    // visible	boolean	<optional>
    // true
    // 마커의 노출 허용 여부입니다.

    // zIndex	number	<optional>
    // 마커의 쌓임 순서입니다.
  }

  //   defualt  : 0
  class Point {
    constructor(x?: number, y?: number);
  }

  //   defualt  : 0
  class LatLng {
    constructor(lat: number, lng: number);
  }

  class InfoWindow {
    constructor(options: InfoWindowOptions) {}
    open(map: naver.maps.Map, anchor: Coord | naver.maps.Marker): void {}
  }
}

interface SearchPlaceArgs {
  secret: ApiSecret;
  request: SearchPlaceRequest;
}

interface ApiSecret {
  clientId: string;
  clientSecret: string;
}

interface SearchPlaceRequest {
  //     query	string	Y	-	검색을 원하는 문자열로서 UTF-8로 인코딩한다.
  query: string;
  // display	integer	N	1(기본값), 5(최대)	검색 결과 출력 건수 지정
  display?: number;
  // start	integer	N	1(기본값), 1(최대)	검색 시작 위치로 1만 가능
  start?: number;
  // sort	string	N	random (기본값), comment	정렬 옵션: random(유사도순), comment(카페/블로그 리뷰 개수 순)
  sort?: "random" | "comment";
}

interface SearchPlaceResult {
  lastBuildDate: string;
  total: number;
  start: number;
  display: number;
  items: SearchPlaceItem[];
}

interface SearchPlaceItem {
  title?: string;
  link?: string;
  category?: string;
  description?: string;
  telephone?: string;
  address?: string;
  roadAddress?: string;
  mapx?: string;
  mapy?: string;
}

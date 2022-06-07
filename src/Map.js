import { useEffect, useState } from "react";
import { get } from "firebase/database";
import { parkloc } from "./mybase";

const { kakao } = window;

export default function Map({ range }) {
  const [lati, setLati] = useState(0);
  const [longi, setLongi] = useState(0);
  useEffect(() => {
    async function getLoc() {
      const data = await get(parkloc, "parkinglots/parking/loc");
      const strData = data.val();
      const arrData = strData.split(",");
      setLati(parseFloat(arrData[0]));
      setLongi(parseFloat(arrData[1]));
    }
    getLoc();
  }, []);

  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new kakao.maps.LatLng(37.454837, 126.950714),
      level: 3,
    };

    let map = new kakao.maps.Map(container, options);

    // 마커가 표시될 위치입니다
    let markerPosition = new kakao.maps.LatLng(37.454837, 126.950714);
    // 마커를 생성합니다
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    //주차장들
    let markerPosition1 = new kakao.maps.LatLng(lati, longi);
    // 마커를 생성합니다
    let marker1 = new kakao.maps.Marker({
      position: markerPosition1,
    });
    let markerPosition2 = new kakao.maps.LatLng(37.456141, 126.951828);
    // 마커를 생성합니다
    let marker2 = new kakao.maps.Marker({
      position: markerPosition2,
    });
    let markerPosition3 = new kakao.maps.LatLng(37.456933, 126.95171);
    // 마커를 생성합니다
    let marker3 = new kakao.maps.Marker({
      position: markerPosition3,
    });
    // 마커가 지도 위에 표시되도록 설정합니다
    if (range === "100") {
      marker2.setMap(null);
      marker3.setMap(null);
      marker1.setMap(map);
    }
    if (range === "200") {
      marker3.setMap(null);
      marker1.setMap(map);
      marker2.setMap(map);
    }
    if (range === "300") {
      marker3.setMap(map);
      marker1.setMap(map);
      marker2.setMap(map);
    }

    // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
    let iwContent1 = '<div style="padding:5px;">1번 주차장</div>';

    // 인포윈도우를 생성합니다
    let infowindow1 = new kakao.maps.InfoWindow({
      content: iwContent1,
    });

    // 마커에 마우스오버 이벤트를 등록합니다
    kakao.maps.event.addListener(marker1, "mouseover", function () {
      // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
      infowindow1.open(map, marker1);
    });

    // 마커에 마우스아웃 이벤트를 등록합니다
    kakao.maps.event.addListener(marker1, "mouseout", function () {
      // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
      infowindow1.close();
    });

    // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
    let iwContent2 = '<div style="padding:5px;">2번 주차장</div>';

    // 인포윈도우를 생성합니다
    let infowindow2 = new kakao.maps.InfoWindow({
      content: iwContent2,
    });

    // 마커에 마우스오버 이벤트를 등록합니다
    kakao.maps.event.addListener(marker2, "mouseover", function () {
      // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
      infowindow2.open(map, marker2);
    });

    // 마커에 마우스아웃 이벤트를 등록합니다
    kakao.maps.event.addListener(marker2, "mouseout", function () {
      // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
      infowindow2.close();
    });

    // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
    let iwContent3 = '<div style="padding:5px;">3번 주차장</div>';

    // 인포윈도우를 생성합니다
    let infowindow3 = new kakao.maps.InfoWindow({
      content: iwContent3,
    });

    // 마커에 마우스오버 이벤트를 등록합니다
    kakao.maps.event.addListener(marker3, "mouseover", function () {
      // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
      infowindow3.open(map, marker3);
    });

    // 마커에 마우스아웃 이벤트를 등록합니다
    kakao.maps.event.addListener(marker3, "mouseout", function () {
      // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
      infowindow3.close();
    });

    // 지도에 표시할 원을 생성합니다
    let circle1 = new kakao.maps.Circle({
      center: new kakao.maps.LatLng(37.454837, 126.950714), // 원의 중심좌표 입니다
      radius: 100, // 미터 단위의 원의 반지름입니다
      strokeWeight: 5, // 선의 두께입니다
      strokeColor: "#75B8FA", // 선의 색깔입니다
      strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
      strokeStyle: "dashed", // 선의 스타일 입니다
      fillColor: "#CFE7FF", // 채우기 색깔입니다
      fillOpacity: 0.3, // 채우기 불투명도 입니다
    });

    let circle2 = new kakao.maps.Circle({
      center: new kakao.maps.LatLng(37.454837, 126.950714), // 원의 중심좌표 입니다
      radius: 200, // 미터 단위의 원의 반지름입니다
      strokeWeight: 5, // 선의 두께입니다
      strokeColor: "#75B8FA", // 선의 색깔입니다
      strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
      strokeStyle: "dashed", // 선의 스타일 입니다
      fillColor: "#CFE7FF", // 채우기 색깔입니다
      fillOpacity: 0.3, // 채우기 불투명도 입니다
    });

    let circle3 = new kakao.maps.Circle({
      center: new kakao.maps.LatLng(37.454837, 126.950714), // 원의 중심좌표 입니다
      radius: 300, // 미터 단위의 원의 반지름입니다
      strokeWeight: 5, // 선의 두께입니다
      strokeColor: "#75B8FA", // 선의 색깔입니다
      strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
      strokeStyle: "dashed", // 선의 스타일 입니다
      fillColor: "#CFE7FF", // 채우기 색깔입니다
      fillOpacity: 0.3, // 채우기 불투명도 입니다
    });
    // 지도에 원을 표시합니다
    if (range === "100") {
      circle2.setMap(null);
      circle3.setMap(null);
      circle1.setMap(map);
    }
    if (range === "200") {
      circle1.setMap(null);
      circle3.setMap(null);
      circle2.setMap(map);
    }
    if (range === "300") {
      circle1.setMap(null);
      circle2.setMap(null);
      circle3.setMap(map);
    }
  }, [range]);
  return <div id="map" style={{ width: "100vw", height: "90vh" }}></div>;
}

import { icon, marker } from "leaflet";
import { useState } from "react";
import { Marker, Pane, Popup, useMapEvent, useMapEvents } from "react-leaflet";
import { useSelector } from "react-redux";

import MapHomeMarker from "../../../../../../Assets/Images/Common/MapMarker/MapHomeMarker.png";

const PanelEditProfileMapLocationMarker = ({
  markerLocationState,
  setMarkerLocationState,
}) => {
  const userInfo = useSelector((reducer) => reducer.user.userInformations);

  const map = useMapEvents({
    click(e) {
      let lat = parseFloat(e.latlng.lat);
      let lng = parseFloat(e.latlng.lng);

      setMarkerLocationState([lat, lng]);
    },
  });

  const customIcon = new icon({
    iconUrl: MapHomeMarker,
    iconSize: [38, 38],
  });

  return (
    <Marker position={markerLocationState} icon={customIcon}>
      <Popup style={{ border: "2px solid blue" }}>
        {userInfo.homeAdderess ? `${userInfo.homeAdderess}` : "آدرس خانه"}
      </Popup>
    </Marker>
  );
};

export { PanelEditProfileMapLocationMarker };

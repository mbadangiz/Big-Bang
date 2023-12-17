import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { PanelEditProfileMapLocationMarker } from "./PanelEditProfileMapLocationMarker";
import { useSelector } from "react-redux";
import { ErrorMessage } from "formik";

const PanelEditProfileMap = ({
  markerLocationState,
  setMarkerLocationState,
}) => {
  const userInfo = useSelector((reducer) => reducer.user.userInformations);

  const center = [
    userInfo.latitude === null
      ? 36.56624251947416
      : parseFloat(userInfo.latitude),
    userInfo.longitude === null
      ? 53.058799328447755
      : parseFloat(userInfo.longitude),
  ];

  return (
    <div className="border-[3px] border-solid border-bluePrimary p-2 rounded-[20px]">
      <MapContainer
        center={center}
        zoom={10}
        style={{
          height: "200px",
          borderRadius: "15px",
          boxShadow: "2px 4px 6px -4px rgb(0 0 0 / 0.3)",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <PanelEditProfileMapLocationMarker
          setMarkerLocationState={setMarkerLocationState}
          markerLocationState={markerLocationState}
        />
      </MapContainer>
    </div>
  );
};

export { PanelEditProfileMap };

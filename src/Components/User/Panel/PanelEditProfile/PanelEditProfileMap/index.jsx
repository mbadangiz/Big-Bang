import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const PanelEditProfileMap = ({ xPosition, yPosition }) => {
  const center = [36.565997417682105, 53.05821549859579];
  const position = [36.565997417682105, 53.05821549859579];

  return (
    <div className="border-3 border-solid border-bluePrimary ">
      <MapContainer center={center} zoom={10}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <h2 className="text-xl">آدرس خانه</h2>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export { PanelEditProfileMap };

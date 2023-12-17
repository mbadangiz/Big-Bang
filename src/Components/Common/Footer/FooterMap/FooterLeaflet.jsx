import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";

import "leaflet/dist/leaflet.css";

import MapBahrolomiAcademyMarker from "../../../../Assets/Images/Common/MapMarker/MapBahrolomiAcademyMarker.png";

const FooterLeaflet = () => {
  const center = [36.599159986393104, 53.06444304200922];
  const position = [36.59794623867796, 53.06498073745867];

  const customIcon = new icon({
    iconUrl: MapBahrolomiAcademyMarker,
    iconSize: [50, 50],
  });

  return (
    <MapContainer center={center} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          <h2 className="text-xl">آموزشگاه بحرالعلومی</h2>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export { FooterLeaflet };

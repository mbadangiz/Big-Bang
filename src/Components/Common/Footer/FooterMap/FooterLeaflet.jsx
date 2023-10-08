import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

import "leaflet/dist/leaflet.css";

const FooterLeaflet = () => {
  const center = [36.599159986393104, 53.06444304200922];
  const position = [36.59794623867796, 53.06498073745867];

  return (
    <MapContainer center={center} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <h2 className="text-xl">آموزشگاه بحرالعلومی</h2>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export { FooterLeaflet };

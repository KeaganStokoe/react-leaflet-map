import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
//The CSS file below is necessary for the map to work. Without it, it simply renders a white screen.
import "./LeafletMap.css";

function LeafletMap() {
  return (
    <div className="leaflet-container">
      <MapContainer
        center={[41.0138400, 28.9496600]}
        zoom={12}
        scrollWheelZoom={false}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default LeafletMap;

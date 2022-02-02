import React from "react";

// leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Loader from "../components/Shared/Loader";

const Map = ({ data, load }) => {
  console.log(data);
  const position = [data.latitude, data.longitude];

  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <MapContainer
          style={{ height: "420px", width: "100%" }}
          center={(position ? position : 45.1, 15.2)}
          zoom={9}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={(position ? position : 45.1, 15.2)}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </>
  );
};

export default Map;

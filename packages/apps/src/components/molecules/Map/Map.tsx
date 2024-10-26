"use client";

import React from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface MapProps {
  classname?: string;
  lat: string;
  lng: string;
}

const MapView: React.FC<MapProps> = ({ lat, lng }) => (
  <div className="relative">
    <Map
      mapboxAccessToken="pk.eyJ1IjoibWVlcmVhayIsImEiOiJjbHZhbXgwNDQweHJpMmpudG1kd2tqMjl0In0.qtuWudqwu_fGNCfUG0Dwkw"
      initialViewState={{
        longitude: parseFloat(lng),
        latitude: parseFloat(lat),
        zoom: 14,
      }}
      style={{ width: "screen", height: 400, zIndex: 10 }}
      mapStyle="mapbox://styles/meereak/clx9tyy9d026001pnd0v2fflm"
    >
      <Marker longitude={parseFloat(lng)} latitude={parseFloat(lat)} />
    </Map>
  </div>
);

export default MapView;

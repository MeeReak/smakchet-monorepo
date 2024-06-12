"use client";

import React, { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, NavigationControl, GeolocateControl } from "react-map-gl";

interface MapboxProp {
  onchange?: (marker: { lng: number; lat: number }) => void;
}

const MapBox: React.FC<MapboxProp> = ({ onchange }) => {
  const [marker, setMarker] = useState<{ lng: number; lat: number } | null>(null);

  const handleMapClick = (e: any) => {
    const { lngLat } = e;
    const newMarker = {
      lng: lngLat.lng,
      lat: lngLat.lat,
    };
    setMarker(newMarker);
    if (onchange) {
      onchange(newMarker);
    }
  };

  return (
    <main>
      <Map
        mapboxAccessToken="pk.eyJ1IjoibWVlcmVhayIsImEiOiJjbHZhbXgwNDQweHJpMmpudG1kd2tqMjl0In0.qtuWudqwu_fGNCfUG0Dwkw"
        initialViewState={{
          longitude: 104.991,
          latitude: 12.5657,
          zoom: 7,
        }}
        style={{ width: "100%", height: 400, zIndex: 10 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onClick={handleMapClick}
      >
        {marker && (
          <Marker
            longitude={marker.lng}
            latitude={marker.lat}
          />
        )}
        <NavigationControl />
        <GeolocateControl />
      </Map>
    </main>
  );
}

export default MapBox;

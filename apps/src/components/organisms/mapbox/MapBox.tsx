"use client";

import React, { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
} from "react-map-gl";

interface MapboxProp{
  onchange ?: (markers:any) => void; 
}

const MapBox:React.FC<MapboxProp> = ({onchange}) => {
  const [markers, setMarkers] = useState<
    { longitude: number; latitude: number }[]
  >([]);

  const handleMapClick = (e: any) => {
    const { lngLat } = e;
    const newMarker = {
      longitude: lngLat.lng,
      latitude: lngLat.lat,
    };
    setMarkers([newMarker]);
    if(onchange){
      onchange([newMarker]);
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
        style={{ width: "screen", height: 400, zIndex: 10 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onClick={handleMapClick}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            longitude={marker.longitude}
            latitude={marker.latitude}
          />
        ))}
      </Map>
    </main>
  );
}

export default MapBox;

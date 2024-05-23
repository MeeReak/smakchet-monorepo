import React from "react";
interface MapProps{
  classname ?: string,
  src: string
}
const Map: React.FC<MapProps> = ({ src , classname}) => (
  <div className="relative" style={{ paddingTop: "75%" }}>
    <iframe
      src={src}
      className={`absolute inset-0 ${classname}`}
      style={{ border: "0" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
);

export default Map;

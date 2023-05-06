import {useMemo} from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";

export default function Home() {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY,
  });

  if (!isLoaded) return <div> Loading </div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({lat: 40.758896, lng: -73.98513}), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />{" "}
    </GoogleMap>
  );
}

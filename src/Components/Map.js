import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import styles from './Map.module.css'

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:'AIzaSyABXgcD_ObpdQ3db3ugwx7gvd7Hx3trs_E',
  });
  const center = useMemo(() => ({ lat: 23.8151, lng: 90.4256 }), []);

  return (
    <div className={styles.map}>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName={styles.mapContainer}
          center={center}
          zoom={17}
        >
        <MarkerF position={center} />
        </GoogleMap>
      )}

      
    </div>
  );
};

export default Map;
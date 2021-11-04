import React from "react";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyAvarpZ4A8Gy3qX1SBF_RtyoTsabxo8sZY';

const RouteMap = (props) => {

    const origin = {
      latitude: 53.801277,
      longitude: -1.548567,
    };

    const destination = {
      latitude: 53.821277,
      longitude: -1.538567,
    };

    return (
      <MapView
        style={{height: '100%', width: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 53.801277,
          longitude: -1.548567,
          latitudeDelta: 0.0172,
          longitudeDelta: 0.0101,
        }}>
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={5}
          strokeColor="black"
        />
        <Marker
          coordinate={origin}
          title={'Origin'}
        />
        <Marker
          coordinate={destination}
          title={'Destination'}
        />
      </MapView>
    );
};

export default RouteMap;
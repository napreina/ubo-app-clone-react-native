import React from "react";
import { Image, FlatList } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import cars from '../../assets/data/cars';

const HomeMap = (props) => {

    const getImage = (type) => {
      if (type === 'MoveIt-X') {
        return require('../../assets/images/top-MoveIt-X.png');
      }
      if (type === 'Comfort') {
        return require('../../assets/images/top-Comfort.png');
      }
      return require('../../assets/images/top-MoveIt-XL.png');
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
        {cars.map((car :{...} ) => (
        <Marker
          key={car.id}
          coordinate={{ latitude: car.latitude , longitude: car.longitude }}
        >
          <Image
            style={{
              width: 30,
              height: 30,
              resizeMode: 'contain',
              transform: [{
                rotate: `${car.heading}deg`,
              }]
            }}
            source={getImage(car.type)} />
        </Marker>
        ))}
      </MapView>
    );
};

export default HomeMap;
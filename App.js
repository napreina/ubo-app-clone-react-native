import React, {useEffect} from 'react';
import {StatusBar, PermissionsAndroid, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch';
import SearchResults from './src/screens/SearchResults';

{/* navigator.geolocation = require('@react-native-community/geolocation'); */}

const App: () => React$Node = () => {

 const androidPermission = async () => {
    try {
       const granted = await PermissionsAndroid.request(
         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
         {
           title: "MoveIt Location Permission",
           message:
             "MoveIt needs access to your Location for better experience.",
           buttonNeutral: "Ask Me Later",
           buttonNegative: "Cancel",
           buttonPositive: "OK"
         }
       );
       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
         console.log("You can use the Location");
       } else {
         console.log("Location permission denied");
       }
     } catch (err) {
       console.warn(err);
     }
  }

  useEffect( () => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      // IOS
      Geolocation.requestAuthorization();
    }
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <DestinationSearch />
    </>
  );
};

export default App;
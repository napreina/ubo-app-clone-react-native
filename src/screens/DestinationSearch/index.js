import React, { useEffect, useState } from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from './styles';
import PlaceRow from '../../screens/DestinationSearch/PlaceRow';

const DestinationSearch = (props) => {
  const [originPlace, setOriginPlace] = useState( null );
  const [destinationPlace, setDestinationPlace] = useState( null );

    useEffect( () => {
      console.warn( 'useEffect is called');
      if (originPlace, destinationPlace) {
        console.warn( 'Redirect to results');
      }
    }, [originPlace, destinationPlace]);

    return (
      <SafeAreaView>
        <View style={styles.container}>

          <GooglePlacesAutocomplete
            placeholder="From?"
            onPress={(data :GooglePlaceData , details :GooglePlaceDetails | null = null,) => {
              setOriginPlace({value: {data, details}});
              console.log(data, details);
            }}
            enablePoweredByContainer={false}
            suppressDefaultStyles
            styles={{
              textInput: styles.textInput,
              container: styles.autoCompleteContainer,
              listView: styles.listView,
              separator: styles.separator,
            }}
            fetchDetails
            query={{
              key: 'AIzaSyAvarpZ4A8Gy3qX1SBF_RtyoTsabxo8sZY',
              language: 'en',
            }}
            renderRow={(data :GooglePlaceData ) => <PlaceRow data={data} />}
          />

          <GooglePlacesAutocomplete
            placeholder="Where To?"
            onPress={(data :GooglePlaceData , details :GooglePlaceDetails | null = null,) => {
              setDestinationPlace({value: {data, details}});
              console.log(data, details);
            }}
            enablePoweredByContainer={false}
            suppressDefaultStyles
            styles={{
              textInput: styles.textInput,
              container: {
                ...styles.autoCompleteContainer,
                top: 55,
              },
              separator: styles.separator,
            }}
            fetchDetails
            query={{
              key: 'AIzaSyAvarpZ4A8Gy3qX1SBF_RtyoTsabxo8sZY',
              language: 'en',
            }}
            renderRow={(data :GooglePlaceData ) => <PlaceRow data={data} />}
          />

          {/* Circle near the Origin input */}
          <View style={styles.circle} />

          {/* Line between dots */}
          <View style={styles.line} />

          {/* Square near the Destination input */}
          <View style={styles.square} />

        </View>
      </SafeAreaView>
    );
};

export default DestinationSearch;
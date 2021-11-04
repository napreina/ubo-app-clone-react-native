import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import RouteMap from '../../components/RouteMap';
import MoveItTypes from '../../components/MoveItTypes';

const SearchResults = (props) => {
    return (
        <View style={{display: 'flex', justifyContent: 'space-between'}}>
          <View style={{height: Dimensions.get('window').height - 400}}>
            <RouteMap />
          </View>

          <View style={{height: 400}}>
            <MoveItTypes />
          </View>
        </View>
    );
};

export default SearchResults;
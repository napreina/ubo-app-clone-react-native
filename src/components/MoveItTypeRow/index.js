import React from 'react';
import { View, Image, Text } from "react-native";
import styles from './styles.js';

import Ionicons from "react-native-vector-icons/Ionicons";

const MoveItTypeRow = (props) => {
    const {type} = props;

    const getImage = () => {
      if (type.type === 'MoveIt-X') {
        return require('../../assets/images/MoveIt-X.jpeg');
      }
      if (type.type === 'Comfort') {
        return require('../../assets/images/Comfort.jpeg');
      }
      return require('../../assets/images/MoveIt-XL.jpeg');
    };

    return (
      <View style={styles.container}>

        {/* Image */}
        <Image
          style={styles.image}
          source={getImage()}
        />

        <View style={styles.middleContainer}>
          <Text style={styles.type}>
            {type.type}{'  '}
            <Ionicons name={'person'} size={16} />
            3
          </Text>
          <Text style={styles.time}>
            08:03 drop off
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
          <Text style={styles.price}>est. £{type.price}</Text>
        </View>
      </View>
    );
};

export default MoveItTypeRow;
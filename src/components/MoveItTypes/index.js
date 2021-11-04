import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import MoveItTypeRow from '../MoveItTypeRow';

import typesData from '../../assets/data/types';

const MoveItTypes = (props) => {
    const confirm = () => {
      console.warn( 'confirm');
    };
    return (
        <View>
          {typesData.map((type :{...} ) => (
            <MoveItTypeRow type={type} />
          ))}

          <Pressable onPress={confirm} style={{
            backgroundColor: 'black',
            padding: 10,
            margin: 10,
            alignItems: 'center',
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
          }}>
            <Text style={{
              color: 'white',
              fontWeight: 'bold',
            }}>
              Confirm MoveIt
            </Text>
          </Pressable>
        </View>
    );
};

export default MoveItTypes;
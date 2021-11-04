import React from "react";
import { View, Text } from "react-native";

import styles from './styles';

const CovidMessage = (props) => {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>We Are Here To Help You</Text>
          <Text style={styles.text}>
            MoveIt’s key focus is to provide dependable and readily available transportation service for your goods. MoveIt’s goal is to continually expand globally and bring its services to different cities. To take over the moving industry by being the cheapest, easiest moving company all over the world.
          </Text>
          <Text style={styles.learnMore}>Learn More</Text>
        </View>
    );
};

export default CovidMessage;
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
      padding: 10,
      height: '100%',
    },
    textInput: {
      padding: 10,
      backgroundColor: '#eee',
      marginVertical: 5,
      marginLeft: 20,
      borderRadius: 10,
    },
    listView: {
      position: 'absolute',
      top: 105,
    },
    autoCompleteContainer: {
      position: 'absolute',
      top: 0,
      left: 10,
      right:10,
    },
    separator: {
      backgroundColor: '#efefef',
      height: 1,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    iconContainer: {
      backgroundColor: '#a2a2a2',
      padding: 5,
      borderRadius: 50,
      marginRight: 15,
    },
    locationContainer: {

    },
    circle: {
      width: 7,
      height: 7,
      backgroundColor: 'black',
      position: 'absolute',
      top: 25,
      left: 15,
      borderRadius: 5
    },
    line: {
      width: 2,
      height: 40,
      backgroundColor: '#c4c4c4',
      position: 'absolute',
      top: 35,
      left: 17,
      borderRadius: 5
    },
    square: {
      width: 7,
      height: 7,
      backgroundColor: 'black',
      position: 'absolute',
      top: 80,
      left: 15,
    },
});

export default styles;
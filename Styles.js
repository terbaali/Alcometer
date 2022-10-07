import { StyleSheet } from "react-native";
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
      paddingTop: Constants.statusBarHeight,
    },
    picker: {
      width: '100%',
    },
    red: {
      color: 'red',
      fontSize: 30,
      fontWeight: 'bold',
    },
    yellow: {
      color: 'yellow',
      fontSize: 30,
      fontWeight: 'bold',
    },
    green: {
      color: 'green',
      fontSize: 30,
      fontWeight: 'bold',
    },
    header: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 90,
    },
    heading: {
      color: 'blue',
      fontFamily: 'cursive',
      fontWeight: 'bold',
      fontSize: 35,
      fontFamily: 'monospace',
    },
    label: {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      fontSize: 15,
    },
    result: {
      alignItems: 'center',
      paddingTop: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: 'lightgrey',
      borderRadius: 3,
      paddingLeft: 10,
      marginTop: 5,
      marginBottom: 5,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: '40%',
      marginBottom: 5,
      paddingLeft: 10,
      paddingTop: 5,
    },
    dropdownLabel: {
      marginRight: 10,
    }, 
    circle: {
      height: 20,
      width: 20,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    checkedCircle: {
      width: 13,
      height: 13,
      borderRadius: 7,
      backgroundColor: '#000',
    },
  });
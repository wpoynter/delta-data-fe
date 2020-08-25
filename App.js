/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {NativeEventEmitter, NativeModules} from 'react-native';
// import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue.js';

// const spyFunction = (msg) => {
//   console.log(msg);
// };

// MessageQueue.spy(spyFunction);

import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  PermissionsAndroid
} from 'react-native';

async function requestNavisensPermission() {
  if(Platform.OS === 'android') {
    try {
        var granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            'title': 'Fine Location Permission',
            'message': 'This location API needs your location'
          }
        )
        var granted1 = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          {
            'title': 'Coarse Location Permission',
            'message': 'This location API needs your location'
          }
        )
        var granted2 = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            'title': 'Log File Storage Permission',
            'message': 'This app needs external storage permissions' + 
                      ' to record log files if you enable that feature'
          }
        )
      } catch (err) {
        console.warn(err)
      }
    }
  } 

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor() {
        super();
        requestNavisensPermission();
        this.state = {
            motionDNAstring: "test",
            locationStatus: "UNKNOWN",
            location_localLocation_x: "x",
            location_localLocation_z: "y",
            location_localLocation_y: "z",
            location_globalLocation_latitude: "lat",
            location_globalLocation_longitude: "long",
            location_globalLocation_altitude: "alt",
            location_localHeading: "heading",
            motion_motionType: "nada",
            gpsLocation_globalLocation_latitude: "lat",
            gpsLocation_globalLocation_longitude: "long",
            gpsLocation_globalLocation_altitude: "alt",
            navidate: "0",
            errorCode: "NO ERROR CODE",
            errorString: "NO ERROR STRING"
        };
        console.log("initialized react app")
    }
    
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Test!
        </Text>
        {/* <TextInput style={styles.instructions}
        value={this.state.motionDNAstring}
        /> */}
        <Text style={styles.instructions}>
        {"X: " + this.state.location_localLocation_x + " Y: " + this.state.location_localLocation_y + " Z: " + this.state.location_localLocation_z}
        </Text>
        <Text style={styles.instructions}>
        {"NAVISENS LOCATION"}
        </Text>
        <Text style={styles.instructions}>
        {"Lat: " + this.state.location_globalLocation_latitude + " Long: " + this.state.location_globalLocation_longitude + " Alt: " + this.state.location_globalLocation_altitude}
        </Text>
        <Text style={styles.instructions}>
        {"GPS LOCATION"}
        </Text>
        <Text style={styles.instructions}>
        {"Lat: " + this.state.gpsLocation_globalLocation_latitude + " Long: " + this.state.gpsLocation_globalLocation_longitude + " Alt: " + this.state.gpsLocation_globalLocation_altitude}
        </Text>
        <Text style={styles.instructions}>
        {this.state.location_localHeading}
        </Text>
        <Text style={styles.instructions}>
        {this.state.motion_motionType}
        </Text>
        <Text style={styles.instructions}>
        {this.state.navidate}
        </Text>
        <Text style={styles.instructions}>
        {this.state.errorCode}
        </Text>
        <Text style={styles.instructions}>
        {this.state.errorString}
        </Text>
        <Text style={styles.instructions}>
        {this.state.locationStatus}
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#dd6260',
    marginBottom: 5,
  },
});

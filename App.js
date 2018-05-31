import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {FixedHeader} from "./elements/fixedHeader";

export default class App extends React.Component {
  render() {
    return (
      <View>
       <FixedHeader/>
      </View>
    );
  }
}

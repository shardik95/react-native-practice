import React from 'react';
import {StatusBar, StyleSheet,View} from 'react-native';
import {FixedHeader} from "./elements/FixedHeader";
import {TextHeadings} from "./elements/TextHeadings";
import {Icons} from "./elements/Icons";
import {ListItems} from "./elements/ListItems";

export default class App extends React.Component {
  render() {
    return (
        <View>
            <StatusBar barStyle="light-content"/>
            <FixedHeader/>
            <TextHeadings/>
            <ListItems/>
            <Icons/>
        </View>
    );
  }
}

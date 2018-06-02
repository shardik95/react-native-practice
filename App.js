import React from 'react';
import {StatusBar, StyleSheet,ScrollView} from 'react-native';
import {FixedHeader} from "./elements/FixedHeader";
import {TextHeadings} from "./elements/TextHeadings";
import {Icons} from "./elements/Icons";
import {ListItems} from "./elements/ListItems";
import QuestionTypeChooser from "./elements/QuestionTypeChooser";
import QuestionPicker from "./elements/QuestionPicker";

export default class App extends React.Component {
  render() {
    return (
        <ScrollView>
            <StatusBar barStyle="light-content"/>
            <FixedHeader/>
            <QuestionTypeChooser/>
            <QuestionPicker/>
            <ListItems/>
            <TextHeadings/>
            <Icons/>
        </ScrollView>
    );
  }
}

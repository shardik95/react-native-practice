import React from 'react';
import {View} from 'react-native';
import {Text,Divider} from 'react-native-elements';

export const TextHeadings= () => (
    <View style={{padding:15}}>
        <Text h1>Welcome!</Text>
        <Text h2>Welcome!</Text>
        <Text h3>Welcome!</Text>
        <Text h4>Welcome!</Text>
        <Divider style={{backgroundColor:'blue'}}/>
        <Text>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
        </Text>

    </View>
)
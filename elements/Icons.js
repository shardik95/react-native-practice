import React from 'react';
import {Icon} from 'react-native-elements';
import {View,Alert} from 'react-native';

export const Icons = () => (
    <View>
        <Icon
            reverse
            name="ios-american-football"
            type="ionicon"
            color="#517fa4"
        />
        <Icon
            raised
            name="heartbeat"
            type="font-awesome"
            color="red"
            onPress={()=>{
                Alert.alert("Clicked!")
            }}
        />
    </View>
)
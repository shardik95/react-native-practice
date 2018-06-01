import React from 'react';
import {ListItem} from 'react-native-elements';
import {View} from 'react-native';

export const ListItems = () => {

    const list = [
        {title:"Question 1",subtitle:"Fill in the blanks",icon:"list"},
        {title:"Question 2",subtitle:"True or False",icon:"code"},
        {title:"Question 3",subtitle:"Multiple Choice",icon:"check"},
        {title:"Question 4",subtitle:"Essay",icon:"subject"}
    ]

    return(
        <View>
            {list.map( (listitem,index) => (
                <ListItem
                    title={listitem.title}
                    subtitle={listitem.subtitle}
                    icon={listitem.icon}
                    key={index}
                />
            ))}
        </View>
    )
}
import React from 'react';
import {StatusBar,ScrollView} from 'react-native';
import {FixedHeader} from "./elements/FixedHeader";
import {TextHeadings} from "./elements/TextHeadings";
import {Icons} from "./elements/Icons";
import {ListItems} from "./elements/ListItems";
import QuestionTypeChooser from "./elements/QuestionTypeChooser";
import QuestionPicker from "./elements/QuestionPicker";
import TrueFalseQuestionEditor from "./elements/TrueFalseQuestionEditor";
import {createStackNavigator} from 'react-navigation';
import {Text,Button} from 'react-native-elements';
import {View} from 'react-native';


class Home extends React.Component{

    static navigationOptions={title:"Home"}
    constructor(props){
        super(props)
    }

    render() {
        return (
            <ScrollView>
                <StatusBar barStyle="light-content"/>
                <FixedHeader/>
                <Button title="Screen A" onPress={()=>this.props.navigation.navigate("ScreenA")}/>
                <Button title="Screen B" onPress={()=>this.props.navigation.navigate("ScreenB")}/>
                <Button title="Screen X" onPress={()=>this.props.navigation.navigate("ScreenX",
                    {parameter:'no default'})}/>
                <TrueFalseQuestionEditor/>
                <QuestionTypeChooser/>
                <QuestionPicker/>
                <ListItems/>
                <TextHeadings/>
                <Icons/>
            </ScrollView>
        );
    }
}

class ScreenX extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Text h1>{this.props.navigation.getParam('parameter','default')}</Text>
        )
    }

}

class ScreenA extends React.Component{
    static navigationOptions={title:"ScreenA"}

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text h1>Screen A</Text>
                <Button title="Go to Screen B"
                        onPress={()=>{this.props.navigation.navigate("ScreenB")}}/>
            </View>
        )
    }
}

class ScreenB extends React.Component{
    static navigationOptions={title:"ScreenB"}

    render(){
        return(
            <View>
            <Text h1>Screen B</Text>
                <Button title="Go to Screen A"
                        onPress={()=>{this.props.navigation.navigate("ScreenA")}}/>
            </View>

        )
    }
}

const App =createStackNavigator({
    Home,
    ScreenA,
    ScreenB,
    ScreenX
})

export default App;
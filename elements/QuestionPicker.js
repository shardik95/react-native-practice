import React,{Component} from 'react';
import {Picker,View,Text} from 'react-native';

class QuestionPicker extends Component{

    constructor(props){
        super(props)
        this.state={
            QuestionTypeValue:"MC"
        }
        this.changeValue=this.changeValue.bind(this);
    }

    changeValue(newValue){
        this.setState({QuestionTypeValue:newValue})
    }

    render(){

        return(
            <View>
                <Picker selectedValue={this.state.QuestionTypeValue}
                        onValueChange={this.changeValue}>
                    <Picker.Item value="MC" label="Multiple Choice"/>
                    <Picker.Item value="TF" label="True/False"/>
                    <Picker.Item value="FB" label="Fill in the Blanks"/>
                    <Picker.Item value="ES" label="Essay"/>
                </Picker>
                <Text>{this.state.QuestionTypeValue}</Text>
            </View>
        )

    }
}

export default QuestionPicker;
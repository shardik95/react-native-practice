import React from 'react';
import {View} from 'react-native';
import {FormInput,FormLabel,FormValidationMessage,Text,Button,CheckBox} from 'react-native-elements';

class TrueFalseQuestionEditor extends React.Component{

    constructor(props){
        super(props);
        this.state={
            title:"",
            description:"",
            points:"",
            isTrue:true
        }
    }

    formUpdate(newState){
        this.setState(newState);
    }

    render(){
        return(
            <View>
                <Text h3>True False Editor</Text>
                <FormLabel>Title</FormLabel>
                <FormInput onChangeText={(text)=>this.formUpdate(
                    {title:text}
                )}/>
                <FormValidationMessage>Title is required</FormValidationMessage>
                <FormLabel>Description</FormLabel>
                <FormInput onChangeText={(text)=>this.formUpdate({
                    description:text
                })}/>
                <FormValidationMessage>Description is required</FormValidationMessage>
                <CheckBox title="is this true" checked={this.state.isTrue} onPress={()=>this.formUpdate({
                    isTrue:!this.state.isTrue
                })}/>
                <Text h3>Preview</Text>
                <Text h2>{this.state.title}</Text>
                <Text>{this.state.description}</Text>
                <Button title="Save" backgroundColor="green" color="#fff"/>
                <Button title="Cancel" backgroundColor="red" color="#fff"/>
            </View>
        )
    }

}

export default TrueFalseQuestionEditor;
import React,{Component} from 'react';
import {ButtonGroup} from 'react-native-elements';


class QuestionTypeChooser extends Component{

    constructor(){
        super();
        this.state={
            QuestionTypeIndex:0
        }
        this.changeIndex=this.changeIndex.bind(this);
    }

    changeIndex(newIndex){
        this.setState({QuestionTypeIndex:newIndex})
    }

    render(){

        const buttons=['Multiple Choice','Fill in the blanks',
        'Essay','True or/n False']

        return(
            <ButtonGroup
                buttons={buttons}
                onPress={this.changeIndex}
                selectedIndex={this.state.QuestionTypeIndex}
                containerStyle={{height:75}}
            />
        )
    }

}

export default QuestionTypeChooser
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

class App extends Component{

    constructor(){
        super()
        this.state = {
            text:'',
            data:[
                {
                    title:'this is title1',
                    item1:'this is item #1',
                    item1:'this is item #2',
                    item1:'this is item #3',
                    item1:'this is item #4',

                },{
                    title:'this is title2',
                    item1:'this is item #1',
                    item1:'this is item #2',
                    item1:'this is item #3',
                    item1:'this is item #4',

                },{
                    title:'this is title3',
                    item1:'this is item #1',
                    item1:'this is item #2',
                    item1:'this is item #3',
                    item1:'this is item #4',

                },{
                    title:'this is title4',
                    item1:'this is item #1',
                    item1:'this is item #2',
                    item1:'this is item #3',
                    item1:'this is item #4',

                }
            ],
        }
        this.onSelect = this.onSelect.bind(this)
    }

    onSelect(rIndex, value,gIndex){
        this.setState({
        text: `Selected rIndex: ${rIndex} , value: ${value}, gIndex:${gIndex}`
        })
    }

    render(){
        return(
            <View style={styles.container}>
                {
                    this.state.data.map((values,gIndex)=>{
                        var {A,B,C,D} = values;
                        
                        return (
                        <View
                            key={values.title}
                        >
                            <View style={{marginTop:15}}>
                                <Text>{`${gIndex+1}.${values.title}`}</Text>
                            </View>
                            <RadioGroup
                                gIndex={gIndex}
                                onSelect={(rIndex, value, gIndex) => this.onSelect(rIndex, value, gIndex)}>
                                
                                <RadioButton value={`A`}>
                                    <Text>{`A.${A}`}</Text>
                                </RadioButton>

                                <RadioButton value={`B`}>
                                    <Text>{`B.${B}`}</Text>
                                </RadioButton>

                                <RadioButton value={`C`} style={{display: C ? "flex" : "none"}}>
                                    <Text>{`C. ${C}`}</Text>
                                </RadioButton>

                                <RadioButton value={`D`} style={{display: D ? "flex" : "none"}}>
                                    <Text>{`D. ${D}`}</Text>
                                </RadioButton>


                            </RadioGroup>
                        </View>)
                    })
                }

                <Text style={styles.text}>{this.state.text}</Text>
                
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        marginTop: 40,
    },
    text: {
        padding: 10,
        fontSize: 14,
    },
})

module.exports = App



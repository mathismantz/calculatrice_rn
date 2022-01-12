import {View, TouchableHighlight, Text} from "react-native";
import {useContext} from "react";
import {CalcContext} from "../context";

function Memory()
{
    const {state,dispatch} = useContext(CalcContext)
    let btnDisable;
    if(state.memory === null || state.memory === "")
    {
        btnDisable = true;
    } else
    {
        btnDisable = false;
    }
    return(
        <View style={{
            height: '3%',
            width: '100%',
            flexDirection:'row',
            backgroundColor: 'lightgrey'
        }}>
            <View style={{
                width: '33%'
            }}>
                <TouchableHighlight
                    onPress={() => dispatch({type:'MEMORY_STORE'})}
                    style={{
                        width: '100%'
                    }}>
                    <View style={{
                        alignItems:'center',
                        width: '100%'
                    }}>
                        <Text>MS</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={{
                width: '33%'
            }}>
                <TouchableHighlight
                    disabled={btnDisable}
                    onPress={() => dispatch({type:'MEMORY_CLEAR'})}
                    style={{
                        width: '100%'
                    }}>
                    <View style={{
                        alignItems:'center',
                        width: '100%'
                    }}>
                        <Text>MC</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={{
                width: '33%'
            }}>
                <TouchableHighlight
                    disabled={btnDisable}
                    onPress={() => dispatch({type:'MEMORY_RECALL'})}
                    style={{
                        width: '100%'
                    }}>
                    <View style={{
                        alignItems:'center',
                        width: '100%'
                    }}>
                        <Text>MR</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>

    )
}



export default Memory;
import {Text, TouchableHighlight, View} from "react-native";
import {useContext} from "react";
import {CalcContext} from "../context";

function Key() {

    const {dispatch} = useContext(CalcContext)
    return (
        <View style={{
            height: '100%'
        }}>
            <View style={{
                height: '3%',
                width: '100%',
                flexDirection: 'row',
                backgroundColor: 'lightgrey'
            }}>
                <View style={{
                    width: '33%'
                }}
                >
                    <TouchableHighlight
                        onPress={() => dispatch({type:'ADD_SYMBOL',key:'%'})}
                        style={{
                            width: '100%'
                        }}>
                        <View style={{
                            alignItems: 'center',
                            width: '100%'
                        }}>
                            <Text>%</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{
                    width: '33%'
                }}>
                    <TouchableHighlight
                        onPress={() => dispatch({type:'ADD_SYMBOL',key:'/'})}
                        style={{
                            width: '100%'
                        }}>
                        <View style={{
                            alignItems: 'center',
                            width: '100%'
                        }}>
                            <Text>/</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{
                    width: '33%'
                }}>
                    <TouchableHighlight
                        onPress={() => dispatch({type:'ADD_SYMBOL',key:'x'})}
                        style={{
                            width: '100%'
                        }}>
                        <View style={{
                            alignItems: 'center',
                            width: '100%'
                        }}>
                            <Text>x</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={{
                height: '3%',
                width: '100%',
                flexDirection: 'row',
                backgroundColor: 'lightgrey'
            }}>
                <View style={{
                    width: '33%'
                }}>
                    <TouchableHighlight
                        onPress={() => dispatch({type:'ADD_SYMBOL',key:'-'})}
                        style={{
                            width: '100%'
                        }}>
                        <View style={{
                            alignItems: 'center',
                            width: '100%'
                        }}>
                            <Text>-</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{
                    width: '33%'
                }}>
                    <TouchableHighlight
                        onPress={() => dispatch({type:'ADD_SYMBOL',key:'+'})}
                        style={{
                            width: '100%'
                        }}>
                        <View style={{
                            alignItems: 'center',
                            width: '100%'
                        }}>
                            <Text>+</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{
                    width: '33%'
                }}>
                    <TouchableHighlight
                        onPress={() => dispatch({type:'EVAL'})}
                        style={{
                            width: '100%'
                        }}>
                        <View style={{
                            alignItems: 'center',
                            width: '100%'
                        }}>
                            <Text>=</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>

        </View>
    );
}

export default Key;
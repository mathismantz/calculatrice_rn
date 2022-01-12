import {Text, TouchableHighlight, View} from "react-native";
import {useContext} from "react";
import {CalcContext} from "../context";

function Keyboard()
{
    const {dispatch} = useContext(CalcContext)
    return(
        <>
            <View style={{
                width: '100%',
                flexDirection:'row',
                backgroundColor: 'lightgrey'
            }}>
                <View style={{
                    width: '33%'
                }}>
                    <TouchableHighlight
                        onPress={() => dispatch({type: 'ADD_SYMBOL',key:'7'})}
                        style={{
                            width: '100%'
                        }}>
                        <View style={{
                            alignItems:'center',
                            width: '100%'
                        }}>
                            <Text>7</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{
                    width: '33%'
                }}>
                    <TouchableHighlight
                        onPress={() => dispatch({type:'ADD_SYMBOL',key:'8'})}
                        style={{
                            width: '100%'
                        }}>
                        <View style={{
                            alignItems:'center',
                            width: '100%'
                        }}>
                            <Text>8</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{
                    width: '33%'
                }}>
                    <TouchableHighlight
                        onPress={() => dispatch({type:'ADD_SYMBOL',key:'9'})}
                        style={{
                            width: '100%'
                        }}>
                        <View style={{
                            alignItems:'center',
                            width: '100%'
                        }}>
                            <Text>9</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>

            <View style={{
                width: '100%',
                flexDirection:'row',
                backgroundColor: 'lightgrey'
            }}>
                <View style={{
                    width: '33%'
                }}>
                    <TouchableHighlight
                        onPress={() => dispatch({type:'ADD_SYMBOL',key:'4'})}
                        style={{
                            width: '100%'
                        }}>
                        <View style={{
                            alignItems:'center',
                            width: '100%'
                        }}>
                            <Text>4</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{
                    width: '33%'
                }}>
                    <TouchableHighlight
                        onPress={() => dispatch({type:'ADD_SYMBOL',key:'5'})}
                        style={{
                            width: '100%'
                        }}>
                        <View style={{
                            alignItems:'center',
                            width: '100%'
                        }}>
                            <Text>5</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{
                    width: '33%'
                }}>
                    <TouchableHighlight
                        onPress={() => dispatch({type:'ADD_SYMBOL',key:'6'})}
                        style={{
                            width: '100%'
                        }}>
                        <View style={{
                            alignItems:'center',
                            width: '100%'
                        }}>
                            <Text>6</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>

            <View style={{
                width: '100%',
                flexDirection:'row',
                backgroundColor: 'lightgrey'
            }}>
                <View style={{
                    width: '33%'
                }}>
                    <TouchableHighlight
                        onPress={() => dispatch({type:'ADD_SYMBOL',key:'1'})}
                        style={{
                            width: '100%'
                        }}>
                        <View style={{
                            alignItems:'center',
                            width: '100%'
                        }}>
                            <Text>1</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{
                    width: '33%'
                }}>
                    <TouchableHighlight
                        onPress={() => dispatch({type:'ADD_SYMBOL',key:'2'})}
                        style={{
                            width: '100%'
                        }}>
                        <View style={{
                            alignItems:'center',
                            width: '100%'
                        }}>
                            <Text>2</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{
                    width: '33%'
                }}>
                    <TouchableHighlight
                        onPress={() => dispatch({type:'ADD_SYMBOL',key:'3'})}
                        style={{
                            width: '100%'
                        }}>
                        <View style={{
                            alignItems:'center',
                            width: '100%'
                        }}>
                            <Text>3</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>

            <View style={{
                width: '100%',
                flexDirection:'row',
                backgroundColor: 'lightgrey'
            }}>
                <View style={{
                    width: '33%'
                }}>
                    <TouchableHighlight
                        onPress={() => dispatch({type:'ADD_SYMBOL',key:'0'})}
                        style={{
                            width: '100%'
                        }}>
                        <View style={{
                            alignItems:'center',
                            width: '100%'
                        }}>
                            <Text>0</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{
                    width: '33%'
                }}>
                    <TouchableHighlight
                        onPress={() => dispatch({type:'ERASE'})}
                        style={{
                            width: '100%'
                        }}>
                        <View style={{
                            alignItems:'center',
                            width: '100%'
                        }}>
                            <Text>AC</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{
                    width: '33%'
                }}>
                    <TouchableHighlight
                        onPress={() => dispatch({type:'ERASE_ALL'})}
                        style={{
                            width: '100%'
                        }}>
                        <View style={{
                            alignItems:'center',
                            width: '100%'
                        }}>
                            <Text>C</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </>



        );
}

export default Keyboard;
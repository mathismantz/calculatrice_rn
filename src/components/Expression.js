import {Text,View} from "react-native";
import {useContext} from "react";
import {CalcContext} from "../context";

function Expression()
{
    const {state} = useContext(CalcContext)
    return(
        <View style={{
            backgroundColor: 'grey',
            height: '4%',
            width: '100%',
        }}>
            <Text style={{
                fontSize:15
            }}>
                {'expr:' + state.expression}
            </Text>
        </View>
    )
}

export default Expression;
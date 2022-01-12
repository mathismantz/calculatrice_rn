import {View} from "react-native";
import Title from "./Title";
import Expression from "./Expression";
import Memory from "./Memory";
import Keyboard from "./Keyboard";
import Key from "./Key";
import {useReducer} from "react";
import {defaultState, reducer} from "../reducer";
import {CalcContext} from "../context";

function Calculatrice()
{
    const [state, dispatch] = useReducer(reducer, defaultState);
    return(
       <CalcContext.Provider value={{state, dispatch}}>
           <View style={{
               flex:1
           }}>
               <Title/>
               <Expression/>
               <Memory/>
               <View style={{
                   height:'5%'
               }}/>
               <Keyboard/>
               <View style={{
                   height:'5%'
               }}/>
               <Key/>
           </View>
       </CalcContext.Provider>
        )

}

export default Calculatrice;
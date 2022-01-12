import {Text,View} from "react-native";

function Title()
{
    return(
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'orange',
            height: '10%',
            width: '100%',
        }}>
            <Text style={{
                fontSize:20
            }}>
                Ma calculatrice
            </Text>
        </View>
    );
}

export default Title;
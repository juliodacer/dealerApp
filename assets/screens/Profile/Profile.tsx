import React from 'react';
import {View, Text} from 'react-native'
import { Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

function Profile(props) {
    return(
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 20}}>Perfil</Text>
             <TouchableOpacity 
                style={{marginTop: 20, width: 200, height: 50, backgroundColor: "green", padding:10, alignItems:"center", justifyContent:"center", borderRadius: 10}}
                onPress={()=> props.navigation.navigate("Home")}
            >
                <Text style={{color: "#fff", fontSize: 20}}>Ir al Home</Text>
            </TouchableOpacity> 
        </View>
    )
}

export default Profile;
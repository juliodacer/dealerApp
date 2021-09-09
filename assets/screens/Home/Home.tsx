import React from 'react';
import {View, Text} from 'react-native'
import { Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

function Home(props) {
    return(
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 20}}>Home</Text>
            <TouchableOpacity 
                style={{marginTop: 20, width: 200, height: 50, backgroundColor: "#ff5204", padding:10, alignItems:"center", justifyContent:"center", borderRadius: 10}}
                onPress={()=> props.navigation.navigate("Perfil")}
            >
                <Text style={{color: "#fff", fontSize: 20}}>Ir al Perfil</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;
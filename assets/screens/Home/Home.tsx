import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Switch } from 'react-native-elements';
import { TouchableRipple } from 'react-native-paper';
import styles from './styles';

class Home extends Component {

    state = {
        toggled: false
    }

    toggleSwitch = (value) => {
        this.setState({ toggled: value })
    }

    render(props) {
        return (
            <View style={{ flex: 1 }}>
                <View style={{flexDirection:"row",  marginTop: 40, alignItems: "center" , justifyContent:"space-between", marginHorizontal:50}}>
                    <View style={{alignItems:"center", justifyContent:"center"}}>
                        <Text style={{ fontSize: 20 }}>Estado</Text>
                        <TouchableRipple>
                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontWeight: "bold", fontSize: 15, marginRight: 10 }}>{this.state.toggled ? "Activo" : "Inactivo"}</Text>
                                <View>
                                    <Switch onValueChange={this.toggleSwitch} value={this.state.toggled} color="green" />
                                </View>
                            </View>
                        </TouchableRipple>
                    </View>
                    <View>
                    <TouchableOpacity
                        style={{ marginTop: 20, width: 150, height: 30, backgroundColor: "green", padding: 10, alignItems: "center", justifyContent: "center", borderRadius: 10 }}
                        onPress={() => this.props.navigation.navigate("BuzonEspera")}
                    >
                        <Text style={{ color: "#fff", fontSize: 20 }}>Buzon de espera</Text>
                    </TouchableOpacity>
                    </View>
                </View>

                <View style={{ margin: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", }}>
                    <Text style={{ marginRight: 10 }} >Cartera</Text>
                    <TextInput style={[styles.textInput]} placeholder="S/." textContentType="telephoneNumber" />
                </View>
                <View style={{ margin: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", }}>
                    <Text style={{ marginRight: 10 }} >Transporte</Text>
                    <TextInput style={[styles.textInput]} placeholder="" textContentType="telephoneNumber" />
                </View>

                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity
                        style={{ marginTop: 20, width: 200, height: 50, backgroundColor: "#ff5204", padding: 10, alignItems: "center", justifyContent: "center", borderRadius: 10 }}
                        onPress={() => this.props.navigation.navigate("Perfil")}
                    >
                        <Text style={{ color: "#fff", fontSize: 20 }}>Ir al Perfil</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

export default Home;
import React, { Component, useState } from 'react';
import { View, Text,  Image } from 'react-native'
import { Button, } from 'react-native-elements';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Switch } from 'react-native-elements';
import { TouchableRipple } from 'react-native-paper';
import styles from './styles';

class Home extends Component {

    state = {
        toggled: false,
    }

    toggleSwitch = (value) => {
        this.setState({ toggled: value })
    }

    render(props) {
        return (
            <View style={{ flex: 1, backgroundColor:"#fff" }}>
                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={styles.titleBar }>
                    <Icon style={{marginRight: 30}} name="sliders-h" size={20} color="#52575d" />
                </TouchableOpacity>
               <Image style={{width: 400, height: 400}} source={{uri: "https://i1.wp.com/cdn.pixabay.com/photo/2020/05/25/08/40/food-delivery-5217579_960_720.png?resize=920%2C603&ssl=1"}} />
                <View style={{ flexDirection: "row", marginTop: 10, alignItems: "center", justifyContent: "space-between", marginHorizontal: 50 }}>
                    <View style={{width: 110, height: 70, alignItems: "center", justifyContent: "center", borderRadius: 10, backgroundColor: this.state.toggled ? "#EAEAEA" : "red"}}>
                        <Text style={{ fontSize: 20, color: this.state.toggled ? "#000" : "#fff" }}>Estado</Text>
                        <TouchableRipple>
                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontWeight: "bold", fontSize: 15, marginHorizontal: 5, color: this.state.toggled ? "#000" : "#fff" }}>{this.state.toggled ? "Activo" : "Inactivo"}</Text>
                                <View>
                                    <Switch onValueChange={this.toggleSwitch} value={this.state.toggled} color="green" />
                                </View>
                            </View>
                        </TouchableRipple>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={{ width: 180, height: 40, backgroundColor: this.state.toggled ? "green" : "#FFB6B6", padding: 15, alignItems: "center", justifyContent: "center", borderRadius: 20 }}
                            onPress={() => this.props.navigation.navigate("BuzonEspera")}
                            disabled={this.state.toggled ? false : true}
                        >
                            <Text style={{ color: "#fff", fontSize: 20 }}>Buzón de Espera</Text>
                        </TouchableOpacity>
                    </View>
                </View>
               <View style={{marginTop: 10, alignItems:"center"}}>
               <View style={{ margin: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 30 }}>
                    <Text style={{ marginRight: 10 }} >Cartera</Text>
                    <TextInput  editable={this.state.toggled ? true : false} placeholderTextColor="green" style={[styles.textInput, {backgroundColor: this.state.toggled ? "#C7FFB6" : "#FFB6B6"}]} placeholder="S/."  />
                </View>
                <View style={{ margin: 5, flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                    <Text style={{ marginRight: 10 }} >Transporte</Text>
                    <TextInput  editable={this.state.toggled ? true : false} placeholderTextColor="green" style={[styles.textInput, {backgroundColor: this.state.toggled ? "#C7FFB6" : "#FFB6B6"}]} placeholder="S/." />
                </View>
               </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity
                        style={{ marginTop: 20, width: 200, height: 50, backgroundColor: this.state.toggled ? "green" : "#FFB6B6", padding: 10, alignItems: "center", justifyContent: "center", borderRadius: 30 }}
                        onPress={() => this.props.navigation.navigate("Perfil")}
                        disabled={this.state.toggled ? false : true}
                    >
                        <Text style={{ color: "#fff", fontSize: 20 }}>Guardar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Home;
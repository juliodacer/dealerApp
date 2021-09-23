import React, { Component, useState } from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native'
import { Button, } from 'react-native-elements';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Switch } from 'react-native-elements';
import { TouchableRipple } from 'react-native-paper';
import STYLES from '../../constants/styles';
import { styles } from './stylesHome';

class Home extends Component {

    state = {
        toggled: false,
    }

    toggleSwitch = (value) => {
        this.setState({ toggled: value })
    }

    render(props) {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.titleBarHome} onPress={() => this.props.navigation.openDrawer()} >
                    <Icon
                        style={{ marginRight: 30 }}
                        name="sliders-h"
                        size={20}
                        color="#52575d" />
                </TouchableOpacity>
                <ScrollView>
                    <Image
                        style={{ width: 400, height: 400 }}
                        source={{ uri: "https://i1.wp.com/cdn.pixabay.com/photo/2020/05/25/08/40/food-delivery-5217579_960_720.png?resize=920%2C603&ssl=1" }}
                    />

                    <View style={styles.containerButton}>
                        <View style={[styles.containerSwitch, { backgroundColor: this.state.toggled ? "#EAEAEA" : "red" }]}>
                            <Text style={{ fontSize: 20, color: this.state.toggled ? "#000" : "#fff" }}>Estado</Text>
                            <TouchableRipple>
                                <View style={styles.switch}>
                                    <Text style={[styles.textSwitch, { color: this.state.toggled ? "#000" : "#fff" }]}>{this.state.toggled ? "Activo" : "Inactivo"}</Text>
                                    <View>
                                        <Switch onValueChange={this.toggleSwitch} value={this.state.toggled} color="green" />
                                    </View>
                                </View>
                            </TouchableRipple>
                        </View>
                        <TouchableOpacity
                            style={[styles.buttonBuzon, { backgroundColor: this.state.toggled ? "green" : "#FFB6B6" }]}
                            onPress={() => this.props.navigation.navigate("BuzonEspera")}
                            disabled={this.state.toggled ? false : true}
                        >
                            <Text
                                style={{ color: "#fff", fontSize: 20 }}
                            >
                                Buzón de Espera
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 10, alignItems: "center" }}>
                        <View style={[styles.containerInput, { marginLeft: 30 }]}>
                            <Text style={{ marginRight: 10 }} >Cartera</Text>
                            <TextInput editable={this.state.toggled ? true : false} placeholderTextColor="green" style={[styles.textInput, { backgroundColor: this.state.toggled ? "#C7FFB6" : "#FFB6B6" }]} placeholder="S/." />
                        </View>
                        <View style={styles.containerInput}>
                            <Text style={{ marginRight: 10 }} >Transporte</Text>
                            <TextInput editable={this.state.toggled ? true : false} placeholderTextColor="green" style={[styles.textInput, { backgroundColor: this.state.toggled ? "#C7FFB6" : "#FFB6B6" }]} placeholder="S/." />
                        </View>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity
                            style={[STYLES.BUTTOM, { backgroundColor: this.state.toggled ? "green" : "#FFB6B6" }]}
                            onPress={() => this.props.navigation.navigate("Perfil")}
                            disabled={this.state.toggled ? false : true}
                        >
                            <Text style={{ color: "#fff", fontSize: 20 }}>Guardar</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Home;
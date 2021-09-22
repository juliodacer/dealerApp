import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function TitleBar(props) {
    return (

        <View style={styles.titleBar}>
            <Icon name="angle-left" size={20} color="#52575d" onPress={() => this.props.navigation.goBack()} />
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Buzon de espera</Text>
            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Icon name="sliders-h" size={20} color="#52575d" />
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 40,
        paddingBottom: 10,
        paddingHorizontal: 30,
    },
})

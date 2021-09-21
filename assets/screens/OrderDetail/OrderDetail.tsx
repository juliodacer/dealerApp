import React, { useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import OrderContext from '../../context/orders/orderContexts';
import Icon from 'react-native-vector-icons/FontAwesome5';

function OrderDetail(props) {

    const { order } = useContext(OrderContext)
    const { id, product, image, price, origin, destiny } = order;

    return (
        /* <Text style={{fontSize: 20}}>{id}</Text>
           <Text style={{fontSize: 20}}>{product}</Text>
           <Text style={{fontSize: 20}}>{image}</Text>
           <Text style={{fontSize: 20}}>{price}</Text>
           <Text style={{fontSize: 20}}>{origin}</Text>
           <Text style={{fontSize: 20}}>{destiny}</Text> */

        <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
            <View style={styles.titleBar}>
                <Icon name="angle-left" size={20} color="#52575d" onPress={() => props.navigation.goBack()} />
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Detalle del Pedido</Text>
                <Icon name="sliders-h" size={20} color="#52575d" />
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image source={{ uri: order.image }} style={{
                    marginTop: 10,
                    borderRadius: 10,
                    height: 200,
                    width: 200
                }} />
                <Text style={{
                    fontSize: 22,
                    marginTop: 20,
                    marginBottom: 10,
                    fontWeight: "bold"
                }} >{order.product}</Text>
                <View style={{ width: 110, height: 40, backgroundColor: "green", alignItems: "center", justifyContent: "center", borderRadius: 20, marginBottom: 10 }}>
                    <Text style={{
                        fontSize: 22,
                        color: "#fff"
                    }} >{`S/. ${order.price}`}</Text>
                </View>
            </View>
            <Text style={{ fontSize: 20, marginLeft: 5, marginTop: 10, fontWeight: "bold"  }}>Origen</Text>
            <View style={styles.cartCard}>
                <Image source={{ uri: order.origin.image }} style={{ height: 80, width: "20%", borderRadius: 10, marginLeft: 3 }} />
                <View style={{ marginLeft: 5 }}>
                   <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginVertical: 2 }}>
                        <Icon name="store-alt" size={14} style={{ marginRight: 6, marginLeft: 3, color: '#000' }} />
                        <Text style={{
                            fontSize: 17,
                            fontWeight: "bold",
                            color: '#000',
                        }}>{order?.origin.location}</Text>
                   </TouchableOpacity>
                    <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 2 }}>
                        <Icon name="store" size={10} style={{ marginRight: 9, marginLeft: 6, color: '#747474' }} />
                        <Text style={{
                            fontSize: 14,
                            fontWeight: "bold",
                            color: '#747474',
                        }}>{order?.origin.name}</Text>
                    </View>
                </View>
            </View>
            <Text style={{ fontSize: 20, marginLeft: 5, marginTop: 10, fontWeight: "bold" }}>Destino</Text>
            <View style={styles.cartCard}>
                <Image source={{ uri: order.destiny.photo }} style={{ height: 80, width: "20%", borderRadius: 10, marginLeft: 3 }} />
                <View style={{ marginLeft: 5 }}>
                   <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginVertical: 2 }}>
                        <Icon name="house-user" size={14} style={{ marginRight: 6, marginLeft: 3, color: '#000' }} />
                        <Text style={{
                            fontSize: 17,
                            fontWeight: "bold",
                            color: '#000',
                        }}>{order?.destiny.location}</Text>
                   </TouchableOpacity>
                    <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 2 }}>
                        <Icon name="user-alt" size={10} style={{ marginRight: 9, marginLeft: 5, color: '#747474' }} />
                        <Text style={{
                            fontSize: 14,
                            fontWeight: "bold",
                            color: '#747474',
                        }}>{order?.destiny.name}</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
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
    cartCard: {
        height: 95,
        elevation: 15,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        paddingHorizontal: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
})
export default OrderDetail;
import React, { useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import OrderContext from '../../context/orders/orderContexts';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import { CheckBox } from 'react-native-elements'

function OrderDetail(props) {

    const { order } = useContext(OrderContext)
    const { id, product, origin, destiny } = order;

    const head = item => (
        <Text>{item.name}</Text>
    );

    const body = item => (
        <View style={{ backgroundColor: "#EAEAEA", padding: 10, borderRadius: 10, margin: 5 }}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Descripción</Text>
            <Text style={{ marginLeft: 10 }}>{item.description}</Text>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Acompañamientos</Text>
            <Text style={{ marginLeft: 10 }}>{item.cream}</Text>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Bebida</Text>
            <Text style={{ marginLeft: 10 }}>{item.drink}</Text>
        </View>
    );



    return (
        <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
            <View style={styles.titleBar}>
                <Icon name="angle-left" size={20} color="#52575d" onPress={() => props.navigation.goBack()} />
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Detalle del Pedido</Text>
                <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                    <Icon name="sliders-h" size={20} color="#52575d" />
                </TouchableOpacity>

            </View>

            {/* Description */}
            <ScrollView>
                <View style={{ justifyContent: "center", alignItems: "center", paddingTop: 5 }}>

                    <Image source={{ uri: order.product.image }} style={{
                        borderRadius: 10,
                        height: 200,
                        width: 200
                    }} />
                    <Collapse >
                        <CollapseHeader style={{ justifyContent: "center", alignItems: "center" }}>
                            <Text style={{
                                fontSize: 22,
                                marginTop: 10,
                                marginBottom: 10,
                                fontWeight: "bold"
                            }} >{order.product.name}</Text>

                            {/* <View style={{ flexDirection: "row", alignContent: "center", alignItems: "center" }}> */}
                            <View style={{ width: 110, height: 40, backgroundColor: "green", alignItems: "center", justifyContent: "center", borderRadius: 20, marginHorizontal: 20 }}>
                                <Text style={{
                                    fontSize: 22,
                                    color: "#fff"
                                }} >{`S/. ${order.product.price}`}</Text>
                            </View>
                            {/* <View style={{ width: 80, height: 30, backgroundColor: "red", alignItems: "center", justifyContent: "center", borderRadius: 20, marginHorizontal: 20 }}>
                                <Text style={{
                                    fontSize: 16,
                                    color: "#fff"
                                }} >Detalles</Text>
                            </View> */}
                            {/* </View> */}
                        </CollapseHeader>
                        <CollapseBody style={{ marginHorizontal: 10 }}>
                            <View style={{ backgroundColor: "#EAEAEA", padding: 10, borderRadius: 10, margin: 5 }}>
                                <Text style={{ fontWeight: "bold", fontSize: 20 }}>Descripción</Text>
                                <Text style={{ marginLeft: 10 }}>{order.product.description}</Text>
                                <Text style={{ fontWeight: "bold", fontSize: 20 }}>Acompañamientos</Text>
                                <Text style={{ marginLeft: 10 }}>{order.product.cream}</Text>
                                <Text style={{ fontWeight: "bold", fontSize: 20 }}>Bebida</Text>
                                <Text style={{ marginLeft: 10 }}>{order.product.drink}</Text>
                            </View>
                        </CollapseBody>

                    </Collapse>

                </View>

                {/* Origen y destino */}
                <View style={{ marginVertical: 5 }}>
                    <Text style={{ fontSize: 20, marginLeft: 5, fontWeight: "bold" }}>Origen</Text>
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
                </View>
                <Text style={{ fontSize: 20, marginLeft: 5, fontWeight: "bold" }}>Estado del Pedido</Text>
                <View style={[styles.cartCard, {marginHorizontal: 10, flexDirection: "row", justifyContent:"space-between", alignItems:"center", backgroundColor:"#fff"}]}>
                <View>
                    <Text>Pedido tomado</Text>
                    <CheckBox
                        center
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        //checked={this.state.checked}
                    />
                </View>
                <View>
                    <Text>En tienda</Text>
                    <CheckBox
                        center
                        // title='Click Here'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        //checked={this.state.checked}
                    />
                </View>
                <View>
                    <Text>En camino</Text>
                    <CheckBox
                        center
                        // title='Click Here'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        //checked={this.state.checked}
                    />
                </View>
                <View>
                    <Text>Entregado</Text>
                    <CheckBox
                    
                        center
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        //checked={this.state.checked}
                    />
                </View>
                </View>
            </ScrollView>
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





















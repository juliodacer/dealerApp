import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TextInput, Alert, TouchableOpacityBase } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import OrderContext from '../../context/orders/orderContexts';
import { useNavigation } from '@react-navigation/native';
import { styles } from './stylesOrderBox';

const OrderBox = () => {
    const [orders, setOrders] = useState([
        {
            id: 1,
            product: "Helado de Vainilla con sabor a fresa",
            image: "https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_960_720.jpg",
            price: 25.50,
            origin: {
                name: "Heladeria Rosita",
                location: "Jr Prospero 425",
                image: "https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_960_720.jpg"
            },
            destiny: {
                name: "Piter Castle",
                photo: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg",
                location: "Av. La marina 251",
            },
            available: true
        },
        {
            id: 2,
            product: "Fresas con sabor a vainilla",
            image: "https://cdn.pixabay.com/photo/2016/04/24/19/41/strawberries-1350482_960_720.jpg",
            price: 30.00,
            origin: {
                name: "Frutas de Canadá",
                location: "Psje Alcides Carrion 365",
                image: "https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_960_720.jpg"
            },
            destiny: {
                name: "Maria la del Barrio",
                photo: "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_960_720.jpg",
                location: "Tnte Miguel Grau 987"
            },
            available: true
        },
        // {
        //     id: 3,
        //     product: "Pedido 3",
        //     image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        //     price: 27,
        //     origin: "Origen 3",
        //     destiny: "Tienda 3",
        //     available: false
        // },
        // {
        //     id: 4,
        //     product: "Pedido 4",
        //     image: "https://images.pexels.com/photos/1410236/pexels-photo-1410236.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        //     price: 36,
        //     origin: "Origen 4",
        //     destiny: "Tienda 4",
        //     available: "true"
        // },
        // {
        //     id: 5,
        //     product: "Pedido 5",
        //     image: "https://images.pexels.com/photos/628776/pexels-photo-628776.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        //     price: 18,
        //     origin: "Origen 5",
        //     destiny: "Tienda 5",
        //     available: true
        // },
        // {
        //     id: 6,
        //     product: "Pedido 6",
        //     image: "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        //     price: 25,
        //     origin: "Origen 6",
        //     destiny: "Tienda 6",
        //     available: true
        // },
        // {
        //     id: 7,
        //     product: "Pedido 7",
        //     image: "https://images.pexels.com/photos/416471/pexels-photo-416471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        //     price: 31,
        //     origin: "Origen 7",
        //     destiny: "Tienda 7",
        //     available: true
        // }
    ])

    const { selectOrder } = useContext(OrderContext);

    const [textInput, setTextInput] = useState('');

    //hook para redireccionar
    const navigation = useNavigation();

    // React.useEffect(() => {
    //     getOrdersFromUserDevice();
    // }, []);

    // React.useEffect(() => {
    //     saveOrdersToUserDevice(orders);
    // }, [orders]);

    const addOrder = () => {
        if (textInput == '') {
            Alert.alert('Error', 'Por favor ingrese un producto');
        } else {
            const newOrder = {
                id: Math.random(),
                product: textInput,
                image: "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                price: 33,
                origin: `origen ${Math.random()}`,
                destiny: `Tienda ${Math.random()}`,
                available: true
            };
            setOrders([...orders, newOrder]);
            setTextInput('');
        }
    };

    // const saveOrdersToUserDevice = async orders => {
    //     try {
    //         const stringifyOrders = JSON.stringify(orders);
    //         await AsyncStorage.setItem('orders', stringifyOrders);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // const getOrdersFromUserDevice = async () => {
    //     try {
    //         const orders = await AsyncStorage.getItem('orders');
    //         if (orders != null) {
    //             setOrders(JSON.parse(orders));
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    const confirmOrder = orderId => {
        console.log(orderId)
        const newTodosItem = orders.map(item => {
            if (item.id == orderId) {
                return { ...item, available: false };
            }
            return item;
        });

        setOrders(newTodosItem);
    };

    const disableOrder = orderId => {
        const newTodosItem = orders.filter(item => {
            (item.id != orderId)
            return { ...item, available: false };
        })
        setOrders(newTodosItem);
    }

    const deleteOrder = orderId => {
        const newOrdersItem = orders.filter(item => item.id != orderId);
        setOrders(newOrdersItem);
    };

    const clearAllOrders = () => {
        Alert.alert('Confirmar', 'Eliminar todas las órdenes?', [
            {
                text: 'Yes',
                onPress: () => setOrders([]),
            },
            {
                text: 'No',
            },
        ]);
    };

    const previewSelectOrder = order => {
        Alert.alert('Confirmar', 'Seguro que deseas tomar esta orden?', [
            {
                text: 'Si',
                onPress: () => {
                    selectOrder(order);
                    navigation.navigate("DetallePedido");
                }
            },
            {
                text: 'No',
            },
        ]);
    }

    const acceptOrder = orderId => {
        if (orders.orderId == false) {
            Alert.alert('Ups!', 'Este pedido ya no está disponible', [
                {
                    text: 'Ok',
                },
                {
                    text: 'Caballero nomas, ya perdí',
                },
            ]);
        }
    };

    const ListItem = ({ order }) => {
        return (
            <SafeAreaView style={[styles.cartCard, { backgroundColor: "#fff", justifyContent: "space-around" }]}>
                <Image source={{ uri: order.image }} style={{ height: 80, width: "20%", borderRadius: 10, marginLeft: 3 }} />
                {/* <View style={{backgroundColor:"yellow", height: 100, marginHorizontal: 5, paddingVertical: 10, flex: 1, flexDirection: "row", alignItems: "center" }}> */}
                <View style={{ width: "50%", marginHorizontal: 5 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 1 }}>
                        <Icon name="utensils" size={12} style={{ marginRight: 6, marginLeft: 3 }} />
                        <Text style={{
                            fontSize: 17,
                            color: '#000',
                            fontWeight: "bold"
                        }}>{order?.product}</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 1 }}>
                        <Icon name="store" size={12} style={{ marginRight: 5, color: '#747474' }} />
                        <Text style={{
                            fontSize: 15,
                            color: '#747474',
                            // fontWeight: "bold"
                        }}>{order?.origin.location}</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 1 }}>
                        <Icon name="street-view" size={12} style={{ marginRight: 6, marginLeft: 1, color: '#747474', }} />
                        <Text style={{
                            fontSize: 15,
                            color: '#747474',
                            // fontWeight: "bold"
                        }}>{order?.destiny.location}</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 1 }}>
                        <Icon name="money-bill-alt" size={12} style={{ marginRight: 5, marginLeft: 0, color: '#747474', }} />
                        <View style={{ height: 16, width: "auto", backgroundColor: "green", padding: 3, justifyContent: "center", alignItems: "center", borderRadius: 5 }}>
                            <Text style={{

                                fontSize: 15,
                                color: '#fff',
                                // fontWeight: "bold"
                            }}>{`S/. ${order?.price}`}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: "column", width: "20%", alignItems: "center", justifyContent: "center", marginHorizontal: 3 }}>
                    <TouchableOpacity
                        disabled={order?.available ? false : true}
                        onPress={() => {
                            // selectOrder(order);
                            previewSelectOrder(order);
                        }
                        }
                        style={{
                            marginHorizontal: 3,
                            marginVertical: 2,
                            backgroundColor: order?.available ? "green" : "#88FD85",
                            height: 40,
                            width: 70,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 10
                        }}>

                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 15,
                            color: "#fff"
                        }}
                        >
                            Aceptar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        disabled={order?.available ? false : true}
                        onPress={() => deleteOrder(order?.id)}
                        style={{
                            marginHorizontal: 3,
                            marginVertical: 2,
                            backgroundColor: order?.available ? "red" : "#FD8585",
                            height: 40,
                            width: 70,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 10
                        }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 15,
                            color: "#fff"
                        }}>
                            Rechazar
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* </View> */}
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
            {/* <View style={styles.header}>
                <Icon name="angle-left" size={28} />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Buzon de espera</Text>
            </View> */}

            <View style={styles.titleBar}>
                <Icon name="angle-left" size={20} color="#52575d" onPress={() => navigation.goBack()} />
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Buzon de espera</Text>
               <TouchableOpacity onPress={() => navigation.openDrawer()}>
               <Icon name="sliders-h" size={20} color="#52575d" />
               </TouchableOpacity>
            </View>


            <View style={{ marginTop: 15, alignItems: "center", marginRight: 20, flexDirection: "row", justifyContent: "flex-end" }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 10 }}>Eliminar todo</Text>
                <TouchableOpacity>
                    <Icon name="times-circle" color={"red"} size={20} onPress={clearAllOrders} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 80 }}
                    data={orders}
                    renderItem={({ item }) => <ListItem order={item} />}
                />
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={textInput}
                        placeholder="Agregar nuevo pedido"
                        onChangeText={text => setTextInput(text)}
                    />
                </View>
                <TouchableOpacity onPress={addOrder}>
                    <View style={styles.iconContainer}>
                        <Icon name="plus-circle" color="white" size={30} />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default OrderBox;
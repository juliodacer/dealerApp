import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TextInput, Alert } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import OrderContext from '../../context/orders/orderContexts';
import { useNavigation } from '@react-navigation/native';

const OrderBox = () => {

    const [orders, setOrders] = useState([
        {
            id: 1,
            product: "Pedido 1",
            image: "https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_960_720.jpg",
            price: 25,
            origin: "Origen 1",
            destiny: "Tienda 1",
            available: true
        },
        {
            id: 2,
            product: "Pedido 2",
            image: "https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberries-2023404_960_720.jpg",
            price: 30,
            origin: "Origen 2",
            destiny: "Tienda 2",
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


    const ListItem = ({ order }) => {
        return (
            <SafeAreaView style={[styles.cartCard, { backgroundColor: order?.available ? "#fff" : "#E8E823" }]}>
                <Image source={{ uri: order.image }} style={{ height: 80, width: 80, borderRadius: 10 }} />
                <View style={{ height: 100, marginLeft: 15, paddingVertical: 20, flex: 1, flexDirection: "row", alignItems: "center" }}>
                    <View style={{ width: 135 }}>
                        <Text style={{
                            fontSize: 18,
                            color: order?.available ? '#000' : "green",
                            fontWeight: order?.available ? 'normal' : "bold"
                        }}>{order?.product}</Text>
                    </View>

                    <View style={{ flexDirection: "row", width: "30%" }}>
                        <TouchableOpacity
                            disabled={order?.available ? false : true}
                            onPress={() => { 
                                selectOrder(order);
                                navigation.navigate("DetallePedido");}
                            }
                            style={{
                                marginRight: 10, backgroundColor: order?.available ? "green" : "#88FD85",
                                height: 50,
                                width: 50,
                                justifyContent: "center", alignItems: "center", borderRadius: 5
                            }}>

                            <Text style={{
                                fontWeight: "bold",
                                fontSize: 20,
                                color: "#fff"
                            }}
                            >Si</Text>
                        </TouchableOpacity>

                        <TouchableOpacity disabled={order?.available ? false : true} onPress={() => deleteOrder(order?.id)} style={{ marginRight: 10, backgroundColor: order?.available ? "red" : "#FD8585", height: 50, width: 50, justifyContent: "center", alignItems: "center", borderRadius: 5 }}>
                            <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
            <View style={styles.header}>
                <Icon name="angle-left" size={28} />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Buzon de espera</Text>
            </View>
            <View style={{ alignItems: "center", marginRight: 20, flexDirection: "row", justifyContent: "flex-end" }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 10 }}>Elimiar todo</Text>
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

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    cartCard: {
        height: 100,
        elevation: 15,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: "#fff",
    },
    inputContainer: {
        height: 50,
        paddingHorizontal: 20,
        elevation: 40,
        backgroundColor: "#fff",
        flex: 1,
        marginVertical: 20,
        marginRight: 20,
        borderRadius: 30,
    },
    iconContainer: {
        height: 50,
        width: 50,
        backgroundColor: "green",
        elevation: 40,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default OrderBox;
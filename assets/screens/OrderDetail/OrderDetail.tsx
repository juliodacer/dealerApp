import React, { useContext } from 'react';
import {View, Text} from 'react-native'
import OrderContext from '../../context/orders/orderContexts';

function OrderDetail() {

    const {order} = useContext(OrderContext)
    const { id, product, image, price, origin, destiny } = order;

    return(
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 20}}>{id}</Text>
            <Text style={{fontSize: 20}}>{product}</Text>
            <Text style={{fontSize: 20}}>{image}</Text>
            <Text style={{fontSize: 20}}>{price}</Text>
            <Text style={{fontSize: 20}}>{origin}</Text>
            <Text style={{fontSize: 20}}>{destiny}</Text>
        </View>
    )
}

export default OrderDetail;
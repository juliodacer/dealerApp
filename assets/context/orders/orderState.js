import React, {Children, useReducer} from 'react';
import OrderReducer from './orderReducer';
import OrderContext from './orderContexts';
import { SELECCIONAR_PRODUCTO } from '../../types';

const OrderState = props => {
    const initialState = {
        order: [],
        product: null
    }

    const [state, dispatch ] = useReducer(OrderReducer, initialState);

    //seleccionar el producto
    const selectOrder = order => {
       dispatch({
           type: SELECCIONAR_PRODUCTO,
           payload: order
       })
    }

    return(
        <OrderContext.Provider
            value={{
                order: state.order,
                product: state.product,
                selectOrder
            }}
        >
            {props.children}
        </OrderContext.Provider>
    )
}

export default OrderState;
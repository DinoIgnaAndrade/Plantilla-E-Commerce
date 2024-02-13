import { FlatList, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

import { useGetOrdersQuery } from '../../services/shopServices'
import ProductsDashboard from './../Dashboard/ProductsDashboard';

const Orders = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [orders, setOrders] = useState([]);

    const localId = useSelector(state => state.authReducer.localId);

    const { data, isLoading, isError, refetch } = useGetOrdersQuery(localId);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    useEffect(() => {
        if (data) {
            const orData = Object.values(data)
            setOrders(orData);
        }
    }, [data, isLoading])

    const getItemsByOrderId = (orderId) => {
        const order = orders.find(order => order.orderId === orderId);
        return order ? order.items : [];
    };

    useEffect(() => {
        refetch();
        return () => {
        };
    }, [localId]);

    console.log('ordenes', orders[0])
    console.log(getItemsByOrderId(orders))

    const renderOrderItem = ({ item }) => (
        <>
            <Pressable
                onPress={toggleModal}
                style={styles.orderItem}>
                {console.log(item)}
                <Text style={styles.text}>Order ID: {item.orderId}</Text>
                <Text style={styles.text}>Total: {item.total}</Text>
            </Pressable>

            <Modal
                visible={modalVisible}
                transparent={false}
                animationType="slide"
                onRequestClose={toggleModal}
            >
                <ProductsDashboard data={getItemsByOrderId(item.orderId)} navigation={null} />
            </Modal>

        </>
    );


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ordenes</Text>
            <FlatList
                data={orders}
                keyExtractor={(item) => item.orderId.toString()}
                renderItem={renderOrderItem}
            />
        </View>

    );
}

export default Orders

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        borderRadius: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15
    },
    title: {
        fontSize: 30
    },
    orderItem: {
        padding: 20,
        margin: 5,
        borderRadius: 40,
        borderBottomWidth: 1,
        backgroundColor: 'black'
    },
    text: {
        fontSize: 25,
        color: 'white'
    }
});

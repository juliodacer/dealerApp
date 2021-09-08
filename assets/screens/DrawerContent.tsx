import React from 'react';
import { View, StyleSheet } from 'react-native'
import {
    Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch
} from 'react-native-paper'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Icon from 'react-native-vector-icons/FontAwesome';

export function DrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg/1200px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg'
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>
                                    Ronaldinho Gaucho
                                </Title>
                                <Caption style={styles.caption}>
                                    945897365
                                </Caption>
                            </View>
                            {/* <View style={styles.row}>
                                    <View>
                                        <Paragraph>80</Paragraph>
                                    </View>
                                </View> */}

                        </View>
                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon name="user-circle" color={color} size={size} />
                                )}
                                label="Perfil"
                                onPress={() => { }}
                            />
                              <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon name="history" color={color} size={size} />
                                )}
                                label="Historial"
                                onPress={() => { }}
                            />
                              <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon name="credit-card" color={color} size={size} />
                                )}
                                label="Cuenta Pendiente"
                                onPress={() => { }}
                            />
                              <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon name="bank" color={color} size={size} />
                                )}
                                label="Cuenta de Ahorros"
                                onPress={() => { }}
                            />
                              <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon name="bell" color={color} size={size} />
                                )}
                                label="Buzon de espera"
                                onPress={() => { }}
                            />
                        </Drawer.Section>
                    </View>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="sign-out" color={color} size={size} />
                    )}
                    label="Cerrar Sesión"
                    onPress={() => { }}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 5,
        justifyContent: "center"
    },
    bottomDawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
});
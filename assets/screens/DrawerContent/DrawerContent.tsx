import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import { Title, Caption, Paragraph, Drawer, Text, TouchableRipple } from 'react-native-paper'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Switch } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles'

export default class DrawerContent extends Component {

    state = {
        toggled: false
    }

    toggleSwitch = (value) => {
        this.setState({ toggled: value })
    }

    render(props) {
        return (
            <View style={{ flex: 1 }}>
                <DrawerContentScrollView {...props}>
                    <View style={styles.drawerContent}>
                        <View style={styles.userInfoSection}>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                <Avatar
                                    rounded
                                    source={{
                                        uri:
                                            'https://upload.wikimedia.org/wikipedia/commons/e/e8/Ronaldinho_in_2019.jpg',
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
                        </View>
                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon name="user-circle" color={color} size={size} style={{ paddingHorizontal: 3 }} />
                                )}
                                label="Perfil"
                                onPress={() => this.props.navigation.navigate("Perfil")}
                            />
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon name="history" color={color} size={size} style={{ paddingHorizontal: 2 }} />
                                )}
                                label="Historial"
                                onPress={() => this.props.navigation.navigate("Historial")}
                            />
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon name="credit-card" color={color} size={size} style={{ paddingHorizontal: 1 }} />
                                )}
                                label="Cuenta Pendiente"
                                onPress={() => this.props.navigation.navigate("CuentaPendiente")}
                            />
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon name="piggy-bank" color={color} size={size} style={{ paddingHorizontal: 1 }} />
                                )}
                                label="Cuenta de Ahorros"
                                onPress={() => this.props.navigation.navigate("CuentaAhorros")}
                            />
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon name="bell" color={color} size={size} style={{ paddingHorizontal: 4 }} />
                                )}
                                label="Buzon de espera"
                                onPress={() => this.props.navigation.navigate("BuzonEspera")}
                            />
                        </Drawer.Section>
                        <Drawer.Section>
                            <TouchableRipple>
                                <View style={styles.preference}>
                                    <Text style={{fontWeight: "bold", fontSize: 15}}>{this.state.toggled ? "Activo" : "Inactivo"}</Text>
                                    <View>
                                        <Switch onValueChange={this.toggleSwitch} value={this.state.toggled} color="green" />
                                    </View>
                                </View>
                            </TouchableRipple>
                        </Drawer.Section>
                    </View>
                </DrawerContentScrollView>
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="sign-out-alt" color={color} size={size} />
                        )}
                        label="Cerrar Sesión"
                        onPress={() => { }}
                    />
                </Drawer.Section>
            </View>
        )
    }
}
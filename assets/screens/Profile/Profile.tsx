import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity, Modal, Platform } from 'react-native'
import { Avatar, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

function Profile(props) {

    /* Camera */
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    
    /* Modal */
    const [view, setView] = useState(false);

    /* gallery image */
    const [image, setImage] = useState(null);

    // useEffect(() => {
    //     (async () => {
    //         const { status } = await Camera.requestPermissionsAsync();
    //         setHasPermission(status === 'granted');
    //     })();
    // }, []);

    // if (hasPermission === null) {
    //     return <View />;
    // }
    // if (hasPermission === false) {
    //     return <Text>No access to camera</Text>;
    // }


    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const openCamera = () => (
        <Camera type={type}>
          <View >
            <TouchableOpacity
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={styles.text}> Flip </Text>
            </TouchableOpacity>
          </View>
        </Camera>
    )


    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.titleBar}>
                <Icon name="angle-left" size={20} color="#52575d" onPress={() => props.navigation.goBack()} />
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Perfil</Text>
                <Icon name="ellipsis-v" size={20} color="#52575d" />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ alignSelf: "center", marginTop: 10 }}>
                    <View style={styles.profileImage}>
                        {image && <Image source={{ uri: image }} style={styles.image} />}
                        {/* <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Ronaldinho_in_2019.jpg" }} style={styles.image} /> */}
                    </View>

                    <View style={styles.add}>
                        <TouchableOpacity onPress={() => { setView(true) }}>
                            <Icon name="pencil-alt" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ flex: 1 }}>
                    <View style={styles.infoContainer}>
                        <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Ronaldinho</Text>
                        <Text style={[styles.text, { color: "#aeb5bc", fontSize: 14 }]}>Dealer</Text>
                    </View>
                    <View style={{ margin: 20 }}>
                        <TextInput style={styles.textInput} placeholder="Nombre" />
                        <TextInput style={styles.textInput} placeholder="Apellidos" />
                        <TextInput style={styles.textInput} placeholder="Celular" />
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <TouchableOpacity
                            style={{ marginTop: 20, width: 200, height: 50, backgroundColor: "#ff5204", padding: 10, alignItems: "center", justifyContent: "center", borderRadius: 10 }}
                            onPress={() => props.navigation.navigate("Home")}
                        >
                            <Text style={{ color: "#fff", fontSize: 20 }}>Guardar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
            <Modal
                animationType="fade"
                onDismiss={() => console.log('close')}
                onShow={() => console.log('show')}
                transparent
                visible={view}
            >
                <View style={{ flex: 1, backgroundColor: 'rgba(1,1,1,0.5)', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ height: 130, width: 250, backgroundColor: '#fff', borderRadius: 10 }}>
                        <TouchableOpacity onPress={() => { setView(false) }}>
                            <View
                                style={{
                                    height: 45, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingHorizontal: 10
                                }}
                            >
                                <Icon name="times-circle" size={20} color="#aeb5bc" />
                            </View>
                        </TouchableOpacity>
                        <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
                            <TouchableOpacity onPress={openCamera} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <Icon name="camera" style={{ paddingRight: 10 }} size={18} />
                                <Text style={{ fontSize: 17, paddingVertical: 5 }}>Tomar una foto</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={pickImage} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <Icon name="image" style={{ paddingRight: 10 }} size={18} />
                                <Text style={{ fontSize: 17, paddingVertical: 5 }}>Subir de la galería</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        color: "#52575D",
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 40,
        marginHorizontal: 16,
    },
    profileImage: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: "#52575d",
        borderRadius: 100,
        overflow: "hidden"
    },
    add: {
        backgroundColor: "#52575d",
        position: "absolute",
        bottom: 10,
        right: 10,
        width: 40,
        height: 40,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    textInput: {
        alignSelf: "stretch",
        height: 40,
        marginBottom: 30,
        color: "#52575d",
        borderBottomColor: "#f8f8f8",
        borderBottomWidth: 1
    }
})

export default Profile;

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
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
        paddingTop: 40,
        paddingBottom: 10,
        paddingHorizontal: 30,
        elevation: 7,
        backgroundColor: "#fff"
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
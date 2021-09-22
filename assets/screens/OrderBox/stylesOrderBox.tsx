import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    header: {
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
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
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 4,
        paddingHorizontal: 2,
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
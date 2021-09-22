import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  titleBarHome: {
    alignItems: "flex-end",
    paddingTop: 40,
    paddingBottom: 10,
  },
  containerButton: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 50
  },
  containerSwitch: {
    width: 110,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  switch: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  textSwitch: {
    fontWeight: "bold",
    fontSize: 15,
    marginHorizontal: 5,
  },
  buttonBuzon: {
    width: 180,
    height: 40,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  containerInput: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: 40,
    width: 80,
    textAlign: "center",
    color: "#000",
    borderRadius: 20
  },
  buttonSave: {
    marginTop: 20, 
    width: 200, 
    height: 50,
    padding: 10, 
    alignItems: "center", 
    justifyContent: "center", 
    borderRadius: 30 
  }
});


//export default styles;
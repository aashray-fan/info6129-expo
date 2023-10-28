import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  keyboardAvoid: {
    width: "100%",
  },
  mainContainer: {
    width: "100%",
    padding: 10,
  },
  headerView: {
    backgroundColor: "#FF8400",
    padding: 10,
  },
  errorView: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderColor: "#FF0000",
    borderWidth: 1,
    borderRadius: 8,
    overflow: "hidden",
  },
  errRedBlock: {
    width: "2%",
    height: "100%",
    backgroundColor: "#FF0000",
  },
  errDetailView: {
    padding: 10,
  },
  errBoldText: {
    fontWeight: "bold",
    color: "#FF0000",
    fontSize: 16,
  },
  errText: {
    fontSize: 16,
    color: "#FF0000",
  },
  inputView: {
    marginTop: 5,
  },
  inputTextInput: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
  },
  inputText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
    marginRight: 10,
  },
  toggleView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  addTouch: {
    backgroundColor: "#FFF",
    marginTop: 10,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "25%",
    alignSelf: "flex-end",
    borderWidth: 3,
  },
  addText: {
    fontSize: 18,
    color: "#FF8400",
    fontWeight: "bold",
  },
  headerText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});

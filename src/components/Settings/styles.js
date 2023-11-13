import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  headerView: {
    backgroundColor: "#FF8400",
    padding: 10,
  },
  headerText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  mainView: {
    padding: 10,
  },
  titleText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "600",
  },
  subTitleText: {
    fontSize: 16,
    color: "#888",
  },
  controlView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  controlText: {
    fontSize: 16,
    color: "#000",
    marginLeft: 10,
  },
});

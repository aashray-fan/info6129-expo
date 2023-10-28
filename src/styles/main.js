import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 24 : 0,
  },
  bottomTabView: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "8%",
    width: "100%",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    backgroundColor: "#FFF"
  },
  bottomTabButton: {
    width: "50%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bottomTabIcon: {
    height: "50%",
    aspectRatio: 1,
  },
  bottomTabText: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "600",
  },
});

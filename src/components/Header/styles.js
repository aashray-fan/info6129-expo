import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomColor: "#FF8400",
    borderBottomWidth: 3,
    backgroundColor: "#FFFFFF",
  },
  titleView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF8400",
  },
  authorText: {
    fontSize: 14,
    color: "#777",
  },
});

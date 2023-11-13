import { Dimensions, Platform, StyleSheet } from "react-native";

const WIDTH = Dimensions.get("window").width;

const Color = {
  modalOverlay: "rgba(169,169,169, 0.5)",
  white: "#FFFFFF",
  black: "#000000",
};

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
    backgroundColor: "#FFF",
  },
  bottomTabButton: {
    flex: 1,
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
  AIcontainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.modalOverlay,
  },
  AIinnerContainer: {
    width: WIDTH * 0.25,
    height: WIDTH * 0.25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white,
    borderRadius: 20,
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  AImsg: {
    marginTop: 10,
    fontSize: 14,
    textAlign: "center",
    color: Color.black,
  },
});

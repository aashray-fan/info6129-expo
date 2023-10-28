import { StyleSheet } from "react-native";

const modalOverlay = "rgba(169,169,169, 0.5)";

export const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  modalMainView: {
    justifyContent: "center",
    flex: 1,
  },
  modalMainView: {
    backgroundColor: modalOverlay,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalAbsView: {
    width: "90%",
    height: "30%",
    backgroundColor: "#FFF",
    borderRadius: 30,
    position: "absolute",
    overflow: "hidden",
    padding: "5%",
  },
  modalTopView: {
    height: "25%",
    alignItems: "flex-end",
  },
  modalCloseTouch: {
    height: "75%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    borderRadius: 100,
  },
  modalCloseImg: {
    width: "100%",
    height: "100%",
  },
  descText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
  modalMidView: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBottomView: {
    height: "55%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  smallText: {
    fontSize: 14,
    marginVertical: 2,
    color: "#000000",
  },
  smallRedText: {
    fontSize: 14,
    marginVertical: 2,
    color: "#FF0000",
  },
  modalButtonView: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  modalButtonIcon: {
    height:'50%',
    aspectRatio: 1,
  }
});

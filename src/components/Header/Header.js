import { View, Text } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "./styles";

const headerRes = {
  title: "Todo App",
  author: "by Aashray Bavisa",
  iconName: "tasks",
  iconColor: "#FF8400",
  iconSize: 24,
};

const Header = () => {
  return (
    <View style={styles.container}>
      <FontAwesome5
        name={headerRes?.iconName}
        size={headerRes?.iconSize}
        color={headerRes?.iconColor}
      />
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{headerRes?.title}</Text>
        <Text style={styles.authorText}>{headerRes?.author}</Text>
      </View>
    </View>
  );
};

export default Header;

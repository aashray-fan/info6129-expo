import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

const taskRes = {
  statusText: {
    completed: "Completed",
    open: "Open",
  },
  Id: "Id",
  Status: "Status",
};

const Task = (props) => {
  const { description = "", id = 0, done = false } = props?.task;
  const statusText = done ? taskRes?.statusText.completed : taskRes?.statusText.open;
  return (
    <View style={styles.container}>
      <Text style={styles.descText}>{description}</Text>
      <Text style={styles.smallText}>{`${taskRes?.Id}: ${id}`}</Text>
      <Text style={styles.smallText}>{`${taskRes?.Status}: ${statusText}`}</Text>
    </View>
  );
};

export default Task;

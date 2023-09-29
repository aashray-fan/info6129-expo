import { View, FlatList } from "react-native";
import React from "react";
import { styles } from "./styles";
import Task from "./Task/Task";

const Tasks = ({ tasks }) => (
  <View style={styles.mainContainer}>
    <FlatList
      data={tasks}
      renderItem={({ item, index }) => <Task key={index} task={item} />}
      showsVerticalScrollIndicator={false}
    />
  </View>
);

export default Tasks;

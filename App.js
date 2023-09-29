import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import Header from "./src/components/Header/Header";
import Tasks from "./src/components/Tasks/Tasks";
import Form from "./src/components/Form/Form";
import uuid from "react-uuid";
import { styles } from "./src/styles/main";
import { useState } from "react";

const taskList = [
  {
    id: uuid(),
    description: "Walk the dog",
    done: true,
  },
  {
    id: uuid(),
    description: "Wash the car",
    done: false,
  },
  {
    id: uuid(),
    description: "Finish the lab",
    done: false,
  },
];

const appRes = {
  statusBar: {
    color: "#FFFFFF",
    style: "auto",
  },
};

const App = () => {
  const [tasks, setTasks] = useState(taskList);

  const handleAddTask = (task) => {
    const tempTasks = [...tasks];
    const newTask = { ...task, id: uuid() };
    tempTasks.push(newTask);
    setTasks(tempTasks);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <StatusBar
          style={appRes?.statusBar.style}
          backgroundColor={appRes?.statusBar.color}
        />
        <Header />
        <Tasks tasks={tasks} />
        <Form onAddTask={handleAddTask} />
      </View>
    </SafeAreaView>
  );
};

export default App;

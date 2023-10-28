import { StatusBar } from "expo-status-bar";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import Header from "./src/components/Header/Header";
import Tasks from "./src/components/Tasks/Tasks";
import Form from "./src/components/Form/Form";
import uuid from "react-uuid";
import { styles } from "./src/styles/main";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
  tabBar: {
    inactiveColor: "#000000",
    activeColor: "#FF8400",
    listImg: require("./src/assets/images/list.png"),
    addImg: require("./src/assets/images/plus.png"),
    listText: "List Tasks",
    addText: "Add Task",
  },
  KEY_LIST: "List",
  KEY_ADD: "Add",
};

const Tab = createBottomTabNavigator();

const TabBar = (props) => {
  const { navigation } = props;
  const [isListActive, setisListActive] = useState(true);

  const onPressList = () => {
    setisListActive(true);
    navigation.navigate(appRes.KEY_LIST);
  };

  const onPressAdd = () => {
    setisListActive(false);
    navigation.navigate(appRes.KEY_ADD);
  };

  const listColor = isListActive
    ? appRes?.tabBar?.activeColor
    : appRes?.tabBar?.inactiveColor;
  const addColor = !isListActive
    ? appRes?.tabBar?.activeColor
    : appRes?.tabBar?.inactiveColor;
  return (
    <View style={styles.bottomTabView}>
      <Pressable style={styles.bottomTabButton} onPress={onPressList}>
        <Image
          source={appRes?.tabBar?.listImg}
          style={styles.bottomTabIcon}
          tintColor={listColor}
        />
        <Text style={[styles.bottomTabText, { color: listColor }]}>
          {appRes?.tabBar?.listText}
        </Text>
      </Pressable>
      <Pressable style={styles.bottomTabButton} onPress={onPressAdd}>
        <Image
          source={appRes?.tabBar?.addImg}
          style={styles.bottomTabIcon}
          tintColor={addColor}
        />
        <Text style={[styles.bottomTabText, { color: addColor }]}>
          {appRes?.tabBar?.addText}
        </Text>
      </Pressable>
    </View>
  );
};

const App = () => {
  const [tasks, setTasks] = useState(taskList);

  const handleAddTask = (task) => {
    const tempTasks = [...tasks];
    const newTask = { ...task, id: uuid() };
    tempTasks.push(newTask);
    setTasks(tempTasks);
  };

  const handleUpdateTask = ({ id, status }) => {
    const tempTasks = [...tasks];
    const index = tempTasks.findIndex((t) => t.id === id);
    tempTasks[index].done = status;
    setTasks(tempTasks);
  };

  const handleRemoveTask = ({ id }) => {
    const tempTasks = [...tasks];
    const index = tempTasks.findIndex((t) => t.id === id);
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  };

  return (
    <SafeAreaView>
      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar
            style={appRes?.statusBar.style}
            backgroundColor={appRes?.statusBar.color}
          />
          <Header />
          <Tab.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={appRes?.KEY_LIST}
            tabBar={(props) => <TabBar {...props} />}
          >
            <Tab.Screen name={appRes?.KEY_LIST}>
              {(props) => (
                <Tasks
                  {...props}
                  tasks={tasks}
                  onUpdateTask={handleUpdateTask}
                  onRemoveTask={handleRemoveTask}
                />
              )}
            </Tab.Screen>
            <Tab.Screen name={appRes?.KEY_ADD}>
              {(props) => <Form {...props} onAddTask={handleAddTask} />}
            </Tab.Screen>
          </Tab.Navigator>
        </View>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

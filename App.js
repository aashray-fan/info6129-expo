import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import Header from "./src/components/Header/Header";
import Tasks from "./src/components/Tasks/Tasks";
import Form from "./src/components/Form/Form";
import { styles } from "./src/styles/main";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Notifications from "expo-notifications";

import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { app } from "./firebaseConfig";
import Settings from "./src/components/Settings/Settings";

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
    settingImg: require("./src/assets/images/setting.png"),
    listText: "List Tasks",
    addText: "Add Task",
    settingsText: "Settings",
  },
  KEY_LIST: "List",
  KEY_ADD: "Add",
  KEY_SETTING: "Settings",
  AI: {
    Color: {
      themeOrange: "#FF8400",
    },
  },
  DB_COLLECTION: "tasks",
};

const Tab = createBottomTabNavigator();
const db = getFirestore(app);
const collectionRef = collection(db, appRes?.DB_COLLECTION);

const renderTabBarItem = ({ color, image, text, onPress }) => (
  <Pressable style={styles.bottomTabButton} onPress={onPress}>
    <Image source={image} style={styles.bottomTabIcon} tintColor={color} />
    <Text style={[styles.bottomTabText, { color }]}>{text}</Text>
  </Pressable>
);

const TabBar = (props) => {
  const { navigation } = props;
  const isListActive =
    props?.state?.routeNames[props?.state?.index] === appRes?.KEY_LIST;
  const isAddActive =
    props?.state?.routeNames[props?.state?.index] === appRes?.KEY_ADD;
  const isSettingActive =
    props?.state?.routeNames[props?.state?.index] === appRes?.KEY_SETTING;

  const onPressList = () => {
    navigation.navigate(appRes.KEY_LIST);
  };

  const onPressAdd = () => {
    navigation.navigate(appRes.KEY_ADD);
  };

  const onPressSettings = () => {
    navigation.navigate(appRes.KEY_SETTING);
  };

  const listColor = isListActive
    ? appRes?.tabBar?.activeColor
    : appRes?.tabBar?.inactiveColor;
  const addColor = isAddActive
    ? appRes?.tabBar?.activeColor
    : appRes?.tabBar?.inactiveColor;
  const settingColor = isSettingActive
    ? appRes?.tabBar?.activeColor
    : appRes?.tabBar?.inactiveColor;
  return (
    <View style={styles.bottomTabView}>
      {renderTabBarItem({
        color: listColor,
        text: appRes?.tabBar?.listText,
        image: appRes?.tabBar?.listImg,
        onPress: onPressList,
      })}
      {renderTabBarItem({
        color: addColor,
        text: appRes?.tabBar?.addText,
        image: appRes?.tabBar?.addImg,
        onPress: onPressAdd,
      })}
      {renderTabBarItem({
        color: settingColor,
        text: appRes?.tabBar?.settingsText,
        image: appRes?.tabBar?.settingImg,
        onPress: onPressSettings,
      })}
    </View>
  );
};

const AppLoader = ({ isVisible, AImsg }) => {
  if (isVisible) {
    return (
      <View style={styles.AIcontainer}>
        <View style={styles.AIinnerContainer}>
          <ActivityIndicator
            size="large"
            color={appRes?.AI.Color.themeOrange}
          />
          <Text style={styles.AImsg}>{AImsg}</Text>
        </View>
      </View>
    );
  }
  return null;
};

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [AImsg, setAImsg] = useState("Loading...");

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    setAImsg("Loading...");
    setIsLoading(true);
    getDocs(collectionRef)
      .then((querySnapshot) => {
        const tempTasks = [];
        querySnapshot.forEach((doc) => {
          tempTasks.push({ ...doc.data(), id: doc.id });
          setTasks(tempTasks);
        });
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
        Alert.alert("Error", "Error getting documents: " + error);
      });
  };

  const handleAddTask = (task) => {
    setAImsg("Saving...");
    setIsLoading(true);
    addDoc(collectionRef, task)
      .then((docRef) => {
        setIsLoading(false);
        getTasks();
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        Alert.alert("Error", "Error adding document: " + error);
      });
  };

  const handleUpdateTask = ({ id, status }) => {
    setAImsg("Saving...");
    setIsLoading(true);
    const docRef = doc(db, appRes?.DB_COLLECTION, id);
    updateDoc(docRef, { done: status })
      .then(() => {
        setIsLoading(false);
        getTasks();
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
        Alert.alert("Error", "Error updating document: " + error);
      });
  };

  const handleRemoveTask = ({ id }) => {
    setAImsg("Saving...");
    setIsLoading(true);
    const docRef = doc(db, appRes?.DB_COLLECTION, id);
    deleteDoc(docRef)
      .then(() => {
        setIsLoading(false);
        getTasks();
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
        Alert.alert("Error", "Error removing document: " + error);
      });
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
            <Tab.Screen name={appRes?.KEY_SETTING}>
              {(props) => <Settings {...props} />}
            </Tab.Screen>
          </Tab.Navigator>
        </View>
        <AppLoader isVisible={isLoading} AImsg={AImsg} />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

// NOTIFICATION LISTENER
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
  handleSuccess: (notificationId) => {
    console.log("Handle Success:", notificationId);
  },
  handleError: (notificationId, error) => {
    console.log("Handle Error:", error);
  },
});

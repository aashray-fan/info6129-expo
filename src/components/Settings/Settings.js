import { View, Text, Switch, Platform } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import * as Notifications from "expo-notifications";

const settingsRes = {
  headerText: "Settings",
  titleText: "Notifications",
  subTitleText: "Remind me to keep my tasks up-to-date",
  toggleTrackColor: {
    false: "#cccccc",
    true: "#34C759",
  },
  notificationText: "Set Daily Reminder",
  notification_content: {
    title: "Todo Reminder",
    body: "Remember to check your tasks",
  },
  notification_trigger: {
    seconds: Platform.OS === "ios" ? 60 : 5,
    repeats: true,
  },
};

const Settings = () => {
  const [enableNotification, setEnableNotification] = useState(false);

  const scheduleNotification = async (state) => {
    if (enableNotification) {
      Notifications.cancelAllScheduledNotificationsAsync()
        .then(() => setEnableNotification(state))
        .catch((error) => console.log(error));
    } else {
      Notifications.scheduleNotificationAsync({
        content: settingsRes?.notification_content,
        trigger: settingsRes?.notification_trigger,
      })
        .then(() => setEnableNotification(state))
        .catch((error) => console.log(error));
    }
  };

  const toggleNotification = async (state) => {
    Notifications.getPermissionsAsync()
      .then(async (permissions) => {
        if (permissions.granted) {
          scheduleNotification(state);
        } else {
          Notifications.requestPermissionsAsync({
            ios: { allowAlert: true, allowSound: true, allowBadge: true },
          })
            .then(() => scheduleNotification(state))
            .catch((error) => console.log("Error:", error));
        }
      })
      .catch((error) => console.log("Error:", error));
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>{settingsRes?.headerText}</Text>
      </View>
      <View style={styles.mainView}>
        <Text style={styles.titleText}>{settingsRes?.titleText}</Text>
        <Text style={styles.subTitleText}>{settingsRes?.subTitleText}</Text>
        <View style={styles.controlView}>
          <Switch
            value={enableNotification}
            onValueChange={(state) => toggleNotification(state)}
            trackColor={settingsRes?.toggleTrackColor}
            thumbColor={settingsRes?.toggleThumbColor}
          />
          <Text style={styles.controlText}>
            {settingsRes?.notificationText}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Settings;

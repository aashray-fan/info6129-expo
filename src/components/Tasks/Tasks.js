import {
  View,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Pressable,
  Image,
  Text,
  Switch,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import Task from "./Task/Task";

const tasksRes = {
  toggleTrackColor: {
    false: "#cccccc",
    true: "#34C759",
  },
};

const Tasks = ({ tasks, onUpdateTask, onRemoveTask }) => {
  const [visible, setvisible] = useState(false);
  const [selectedTask, setselectedTask] = useState(null);
  const [done, setDone] = useState(false);

  const onRequestClose = () => {
    if (done !== selectedTask?.done) {
      onUpdateTask({ id: selectedTask?.id, status: done });
    }
    setvisible(false);
  };

  const onPressTask = (item) => {
    setselectedTask(item);
    setDone(item?.done);
    setvisible(true);
  };

  const onConfirmDelete = () => {
    onRemoveTask(selectedTask);
    setvisible(false);
  };

  const onPressRemove = () => {
    Alert.alert(
      "Remove Task",
      "This action will permanently delete this task. This action cannot be undone.!",
      [
        {
          text: `Confirm`,
          onPress: onConfirmDelete,
          style: "cancel",
        },
        { text: `Cancel`, style: "cancel" },
      ]
    );
  };

  const renderModal = () => {
    return (
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={visible}
        onRequestClose={onRequestClose}
      >
        <View style={styles.modalMainView}>
          <TouchableWithoutFeedback onPress={onRequestClose}>
            <View style={styles.modalMainView} />
          </TouchableWithoutFeedback>
          <View style={styles.modalAbsView}>
            <View style={styles.modalTopView}>
              <Pressable
                style={styles.modalCloseTouch}
                onPress={onRequestClose}
              >
                <Image
                  source={require("../../assets/images/close.png")}
                  style={styles.modalCloseTouch}
                  resizeMode="contain"
                />
              </Pressable>
            </View>
            <View style={styles.modalMidView}>
              <Text style={styles.descText} numberOfLines={2}>
                {selectedTask?.description}
              </Text>
            </View>
            <View style={styles.modalBottomView}>
              <Pressable style={styles.modalButtonView}>
                <Switch
                  value={done}
                  onValueChange={(state) => setDone(state)}
                  trackColor={tasksRes?.toggleTrackColor}
                  thumbColor={tasksRes?.toggleThumbColor}
                  style={styles.modalButtonIcon}
                />
                <Text style={styles.smallText}>Status</Text>
              </Pressable>
              <Pressable style={styles.modalButtonView} onPress={onPressRemove}>
                <Image
                  source={require("../../assets/images/delete.png")}
                  style={styles.modalButtonIcon}
                  resizeMode="contain"
                />
                <Text style={styles.smallRedText}>Remove</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {tasks?.length > 0 ? (
        <FlatList
          data={tasks}
          renderItem={({ item, index }) => (
            <Task key={index} task={item} onPressTask={onPressTask} />
          )}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text style={styles.emptyText}>There are no tasks in the list</Text>
      )}
      {renderModal()}
    </View>
  );
};

export default Tasks;

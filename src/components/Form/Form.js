import {
  View,
  Text,
  TextInput,
  Switch,
  KeyboardAvoidingView,
  Platform,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";

const formRes = {
  keyboardAvoidBehavior: Platform.OS === "ios" ? "padding" : "height",
  buttonText: "Add",
  errorTitle: "Attention",
  errorText: "The description is required.",
  inputPlaceholder: "Enter a task description",
  toggleText: "Completed",
  toggleTrackColor: {
    false: "#cccccc",
    true: "#34C759",
  },
  toggleThumbColor: "#FFFFFF",
};

const Form = ({ onAddTask, navigation }) => {
  const [error, setError] = useState(false);
  const [description, setDescription] = useState("");
  const [done, setDone] = useState(false);

  const onPressAdd = () => {
    if (description?.length === 0) {
      setError(true);
      return;
    }

    setError(false);
    onAddTask({ description, done });
    setDescription("");
    setDone(false);
    navigation.navigate("List")
  };

  // RENDER
  const renderError = () => {
    return (
      <View style={styles.errorView}>
        <View style={styles.errRedBlock} />
        <View style={styles.errDetailView}>
          <Text style={styles.errBoldText}>{`${formRes?.errorTitle}:`}:</Text>
          <Text style={styles.errText}>{formRes?.errorText}</Text>
        </View>
      </View>
    );
  };

  const renderInput = () => {
    return (
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputTextInput}
          placeholder={formRes?.inputPlaceholder}
          maxLength={150}
          onFocus={() => setError(false)}
          onChangeText={(t) => setDescription(t)}
          value={description}
        />
        <View style={styles.toggleView}>
          <Text style={styles.inputText}>{`${formRes?.toggleText}:`}</Text>
          <Switch
            value={done}
            onValueChange={(state) => setDone(state)}
            trackColor={formRes?.toggleTrackColor}
            thumbColor={formRes?.toggleThumbColor}
          />
        </View>
      </View>
    );
  };

  const renderAddButton = () => {
    return (
      <TouchableHighlight style={styles.addTouch} onPress={onPressAdd}>
        <Text style={styles.addText}>{formRes?.buttonText}</Text>
      </TouchableHighlight>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={formRes?.keyboardAvoidBehavior}
      style={styles.keyboardAvoid}
      enabled={false}
    >
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Add Task</Text>
      </View>
      <View style={styles.mainContainer}>
        {error && renderError()}
        {renderInput()}
        {renderAddButton()}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Form;

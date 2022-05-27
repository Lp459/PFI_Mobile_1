import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import { useState } from "react";

function PressableLogin({ onPress, user }) {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Pressable
      style={isPressed ? styles.appuye : styles.pressable}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={onPress}
    >
      <Text style={isPressed ? styles.texteAppuye : styles.texteNormal}>
        {user}
      </Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  pressable: {
    color: "blue",
    backgroundColor: "#2be",
    padding: 6,
    margin: 4,
    borderRadius: 10,
  },
  appuye: {
    backgroundColor: "#26e",
    padding: 6,
    margin: 4,
    borderRadius: 10,
  },
  texteAppuye: {
    color: "lightblue",
    fontWeight: "bold",
    fontSize: 19
  },
  texteNormal: {
    color: "salmon",
    fontWeight: "bold",
    fontSize: 19
  },
});

export default PressableLogin;

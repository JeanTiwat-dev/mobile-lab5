import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {props.rounds}</Text>
      <Text>Correct Number was: {props.answer}</Text>
      <Button
        title="New Game"
        color={Colors.green}
        onPress={() => {
          props.onRestart();
        }}
      />
      {/* ...เพิ่มโค้ด สรุปผลลัพธ์การเล่นเกม และมีปุ่มให้เริ่มเกมใหม่ได้... */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;

import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "./app/components/Header";
import GameOverScreen from "./app/screens/GameOverScreen";
import GameScreen from "./app/screens/GameScreen";
import StartGameScreen from "./app/screens/StartGameScreen";

export default function App() {
  const [correctNumber, setCorrectNumber] = useState(0);
  const [guessRounds, setGuessRounds] = useState(0);

  // ฟังก์ชันสำหรับการเริ่มเกมใหม่
  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setCorrectNumber(0);
    // ...เพิ่มโค้ด...อัพเดทค่าสเตท guessRounds ให้เป็น 0
    // ...เพิ่มโค้ด...อัพเดทค่าสเตท correctNumber ให้เป็น 0
  };

  const startGameHandler = (rndNum) => {
    setCorrectNumber(rndNum);
    console.log(rndNum);
  };

  // ฟังก์ชันสำหรับจัดการการจบเกม
  const gameOverHandler = (numOfRounds) => {
    // ...เพิ่มโค้ด...อัพเดทค่าสเตท guessRounds ด้วยค่า numOfRounds ที่รับมา
    setGuessRounds(numOfRounds);
    console.log(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if (correctNumber > 0 && guessRounds <= 0) {
    // ทำการเรียก GameScreen
    content = (
      <GameScreen answer={correctNumber} onGameOver={gameOverHandler}/>
    );
  } else if (guessRounds > 0) {
    // ทำการเรียก GameOverScreen
    content = (
    <GameOverScreen rounds={guessRounds} answer={correctNumber} onRestart={configureNewGameHandler}/>
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

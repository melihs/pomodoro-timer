import {useState} from "react";
import {View} from 'react-native';
import {StatusBar} from 'expo-status-bar';

import {AppContext} from "./AppContext";
import {FOCUS_TIME_MINUTES} from "./enum";

import CountDown from "./components/countDown/CountDown";
import TimerButton from "./components/timerButton/TimerButton";

import {styles} from "./styles";

const App = () => {
  const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MINUTES);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const startTimer = () => {
    setIsTimerRunning(true);
    const id = setInterval(() => setTimerCount((prev) => prev - 1000), 1000);
    setTimerInterval(id);
  }

  const stopTimer = () => {
    if (timerInterval !== null) clearInterval(timerInterval);
    setIsTimerRunning(false);
  }

  const contextData = {isTimerRunning, startTimer, stopTimer};

  return (
    <AppContext.Provider value={contextData}>
      <View style={styles.container}>
        <StatusBar style="auto"/>
        <TimerButton/>
        <CountDown timerDate={new Date(timerCount)}/>
      </View>
    </AppContext.Provider>
  );
}

export default App;

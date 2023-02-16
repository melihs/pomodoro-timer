import React, {FC, useEffect, useState} from "react";
import {Audio} from 'expo-av';
import {Pressable, View} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {AppContext, useContext} from "../../AppContext";

import {styles} from "./style";

const TimerButton: FC = () => {
  const {isTimerRunning, startTimer, stopTimer} = useContext(AppContext);
  const [soundEffect, setSoundEffect] = useState<Audio.Sound>();

  const playSound = async () => {
    const {sound} = await Audio.Sound.createAsync(require('../../assets/sounds/click.mp3')
    );
    setSoundEffect(sound);
    await sound.playAsync();
  }

  const decideTimerButton = (start: any, stop: any) => isTimerRunning ? stop() : start();

  const handleOnPress = () => {
    playSound();
    decideTimerButton(startTimer, stopTimer);
  }

  useEffect(() => {
    if (soundEffect) () => soundEffect.unloadAsync();
  }, [soundEffect]);

  return (
    <Pressable
      style={({pressed}) => [{opacity: pressed ? 0.6 : 1}]}
      onPress={handleOnPress}
    >
      <View style={styles.container}>
        <FontAwesome
          style={styles.icon}
          name={isTimerRunning ? "stop" : "play"} size={125} color="white"
        />
      </View>
    </Pressable>
  );
};

export default TimerButton;

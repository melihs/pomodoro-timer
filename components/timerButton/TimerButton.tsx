import {FC} from "react";
import {Pressable, View} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {AppContext, useContext} from "../../AppContext";

import {styles} from "./style";

const TimerButton: FC = () => {
  const {isTimerRunning, startTimer, stopTimer} = useContext(AppContext);

  const decideTimerButton = (start: any, stop: any) => isTimerRunning ? stop : start;

  return (
    <Pressable
      style={({pressed}) => [{opacity: pressed ? 0.6 : 1}]}
      onPress={decideTimerButton(startTimer, stopTimer)}
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

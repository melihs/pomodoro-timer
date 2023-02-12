import {FC} from "react";
import {Text, View} from "react-native";

import {Types} from "./types";

import {styles} from "./style";

const CountDown: FC<Types> = ({timerDate}) => {
  const convertTime = (date: Date, type: string) => {
    const timer = type === "minute" ? date.getMinutes() : date.getSeconds();
    return timer.toString().padStart(2, "0");
  }

  const minutes = () => convertTime(timerDate, "minute");

  const seconds = () => convertTime(timerDate, "second");

  return (
    <View>
      <Text style={styles.timerCountDownText}>
        {`${minutes()}: ${seconds()}`}
      </Text>
    </View>
  );
}

export default CountDown;

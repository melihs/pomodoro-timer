import {FC} from "react";
import {Button} from "react-native";
import {AppContext, useContext} from "../../AppContext";

const TimerButton: FC = () => {
  const {isTimerRunning, startTimer, stopTimer} = useContext(AppContext);

  const decideTimerButton = (start: any, stop: any) => isTimerRunning ? stop : start;

  return <Button title={decideTimerButton("Start timer", "Stop timer")}
                 onPress={decideTimerButton(startTimer, stopTimer)}/>
};

export default TimerButton;

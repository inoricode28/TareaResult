import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import { BoxObjectModel } from './src/presentation/views/BoxObjectModel';
import { Position } from './src/presentation/views/Position';
import { FlexBox } from './src/presentation/views/FlexBox';
import { FlexDirection } from './src/presentation/views/FlexDirection';
import { FlexExcercises } from './src/presentation/views/FlexExercises';
import { MyCalculatorScreen } from './src/presentation/views/MyCalculatorScreen';
import { styles } from './src/config/appTheme';
import { Task_06 } from './src/presentation/views/Task_06';
import { Task_07 } from './src/presentation/views/Task_07';
import { Task_08 } from './src/presentation/views/Task_08';
import { Task_09 } from './src/presentation/views/Task_09';
import { Task_10 } from './src/presentation/views/Task_10';


function App(): React.JSX.Element {

  return (
    <View style={ styles.background}>
      {/* <HelloWorld /> */}
      {/* <CounterApp /> */}
      {/* <BoxObjectModel /> */}
      {/* <Position /> */}
      {/* <FlexBox /> */}
      {/* <FlexDirection /> */}
      {/* <FlexExcercises /> */}
      {/* <Task_06 /> */}
      {/* <Task_07 /> */}
      {/* <Task_08 /> */}
      {/* <Task_09 /> */}
      <Task_10 />

      {/* <MyCalculatorScreen /> */}
    </View>
  );
}

export default App;

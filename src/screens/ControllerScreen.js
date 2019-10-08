import React from 'react';
import {
  Alert,
  SafeAreaView,
  Text,
  TouchableHighlight,
  StyleSheet,
  View,
} from 'react-native';
import {colors} from '../theme';
import RobotApi from '../api/robotApi';
import {Button} from '../components/Button';
import { ScrollView } from 'react-native-gesture-handler';

const robotApi = RobotApi.create();

const identify = async () => {
  const response = await robotApi.identify();
  if (!response.ok) {
    Alert.alert(response.originalError.message);
  }
};

const lights = async (on, brightness) => {
  const response = await robotApi.lights(on ? 'true' : 'false', 10);
  if (!response.ok) {
    Alert.alert(response.originalError.message);
  }
};

const turn = async angle => {
  const response = await robotApi.turn(angle);
  if (!response.ok) {
    Alert.alert(response.originalError.message);
  }
};

const move = async (x = 0, y = 0, bogie = 0) => {
  const response = await robotApi.move(x, y, bogie);
  if (!response.ok) {
    Alert.alert(response.originalError.message);
  }
};

const moveArc = async (distance, angle, speed = 1.5) => {
  const response = await robotApi.moveArc(distance, angle, speed);
  if (!response.ok) {
    Alert.alert(response.originalError.message);
  }
};

const bogie = async value => {
  const response = await robotApi.bogie(value);
  if (!response.ok) {
    Alert.alert(response.originalError.message);
  }
};

const playsound = async () => {
  const response = await robotApi.playsound(
    `https://freesound.org/data/previews/343/343490_1196472-lq.mp3`,
  );
  if (!response.ok) {
    Alert.alert(response.originalError.message);
  }
};

const stop = async () => {
  const response = await robotApi.stop();
  if (!response.ok) {
    Alert.alert(response.originalError.message);
  }
};

export const ControllerScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{width: '100%'}} >
        <View style={styles.button}>
          <Button title="Identify" onPress={identify} active />
        </View>
        <View style={styles.button}>
          <Button title="Lights on" onPress={() => lights(true)} active />
        </View>
        <View style={styles.button}>
          <Button title="Lights off" onPress={() => lights(false)} active />
        </View>
        <View style={styles.button}>
          <Button title="Turn left 90" onPress={() => turn(-90)} active />
        </View>
        <View style={styles.button}>
          <Button title="Turn right 90" onPress={() => turn(90)} active />
        </View>
        <View style={styles.button}>
          <Button title="Move fwd 1m" onPress={() => move(0, 1)} active />
        </View>
        <View style={styles.button}>
          <Button title="Move bwd -1m" onPress={() => move(0, -1)} active />
        </View>
        <View style={styles.button}>
          <Button title="Move r1 f1" onPress={() => move(1, 1)} active />
        </View>
        <View style={styles.button}>
          <Button title="Move l1 f1" onPress={() => move(-1, 1)} active />
        </View>
        <View style={styles.button}>
          <Button
            title="Move arc right"
            onPress={() => moveArc(1.5, 90)}
            active
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Move arc left"
            onPress={() => moveArc(1.5, -90)}
            active
          />
        </View>
        <View style={styles.button}>
          <Button title="Set bogie 25" onPress={() => bogie(25)} active />
        </View>
        <View style={styles.button}>
          <Button title="Set bogie 25" onPress={() => bogie(50)} active />
        </View>
        <View style={styles.button}>
          <Button title="Set bogie 25" onPress={() => bogie(75)} active />
        </View>
        <View style={styles.button}>
          <Button title="Set bogie 25" onPress={() => bogie(100)} active />
        </View>
        <View style={styles.button}>
          <Button title="Set bogie 0" onPress={() => bogie(0)} active />
        </View>
        <View style={styles.button}>
          <Button title="QVIK: Play sound" onPress={playsound} active />
        </View>
        <View style={styles.button}>
          <Button title="Stop" onPress={stop} active />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 150,
    height: 20,
    margin: 5,
    borderWidth: 1,
    borderColor: colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import RobotApi from '../api/robotApi';
import {colors} from '../theme';
const robotApi = RobotApi.create();

const DpadScreen = props => {
  const turnLeft = () => {
    robotApi.turn(-45);
  };
  const turnRight = () => {
    robotApi.turn(45);
  };
  const goForward = () => {
    robotApi.move(0, 2);
  };
  const goBack = () => {
    robotApi.move(0, -2);
  };
  const spin = () => {
    robotApi.bogie(-50);
    robotApi.bogie(50);
    robotApi.turn(360);
  };
  const blink = () => {
    robotApi.lights(true);
    robotApi.lights(false);
    robotApi.lights(true);
    robotApi.lights(false);
    robotApi.lights(true);
    robotApi.lights(false);
    robotApi.lights(true);
    robotApi.lights(false);
  };
  const sound = () => {
    robotApi.playsound(
      'https://freesound.org/data/previews/49/49477_52325-lq.mp3',
      20,
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: colors.white, padding: 20}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={s.buttonContainer}></View>
        <View style={{flex: 1, borderColor: colors.black, borderWidth: 2}}>
          <TouchableHighlight onPress={goForward}>
            <Text style={{fontSize: 72, alignSelf: 'center'}}>⬆️</Text>
          </TouchableHighlight>
        </View>
        <View style={s.buttonContainer}></View>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={s.buttonContainer}>
          <TouchableHighlight onPress={turnLeft}>
            <Text style={{fontSize: 72, alignSelf: 'center'}}>⬅️</Text>
          </TouchableHighlight>
        </View>
        <View style={s.buttonContainer}>
          <TouchableHighlight onPress={spin}>
            <Text style={{fontSize: 72, alignSelf: 'center'}}>♺</Text>
          </TouchableHighlight>
        </View>
        <View style={s.buttonContainer}>
          <TouchableHighlight onPress={turnRight}>
            <Text style={{fontSize: 72, alignSelf: 'center'}}>➡️</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={s.buttonContainer}></View>
        <View style={s.buttonContainer}>
          <TouchableHighlight onPress={goBack}>
            <Text style={{fontSize: 72, alignSelf: 'center'}}>⬇️</Text>
          </TouchableHighlight>
        </View>
        <View style={s.buttonContainer}></View>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={s.buttonContainer}>
          <TouchableHighlight onPress={sound}>
            <Text style={{fontSize: 72, alignSelf: 'center'}}>🔈</Text>
          </TouchableHighlight>
        </View>
        <View style={s.buttonContainer}></View>
        <View style={s.buttonContainer}>
          <TouchableHighlight onPress={blink} style={{}}>
            <Text
              style={{
                fontSize: 72,
                alignSelf: 'center',
              }}>
              💡
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {},
  buttonContainer: {
    flex: 1,
    borderColor: colors.black,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DpadScreen;

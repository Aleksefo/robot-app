import React, {useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../theme';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Button = ({title, onPress, active, color}) => {
  const onPressCallback = useCallback(() => {
    if (active && onPress) {
      onPress();
    }
  }, [onPress, active]);

  return (
    <View style={[styles.container, {backgroundColor: color || colors.white}]}>
      <TouchableOpacity
        onPress={onPressCallback}
        activeOpacity={onPress && active ? 0.2 : 1}>
        <View style={styles.content}>
          <Text style={[styles.title]}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.lightGray,
    backgroundColor: 'red',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
  },
});

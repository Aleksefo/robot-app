import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../theme';

export const Row = ({title, value, centered}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, centered && {textAlign: 'center', flex: 1}]}>
        {title}
      </Text>
      {value && <Text style={styles.value}>{value}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 16,
    color: colors.black,
  },
  value: {
    fontSize: 16,
    color: colors.black,
  },
  centered: {
    textAlign: 'center',
    flex: 1,
  },
});

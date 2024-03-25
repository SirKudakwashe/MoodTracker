import React, { useCallback, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { MoodOptionWithTimestamp, MoodOptionType } from '../types';
import { MoodItemRow } from '../components/MoodItemRow';
import { useAppContext } from '../App.provider';
const appContext = useAppContext();

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <MoodPicker handleSelectMood={appContext.handleSelectMood} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

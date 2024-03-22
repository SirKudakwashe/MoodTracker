import React, { useCallback, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { MoodOptionWithTimestamp, MoodTypeOption } from '../types';

export const Home: React.FC = () => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);
  const handleSelectMood = React.useCallback((mood: MoodTypeOption) => {
    setMoodList(current => [...current, { mood, timestamp: Date.now() }]);
  }, []);

  return (
    <View style={styles.container}>
      <MoodPicker handleSelectMood={handleSelectMood} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

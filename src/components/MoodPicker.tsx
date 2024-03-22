import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MoodTypeOption } from '../types';

const moodOptions: MoodTypeOption[] = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

export const MoodPicker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<MoodTypeOption>();
  return (
    <View style={styles.moodOptions}>
      {moodOptions.map(option => (
        <Pressable
          onPress={() => setSelectedMood(option)}
          key={option.emoji}
          style={[
            styles.moodItem,
            option.emoji === selectedMood?.emoji
              ? styles.selectedMoodItem
              : undefined,
          ]}>
          <Text key={option.emoji}>{option.emoji}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  moodOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },

  moodItem: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedMoodItem: {
    backgroundColor: '#454C73',
    borderColor: '#fff',
    borderWidth: 2,
  },
});

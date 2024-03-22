import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MoodTypeOption } from '../types';
import { theme } from '../theme';

const moodOptions: MoodTypeOption[] = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

type MoodPicker = {
  handleSelectMood: (moodOption: MoodTypeOption) => void;
};

export const MoodPicker: React.FC<MoodPicker> = () => {
  const [selectedMood, setSelectedMood] = useState<MoodTypeOption>();
  return (
    <View style={styles.moodOptions}>
      {moodOptions.map(option => (
        <View key={option.emoji}>
          <Pressable
            onPress={() => setSelectedMood(option)}
            key={option.emoji}
            style={[
              styles.moodItem,
              option.emoji === selectedMood?.emoji
                ? styles.selectedMoodItem
                : undefined,
            ]}>
            <Text>{option.emoji}</Text>
          </Pressable>

          <Text style={styles.descriptionText}>
            {option.emoji === selectedMood?.emoji ? option.description : ''}
          </Text>
        </View>
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
    backgroundColor: '#0c163b',
    borderColor: '#fff',
    borderWidth: 2,
  },

  descriptionText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#0c163b',
    fontSize: 18,
  },
});

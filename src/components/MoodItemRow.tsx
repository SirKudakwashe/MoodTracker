import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  LayoutAnimation,
} from 'react-native';
import { MoodOptionWithTimestamp } from '../types';
import { theme } from '../theme';
import { useAppContext } from '../App.provider';

type MoodItemRowProps = {
  item: MoodOptionWithTimestamp;
};

export const MoodItemRow: React.FC<MoodItemRowProps> = ({ item }) => {
  const appContext = useAppContext();
  const handlePress = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    appContext.handleDeleteMood(item);
  }, [appContext, item]);

  return (
    <View style={styles.moodItem}>
      <View style={styles.iconAndDescription}>
        <Text style={styles.moodValue}>{item.mood.emoji}</Text>
        <Text style={styles.moodDescription}>{item.mood.description}</Text>
      </View>
      <Text style={styles.moodDate}>{new Date(item.timestamp).toString()}</Text>
      <Pressable onPress={handlePress}>
        <Text style={styles.deleteText}>Delete</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  moodValue: {
    textAlign: 'center',
    fontSize: 40,
    marginRight: 10,
  },
  moodDate: {
    textAlign: 'center',
    fontSize: 10,
    color: theme.colorLavender,
    fontFamily: theme.fontFamilyRegular,
  },
  moodItem: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moodDescription: {
    fontSize: 18,
    color: theme.colorPurple,
    fontFamily: theme.fontFamilyBold,
  },
  iconAndDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteText: {
    color: theme.colorBlue,
    fontFamily: theme.fontFamilyLight,
  },
});

import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Pressable,
} from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { useAppContext } from '../App.provider';
import Reanimated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const ReanimatedPressable = Reanimated.createAnimatedComponent(Pressable);

const imageUrl =
  'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1766&q=80';

export const Home: React.FC = () => {
  const appContext = useAppContext();
  const shared = useSharedValue(0);
  const style = useAnimatedStyle(
    () => ({
      transform: [
        {
          translateX: shared.value,
        },
      ],
    }),
    [],
  );

  return (
    <ImageBackground style={styles.container} source={{ uri: imageUrl }}>
      <MoodPicker handleSelectMood={appContext.handleSelectMood} />
      <ReanimatedPressable
        onPress={() => {
          shared.value = withTiming(shared.value + 20, { duration: 100 });
        }}
        style={[styles.square, style]}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  square: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    borderRadius: 6,
  },
});

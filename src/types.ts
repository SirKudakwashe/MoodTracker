export type MoodTypeOption = {
  emoji: string;
  description: string;
};

export type MoodOptionWithTimestamp = {
  mood: MoodTypeOption;
  timestamp: number;
};

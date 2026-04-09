import React from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { inter18Regular, inter24Bold } from '../../../../theme/fonts';

const { width, height } = Dimensions.get('window');

type PaginationDotsProps = {
  total: number;
  currentIndex: number;
};

function PaginationDots({ total, currentIndex }: PaginationDotsProps) {
  return (
    <View style={styles.dotsContainer}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={[styles.dot, index === currentIndex ? styles.dotActive : styles.dotInactive]}
        />
      ))}
    </View>
  );
}

type OnboardingLayoutProps = {
  title: string;
  imageSource: ImageSourcePropType;
  nextIconSource: ImageSourcePropType;
  currentIndex: number;
  totalSteps: number;
  onSkipPress?: () => void;
  onNextPress?: () => void;
};

export function OnboardingLayout({
  title,
  imageSource,
  nextIconSource,
  currentIndex,
  totalSteps,
  onSkipPress,
  onNextPress,
}: OnboardingLayoutProps) {
  return (
    <View style={styles.container}>
      <Pressable hitSlop={8} onPress={onSkipPress}>
        <Text style={styles.skipText}>Skip</Text>
      </Pressable>

      <Image source={imageSource} style={styles.heroImage} />

      <LinearGradient
        colors={['#F5F7FF', '#FFFFFF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.7 }}
        style={styles.bottomPanel}>
        <Text style={styles.titleText}>{title}</Text>

        <View style={styles.footerRow}>
          <PaginationDots total={totalSteps} currentIndex={currentIndex} />

          <Pressable style={styles.nextButton} onPress={onNextPress}>
            <Image source={nextIconSource} style={styles.nextIcon} />
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    width: width,
    backgroundColor: '#FFFFFF',
  },
  skipText: {
    marginHorizontal: 10,
    color: '#A1A8B0',
    fontSize: 14,
    fontFamily: inter18Regular,
    ...(Platform.OS === 'ios' ? { fontWeight: '400' as const } : {}),
  },
  heroImage: {
    width: '100%',
    height: '70%',
    resizeMode: 'contain',
  },
  bottomPanel: {
    height: '30%',
    width: '100%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  titleText: {
    color: '#000000',
    fontSize: 25,
    fontFamily: inter24Bold,
    ...(Platform.OS === 'ios' ? { fontWeight: '700' as const } : {}),
    marginTop: 40,
    marginBottom: 40,
    marginHorizontal: 30,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 28,
  },
  dot: {
    backgroundColor: '#199A8E',
    height: 5,
    width: 20,
    marginHorizontal: 2,
    borderRadius: 10,
  },
  dotActive: {
    opacity: 1,
  },
  dotInactive: {
    opacity: 0.2,
  },
  nextButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 28,
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#199A8E',
  },
  nextIcon: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
});

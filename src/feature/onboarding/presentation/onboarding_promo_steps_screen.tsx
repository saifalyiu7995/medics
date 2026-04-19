import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../../assets/images';
import { OnboardingLayout } from './components/onboarding_ui';
import { FlatList } from 'react-native';
import { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function OnboardingScreen1() {
    const flatListRef = useRef<FlatList<Slide> | null>(null);
    const navigation = useNavigation<any>();

    const scrollToNext = (index: number) => {
        const nextIndex = index + 1;
        if (nextIndex >= slides.length) {
            navigation.navigate('LoginSignupScreen');
            return;
        }

        flatListRef.current?.scrollToIndex({
            index: nextIndex,
            animated: true,
        });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                ref={flatListRef}
                data={slides}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => String(index)}
                renderItem={({ item, index }) => (
                    <OnboardingLayout
                        title={item.title}
                        imageSource={item.image}
                        nextIconSource={images.ArrowRight}
                        currentIndex={index}
                        totalSteps={slides.length}
                        onNextPress={() => scrollToNext(index)}
                    />
                )}
            />
        </SafeAreaView>
    );
}

type Slide = {
    title: string;
    image: number;
};

const slides: Slide[] = [
    {
        title: 'Consult only with a doctor you trust',
        image: images.OnboardingImage1,
    },
    {
        title: 'Find a lot of specialist doctors in one place',
        image: images.OnboardingImage2,
    },
    {
        title: 'Get connect our Online Consultation',
        image: images.OnboardingImage3,
    },
];
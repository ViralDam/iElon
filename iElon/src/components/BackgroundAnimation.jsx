import React, { useEffect, useRef } from 'react';
import { Animated, Easing, ImageBackground, StyleSheet } from 'react-native';

import backgroundImage from '../../assets/start-background.jpg';
import {
    INPUT_RANGE_START,
    INPUT_RANGE_END,
    OUTPUT_RANGE_START,
    OUTPUT_RANGE_END,
    ANIMATION_TO_VALUE,
    ANIMATION_DURATION,
} from '../utility/constants';

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        width: 1800,
        height: 1800,
        top: 0,
        // opacity: 0.2,
        transform: [
            {
                translateX: 0,
            },
            {
                translateY: 0,
            },
        ],
    },
});

export default function BackgroundAnimation({childeren}) {
    const initialValue = 0;
    const translateValue = useRef(new Animated.Value(initialValue)).current;

    useEffect(() => {
        const translate = () => {
            translateValue.setValue(initialValue);
            Animated.timing(translateValue, {
                toValue: ANIMATION_TO_VALUE,
                duration: ANIMATION_DURATION,
                easing: Easing.linear,
                useNativeDriver: true,
            }).start(() => translate());
        };

        translate();
    }, [translateValue]);

    const translateAnimation = translateValue.interpolate({
        inputRange: [INPUT_RANGE_START, INPUT_RANGE_END],
        outputRange: [OUTPUT_RANGE_START, OUTPUT_RANGE_END],
    });

    const AnimetedImage = Animated.createAnimatedComponent(ImageBackground);

    return (

        <AnimetedImage
            resizeMode="repeat"
            style={[styles.background, {
                transform: [
                    {
                        translateX: translateAnimation,
                    },
                    {
                        translateY: translateAnimation,
                    },
                ],
            }]}
            source={backgroundImage} >
                {childeren}
            </AnimetedImage>

    )
}
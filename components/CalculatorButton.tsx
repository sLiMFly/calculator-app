import { Pressable, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import { Colors } from '@/constants/Colors';

import * as Haptics from 'expo-haptics';

interface Props {
    label: string;
    color?: string;
    blackText?: boolean;
    doubleSize?: boolean;
    onPress: () => void;
}



const CalculatorButton = ({
    label,
    color = Colors.darkGray,
    blackText = false,
    doubleSize = false,
    onPress }: Props) => {
    return (
        <Pressable
            style={({ pressed }) => ({
                ...globalStyles.button,
                backgroundColor: color,
                opacity: pressed ? 0.8 : 1,
                width: doubleSize ? 180 : 80, // double size + padding 20
            })}
            // onPress={() => {  // this option dont work, use for FH
            //     Haptics.selectionAsync();
            //     console.log('pressed');
            //     onPress();
            // }}
            onPress={
                () => {
                    Haptics.notificationAsync(
                        Haptics.NotificationFeedbackType.Success,
                        // Haptics.NotificationFeedbackType.Error
                    )
                    //console.log('pressed'),
                    onPress()
                }
            }
        >
            <Text
                style={{
                    ...globalStyles.buttonText,
                    color: blackText ? 'black' : 'white'
                }}
            >{label}</Text>

        </Pressable >
    )
}

export default CalculatorButton
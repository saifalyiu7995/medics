import React, { useState } from 'react';
import type { ReactNode } from 'react';
import {
    TextInput,
    View,
    StyleSheet,
    Platform,
    type StyleProp,
    type TextInputProps,
    type TextStyle,
    type ViewStyle,
    TouchableOpacity,
} from 'react-native';
import * as Yup from 'yup'
import { Formik } from 'formik'

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Email is required")
});
export type AuthInputProps = Omit<TextInputProps, 'style' | 'onChangeText'> & {
    /** Background of the outer wrapper */
    fillColor?: string;
    borderRadius?: number;
    borderColor?: string;
    borderWidth?: number;
    /** Outer row: height, padding, layout */
    height?: number;
    paddingHorizontal?: number;
    paddingVertical?: number;
    gap?: number;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    leftIconContainerStyle?: StyleProp<ViewStyle>;
    rightIconContainerStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    /** Alias for `placeholder` */
    hint?: string;
    /** Alias for `onChangeText` */
    onChange?: TextInputProps['onChangeText'];
    onChangeText?: TextInputProps['onChangeText'];
};

const CustomTextInput = ({
    hint,
    fillColor = '#fff',
    borderRadius = 10,
    borderColor = '#ccc',
    borderWidth = 1,
    height = 55,
    paddingHorizontal = 15,
    paddingVertical = 0,
    gap = 10,
    leftIcon,
    rightIcon,
    leftIconContainerStyle,
    rightIconContainerStyle,
    inputStyle,
    containerStyle,
    placeholder,
    placeholderTextColor = '#999',
    onChange,
    onChangeText,
    editable = true,
    multiline = false,
    ...textInputProps
}: AuthInputProps) => {
    const {
        secureTextEntry: secureTextEntryFromProps,
        value: valueFromProps,
        defaultValue,
        ...restTextInputProps
    } = textInputProps;

    const [isObscured, setIsObscured] = useState(
        () => Boolean(secureTextEntryFromProps),
    );

    /** RN often clears the native buffer when `secureTextEntry` flips on an uncontrolled field. */
    const isControlled = valueFromProps !== undefined;
    const [internalText, setInternalText] = useState(
        () =>
            defaultValue !== undefined && defaultValue !== null
                ? String(defaultValue)
                : '',
    );

    const resolvedPlaceholder = placeholder ?? hint;
    const resolvedOnChangeText = onChangeText ?? onChange;
    const secureTextEntry =
        Boolean(secureTextEntryFromProps) && isObscured;

    const textValue = isControlled
        ? String(valueFromProps ?? '')
        : internalText;

    const handleChangeText = (text: string) => {
        if (!isControlled) {
            setInternalText(text);
        }
        resolvedOnChangeText?.(text);
    };

    const toggleObscure = () => {
        if (secureTextEntryFromProps) {
            setIsObscured(prev => !prev);
        }
    };

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: fillColor,
                    borderRadius,
                    borderColor,
                    borderWidth,
                    height: multiline ? undefined : height,
                    minHeight: multiline ? height : undefined,
                    paddingHorizontal,
                    paddingVertical,
                    gap,
                },
                multiline && styles.containerMultiline,
                !editable && styles.disabled,
                containerStyle,
            ]}
        >
            {leftIcon != null ? (
                <View style={[styles.iconSlot, leftIconContainerStyle]}>{leftIcon}</View>
            ) : null}

            <TextInput
                editable={editable}
                multiline={multiline}
                placeholder={resolvedPlaceholder}
                placeholderTextColor={placeholderTextColor}
                value={textValue}
                onChangeText={handleChangeText}
                secureTextEntry={secureTextEntry}
                style={[styles.input, multiline && styles.inputMultiline, inputStyle]}
                {...restTextInputProps}
            />

            {rightIcon != null ? (
                <TouchableOpacity
                    onPress={toggleObscure}
                    disabled={!secureTextEntryFromProps}
                    accessibilityRole="button"
                >
                    <View style={[styles.iconSlot, rightIconContainerStyle]}>{rightIcon}</View>
                </TouchableOpacity>
            ) : null}

        </View>
    );
};

export default CustomTextInput;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    disabled: {
        opacity: 0.6,
    },
    containerMultiline: {
        alignItems: 'flex-start',
    },
    iconSlot: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 0,
        margin: 0,
    },
    inputMultiline: {
        alignSelf: 'stretch',
        minHeight: 80,
        textAlignVertical: 'top',
        paddingTop: 8,
        paddingBottom: 8,
    },
});

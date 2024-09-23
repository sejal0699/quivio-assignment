import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  TextInput, 
  Image, 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  Animated 
} from 'react-native';

const CustomTextInput = ({ 
  value, 
  onChangeText, 
  placeholder, 
  iconSource, 
  rightIconSource, 
  secureTextEntry: initialSecureTextEntry, 
  onRightIconPress, 
  error 
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(initialSecureTextEntry);
  const [rightIcon, setRightIcon] = useState(rightIconSource);
  const [isFocused, setIsFocused] = useState(false);

  const labelPosition = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(labelPosition, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false, // Removed the native driver
    }).start();
  }, [isFocused, value]);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
    const newIcon = secureTextEntry
      ? require('../assets/images/eye-off.png')
      : require('../assets/images/eye.png');
    setRightIcon(newIcon);

    if (onRightIconPress) {
      onRightIconPress();
    }
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const labelStyle = {
    position: 'absolute',
    left: iconSource ? 36 : 12,
    top: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, -18], // Move the label up
    }),
    fontSize: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12], // Decrease the label size
    }),
    color: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: ['#aaa', '#000'], // Change color when focused
    }),
  };

  return (
    <View style={styles.inputContainer}>
      <View style={[styles.inputWrapper, error ? styles.inputWrapperError : null]}>
        {iconSource && (
          <Image source={iconSource} style={[styles.leftIcon, error ? styles.errorImage : null]} />
        )}
        <Animated.Text style={labelStyle}>
          {placeholder}
        </Animated.Text>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={secureTextEntry}
          style={styles.input}

        />
        {rightIcon && (
          <TouchableOpacity onPress={toggleSecureTextEntry}>
            <Image source={rightIcon} style={styles.rightIcon} />
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#fff',
    position: 'relative',
  },
  inputWrapperError: {
    borderColor: 'red',
  },
  leftIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  rightIcon: {
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 5,
    
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
  errorImage: {
    tintColor: 'red',
  },
});

export default CustomTextInput;

import { useRef } from "react";
import { Animated, Easing } from "react-native";

const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(-100)).current;

  const fadeIn = ({
    duration = 300,
    toValue = 1,
    useNativeDriver = true,
    easing = Easing.linear,
    callback = () => {},
  }) => {
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver,
      easing,
    }).start(callback);
  };

  const fadeOut = ({
    duration = 300,
    toValue = 0,
    useNativeDriver = true,
    easing = Easing.ease,
    callback = () => {},
  }) => {
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver,
      easing,
      // }).start(() => animatedTop.setValue(-100)); // Option 1
      // }).start(() => animatedTop.resetAnimation()); // Option 2
    }).start(callback); // Option 2

    // Option 3
    // Animated.timing(animatedTop, {
    //   toValue: -100,
    //   duration: 700,
    //   useNativeDriver: true,
    // }).start();
  };

  const startMovingTopPosition = ({
    initialPosition = -100,
    duration = 700,
    toValue = 0,
    useNativeDriver = true,
    easing = Easing.linear,
    callback = () => {},
  }) => {
    animatedTop.setValue(initialPosition);

    Animated.timing(animatedTop, {
      toValue,
      duration,
      useNativeDriver,
      easing, // Es el efecto default
      // easing: Easing.elastic(1), // Efecto
      //   easing: Easing.bounce,
    }).start(callback);
  };

  return {
    animatedOpacity,
    animatedTop,

    // Methods
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  };
};

export default useAnimation;

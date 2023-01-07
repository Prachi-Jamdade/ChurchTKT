/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';

const {width} = Dimensions.get('window');
const boxWidth = width * 0.92;
const height = (width * 100) / 40;

const Btn = ({navigation}) => {
  const lottieRef = useRef(null);
  const [lodding, setLodding] = useState(true);

  useEffect(() => {
    if (lottieRef.current) {
      setTimeout(() => {
        lottieRef.current?.reset();
        lottieRef.current?.play();
      }, 100);
    }
  }, [lottieRef]);

  return (
    <View
      style={{
        height: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <LottieView
        ref={lottieRef}
        autoplay
        loop
        source={require('../assests/btn_load.json')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#0F1013'},
});

export {styles};
export default Btn;

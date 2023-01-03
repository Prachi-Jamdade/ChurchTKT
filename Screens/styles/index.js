import {StyleSheet, Dimensions} from 'react-native';

import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const {width} = Dimensions.get('window');
const height = (width * 100) / 70;

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: 'black'},
  container: {marginTop: 0},
  header: {
    marginTop: RFValue(30),
    color: 'white',
    marginHorizontal: RFValue(16),
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(18),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: RFValue(5),
  },
  nav: {
    marginTop: RFValue(30),
    marginHorizontal: RFValue(6),
    marginBottom: RFValue(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  nav_image: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    marginStart: RFValue(12),
  },
  nav_header: {
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: RFValue(20),
    marginLeft: 5,
  },
  bg: {
    backgroundColor: '#1E1E1E',
    paddingTop: RFValue(10),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: RFValue(20),
  },
  bottomButtons: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginHorizontal: RFValue(16),
  },
  btn2: {
    backgroundColor: '#0F1013',
    marginTop: RFValue(10),
    borderRadius: 10,
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(10),
    borderWidth: 1,
    borderColor: '#fff',
    width: width * 0.92,
  },
  btn1: {
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(10),
    backgroundColor: '#F79D16',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#fff',
    width: width * 0.92,
  },
  btn_abs: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    marginTop: RFValue(10),
    marginBottom: RFValue(20),
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(12),
    backgroundColor: '#FFBE18',
    borderRadius: RFValue(8),
    borderWidth: 1,
    width: width * 0.92,
    marginHorizontal: RFValue(16),
  },
  submitText: {
    fontSize: RFValue(15),
    textTransform: 'uppercase',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: 1,
  },
});

export default styles;

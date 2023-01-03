import React, {useContext} from 'react';
import {Text} from 'react-native';
import {AppContext} from '../../context';

const Launch = ({navigation, route}) => {
  const {isUserLogin} = useContext(AppContext);
  const isLogin = route?.params?.isLogin;
  // console.log(isUserLogin,isLogin)
  const isLoginUser = isUserLogin || isLogin;

  return (
    <>
      {isLoginUser
        ? navigation.navigate('BottomTabs')
        : navigation.navigate('Onboarding')}
    </>
  );
};

export default Launch;

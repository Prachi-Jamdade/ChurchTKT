import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PushNotification } from 'react-native';
export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();

  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    PushNotification.configure({
        largeIcon: "ic_launcher",
        smallIcon: "ic_stat_name",
      }) 
  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken()
  }
}
const getFcmToken = async() =>{
    let fcmToken = await AsyncStorage.getItem('fcmToken')
    console.log('Old Token', fcmToken);
    if(!fcmToken) {
        try{
            const fcmToken = await messaging().getToken()
            if(fcmToken){
                console.log('New Token', fcmToken)
                await AsyncStorage.setItem('fcmToken',fcmToken)
            }
        }catch(e){
            console.log('Error in get Token', e)
        }
    }
}

export const notificationListener = async() =>{

    //Background notification
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
        // navigation.navigate(remoteMessage.data.type);
      });


    //Foreground notification
    messaging().onMessage(async remoteMessage =>{
        console.log('remote message in foreground state:', remoteMessage)
    })


          // Check whether an initial notification is available(app killed state)
    messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
        // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
      }
    //   setLoading(false);
    });
  
}
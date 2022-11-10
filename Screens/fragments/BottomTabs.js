import React, { useRef } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon, {Icons} from './Icons';
import * as Animatable from 'react-native-animatable';

import Home from './Home';
import Explore from './Explore';
import Community from './Community';
import Profile from './Profile';

const TabArr = [
    { route: 'Home', label: 'Home', type: Icons.Ionicons, activeIcon:'home', inActiveIcon:'home-outline', component: Home },
    { route: 'Explore', label: 'Explore', type: Icons.MaterialCommunityIcons, activeIcon: 'home', inActiveIcon: 'home-outline', component: Explore },
    { route: 'Community', label: 'Community', type: Icons.MaterialCommunityIcons, activeIcon: 'home', inActiveIcon: 'home-outline', component: Community },
    { route: 'Profile', label: 'Profile', type: Icons.FontAwesome, activeIcon: 'user-circle', inActiveIcon: 'user-circle-o', component: Profile },
  ];

const Tab = createBottomTabNavigator();




class BottomTabs extends React.Component{

    state ={
        viewRef : '',
    }

    constructor(props){
        super(props);
        this.viewRef = React.createRef();
    }

    TabButton = (props) => {
        const { item, onPress, accessibilityState } = props;
        const focused = accessibilityState.selected;
        // const viewRef =useRef(null);
        // useEffect(() => {
        //   if (focused) {
        //     this.viewRef.current.animate({0: {scale: .5, rotate: '0deg'}, 1: {scale: 1.5, rotate: '360deg'}});
        //   } else {
        //     this.viewRef.current.animate({0: {scale: 1.5, rotate: '360deg'}, 1: {scale: 1, rotate: '0deg'}});
        //   }
        // }, [focused])
      
        return (
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={styles.container}>
            <Animatable.View
            //   ref={viewRef}
              duration={1000}
              style={styles.container}>
              <Icon type={item.type} name={focused ? item.activeIcon : item.inActiveIcon}/>
            </Animatable.View>
          </TouchableOpacity>
        );
    }

    render(){
        return (
            <Tab.Navigator
              screenOptions={{
                headerShown: false,
                tabBarStyle: {
                  height: 60,
                  position: 'absolute',
                  bottom: 16,
                  right: 16,
                  left: 16,
                  borderRadius: 16
                }
              }}
            >
              {TabArr.map((item, index) => {
                return (
                  <Tab.Screen key={index} name={item.route} component={item.component}
                    options={{
                      tabBarLabel : item.label,
                      tabBarShowLabel: true,
                      tabBarInactiveBackgroundColor: 'black',
                      tabBarIcon: ({focused, color, size}) => (
                        <Image
                          source={
                            focused
                              ? require('../assests/icons/homeActive.png')
                              : require('../assests/icons/homeInactive.png')
                          }
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: size,
                          }}
                        />
                      ),
                      tabBarButton: (props) => <this.TabButton {...props} item={item} />
                    }}
                  />
                )
              })}
            </Tab.Navigator>
          )
    }
}


export default BottomTabs;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
});


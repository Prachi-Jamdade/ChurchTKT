import React, { useRef } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    TouchableHighlight,
    Dimensions
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon, {Icons} from './Icons';
import * as Animatable from 'react-native-animatable';



import Home from './Home';
import Explore from './Explore';
import Community from '../Community';
import Profile from './profile/Profile';
const TabArr = [
    { route: 'Home', label: 'Home', type: Icons.MaterialIcons, name:"home-filled", component: Home },
    { route: 'Explore', label: 'Explore', type: Icons.MaterialIcons, name:"language", component: Explore },
    { route: 'Community', label: 'Community', type: Icons.MaterialIcons, name:"groups", component: Community },
    { route: 'Profile', label: 'Profile', type: Icons.MaterialIcons, name:"person", component: Profile },
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
            {/* <Animatable.View
            //   ref={viewRef}
              duration={1000}
              style={styles.container}>
              <Icon type={item.type} name={focused ? item.activeIcon : item.inActiveIcon}/>
            </Animatable.View> */}
          </TouchableOpacity>
        );
    }

    render(){
        return (
            <Tab.Navigator
              initialRouteName='Home'
              screenOptions={{
                headerShown: false,
                tabBarStyle: styles.bar
              }}
            >
              {TabArr.map((item, index) => {
                console.log("Route", item.route)
                return (
                  <Tab.Screen key={index} name={item.route} component={item.component}
                    options={{
                      tabBarLabel : item.label,
                      tabBarActiveTintColor: '#FFBE18',
                      tabBarShowLabel: true,
                      tabBarInactiveBackgroundColor: 'black',
                      tabBarIcon: ({focused, color, size}) => (
                        <Icon
                        type={item.type} 
                        name={item.name}
                        size ={30}
                        style={
                          focused
                            ? styles.activeIcon
                            : styles.Icon
                        }
                        />
                      )
                    }}
                  />
                )
              })}
            </Tab.Navigator>
          )
    }
}


export default BottomTabs;

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    activeIcon:{
      color:"#FFBE18",
      backgroundColor:'#2e2d2b',
      padding:10,
      paddingTop:7,
      borderRadius:5,
    },
    bar:{
      height: 75,
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      paddingTop:12,
      width,
      backgroundColor: 'black'
    }
});


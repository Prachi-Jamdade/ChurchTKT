import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    Text,
    ScrollView,
    TouchableHighlight,
    ImageBackground,
    Button,
} from 'react-native';

import img1 from '../assests/onboardScreen1.png';
import img2 from '../assests/onboardScreen2.png';
import img3 from '../assests/onboardScreen3.png';
import overlay from '../assests/blackOverlay.png';


const {width} = Dimensions.get('window');
const height = width * 100 / 70;

const images = [img1,img3,img2];
const infos = ['Connect to the divinity of the almighty lord.','A helping hand in the darkness of life.','A community of people who care for you.'];




class Onboarding extends React.Component{

    state = {
      active : 0,
    }

    change = ({nativeEvent}) => {
      const slide = nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width;
      if (slide !== this.state.active ){
        this.setState({active: slide});
      }
    }

    render(){
        return (
            <View style={styles.main}>

              <View style = {styles.container}>
                <ScrollView
                  pagingEnabled
                  horizontal
                  onScroll={this.change}
                  showsHorizontalScrollIndicator = {false}
                  style = {styles.scrollView}
                >
                  {
                    images.map((image, index) => (
                      <Image
                      key={index}
                      source = {image}
                      style = {styles.images} />
                    ))
                  }
                </ScrollView>

                <View style = {styles.pagination}>
                  {
                    images.map((i,k) => (
                    <Text key={k} style={ k === this.state.active ? styles.pagingActive :  styles.pagingText}>●</Text>
                    ))
                  }
                </View>
              </View>
              <View>
                {
                  <Text style = {styles.text}>{infos[this.state.active]}</Text>
                }
              </View>
              <View style = {styles.bottomButtons}>
              <TouchableHighlight
                style={styles.joinusButton}
                // onPress={() => this.submitSuggestion(this.props)}
                underlayColor='#fff'>
                  <Text style={[styles.submitText]}>Join Us</Text>
              </TouchableHighlight>
              <View>
                <Text style = {styles.or}>----------- or -----------</Text>
              </View>
              <TouchableHighlight
                style={styles.loginButton}
                underlayColor='#fff'>
                  <Text style={[styles.submitText]}>Login</Text>
              </TouchableHighlight>
              </View>
          </View>
        );
    }

}

const styles = StyleSheet.create({
    main : {flex: 1, backgroundColor:'#0F1013'},
    container: {marginTop: 0, width, height},
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    scrollView :{width, height},
    images: {width,height,resizeMode: 'cover'},
    pagination : {flexDirection : 'row', position: 'absolute', bottom:0, alignSelf: 'center' },
    pagingText : {fontSize: (width / 30) , color: '#888' , margin: 3},
    pagingActive : {fontSize: (width / 30) , color: '#FFBE18', margin: 3},
    text : {fontSize: (width / 25) , color : 'white',alignSelf : 'center', marginTop: 6, marginHorizontal: 16},
    contentContainer: {flex: 1},
    or : {alignSelf: 'center', color: '#888'},
    bottomButtons : { flex: 1, flexDirection: "column", justifyContent: "space-around", marginHorizontal: 16},
    joinusButton : {
      marginHorizontal: 16,
      marginTop: 10,
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: '#FFBE18',
      borderRadius: 10,
      borderWidth: 1,
    },
    loginButton: {
      marginHorizontal: 16,
      marginTop: 10,
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: '#0F1013',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
    },
    submitText: {
      color: '#fff',
      textAlign: 'center',
    }
  });


export default Onboarding;

import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import {Linking} from 'react-native';
import {Image} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import ImageBackUp from '../../assests/icons/back.png';
import Sermons1 from '../../assests/sermons1.png';
import Sermons2 from '../../assests/sermons2.png';
import Sermons3 from '../../assests/sermons3.png';
import Sermons4 from '../../assests/sermons4.png';
import EventIcons1 from '../../assests/icons/eventsIcon1.png';
import EventIcons2 from '../../assests/icons/eventsIcon2.png';
import EventIcons3 from '../../assests/icons/eventsIcon3.png';
import EventIcons4 from '../../assests/icons/eventsIcon4.png';
import gobalStyle from '../../styles/index';
import {RFValue} from 'react-native-responsive-fontsize';

const Icons = [
  {
    src: EventIcons1,
    navigate:
      'https://www.podbean.com/podcast-detail/86mis-88de3/Samuel-Patta-Ministries-Podcast',
  },
  {
    src: EventIcons2,
    navigate:
      'https://podcasts.apple.com/in/podcast/the-kings-temple/id1455337048',
  },
  {
    src: EventIcons3,
    navigate:
      'https://open.spotify.com/episode/02DJY9YFCDFouWajiwxeMw?si=nsqXQ_wJQ4SpCSt5FrW88g',
  },
  {
    src: EventIcons4,
    navigate:
      'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9hZjNhYmQ4L3BvZGNhc3QvcnNz?ep=14',
  },
];

const Events = ({navigation}) => {
  return (
    <SafeAreaView
      style={{height: '100%', width: '100%', backgroundColor: '#000'}}>
      <TouchableOpacity
        style={gobalStyle.nav}
        // provide navigate path
        onPress={() => navigation.navigate('Explore')}>
        <Image source={ImageBackUp} style={gobalStyle.nav_image} />
        <Text style={gobalStyle.nav_header}>Sermons</Text>
      </TouchableOpacity>

      <ScrollView style={styles.card}>
        <Text style={styles.separatingText}>Watch us live on</Text>
        <ImageElement
          source={Sermons1}
          stretch={false}
          title="Every Thursday 9 PM"
          content="Tune into our only English brodcast on GOD TV every thursday at 9 PM"
        />
        <ImageElement
          source={Sermons2}
          title="Daily 4 PM"
          content="Tune into our only Telugu brodcast on Aradana TV everyday at 4 PM except monday and friday at 6 PM"
        />
        <ImageElement
          source={Sermons3}
          title="Mon - Friday 6 PM"
          content="Tune into our Telugu brodcast on Subhavaartha TV everyday at 6 PM"
        />
        <ImageElement
          source={Sermons4}
          title="Thursday 9 PM"
          content="Tune into our only Telugu brodcast on Subhsanesh TV Thursday at 9 PM"
        />
        <Text style={styles.separatingText}>Follow our Podcast on</Text>

        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingTop: RFValue(6),
            paddingHorizontal: RFValue(12),
          }}>
          {Icons.map(value => (
            <Image
              source={value.src}
              style={{
                height: RFValue(30),
                width: RFValue(30),
                borderRadius: RFValue(999),
                marginRight: RFValue(15),
              }}
              onPress={() => Linking.openURL(value.navigate)}
            />
          ))}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

function ImageElement({source, stretch = true, title, content}) {
  return (
    <SafeAreaView
      style={{
        width: '100%',
        marginTop: RFValue(4),
        padding: RFValue(3),
        marginBottom: RFValue(4),
        borderRadius: 14,
        flexDirection: 'row',
      }}>
      <Image
        source={source}
        style={{
          flex: 1,
          width: RFValue(80),
          height: RFValue(95),
          resizeMode: 'contain',
          padding: RFValue(1),
        }}
      />

      <SafeAreaView
        style={{
          flexDirection: 'column',
          padding: RFValue(4),
          flexGrow: 1,
          flex: 1,
        }}>
        <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            color: 'white',
            marginStart: RFValue(4),
            marginBottom: RFValue(10),
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontFamily: 'Montserrat-Medium',
            color: 'white',
            marginStart: RFValue(4),
          }}>
          {content}
        </Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    flex: 10,
    backgroundColor: '#1E1E1E',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    paddingHorizontal: RFValue(14),
  },
  input: {
    height: RFValue(50),
    marginTop: RFValue(12),
    padding: RFValue(10),
    width: '100%',
    color: 'white',
    fontSize: RFValue(14),
    borderColor: '#989898',
    borderWidth: 1,
    borderRadius: 10,
  },
  separatingText: {
    fontFamily: 'Montserrat-SemiBold',
    color: 'white',
    fontSize: RFValue(16),
    marginStart: RFValue(12),
    marginTop: RFValue(20),
    marginBottom: RFValue(10),
  },
});

export default Events;

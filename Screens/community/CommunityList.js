import React from 'react';
import {
  Text,
  ScrollView,
  Image,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';
import {styles} from '.';
import Icon, {Icons} from '../fragments/Icons';
import gobalStyle from '../styles/index';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {RFValue} from 'react-native-responsive-fontsize';

const CommunityList = ({navigation, data, setIndex}) => {
  return (
    <SafeAreaView style={gobalStyle.main}>
      <Text style={gobalStyle.header}>Community</Text>
      <SafeAreaView style={styles.box}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <SafeAreaView style={styles.list}>
            {data.map((value, index) => {
              return (
                <CommunityCard
                  key={index}
                  index={index}
                  setIndex={setIndex}
                  navigation={navigation}
                  {...value}
                />
              );
            })}
          </SafeAreaView>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const CommunityCard = ({
  navigation,
  image,
  title,
  description,
  about,
  index,
  setIndex,
}) => {
  const options = {
    ignoreAndroidSystemSettings: true,
  };

  return (
    <TouchableHighlight
      onPress={() => {
        ReactNativeHapticFeedback.trigger('notificationSuccess', options);
        setIndex(index);
      }}>
      <SafeAreaView style={styles.cardBox}>
        <Image source={image[0]} style={styles.cardImage} />
        <SafeAreaView style={styles.cardTextBox}>
          {/* <Text style= {styles.cardTextBoxheader}>{title}</Text> */}
          <SafeAreaView style={styles.cardTextBoxDescription}>
            {/* <Text  style={styles.cardBoxDescriptionText}>{description}</Text> */}
            <Icon
              type={Icons.AntDesign}
              size={RFValue(25)}
              name="rightcircleo"
              color="white"
              style={{marginBottom: RFValue(5)}}
            />
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
    </TouchableHighlight>
  );
};

export default CommunityList;

import React,{useEffect,useState,useContext} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    TouchableHighlight,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { Button, Image } from 'react-native-elements';
import ImageBackUp from '../../assests/icons/back.png';
import ImageFreame2 from '../../assests/frame2.png';
import {Icons} from '../Icons';
import gobalStyle from '../../styles/index';
import JoinSPM from './JoinSPM';
import {getSPMFrom} from '../../api/requestForms';

import {AppContext} from '../../../context';
import { RFValue } from 'react-native-responsive-fontsize';


const Offerings =({navigation,route})=>{

    const [isJoin,setIsJoin]=useState(null);
    const {user}=useContext(AppContext);

    useEffect(()=>{
        getSPMFrom(user.userId).then((e)=>{
            // console.log(e);
            setIsJoin(null);
            if(e.status==200){
                setIsJoin(true);
                setIsJoin("JOINED");
            }else{
                setIsJoin("JOIN SPM");
            }
        }).catch((e)=>{
            console.log(e);
            setIsJoin("JOIN SPM");
        })
    },[user.userId,route])


        return (
            <SafeAreaView style={{height: '100%', width: '100%', backgroundColor: '#000'}}>


            <TouchableOpacity
            style={gobalStyle.nav}
                // provide navigate path
                    onPress={() => navigation.navigate('Explore')}
                >
                <Image source={ImageBackUp} style={gobalStyle.nav_image} />
                <Text style={gobalStyle.nav_header}>SPM</Text>
            </TouchableOpacity>

            <ScrollView 
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={styles.card}
                contentContainerStyle={{  alignItems: 'center' }}
                >

                <SafeAreaView style={[{flexDirection: 'column'},styles.fullW]}>
                        <ImageElement source={ImageFreame2} />
                        <Button buttonStyle={{
                            backgroundColor: '#FFA318',
                            borderRadius: 12,
                            width:'100%',
                            borderTopRightRadius:0,
                            borderTopLeftRadius:0,
                        }}
                        titleStyle= {{
                            letterSpacing: 2,
                            fontFamily: "Montserrat-Medium"
                        }}
                        title={isJoin==null?"JOIN SPM":isJoin}
                        onPress={() => {
                            if(isJoin==null || isJoin=="JOINED") return;
                            navigation.navigate('JoinSPM')
                        }
                        } />
                </SafeAreaView>
                <Text style= {styles.DescriptionText}>
                Partnering with samuel patta ministries is a powerful way to expand the reach and impact of the King's Temple Church. No matter how you choose to give, your support is invaluable in helping the ministry to achieve its goals and make a positive impact in the world. 
                </Text>
                <Text style= {styles.DescriptionText}>
                So, if you are considering partner with us, know that your support is greatly appreciated and will make a real difference in the lives of others. By giving generously and faithfully, you can help to advance the work of the church and bring more people into a relationship with Christ.
                </Text>
                <TouchableHighlight
                        onPress={() => navigation.navigate('SpmOffErings')}
                    >
                <SafeAreaView style={[{flexDirection: 'column',backgroundColor: '#4FF491',marginTop:RFValue(10),borderRadius: RFValue(12)},styles.fullW]}>
                        <SafeAreaView style={[
                            {flexDirection: 'row',alignItems:'center',paddingVertical:RFValue(20),
                            justifyContent:'center',
                        }]}>

                                <Icons.FontAwesome5 name="hand-holding-heart" color="white" size={40} />

                        </SafeAreaView>
                        
                            <Button buttonStyle={{
                                backgroundColor: '#034A2B',
                                borderRadius: RFValue(12),
                                width:'100%',
                                borderTopRightRadius:0,
                                borderTopLeftRadius:0,
                            }}
                            titleStyle= {{
                                letterSpacing: 2,
                                fontFamily: 'Montserrat-Medium'
                            }}
                            title="Give" />
                </SafeAreaView>
                </TouchableHighlight>
            </ScrollView>
            </SafeAreaView>
        );
}

function ImageElement({source, stretch = true}) {
    return <SafeAreaView style={[{
        backgroundColor: '#000',
        marginTop: RFValue(16),
        height: RFValue(140),
        borderRadius: RFValue(14),
    },styles.fullW]}>
        <Image source={source} style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: stretch ? 'cover' : 'contain',
                    borderRadius: RFValue(14),
                    borderBottomLeftRadius:0,
                    borderBottomRightRadius:0,
                }} />
        </SafeAreaView>;
}


const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    card: {
        flex: 10,
        width: width,
        backgroundColor: '#1E1E1E',
        borderTopRightRadius: RFValue(20),
        borderTopLeftRadius: RFValue(20),
        paddingTop: RFValue(2),
        flexDirection:'column',
    },
    fullW:{
        width: (width * 0.9),
    },
    input: {
        height: RFValue(50),
        marginTop: RFValue(12),
        padding: RFValue(10),
        width: '100%',
        color: 'white',
        fontSize: RFValue(16),
        borderColor: '#989898',
        borderWidth: RFValue(1),
        borderRadius: RFValue(10),
    },
    DescriptionText:{
        color: 'white',
        width: width * 0.9,
        marginVertical:RFValue(10),
        fontFamily: 'Montserrat-Medium'
    },

});

export default Offerings;

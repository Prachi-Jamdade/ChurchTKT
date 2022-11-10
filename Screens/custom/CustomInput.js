import Icon from 'react-native-vector-icons/FontAwesome';
// import * as FeatherIcon from "react-native-feather";
import { Input } from 'react-native-elements';
import React from 'react'


const CustomInput = (props) => {

    return (

        <Input
            // errorStyle={{borderColor:'red'}}
            editable={props.editable}
            errorStyle={{ color: 'red' }}
            errorMessage={props.errorMessage}
            style={{ borderColor: props.errorMessage ? '#FF0000' : '#9099AB', fontSize: 15, fontFamily: 'Poppins-Medium' ,}}
            // containerStyle={{width:300,}}
            inputContainerStyle={{ width: 300, borderColor: props.errorMessage ? '#FF0000' : '#9099AB', ...props.inputContainerStyle, alignSelf: 'center' }}
            keyboardType={props.keyboardType}
            secureTextEntry={props.secureTextEntry}
            placeholder={props.placeHolder}
            maxLength={props.maxLength}

            inputStyle={{ fontSize: 15, color: '#172B4D' }}
            // labelProps={{fontSize:30}}
            labelStyle={{ fontSize: 26, fontFamily: 'Poppins-Bold' }}
            multiline={props.multiline}
            value={props.value}
            numberOfLines={props.numberOfLines}
            onChangeText={props.onChangeText}
            placeholderTextColor={'#9099AB'}
            leftIconContainerStyle={{ paddingHorizontal: 5 }}
            leftIcon={
                <Icon
                    name={props.iconName}
                    size={20}
                    // style={{fontWeight:20}}
                    color={props.editable ==


                        false ? 'grey' : '#9099AB'}

                />

            }
            rightIcon={

                <Icon
                    name={props.rightIconName}
                    size={20}
                    style={{ fontWeight: '900',paddingRight:5 }}
                    color='#9099AB'
                    onPress={props.rightIconPress}
                />


            }
        />

    );


}
export default CustomInput;
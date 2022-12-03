import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,TextInput,Dimensions} from 'react-native';
import {styles} from '../profile/AccountDetails'

const {width} = Dimensions.get('window');
const UselessTextInput = (props) => {
    return (
        <TextInput
            style={[styles.input,{width:(width*0.92)}]}
            {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable
            maxLength={40}
        />
    );
}

const RequestFormDetail = ({autoCompleteValue, placeholderName, iconLeft = null}) => {



    return (
        <View>

            <View
                style={{
                    borderBottomColor: '#000000',
                    borderBottomWidth: 0.5,
                }}>
                <UselessTextInput
                    multiline
                    numberOfLines={1}
                    autoComplete={autoCompleteValue}
                    placeholder={placeholderName}
                    inlineImageLeft={iconLeft}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    placeholderTextColor = "#808080"
                   
                />
            </View>
        </View>
    )
}

export default RequestFormDetail;
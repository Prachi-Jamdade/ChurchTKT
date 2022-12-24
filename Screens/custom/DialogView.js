import React from "react";
import { View, Text } from "react-native-animatable";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import gobalStyle from '../styles/index.js';
import Icon, {Icons} from '../fragments/Icons';

const DialogView = ({status, description}) => {
    return(
        <SafeAreaView
            style={[gobalStyle.btn_abs, {backgroundColor:status=='success' ? '#339033' : '#C22626', marginBottom: RFValue(93)}]}
        >
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Icon type={status=='success' ? Icons.AntDesign : Icons.MaterialIcons} 
                    name={status=='success' ? 'checkcircleo' : 'error-outline'}
                    size={25}
                    style={{color:'white', padding:RFValue(3), marginEnd: RFValue(3)}} />
                <Text style={[gobalStyle.submitText, {fontSize: RFValue(13), textTransform: null,}]}>{description}</Text>
            </View>
        </SafeAreaView>
    )
}

export default DialogView;
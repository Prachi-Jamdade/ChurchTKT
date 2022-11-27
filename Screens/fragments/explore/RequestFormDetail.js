import React from 'react';

const UselessTextInput = (props) => {
    return (
        <TextInput
            {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable
            maxLength={40}
        />
    );
}

const RequestFormDetail = ({autoCompleteValue, placeholderName, iconLeft = null}) => {

    const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

    return (
        <View>

            <View
                style={{
                    backgroundColor: value,
                    borderBottomColor: '#000000',
                    borderBottomWidth: 1,
                }}>
                <UselessTextInput
                    multiline
                    numberOfLines={1}
                    autoComplete={autoCompleteValue}
                    placeholder={placeholderName}
                    inlineImageLeft={iconLeft}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    style={{ padding: 10 }}
                />
            </View>
        </View>
    )
}

export default RequestFormDetail;
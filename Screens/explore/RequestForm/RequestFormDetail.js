/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {styles} from '../../profile/AccountDetails';
import DatePicker from 'react-native-date-picker';
import Icon, {Icons} from '../../fragments/Icons';

const {width} = Dimensions.get('window');
const UselessTextInput = props => {
  const {value, setValue, name, autoCompleteValue, placeholderName} = props;
  return (
    <TextInput
      style={[styles.input, {width: width * 0.92}]}
      editable
      multiline
      maxLength={40}
      numberOfLines={1}
      autoComplete={autoCompleteValue}
      placeholder={placeholderName}
      placeholderTextColor="#808080"
      onChangeText={text => {
        setValue(name, text);
      }}
      value={value}
    />
  );
};
const UselessNumberInput = props => {
  const {value, setValue, name, autoCompleteValue, placeholderName} = props;
  return (
    <TextInput
      style={[styles.input, {width: width * 0.92}]}
      editable
      multiline
      numberOfLines={1}
      autoComplete={autoCompleteValue}
      placeholder={placeholderName}
      placeholderTextColor="#808080"
      maxLength={10}
      keyboardType="number-pad"
      onChangeText={text => {
        setValue(name, text);
      }}
      value={value}
    />
  );
};

const UselessDateInput = props => {
  const {value, setValue, name} = props;
  const [open, setOpen] = useState(false);

  function getDate(date) {
    const year = date.getFullYear();
    const m = date.getMonth() + 1;
    const month = m < 10 ? `0${m}` : m;

    const d = date.getDate();
    const day = d < 10 ? `0${d}` : d;

    return `${year}-${month}-${day}`;
  }

  return (
    <SafeAreaView>
      <SafeAreaView
        style={[
          styles.input,
          {
            flexDirection: 'row',
            width: width * 0.92,
            alignItems: 'center',
          },
        ]}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: width * 0.8,
          }}
          onPress={() => setOpen(!open)}>
          <Icon
            type={Icons.MaterialIcons}
            name="date-range"
            size={20}
            color="white"
            style={{opacity: 0.5}}
          />
          {value ? (
            <Text style={{color: 'white', opacity: 1, marginLeft: 5}}>
              {value}
            </Text>
          ) : (
            <Text style={{color: 'white', opacity: 0.5, marginLeft: 5}}>
              {props.placeholderName}
            </Text>
          )}
        </TouchableOpacity>
        {value && (
          <TouchableOpacity onPress={() => setValue(name, '')}>
            <Icon
              type={Icons.Entypo}
              name="circle-with-cross"
              size={20}
              color="white"
              style={{opacity: 0.5}}
            />
          </TouchableOpacity>
        )}
      </SafeAreaView>

      <DatePicker
        modal
        mode="date"
        open={open}
        date={value ? new Date(value) : new Date()}
        onConfirm={date => {
          setOpen(false);
          setValue(name, getDate(date));
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </SafeAreaView>
  );
};

const UselessTimeInput = props => {
  const {value, setValue, name} = props;
  const [open, setOpen] = useState(false);
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <SafeAreaView
          style={[
            styles.input,
            {
              flexDirection: 'row',
              width: width * 0.92,
              alignItems: 'center',
            },
          ]}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: width * 0.8,
            }}
            onPress={() => setOpen(!open)}>
            <Icon
              type={Icons.Ionicons}
              name="time-outline"
              size={20}
              color="white"
              style={{opacity: 0.5}}
            />

            {value ? (
              <Text style={{color: 'white', opacity: 1, marginLeft: 5}}>
                {value}
              </Text>
            ) : (
              <Text style={{color: 'white', opacity: 0.5, marginLeft: 5}}>
                {props.placeholderName}
              </Text>
            )}
          </TouchableOpacity>
          {value && (
            <TouchableOpacity onPress={() => setValue(name, '')}>
              <Icon
                type={Icons.Entypo}
                name="circle-with-cross"
                size={20}
                color="white"
                style={{opacity: 0.5}}
              />
            </TouchableOpacity>
          )}
        </SafeAreaView>
      </TouchableOpacity>

      <DatePicker
        modal
        mode="time"
        open={open}
        date={new Date()}
        onConfirm={date => {
          setOpen(false);
          setValue(name, formatAMPM(date));
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </SafeAreaView>
  );
};

const RequestFormDetail = props => {
  return (
    <SafeAreaView>
      <SafeAreaView
        style={{
          borderBottomColor: '#000000',
          borderBottomWidth: 0.2,
        }}>
        {getInput(props)}
      </SafeAreaView>
    </SafeAreaView>
  );
};

const getInput = props => {
  const {type} = props;

  if (type === 'number') {
    return <UselessNumberInput {...props} />;
  }

  if (type === 'date') {
    return <UselessDateInput {...props} />;
  }

  if (type === 'time') {
    return <UselessTimeInput {...props} />;
  }

  return <UselessTextInput {...props} />;
};

export default RequestFormDetail;

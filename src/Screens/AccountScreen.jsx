import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {ScrollView} from 'react-native-virtualized-view';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {TextInput} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const AccountScreen = () => {
  const [gender, setGender] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [country, setCountry] = useState('');
  const [dob, setDob] = useState('');
  const [nameText, setNameText] = React.useState('');
  const [surnameText, setSurnameText] = React.useState('');
  const [phoneText, setPhoneText] = React.useState('');
  const [addressText, setAddressText] = React.useState('');
  const [postcodeText, setPostcodeText] = React.useState('');
  const [cityText, setCityText] = React.useState('');

  // Dropdown states
  const [openGender, setopenGender] = useState(false);
  const [openCountryCode, setopenCountryCode] = useState(false);
  const [active, setActive] = useState(0);

  // Gender dropdown states
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Other', value: 'other'},
  ]);

  // CountryCode Dropdown states
  const [valueCode, setValueCode] = useState(null);
  const [itemsCode, setItemsCode] = useState([
    {label: '+1', value: '+1'},
    {label: '+44', value: '+44'},
    {label: '+91', value: '+91'},
    {label: '+33', value: '+33'},
  ]);

  // Country Dropdown States
  const [openCountry, setOpenCountry] = useState(false);
  const [valueCountry, setValueCountry] = useState(null);
  const [itemsCountry, setItemsCountry] = useState([
    {label: 'USA', value: 'USA'},
    {label: 'UK', value: 'UK'},
    {label: 'INDIA', value: 'INDIA'},
    {label: 'CHINA', value: 'CHINA'},
  ]);

  // Date of Birth Picker states
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleDateConfirm = date => {
    setDob(date.toISOString().split('T')[0]);
    setDatePickerVisibility(false);
  };

  const handlePress = () => {
    console.log('Button Pressed');
  };

  return (
    <KeyboardAwareScrollView
      style={{flex: 1, backgroundColor: 'white'}}
      resetScrollToCoords={{x: 0, y: 0}}
      contentContainerStyle={{padding: 20}}
      scrollEnabled={true}>
      <View style={{alignItems: 'center'}}>
        {/* Profile Image */}
        <Image
          source={{uri: 'https://example.com/your-profile-image.jpg'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />

        {/* Name and Email */}
        <Text>Name: John Doe</Text>
        <Text>Email: john.doe@example.com</Text>
      </View>

      {/* Personal Details */}
      <Text>Personal Details</Text>
      {/* <TextInput
        placeholder="Name"
        style={{borderWidth: 1, marginVertical: 5, padding: 10}}
      /> */}

      <TextInput
        label="Email"
        value={nameText}
        onChangeText={text => setNameText(text)}
        mode="outlined"
        multiple={true}
        editable
        maxLength={100}
        numberOfLines={4} // Set the number of visible lines (adjust as needed)
        autoCorrect={false} // Disable auto-correction
        autoCapitalize="sentences" // Set auto-capitalization to sentences
        // style={{borderWidth: 1, marginVertical: 5, padding: 10}}
      />
      <TextInput
        label="Surname"
        value={surnameText}
        onChangeText={text => setSurnameText(text)}
        mode="outlined"
        // style={{borderWidth: 1, marginVertical: 5, padding: 10}}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 10,
        }}>
        {/* Gender Dropdown */}
        {/* <Text>Personal Details</Text> */}
        <DropDownPicker
          disabled={active === 2}
          onOpen={() => setActive(1)}
          onClose={() => setActive(0)}
          open={openGender}
          value={value}
          items={items}
          setOpen={setopenGender}
          setValue={setValue}
          setItems={setItems}
          multiple={true}
          placeholder="Gender"
          scrollViewProps={{maxHeight: 200, nestedScrollEnabled: true}}
          style={{
            borderColor: '#ccc',
            borderRadius:5,
            marginBottom: 20,
            elevation: active === 1 ? 99 : 1,
            zIndex: active === 1 ? 99 : 1,
          }}
          containerStyle={{
            width: 100,
          }}
          listMode="SCROLLVIEW"
        />
        {/* Date of Birth Picker - Add your implementation here */}
        {/* Date of Birth Picker */}
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
            padding: 12,
            // marginVertical: 5,
            width: '55%',
            height: '70%',
            // backgroundColor:'red',
          }}
          onPress={() => setDatePickerVisibility(true)}>
          <Text style={{color: 'black'}}>{dob ? dob : 'DOB'}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={() => setDatePickerVisibility(false)}
        />
      </View>

      {/* Contact Details */}
      <Text>Contact Details</Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          // backgroundColor: 'blue',
          justifyContent: 'space-around',
        }}>
        {/* Country Code Dropdown */}

        <DropDownPicker
          disabled={active === 1}
          onOpen={() => setActive(2)}
          onClose={() => setActive(0)}
          open={openCountryCode}
          value={valueCode}
          items={itemsCode}
          setOpen={setopenCountryCode}
          setValue={setValueCode}
          setItems={setItemsCode}
          multiple={true}
          placeholder="+37"
          scrollViewProps={{maxHeight: 200, nestedScrollEnabled: true}}
          style={{
            borderColor: '#ccc',
            borderRadius:5,
            marginBottom: 20,
            elevation: active === 2 ? 99 : 1,
            zIndex: active === 2 ? 99 : 1,
          }}
          containerStyle={{
            width: 100,
            // backgroundColor: 'orange',
          }}
          listMode="SCROLLVIEW"
        />
        <TextInput
          label="Phone No"
          value={phoneText}
          onChangeText={text => setPhoneText(text)}
          mode="outlined"
          style={{width: '55%', maxHeight: '80%', bottom: 5}}
          //  style={{borderWidth: 1, marginVertical: 5, padding: 10, flex: 2}}
        />
      </View>

      {/* Address Details */}
      <TextInput
        label="Address"
        value={addressText}
        onChangeText={text => setAddressText(text)}
        mode="outlined"
        // style={{borderWidth: 1, marginVertical: 5, padding: 10}}
      />
      <TextInput
        label="Postcode"
        value={postcodeText}
        onChangeText={text => setPostcodeText(text)}
        mode="outlined"
        // style={{borderWidth: 1, marginVertical: 5, padding: 10}}
      />
      <TextInput
        label="City"
        value={cityText}
        onChangeText={text => setCityText(text)}
        mode="outlined"
        // style={{borderWidth: 1, marginVertical: 5, padding: 10}}
      />

      {/* Country Dropdown */}
      {/* <DropDownPicker
        items={[
          {label: 'USA', value: 'USA'},
          {label: 'UK', value: 'UK'},
          // Add more countries as needed
        ]}
        placeholder="Select Country"
        containerStyle={{marginVertical: 5}}
        value={country}
        setValue={value => setCountry(value)}
      /> */}

      <DropDownPicker
        // disabled={active === 2}
        // onOpen={() => setActive(1)}
        // onClose={() => setActive(0)}
        open={openCountry}
        value={valueCountry}
        items={itemsCountry}
        setOpen={setOpenCountry}
        setValue={setValueCountry}
        setItems={setItemsCountry}
        multiple={true}
        placeholder="Country"
        scrollViewProps={{maxHeight: 200, nestedScrollEnabled: true}}
        style={{
          borderColor: '#ccc',
          borderRadius:5,
          marginTop: 10,
          // elevation: active === 1 ? 99 : 1,
          // zIndex: active === 1 ? 99 : 1,
        }}
        listMode="SCROLLVIEW"
      />

      {/* Save Profile Button */}
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
        }}
        onPress={handlePress}>
        <Text style={{color: 'white', textAlign: 'center'}}>Save Profile</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

export default AccountScreen;

import React, { useState } from 'react';
import { View, ScrollView, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const AccountScreen = () => {
  const [gender, setGender] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [country, setCountry] = useState('');

  const handlePress = () => {
    console.log('Button Pressed');
    // Add logic for handling button press
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <View style={{ alignItems: 'center' }}>
        {/* Profile Image */}
        <Image
          source={{ uri: 'https://example.com/your-profile-image.jpg' }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />

        {/* Name and Email */}
        <Text>Name: John Doe</Text>
        <Text>Email: john.doe@example.com</Text>
      </View>

      {/* Personal Details */}
      <Text>Personal Details</Text>
      <TextInput placeholder="Name" style={{ borderWidth: 1, marginVertical: 5, padding: 10 }} />
      <TextInput placeholder="Surname" style={{ borderWidth: 1, marginVertical: 5, padding: 10 }} />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {/* Gender Dropdown */}
        <DropDownPicker
          items={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
            { label: 'Other', value: 'other' },
          ]}
          placeholder="Select Gender"
          containerStyle={{ flex: 1, marginVertical: 5 }}
          value={gender}
          setValue={(value) => setGender(value)}
          listMode="SCROLLVIEW"
        />
        {/* Date of Birth Picker - Add your implementation here */}
      </View>

      {/* Contact Details */}
      <Text>Contact Details</Text>
      <View style={{ flexDirection: 'row' }}>
        {/* Country Code Dropdown */}
        <DropDownPicker
          items={[
            { label: '+1', value: '+1' },
            { label: '+44', value: '+44' },
            // Add more country codes as needed
          ]}
          placeholder="Select Country Code"
          containerStyle={{ flex: 1, marginVertical: 10 }}
          value={countryCode}
          setValue={(value) => setCountryCode(value)}
        />
        <TextInput placeholder="Phone No" style={{ borderWidth: 1, marginVertical: 5, padding: 10, flex: 2 }} />
      </View>

      {/* Address Details */}
      <TextInput placeholder="Address" style={{ borderWidth: 1, marginVertical: 5, padding: 10 }} />
      <TextInput placeholder="Postcode" style={{ borderWidth: 1, marginVertical: 5, padding: 10 }} />
      <TextInput placeholder="City" style={{ borderWidth: 1, marginVertical: 5, padding: 10 }} />

      {/* Country Dropdown */}
      <DropDownPicker
        items={[
          { label: 'USA', value: 'USA' },
          { label: 'UK', value: 'UK' },
          // Add more countries as needed
        ]}
        placeholder="Select Country"
        containerStyle={{ marginVertical: 5 }}
        value={country}
        setValue={(value) => setCountry(value)}
      />

      {/* Save Profile Button */}
      <TouchableOpacity
        style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 10 }}
        onPress={handlePress}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Save Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AccountScreen;

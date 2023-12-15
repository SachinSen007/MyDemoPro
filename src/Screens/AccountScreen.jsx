import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {ScrollView} from 'react-native-virtualized-view';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {TextInput} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import EvilIcons from 'react-native-vector-icons/Ionicons';
import CustomProfileHeader from './CustomProfileHeader';
import ImagePicker from 'react-native-image-crop-picker';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

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
  const [profileImage, setProfileImage] = useState(null);

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

  const [showButtons, setShowButtons] = useState(false);

  // Modal State
  const [modalVisible, setModalVisible] = useState(false);

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


  // Default profile image
  const defaultProfileImage = require('../assets/icon/profilepic.png');


  const renderButtons = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 10,
          elevation: 5,
          width: '80%', 
        }}
      >
        <TouchableOpacity onPress={pickImage}>
          <Text style={styles.modalOptionText}>Pick Image from Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={captureImage}>
          <Text style={styles.modalOptionText}>Capture Image from Camera</Text>
        </TouchableOpacity>

        <Pressable
          style={styles.modalCloseButton}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={{color: 'white'}}>Close</Text>
        </Pressable>
      </View>
    </View>
    </Modal>
  );

  const handleDateConfirm = date => {
    setDob(date.toISOString().split('T')[0]);
    setDatePickerVisibility(false);
  };

  const handlePress = () => {
    console.log('Button Pressed');
  };

  useEffect(() => {
    checkPermissions();
  }, []);

  const handleImagePress = () => {
    setModalVisible(!modalVisible);
  };

  const checkPermissions = async () => {
    const permissionStatus = await checkCameraPermission();
    if (permissionStatus === RESULTS.DENIED) {
      requestCameraPermission();
    }
  };

  const checkCameraPermission = async () => {
    const permissionStatus = await check(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA,
    );
    return permissionStatus;
  };

  const requestCameraPermission = async () => {
    const permissionResult = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA,
    );
    if (permissionResult === RESULTS.GRANTED) {
      console.log('Camera permission granted');
    } else {
      console.log('Camera permission denied');
    }
  };

  const pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      cropperCircleOverlay: true,
      compressImageQuality: 0.7,
    })
      .then(image => {
        console.log(image);
        setProfileImage(image.path);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const captureImage = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      cropperCircleOverlay: true,
      compressImageQuality: 0.7,
    })
      .then(image => {
        console.log(image);
        setProfileImage(image.path);
      })
      .catch(error => {
        console.log(error);
      });
  };

  console.log('11111111111 profileImage', profileImage);
  return (
    <KeyboardAwareScrollView
      style={{flex: 1, backgroundColor: 'white'}}
      resetScrollToCoords={{x: 0, y: 0}}
      contentContainerStyle={{}}
      scrollEnabled={true}>
     
      <CustomProfileHeader
        title="Profile"
      />
      <View style={{alignItems: 'center',marginTop:30}}>
        {/* Profile Image */}
       
        <TouchableOpacity onPress={handleImagePress}>
          <Image
            source={profileImage ? { uri: profileImage } : defaultProfileImage}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginTop: 10,
            }}
          />
        </TouchableOpacity>
        {renderButtons()}
        

        {/* Name and Email */}
        <Text style={{fontSize: 18, color: '#153EA8', fontWeight: 'bold'}}>
          Jacob Gobb
        </Text>
        <Text style={{fontSize: 14, color: '#8355C4'}}>
          jacob.gobb@gmail.com
        </Text>
      </View>

      {/* Personal Details */}
      <View style={{marginTop: 40, marginVertical: 10, paddingHorizontal: 20}}>
        <Text style={{fontSize: 18, color: '#153EA8', fontWeight: 'bold'}}>
          Personal Details
        </Text>
      </View>

      <TextInput
        label="Email"
        value={nameText}
        onChangeText={text => setNameText(text)}
        mode="outlined"
        multiple={true}
        editable
        maxLength={100}
        numberOfLines={4}
        autoCorrect={false}
        autoCapitalize="sentences"
        style={{
          width: '90%',
          alignSelf:'center',
          backgroundColor: 'white',
          marginBottom: 12,
        }}
        activeOutlineColor="#8355C4"
        outlineColor="#ccc"

       
      />
      <TextInput
        label="Surname"
        value={surnameText}
        onChangeText={text => setSurnameText(text)}
        mode="outlined"
        style={{width: '90%',alignSelf:'center', backgroundColor: 'white'}}
        activeOutlineColor="#8355C4"
        outlineColor="#ccc"
       
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent:'space-evenly',
          marginTop: 15,
          // backgroundColor:'red'
        }}>
        {/* Gender Dropdown */}
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
            borderRadius: 5,
            marginBottom: 20,
            elevation: active === 1 ? 99 : 1,
            zIndex: active === 1 ? 99 : 1,
          }}
          containerStyle={{
            width: 100,

          }}
          arrowIconStyle={{tintColor: '#ccc'}}
          listMode="SCROLLVIEW"
        />

        {/* Date of Birth Picker */}
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
            padding: 12,
            // marginVertical: 5,
            width: '58%',
            height: '70%',
            // backgroundColor:'red',
          }}
          onPress={() => setDatePickerVisibility(true)}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black',}}>{dob ? dob : 'DOB'}</Text>
            <EvilIcons
              name="chevron-down"
              size={20}
              color="#ccc"
              style={{marginLeft: 140}}
            />
          </View>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={() => setDatePickerVisibility(false)}
        />
      </View>

      {/* Contact Details */}
      <View style={{marginTop: 5, marginVertical: 5, paddingHorizontal: 20}}>
        <Text style={{fontSize: 18, color: '#153EA8', fontWeight: 'bold'}}>
          Contact Details
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          // backgroundColor: 'blue',
          justifyContent: 'space-evenly',
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
            borderRadius: 5,
            marginBottom: 20,
            elevation: active === 2 ? 99 : 1,
            zIndex: active === 2 ? 99 : 1,
          }}
          containerStyle={{
            width: 105,
            // backgroundColor: 'orange',
          }}
          arrowIconStyle={{tintColor: '#ccc'}}
          listMode="SCROLLVIEW"
        />
        <TextInput
          label="Phone No"
          value={phoneText}
          onChangeText={text => setPhoneText(text)}
          mode="outlined"
          style={{
            width: '55%',
            maxHeight: '80%',
            bottom: 6,
            backgroundColor: 'white',
          }}
          activeOutlineColor="#8355C4"
          outlineColor="#ccc"
        />
      </View>

      {/* Address Details */}
      <TextInput
        label="Address"
        value={addressText}
        onChangeText={text => setAddressText(text)}
        mode="outlined"
        style={{
          width: '90%',
          alignSelf:'center',
          // marginHorizontal: 18,
          backgroundColor: 'white',
          bottom: 10,
        }}
        activeOutlineColor="#8355C4"
        outlineColor="#ccc"
      />
      <View style={{flexDirection: 'row', justifyContent:'space-evenly'}}>
        <TextInput
          label="Postcode"
          value={postcodeText}
          onChangeText={text => setPostcodeText(text)}
          mode="outlined"
          style={{width: '35%', marginHorizontal: 0, backgroundColor: 'white'}}
          activeOutlineColor="#8355C4"
          outlineColor="#ccc"
        />
        <TextInput
          label="City"
          value={cityText}
          onChangeText={text => setCityText(text)}
          mode="outlined"
          style={{width: '50%', marginHorizontal:0, backgroundColor: 'white'}}
          activeOutlineColor="#8355C4"
          outlineColor="#ccc"

        />
      </View>

      {/* Country Dropdown */}
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
          borderRadius: 5,
          marginTop: 18,
          width: '90%',
          alignSelf:'center',
          // marginHorizontal: 15,
          elevation: active === 1 ? 99 : 1,
          zIndex: active === 1 ? 99 : 1,
        }}
        dropDownContainerStyle={{
          // backgroundColor: "#dfdfdf",
          width: "90%",
          alignSelf: "center",
        }}
        arrowIconStyle={{tintColor: '#ccc'}}
        listMode="SCROLLVIEW"
      />

      {/* Save Profile Button */}
      <TouchableOpacity
        style={{
          backgroundColor: '#8355C4',
          padding: 10,
          borderRadius: 25,
          marginVertical:40,
          // marginBottom:10,
          width: '90%',
          height: 45,
          alignSelf:'center'
          // marginHorizontal: 12,
        }}
        onPress={handlePress}>
        <Text style={{color: 'white', textAlign: 'center', top: 5}}>NEXT</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  modalOptionText: {
    color: 'blue',
    marginTop: 10,
    fontSize: 16,
  },
  modalCloseButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#8355C4',
    alignItems: 'center',
  },
});

export default AccountScreen;

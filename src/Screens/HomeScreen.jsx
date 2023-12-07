// HomeScreen.js
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import CustomHeader from '../Screens/CustomHeader';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CustomHeader
        title="Dashboard"
        onNotificationPress={() => {
          // Handle notification press
        }}
        onMorePress={() => {
          // Handle more press
        }}
      />
      <Text style={styles.sectionTitle}>Upcoming Consultations</Text>
      <View style={styles.boxContainer}>
        <Text style={{color: '#8355C4'}}>Dr. Marta Juarez</Text>
        <Text style={{color: '#8355C4'}}>Dr. Hans Gerhoff</Text>

        {/* Add Stethoscope Icon and 2 more Text components */}
        <View style={{marginLeft: 215, top: 10}}>
          <Image
            source={require('../assets/icon/stethoscope-icon.png')}
            style={{width: 40, height: 40, tintColor: '#8355C4'}}
          />
        </View>
        <View style={{marginLeft: 270, bottom: 45}}>
          <Text style={{fontSize: 45, color: '#8355C4', fontWeight: 'bold'}}>
            2
          </Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Medical Files</Text>
      <View style={styles.boxContainer}>
        <Text style={{color: '#8355C4'}}>Blood Tests.pdf</Text>
        <Text style={{color: '#8355C4'}}>Cardiology results.pdf</Text>
        <Text style={{color: '#8355C4'}}>Blood tests 20-02-2020.pdf </Text>
        <Text style={{color: '#8355C4'}}>MRI results.pdf</Text>
        {/* Add other Medical Files with icons and Text components */}

        <View style={{marginLeft: 215, bottom:30}}>
          <Image
            source={require('../assets/icon/medicalFile.png')}
            style={{width: 40, height: 40, tintColor: '#8355C4'}}
          />
        </View>
        <View style={{marginLeft: 270, bottom: 85}}>
          <Text style={{fontSize: 45, color: '#8355C4', fontWeight: 'bold'}}>
            2
          </Text>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <View style={styles.iconBox}>
          <Ionicons name="time" size={40} color="white" />
        </View>
        <View style={styles.iconBoxCall}>
          <Ionicons name="call" size={40} color="white" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //  flex: 1,
    // padding:10,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
    marginTop:15,
    marginHorizontal: 10,
    color: '#2874A6',
    fontWeight: 'bold',
    // marginTop: 5,
    // marginVertical:10
  },
  boxContainer: {
    // borderWidth: 1,
    // borderColor: 'gray',
    padding: 20,
    //  paddingHorizontal:20,
    marginTop: 10,
    marginHorizontal: 12,
    height: 120,
    // width: 300,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
    // shadowColor: "#000000",
    // shadowOpacity: 0.18,
    // shadowRadius: 2,
    // shadowOffset: {
    //   height: 1,
    //   width: 1
    // }

    // backgroundColor:'red'
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 10,
    marginTop: 20,
  },
  iconBox: {
    backgroundColor: 'blue',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '40%', // Adjust the width as needed
    height: '55%',
  },
  iconBoxCall: {
    backgroundColor: 'blue',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '40%', // Adjust the width as needed
    height: '55%',
  },
});

export default HomeScreen;

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
        }}
        onMorePress={() => {
        }}
      />
      <Text style={styles.sectionTitle}>Upcoming Consultations</Text>
      <View style={styles.boxContainer}>
        <Text style={{color: '#8355C4'}}>Dr. Marta Juarez</Text>
        <Text style={{color: '#8355C4'}}>Dr. Hans Gerhoff</Text>

       
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
       

        <View style={{marginLeft: 215, bottom: 30}}>
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
          
          <Image
            source={require('../assets/icon/plus-symbol-button.png')}
            style={{
              width: 20,
              height: 20,
              tintColor:'white',
              borderWidth: 2,
              borderColor: '#8355C4',
              borderRadius: 50,
              padding: 20,
              backgroundColor:'#8355C4'
            }}
            resizeMode="contain"
          />
          <View  style={{marginTop:10}}>
          <Text  style={{color:'#8355C4',fontSize:12,fontWeight:'500'}}>Schedule</Text>
         </View>
        </View>
        <View style={styles.iconBoxCall}>
         
          <Image
            source={require('../assets/icon/phone.png')}
            style={{
              width: 20,
              height: 20,
              tintColor:'white',
              borderWidth: 2,
              borderColor: '#8355C4',
              borderRadius: 50,
              padding: 20,
              backgroundColor:'#8355C4'
            }}
            resizeMode="contain"
          />
          <View  style={{marginTop:10}}>
          <Text  style={{color:'#8355C4',fontSize:12,fontWeight:'500'}}>Call</Text>
         </View>
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
    marginTop: 15,
    marginHorizontal: 10,
    color: '#2874A6',
    fontWeight: 'bold',
    // marginTop: 5,
    // marginVertical:10
  },
  boxContainer: {
    padding: 20,
    //  paddingHorizontal:20,
    marginTop: 10,
    marginHorizontal: 12,
    height: 120,
    // width: 300,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
    // backgroundColor:'red'
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 10,
    marginTop: 20,
    elevation: 10,
  },
  iconBox: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '40%', 
    height: '52%',
    elevation: 5,
  },
  iconBoxCall: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '40%', 
    height: '52%',
    elevation: 5,
  },
});

export default HomeScreen;

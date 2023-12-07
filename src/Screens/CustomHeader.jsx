// CustomHeader.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CustomHeader = ({ title, onNotificationPress, onMorePress }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={onNotificationPress}>
          <MaterialIcons name="notifications-none" size={26} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingHorizontal:10}} onPress={onMorePress}>
          <Feather name="more-vertical" style={styles.moreIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#8355C4',
    height: 70,
    paddingHorizontal: 20,
    // backgroundColor:'red'
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
   marginLeft: 110,
    // backgroundColor:'blue'
  },
  iconsContainer: {
    flexDirection: 'row',
    // right: 20,
    marginHorizontal: 80,
    // backgroundColor:'pink',
    
  },
  moreIcon: {
    fontSize: 24,
    color: 'white',
  },
});

export default CustomHeader;

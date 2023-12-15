// CustomHeader.js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';

const CustomHeader = ({title, onNotificationPress, onMorePress}) => {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  const handleSettingPress = () => {
    hideMenu();
  };

  const handleLogoutPress = () => {
    hideMenu();
  };

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={onNotificationPress}>
          <MaterialIcons name="notifications-none" size={26} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingHorizontal: 10}} onPress={showMenu}>
          <Feather name="more-vertical" style={styles.moreIcon} />
        </TouchableOpacity>
        <Menu
          visible={visible}
          anchor={<Text onPress={showMenu}>Show menu</Text>}
          onRequestClose={hideMenu}>
          <MenuItem onPress={handleSettingPress}>
            <Text style={styles.menuItemText}>Settings</Text>{' '}
            <MaterialIcons name="settings" size={20} color="#333" />
          </MenuItem>
          <MenuItem onPress={handleLogoutPress}>
            <Text style={styles.menuItemText}>Logout</Text> {'   '}
            <MaterialIcons
              name="exit-to-app"
              size={20}
              color="#333"
              // style={{backgroundColor: 'blue'}}
            />
          </MenuItem>
        </Menu>
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

  menuItemText: {
    // marginLeft: 30,
    fontSize: 16,
    color: '#333',
    // backgroundColor: 'red',
  },
});

export default CustomHeader;

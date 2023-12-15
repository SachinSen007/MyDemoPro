// DeviceDetail.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const DeviceDetail = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    appVersion: 'N/A',
    buildVersion: 'N/A',
    bundleIdentifier: 'N/A',
    batteryLevel: 'N/A',
    totalDiskSpace: 'N/A',
  });

  useEffect(() => {
    fetchDeviceInfo();
  }, []);

  const fetchDeviceInfo = async () => {
    try {
      const appVersion = await DeviceInfo.getVersion();
      const buildVersion = await DeviceInfo.getBuildNumber();
      const bundleIdentifier = await DeviceInfo.getBundleId();
      const batteryLevel = await DeviceInfo.getBatteryLevel();
      const totalDiskSpace = await DeviceInfo.getTotalDiskCapacity();

      setDeviceInfo({
        appVersion,
        buildVersion,
        bundleIdentifier,
        batteryLevel: `${(batteryLevel * 100).toFixed(2)}%`,
        totalDiskSpace,
      });
    } catch (error) {
      console.error('Error fetching device information:', error);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Device Information</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>App Version:</Text>
        <Text style={styles.value}>{deviceInfo.appVersion}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Build Version:</Text>
        <Text style={styles.value}>{deviceInfo.buildVersion}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Bundle Identifier:</Text>
        <Text style={styles.value}>{deviceInfo.bundleIdentifier}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Battery Level:</Text>
        <Text style={styles.value}>{deviceInfo.batteryLevel}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Total Disk Space:</Text>
        <Text style={styles.value}>{deviceInfo.totalDiskSpace}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2874A6',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#2874A6',
  },
  value: {
    fontSize: 18,
    color: '#8355C4',
    marginTop: 5,
  },
});

export default DeviceDetail;

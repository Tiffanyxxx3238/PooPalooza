import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header 區域 */}
      <View style={styles.headerRow}>
        <Image source={require('../assets/icons/poop-logo.png')} style={styles.logoIcon} />
        <Text style={styles.title}>PooPalooza</Text>
      </View>
      <View style={styles.streakBox}>
        <View style={styles.streakTextBox}>
          <Text style={styles.streak}>your longest streak is</Text>
          <Text style={styles.bold}>12 days</Text>
          <Text style={styles.streak}>you've logged</Text>
          <Text style={styles.bold}>12 poops</Text>
        </View>
        <Image source={require('../assets/poop-banner.png')} style={styles.bannerImage} resizeMode="contain" />
      </View>

      {/* 馬桶圖片 */}
      <View style={styles.toiletContainer}>
        <Image source={require('../assets/toilet.png')} style={styles.toiletImage} resizeMode="contain" />
        <View style={styles.overlayButtonGroup}>
          <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
            <Text style={styles.overlayButton}>Take Pic</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.overlayButton}>Upload Pic</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Tabs 圖示+標籤 */}
        <View style={styles.tabBar}>
        {[
            { label: 'map',        icon: require('../assets/icons/map.png'),        screen: 'Map' },
            { label: 'library',    icon: require('../assets/icons/library.png'),    screen: 'Library' },
            { label: 'calendar',   icon: require('../assets/icons/calendar.png'),   screen: 'Calendar' },
            { label: 'statistics', icon: require('../assets/icons/statistics.png'), screen: 'Statistics' },
            { label: 'tracker',    icon: require('../assets/icons/tracker.png'),    screen: 'Tracker' },
        ].map((item, index) => (
            <TouchableOpacity
            key={index}
            style={styles.tabItem}
            onPress={() => navigation.navigate(item.screen)} // ✅ 點擊後跳轉頁面
            >
            <Image source={item.icon} style={styles.tabIcon} />
            <Text style={styles.tabLabel}>{item.label}</Text>
            </TouchableOpacity>
        ))}
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EEDC',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    paddingLeft: 20,
    width: '100%',
  },
  logoIcon: {
    width: 70,
    height: 70,
    marginRight: 25,
  },
  title: {
    fontSize: 50,
    fontFamily: 'Fredoka',
    fontWeight: 'bold',
    color: '#A67243',
  },
  streakBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E8D8A9',
    paddingVertical: 14,
    paddingHorizontal: 18,
    width: SCREEN_WIDTH * 0.92,
    borderRadius: 16,
    marginTop: 5,
    alignItems: 'center',
  },
  streakTextBox: {
    flex: 1,
  },
  streak: {
    fontSize: 18,
    fontFamily: 'Fredoka',
    color: '#333',
  },
  bold: {
    fontSize: 35,
    fontFamily: 'Fredoka',
    fontWeight: 'bold',
    color: '#000',
  },
  bannerImage: {
    width: 150,
    height: 150,
    marginLeft: 12,
  },
  toiletContainer: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: -1,
  },
  toiletImage: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH * 1.2,
  },
  overlayButtonGroup: {
    position: 'absolute',
    top: '48%',
    alignItems: 'center',
  },
  overlayButton: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontFamily: 'Fredoka',
    fontWeight: 'bold',
    color: '#A67243',
    marginVertical: 26,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F3DDAA',
    paddingVertical: 8,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#CCC',
  },
  tabItem: {
    alignItems: 'center',
  },
  tabIcon: {
    width: 75,
    height: 90,
    marginBottom: 2,
  },
});

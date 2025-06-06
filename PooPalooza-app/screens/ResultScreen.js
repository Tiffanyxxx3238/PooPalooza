import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function ResultScreen({ route, navigation }) {
  const { poopType, score } = route.params;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/icons/back.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>PooPalooza</Text>
      </View>

      {/* Streak Box */}
      <View style={styles.streakBox}>
        <View style={{ flex: 1 }}>
          <Text style={styles.streak}>your longest streak is</Text>
          <Text style={styles.bold}>12 days</Text>
          <Text style={styles.streak}>you've logged</Text>
          <Text style={styles.bold}>12 poops</Text>
        </View>
        <Image source={require('../assets/poop-banner.png')} style={styles.bannerImage} resizeMode="contain" />
      </View>

      {/* Result info */}
      <Text style={styles.resultText}>糞便類型：{poopType}</Text>
      <Text style={styles.resultText}>得分：{score}</Text>

      {/* Toilet Image + Buttons */}
      <View style={styles.toiletContainer}>
        <Image source={require('../assets/toilet-open.png')} style={styles.toiletImage} resizeMode="contain" />
        <View style={styles.overlayButtons}>
          <TouchableOpacity style={styles.doneButton} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.againButton} onPress={() => navigation.navigate('Camera')}>
            <Text style={styles.buttonText}>Again</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Tabs */}
      <View style={styles.tabBar}>
        {[
          { label: 'map', icon: require('../assets/icons/map.png'), screen: 'Map'  },
          { label: 'library', icon: require('../assets/icons/library.png'), screen: 'Library'  },
          { label: 'calendar', icon: require('../assets/icons/calendar.png') , screen: 'Calendar' },
          { label: 'statistics', icon: require('../assets/icons/statistics.png')  ,screen: 'Statistics' },
          { label: 'tracker', icon: require('../assets/icons/tracker.png'), screen: 'Tracker'  },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.tabItem}>
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
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 36,
    gap: 8,
  },
  backIcon: {
    width: 28,
    height: 28,
  },
  title: {
    fontSize: 26,
    fontFamily: 'Fredoka',
    fontWeight: 'bold',
    color: '#A67243',
  },
  streakBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E8D8A9',
    padding: 16,
    marginVertical: 16,
    width: SCREEN_WIDTH * 0.9,
    borderRadius: 16,
    alignItems: 'center',
  },
  streak: {
    fontSize: 16,
    fontFamily: 'Fredoka',
    color: '#222',
  },
  bold: {
    fontSize: 20,
    fontFamily: 'Fredoka',
    fontWeight: 'bold',
    color: '#000',
  },
  bannerImage: {
    width: 60,
    height: 50,
    marginLeft: 12,
  },
  resultText: {
    fontSize: 20,
    fontFamily: 'Fredoka',
    color: '#A67243',
    marginVertical: 4,
  },
  toiletContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  toiletImage: {
    width: SCREEN_WIDTH * 0.75,
    height: SCREEN_WIDTH * 0.9,
  },
  overlayButtons: {
    position: 'absolute',
    top: '12%',
    flexDirection: 'row',
    gap: 16,
  },
  doneButton: {
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#A67243',
  },
  againButton: {
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#A67243',
  },
  buttonText: {
    fontFamily: 'Fredoka',
    color: '#A67243',
    fontWeight: 'bold',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F3DDAA',
    paddingVertical: 10,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: '#CCC',
  },
  tabItem: {
    alignItems: 'center',
  },
  tabIcon: {
    width: 28,
    height: 28,
    marginBottom: 2,
  },
  tabLabel: {
    fontSize: 12,
    fontFamily: 'Fredoka',
    color: '#5E412F',
  },
});

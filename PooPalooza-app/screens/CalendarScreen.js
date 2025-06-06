import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CELL_SIZE = (SCREEN_WIDTH * 0.86) / 7;

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export default function CalendarScreen({ navigation }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const { days, year, monthName } = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const arr = new Array(42).fill(0);
    for (let i = 0; i < daysInMonth; i++) {
      arr[i + firstDay] = i + 1;
    }

    return {
      days: arr,
      year,
      monthName: monthNames[month],
    };
  }, [currentDate]);

  const goToPrevMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(newDate);
  };

  const goToNextMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(newDate);
  };

  return (
    <View style={styles.container}>
      {/* 上方圖片與標題 */}
      <Image source={require('../assets/poop-calendar.png')} style={styles.banner} />
      <Text style={styles.pageTitle}>Calendar</Text>

      {/* Header + 月份切換 */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={goToPrevMonth}>
          <Text style={styles.arrow}>{'◀︎'}</Text>
        </TouchableOpacity>

        <Text style={styles.monthTitle}>{`${year} ${monthName}`}</Text>

        <TouchableOpacity onPress={goToNextMonth}>
          <Text style={styles.arrow}>{'▶︎'}</Text>
        </TouchableOpacity>
      </View>

      {/* 星期列 */}
      <View style={styles.weekRow}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
          <Text key={d} style={styles.week}>{d}</Text>
        ))}
      </View>

      {/* 日曆格子 */}
      <FlatList
        data={days}
        keyExtractor={(_, i) => String(i)}
        numColumns={7}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.cell}>
            <Text style={styles.cellText}>{item > 0 ? item : ''}</Text>
          </View>
        )}
      />

      {/* 右下按鈕 */}
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => navigation.navigate('Camera')}
      >
        <Image source={require('../assets/icons/plus.png')} style={styles.plusIcon} />
        <Text style={styles.addTxt}>add poop</Text>
      </TouchableOpacity>

      {/* TabBar 保留原樣 */}
      <View style={styles.tabBar}>
        {[
          { label: 'map',       icon: require('../assets/icons/map.png') },
          { label: 'library',   icon: require('../assets/icons/library.png') },
          { label: 'calendar',  icon: require('../assets/icons/calendar.png') },
          { label: 'statistics',icon: require('../assets/icons/statistics.png') },
          { label: 'tracker',   icon: require('../assets/icons/tracker.png') },
        ].map((item, idx) => (
          <TouchableOpacity key={idx} style={styles.tabItem}>
            <Image source={item.icon} style={styles.tabIcon} />
            <Text style={styles.tabLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5EEDC', alignItems: 'center' },
  banner: {
    width: 180,
    height: 100,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: 6,
  },
  pageTitle: {
    fontSize: 28,
    fontFamily: 'Fredoka',
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    gap: 18,
  },
  monthTitle: {
    fontSize: 22,
    fontFamily: 'Fredoka',
    fontWeight: 'bold',
    color: '#000',
  },
  arrow: {
    fontSize: 22,
    fontFamily: 'Fredoka',
    color: '#5E412F',
  },
  weekRow: {
    flexDirection: 'row',
    width: SCREEN_WIDTH * 0.9,
    justifyContent: 'space-between',
  },
  week: {
    width: CELL_SIZE,
    textAlign: 'center',
    fontFamily: 'Fredoka',
    fontSize: 14,
    color: '#333',
  },
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    marginVertical: 2,
    backgroundColor: '#E6D7A8',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    fontFamily: 'Fredoka',
    fontSize: 15,
    color: '#5E412F',
  },
  addBtn: {
    position: 'absolute',
    bottom: 92,
    right: 18,
    backgroundColor: '#5E412F',
    borderRadius: 48,
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  plusIcon: {
    width: 18,
    height: 18,
    tintColor: '#fff',
  },
  addTxt: {
    color: '#fff',
    fontFamily: 'Fredoka',
    fontSize: 14,
    fontWeight: 'bold',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F3DDAA',
    width: '100%',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: '#CCC',
  },
  tabItem: {
    alignItems: 'center',
  },
  tabIcon: {
    width: 32,
    height: 32,
    marginBottom: 2,
  },
  tabLabel: {
    fontFamily: 'Fredoka',
    fontSize: 12,
    color: '#5E412F',
  },
});

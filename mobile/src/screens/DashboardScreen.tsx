import { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';
import AppBottomBar from '../components/AppBottomBar';

type Nav = NativeStackNavigationProp<RootStackParamList, 'Dashboard'>;

export default function DashboardScreen() {
  const navigation = useNavigation<Nav>();

  const party = useMemo(
    () => ({
      name: '292 - 20 MICRONS LIMITED - BARODA - VADODDARA',
      address: 'MAYURIKUMAR BHIKHUBHAI SHILU\nPLOT NO.347 G.I.D.C., WAGHODIA DIST.\nVADODARA.. WAGHODIA',
      phone: '+91 9630884927',
    }),
    [],
  );

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerIconBtn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('DealerList')}
        >
          <MaterialIcons name="menu" size={26} color="#FFFFFF" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>AMPL SOLUTION</Text>

        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerIconBtn} activeOpacity={0.8}>
            <MaterialIcons name="notifications-none" size={26} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIconBtn} activeOpacity={0.8}>
            <MaterialIcons name="access-time" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.partyCard}>
          <View style={styles.partyCardLeft}>
            <Text style={styles.partyName}>{party.name}</Text>
            <View style={styles.partyRow}>
              <MaterialCommunityIcons name="map-marker-outline" size={18} color="#7367F0" />
              <Text style={styles.partyAddr}>{party.address}</Text>
            </View>
            <View style={styles.partyRow}>
              <MaterialCommunityIcons name="phone-outline" size={18} color="#7367F0" />
              <Text style={styles.partyPhone}>{party.phone}</Text>
            </View>
            <Text style={styles.partyMeta}>Visit Pending</Text>
            <Text style={styles.partyMeta}>Orders :</Text>
          </View>

          <TouchableOpacity
            style={styles.checkInBtn}
            activeOpacity={0.92}
            onPress={() => navigation.navigate('DayStart')}
          >
            <MaterialCommunityIcons name="check-circle" size={32} color="#FFFFFF" />
            <Text style={styles.checkInText}>Check In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsCard}>
          <View style={styles.statTopRow}>
            <View style={styles.statTop}>
              <Text style={[styles.statValue, { color: '#16a34a' }]}>0 Db</Text>
              <Text style={styles.statLabel}>Current Balance</Text>
            </View>
            <View style={styles.statTop}>
              <Text style={[styles.statValue, { color: '#16a34a' }]}>0</Text>
              <Text style={styles.statLabel}>Overdue Amount</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.statBottomRow}>
            <View style={styles.statBottom}>
              <Text style={[styles.statValue, { color: '#f59e0b' }]}>0 Db</Text>
              <Text style={[styles.statLabel, { color: '#f59e0b' }]}>Opening Balance</Text>
            </View>
            <View style={styles.statBottom}>
              <Text style={[styles.statValue, { color: '#ef4444' }]}>0 Db</Text>
              <Text style={[styles.statLabel, { color: '#ef4444' }]}>Total Debt</Text>
            </View>
            <View style={styles.statBottom}>
              <Text style={[styles.statValue, { color: '#16a34a' }]}>0 Db</Text>
              <Text style={[styles.statLabel, { color: '#16a34a' }]}>Total Debit</Text>
            </View>
          </View>

          <View style={styles.progressRow}>
            <View style={[styles.progressSeg, { backgroundColor: '#f59e0b' }]} />
            <View style={[styles.progressSeg, { backgroundColor: '#ef4444' }]} />
            <View style={[styles.progressSeg, { backgroundColor: '#16a34a' }]} />
          </View>
        </View>

        <View style={styles.segmentWrap}>
          <TouchableOpacity style={[styles.segment, styles.segmentActive]} activeOpacity={0.9}>
            <Text style={[styles.segmentText, styles.segmentTextActive]}>Party A/C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.segment} activeOpacity={0.9}>
            <Text style={styles.segmentText}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.segmentDoc} activeOpacity={0.9}>
            <MaterialCommunityIcons name="file-document-outline" size={18} color="#ef4444" />
          </TouchableOpacity>
        </View>

        <View style={styles.emptyArea} />
      </ScrollView>

      <AppBottomBar
        activeKey="Home"
        onTabPress={(key) => {
          if (key === 'Home') return;
          if (key === 'Track') navigation.replace('Track');
          if (key === 'Reward') navigation.replace('Reward');
          if (key === 'Calendar') navigation.replace('Calendar');
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#EDEDED',
  },
  header: {
    backgroundColor: '#7367F0',
    paddingHorizontal: 14,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIconBtn: {
    width: 40,
    height: 40,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollContent: {
    padding: 14,
    paddingBottom: 110,
  },
  partyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },
  partyCardLeft: {
    flex: 1,
    paddingRight: 12,
  },
  partyName: {
    color: '#7367F0',
    fontWeight: '800',
    fontSize: 12,
    marginBottom: 8,
  },
  partyRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
    marginBottom: 6,
  },
  partyAddr: {
    flex: 1,
    fontSize: 10,
    color: '#111827',
    lineHeight: 14,
    fontWeight: '700',
  },
  partyPhone: {
    fontSize: 10,
    color: '#111827',
    fontWeight: '700',
  },
  partyMeta: {
    fontSize: 11,
    color: '#f59e0b',
    fontWeight: '800',
    marginTop: 2,
  },
  checkInBtn: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#7367F0',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#7367F0',
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 9,
  },
  checkInText: {
    marginTop: 6,
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 12,
  },
  statsCard: {
    marginTop: 14,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },
  statTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
  },
  statTop: {
    alignItems: 'center',
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#EDEDED',
    marginVertical: 10,
  },
  statBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statBottom: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontWeight: '900',
    fontSize: 14,
  },
  statLabel: {
    marginTop: 2,
    fontSize: 10,
    fontWeight: '800',
    color: '#111827',
  },
  progressRow: {
    marginTop: 10,
    flexDirection: 'row',
    height: 4,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressSeg: {
    flex: 1,
  },
  segmentWrap: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#EAEAEA',
  },
  segment: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  segmentActive: {
    backgroundColor: '#7367F0',
  },
  segmentText: {
    fontWeight: '900',
    color: '#7367F0',
  },
  segmentTextActive: {
    color: '#FFFFFF',
  },
  segmentDoc: {
    width: 54,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  emptyArea: {
    height: 320,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginTop: 10,
  },
});

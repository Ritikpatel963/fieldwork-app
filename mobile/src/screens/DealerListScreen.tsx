import { useMemo, useState } from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';
import AppBottomBar from '../components/AppBottomBar';

type Nav = NativeStackNavigationProp<RootStackParamList, 'DealerList'>;

type Dealer = {
  id: string;
  title: string;
  phone: string;
  officer: string;
  address: string;
  balText: string;
};

const ACTIONS: Array<{
  label: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
}> = [
  { label: 'Ledger', icon: 'clipboard-text-outline' },
  { label: 'Visit', icon: 'map-marker-outline' },
  { label: 'Order', icon: 'cart-outline' },
  { label: 'Payment', icon: 'currency-inr' },
  { label: 'Find Location', icon: 'crosshairs-gps' },
  { label: 'Party History', icon: 'history' },
  { label: 'Contact Dealer', icon: 'account-box-outline' },
  { label: 'Add Reminder', icon: 'alarm' },
  { label: 'History', icon: 'file-document-outline' },
  { label: 'Bill', icon: 'receipt' },
];

export default function DealerListScreen() {
  const navigation = useNavigation<Nav>();
  const [query, setQuery] = useState('');
  const [menuDealer, setMenuDealer] = useState<Dealer | null>(null);

  const dealers = useMemo<Dealer[]>(
    () => [
      {
        id: '1',
        title: '292 - 20 MICRONS LIMITED - BARODA - VADODDARA',
        phone: '9925002964',
        officer: 'MAYURIKUMAR BHIKHUBHAI SHILU',
        address: 'PLOT NO.347 G.I.D.C.. WAGHODIA DIST . VADODARA.. WAGHODIA',
        balText: 'Bal : 0Db',
      },
      {
        id: '2',
        title: '292 - 20 MICRONS LIMITED - BARODA - VADODDARA',
        phone: '9925002964',
        officer: 'MAYURIKUMAR BHIKHUBHAI SHILU',
        address: 'PLOT NO.347 G.I.D.C.. WAGHODIA DIST . VADODARA.. WAGHODIA',
        balText: 'Bal : 0Db',
      },
      {
        id: '3',
        title: '292 - 20 MICRONS LIMITED - BARODA - VADODDARA',
        phone: '9925002964',
        officer: 'MAYURIKUMAR BHIKHUBHAI SHILU',
        address: 'PLOT NO.347 G.I.D.C.. WAGHODIA DIST . VADODARA.. WAGHODIA',
        balText: 'Bal : 0Db',
      },
      {
        id: '4',
        title: '292 - 20 MICRONS LIMITED - BARODA - VADODDARA',
        phone: '9925002964',
        officer: 'MAYURIKUMAR BHIKHUBHAI SHILU',
        address: 'PLOT NO.347 G.I.D.C.. WAGHODIA DIST . VADODARA.. WAGHODIA',
        balText: 'Bal : 0Db',
      },
    ],
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return dealers;
    return dealers.filter(
      (d) => d.title.toLowerCase().includes(q) || d.phone.toLowerCase().includes(q),
    );
  }, [dealers, query]);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIconBtn} activeOpacity={0.8} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios-new" size={20} color="#FFFFFF" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Dealer List</Text>

        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerIconBtn} activeOpacity={0.8}>
            <MaterialIcons name="notifications-none" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIconBtn} activeOpacity={0.8}>
            <MaterialIcons name="access-time" size={22} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.searchWrap}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#8E8E8E"
            value={query}
            onChangeText={setQuery}
          />
          <MaterialIcons name="search" size={22} color="#7367F0" />
        </View>

        <View style={styles.totalsCard}>
          <View style={styles.totalCol}>
            <Text style={[styles.totalValue, { color: '#f59e0b' }]}>0</Text>
            <Text style={[styles.totalLabel, { color: '#f59e0b' }]}>Total Dealers</Text>
          </View>
          <View style={styles.totalDivider} />
          <View style={styles.totalCol}>
            <Text style={[styles.totalValue, { color: '#7367F0' }]}>0</Text>
            <Text style={[styles.totalLabel, { color: '#7367F0' }]}>Total Credit</Text>
          </View>
          <View style={styles.totalDivider} />
          <View style={styles.totalCol}>
            <Text style={[styles.totalValue, { color: '#ef4444' }]}>0</Text>
            <Text style={[styles.totalLabel, { color: '#ef4444' }]}>Total Debt</Text>
          </View>
          <View style={styles.totalProgress}>
            <View style={[styles.progressSeg, { backgroundColor: '#f59e0b' }]} />
            <View style={[styles.progressSeg, { backgroundColor: '#7367F0' }]} />
            <View style={[styles.progressSeg, { backgroundColor: '#ef4444' }]} />
          </View>
        </View>

        {filtered.map((dealer) => (
          <View key={dealer.id} style={styles.dealerCard}>
            <View style={styles.dealerAccent} />
            <View style={styles.dealerBody}>
              <View style={styles.dealerHeaderRow}>
                <Text style={styles.dealerTitle}>{dealer.title}</Text>
                <TouchableOpacity
                  style={styles.menuBtn}
                  activeOpacity={0.85}
                  onPress={() => setMenuDealer(dealer)}
                >
                  <MaterialCommunityIcons name="dots-vertical" size={18} color="#7367F0" />
                </TouchableOpacity>
              </View>

              <View style={styles.dealerRow}>
                <MaterialCommunityIcons name="phone" size={16} color="#111827" />
                <Text style={styles.dealerText}>{dealer.phone}</Text>
              </View>
              <Text style={styles.dealerTextBold}>Officer : {dealer.officer}</Text>
              <Text style={styles.dealerTextBold}>{dealer.address}</Text>

              <View style={styles.dealerFooterRow}>
                <Text style={styles.balance}>
                  <Text style={{ color: '#ef4444' }}>Bal :</Text> <Text style={{ color: '#16a34a' }}>0Db</Text>
                </Text>
                <MaterialCommunityIcons name="whatsapp" size={18} color="#16a34a" />
                <Text style={styles.clText}>CL:0</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.fab} activeOpacity={0.9} onPress={() => {}}>
        <MaterialIcons name="add" size={28} color="#FFFFFF" />
      </TouchableOpacity>

      <AppBottomBar
        activeKey="Home"
        onTabPress={(key) => {
          if (key === 'Home') navigation.replace('Dashboard');
          if (key === 'Track') navigation.replace('Track');
          if (key === 'Reward') navigation.replace('Reward');
          if (key === 'Calendar') navigation.replace('Calendar');
        }}
      />

      <DealerMenuModal visible={!!menuDealer} onDismiss={() => setMenuDealer(null)} />
    </SafeAreaView>
  );
}

function DealerMenuModal({ visible, onDismiss }: { visible: boolean; onDismiss: () => void }) {
  return (
    <Modal visible={visible} animationType="fade" transparent>
      <TouchableOpacity style={styles.menuOverlay} activeOpacity={1} onPress={onDismiss}>
        <View style={styles.menuCard}>
          {ACTIONS.map((a) => (
            <TouchableOpacity
              key={a.label}
              style={styles.menuRow}
              activeOpacity={0.85}
              onPress={onDismiss}
            >
              <MaterialCommunityIcons name={a.icon} size={22} color="#7367F0" />
              <Text style={styles.menuText}>{a.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </TouchableOpacity>
    </Modal>
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
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollContent: {
    padding: 14,
    paddingBottom: 130,
  },
  searchWrap: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#7367F0',
    paddingHorizontal: 14,
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: '800',
    color: '#7367F0',
  },
  totalsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingTop: 14,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
    overflow: 'hidden',
    marginBottom: 12,
  },
  totalCol: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  totalValue: {
    fontWeight: '900',
    fontSize: 18,
  },
  totalLabel: {
    marginTop: 2,
    fontWeight: '800',
    fontSize: 11,
  },
  totalDivider: {
    width: 1,
    alignSelf: 'stretch',
    backgroundColor: '#EDEDED',
  },
  totalProgress: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 4,
    flexDirection: 'row',
  },
  progressSeg: {
    flex: 1,
  },
  dealerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    overflow: 'hidden',
    flexDirection: 'row',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
  },
  dealerAccent: {
    width: 6,
    backgroundColor: '#ef4444',
  },
  dealerBody: {
    flex: 1,
    padding: 12,
  },
  dealerHeaderRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dealerTitle: {
    flex: 1,
    fontWeight: '900',
    fontSize: 12,
    color: '#111827',
    paddingRight: 10,
  },
  menuBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dealerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  dealerText: {
    fontWeight: '800',
    fontSize: 12,
    color: '#111827',
  },
  dealerTextBold: {
    fontWeight: '800',
    fontSize: 11,
    color: '#111827',
    marginBottom: 2,
  },
  dealerFooterRow: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  balance: {
    fontWeight: '900',
    fontSize: 12,
  },
  clText: {
    marginLeft: 'auto',
    fontWeight: '900',
    fontSize: 12,
    color: '#111827',
  },
  fab: {
    position: 'absolute',
    right: 18,
    bottom: 80,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#7367F0',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#7367F0',
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 10,
  },
  menuOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuCard: {
    width: 240,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 10,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  menuText: {
    fontWeight: '800',
    fontSize: 14,
    color: '#111827',
  },
});

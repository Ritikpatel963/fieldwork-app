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

type Nav = NativeStackNavigationProp<RootStackParamList, 'DayStart'>;

type PickerKey = 'tourPurpose' | 'tourType' | 'vehicleType';

export default function DayStartScreen() {
  const navigation = useNavigation<Nav>();

  const [tourPurpose, setTourPurpose] = useState('Party Visit (Order / Payment)');
  const [tourType, setTourType] = useState('In Headquarter');
  const [vehicleType, setVehicleType] = useState('Two Wheeler Perssonal');
  const [vehicleNo, setVehicleNo] = useState('');
  const [openingKm, setOpeningKm] = useState('');

  const [pickerOpen, setPickerOpen] = useState<PickerKey | null>(null);
  const [partyModalOpen, setPartyModalOpen] = useState(false);
  const [partySearch, setPartySearch] = useState('');
  const [selectedParties, setSelectedParties] = useState<Record<string, boolean>>({});

  const options = useMemo(
    () => ({
      tourPurpose: [
        'Party Visit (Order/Payment)',
        'Field Visit (Field Day)',
        'Office Visit',
        'Work From Home',
        'Other',
      ],
      tourType: [
        'In Headquarter',
        'Out Of Headquarter',
        'Same Day Return',
        'Tour With Senior',
        'Work From Home',
        'Other',
      ],
      vehicleType: [
        'Two Wheeler Personal',
        'Four Wheeler Personal',
        'Two Wheel Company',
        'Four Wheel Company',
        'By Other',
        'Multi Vehical',
        'Work From Home',
      ],
    }),
    [],
  );

  const partyItems = useMemo(
    () => [
      '292 - 20 MICRONS LIMITED - BARODA - VADODDARA',
      '292 - 20 MICRONS LIMITED - BARODA - VADODDARA',
      '292 - 20 MICRONS LIMITED - BARODA - VADODDARA',
      '292 - 20 MICRONS LIMITED - BARODA - VADODDARA',
      '292 - 20 MICRONS LIMITED - BARODA - VADODDARA',
      '292 - 20 MICRONS LIMITED - BARODA - VADODDARA',
      '292 - 20 MICRONS LIMITED - BARODA - VADODDARA',
      '292 - 20 MICRONS LIMITED - BARODA - VADODDARA',
    ],
    [],
  );

  const filteredParties = useMemo(() => {
    const q = partySearch.trim().toLowerCase();
    if (!q) return partyItems;
    return partyItems.filter((p) => p.toLowerCase().includes(q));
  }, [partyItems, partySearch]);

  const selectedCount = useMemo(
    () => Object.values(selectedParties).filter(Boolean).length,
    [selectedParties],
  );

  const openPicker = (key: PickerKey) => setPickerOpen(key);

  const setPickerValue = (key: PickerKey, value: string) => {
    if (key === 'tourPurpose') setTourPurpose(value);
    if (key === 'tourType') setTourType(value);
    if (key === 'vehicleType') setVehicleType(value);
    setPickerOpen(null);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIconBtn} activeOpacity={0.8} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios-new" size={20} color="#FFFFFF" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Day Start</Text>

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
        <View style={styles.card}>
          <FieldSelect label="Tour Purpose" value={tourPurpose} onPress={() => openPicker('tourPurpose')} />
          <FieldSelect label="Tour Type" value={tourType} onPress={() => openPicker('tourType')} />
          <FieldSelect label="Vehicle Type" value={vehicleType} onPress={() => openPicker('vehicleType')} />

          <FieldInput label="Vehicle No." value={vehicleNo} onChangeText={setVehicleNo} />
          <FieldInput
            label="Place To Visit (For Multiple Use ' , ' Comma)"
            value={selectedCount ? `${selectedCount} selected` : ''}
            onChangeText={() => {}}
            editable={false}
          />

          <TouchableOpacity
            style={styles.bigButton}
            activeOpacity={0.92}
            onPress={() => setPartyModalOpen(true)}
          >
            <Text style={styles.bigButtonText}>Select Parties To Visit</Text>
          </TouchableOpacity>

          <FieldInput
            label="Opening K . M."
            value={openingKm}
            onChangeText={(v) => setOpeningKm(v.replace(/[^0-9]/g, ''))}
            keyboardType="numeric"
          />

          <View style={styles.cameraWrap}>
            <MaterialCommunityIcons name="camera" size={64} color="#7367F0" />
          </View>

          <View style={styles.actionRow}>
            <TouchableOpacity
              style={[styles.actionBtn, styles.cancelBtn]}
              activeOpacity={0.9}
              onPress={() => navigation.goBack()}
            >
              <Text style={[styles.actionText, styles.cancelText]}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionBtn, styles.startBtn]}
              activeOpacity={0.9}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.actionText}>Day Start Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <AppBottomBar
        activeKey="Home"
        onTabPress={(key) => {
          if (key === 'Home') navigation.replace('Dashboard');
          if (key === 'Track') navigation.replace('Track');
          if (key === 'Reward') navigation.replace('Reward');
          if (key === 'Calendar') navigation.replace('Calendar');
        }}
      />

      <PickerModal
        visible={pickerOpen !== null}
        title="Day Start"
        options={pickerOpen ? options[pickerOpen] : []}
        onCancel={() => setPickerOpen(null)}
        onSelect={(value) => pickerOpen && setPickerValue(pickerOpen, value)}
      />

      <PartySelectModal
        visible={partyModalOpen}
        query={partySearch}
        onQueryChange={setPartySearch}
        items={filteredParties}
        selected={selectedParties}
        onToggle={(item) => setSelectedParties((s) => ({ ...s, [item]: !s[item] }))}
        onCancel={() => setPartyModalOpen(false)}
      />
    </SafeAreaView>
  );
}

function FieldSelect({ label, value, onPress }: { label: string; value: string; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.field} activeOpacity={0.9} onPress={onPress}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <View style={styles.fieldRow}>
        <Text style={styles.fieldValue}>{value}</Text>
        <MaterialIcons name="keyboard-arrow-down" size={22} color="#7367F0" />
      </View>
    </TouchableOpacity>
  );
}

function FieldInput({
  label,
  value,
  onChangeText,
  keyboardType,
  editable = true,
}: {
  label: string;
  value: string;
  onChangeText: (v: string) => void;
  keyboardType?: 'default' | 'numeric' | 'phone-pad';
  editable?: boolean;
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TextInput
        style={[styles.input, !editable && styles.inputDisabled]}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        editable={editable}
      />
    </View>
  );
}

function PickerModal({
  visible,
  title,
  options,
  onCancel,
  onSelect,
}: {
  visible: boolean;
  title: string;
  options: string[];
  onCancel: () => void;
  onSelect: (value: string) => void;
}) {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalSheet}>
          <View style={styles.modalHeader}>
            <TouchableOpacity style={styles.modalBack} activeOpacity={0.8} onPress={onCancel}>
              <MaterialIcons name="arrow-back-ios-new" size={18} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>{title}</Text>
            <View style={{ width: 40 }} />
          </View>

          <ScrollView contentContainerStyle={styles.modalList}>
            {options.map((opt) => (
              <TouchableOpacity
                key={opt}
                style={styles.modalItem}
                activeOpacity={0.85}
                onPress={() => onSelect(opt)}
              >
                <Text style={styles.modalItemText}>{opt}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TouchableOpacity style={styles.modalCancelBtn} activeOpacity={0.9} onPress={onCancel}>
            <Text style={styles.modalCancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

function PartySelectModal({
  visible,
  query,
  onQueryChange,
  items,
  selected,
  onToggle,
  onCancel,
}: {
  visible: boolean;
  query: string;
  onQueryChange: (v: string) => void;
  items: string[];
  selected: Record<string, boolean>;
  onToggle: (item: string) => void;
  onCancel: () => void;
}) {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalSheet}>
          <View style={styles.modalHeader}>
            <TouchableOpacity style={styles.modalBack} activeOpacity={0.8} onPress={onCancel}>
              <MaterialIcons name="arrow-back-ios-new" size={18} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Day Start</Text>
            <View style={{ width: 40 }} />
          </View>

          <View style={styles.partySearchWrap}>
            <TextInput
              style={styles.partySearchInput}
              placeholder="Search Dealer"
              placeholderTextColor="#8E8E8E"
              value={query}
              onChangeText={onQueryChange}
            />
            <MaterialIcons name="search" size={22} color="#7367F0" />
          </View>

          <ScrollView contentContainerStyle={styles.partyList}>
            {items.map((item, idx) => {
              const checked = !!selected[item];
              return (
                <TouchableOpacity
                  key={`${item}-${idx}`}
                  style={styles.partyRowItem}
                  activeOpacity={0.85}
                  onPress={() => onToggle(item)}
                >
                  <MaterialCommunityIcons
                    name={checked ? 'checkbox-marked-outline' : 'checkbox-blank-outline'}
                    size={22}
                    color="#7367F0"
                  />
                  <Text style={styles.partyRowText}>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <TouchableOpacity style={styles.modalCancelBtn} activeOpacity={0.9} onPress={onCancel}>
            <Text style={styles.modalCancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    paddingBottom: 120,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 14,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 6,
  },
  field: {
    borderWidth: 1,
    borderColor: '#7367F0',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 12,
  },
  fieldLabel: {
    color: '#7367F0',
    fontWeight: '800',
    fontSize: 12,
    marginBottom: 6,
  },
  fieldRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fieldValue: {
    color: '#7367F0',
    fontWeight: '800',
    fontSize: 18,
    flex: 1,
    marginRight: 10,
  },
  input: {
    height: 44,
    fontSize: 16,
    fontWeight: '700',
    color: '#7367F0',
  },
  inputDisabled: {
    opacity: 0.8,
  },
  bigButton: {
    backgroundColor: '#7367F0',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  bigButtonText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 18,
  },
  cameraWrap: {
    marginTop: 4,
    marginBottom: 14,
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
  },
  actionRow: {
    flexDirection: 'row',
    gap: 12,
  },
  actionBtn: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelBtn: {
    backgroundColor: '#7367F0',
  },
  startBtn: {
    backgroundColor: '#7367F0',
  },
  actionText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 16,
  },
  cancelText: {
    opacity: 0.95,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.15)',
    paddingTop: 0,
  },
  modalSheet: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  modalHeader: {
    backgroundColor: '#7367F0',
    paddingHorizontal: 14,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalBack: {
    width: 40,
    height: 40,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitle: {
    flex: 1,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },
  modalList: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 24,
  },
  modalItem: {
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
  modalItemText: {
    color: '#7367F0',
    fontWeight: '900',
    fontSize: 20,
  },
  modalCancelBtn: {
    backgroundColor: '#7367F0',
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCancelText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 18,
  },
  partySearchWrap: {
    margin: 16,
    borderWidth: 1,
    borderColor: '#7367F0',
    borderRadius: 14,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
  },
  partySearchInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: '800',
    color: '#7367F0',
  },
  partyList: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  partyRowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
  partyRowText: {
    flex: 1,
    fontSize: 12,
    fontWeight: '900',
    color: '#7367F0',
    lineHeight: 16,
  },
});

import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'OTP'>;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [phone, setPhone] = useState('');

  const isPhoneValid = phone.length >= 10;

  return (
    <View style={styles.container}>
      <View style={styles.hero}> 
        <Text style={styles.heroTitle}>AMPL Fieldwork</Text>
        <Text style={styles.heroSubtitle}>Fast login with OTP and smooth daily reporting.</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.iconWrapper}>
          <MaterialIcons name="smartphone" size={40} color="#ffffff" />
        </View>
        <Text style={styles.title}>Login to your account</Text>
        <Text style={styles.subtitle}>Enter your mobile number and we will send an OTP for quick access.</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="9876543210"
            placeholderTextColor="#9ca3af"
            value={phone}
            onChangeText={(value) => setPhone(value.replace(/[^0-9]/g, ''))}
            maxLength={10}
          />
        </View>

        <TouchableOpacity
          style={[styles.actionButton, !isPhoneValid && styles.actionButtonDisabled]}
          onPress={() => navigation.navigate('OTP', { phone })}
          disabled={!isPhoneValid}
        >
          <Text style={styles.actionText}>Send OTP</Text>
        </TouchableOpacity>

        <Text style={styles.note}>We will send a 6-digit OTP to verify your phone number.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2FF',
    padding: 24,
    justifyContent: 'center',
  },
  hero: {
    backgroundColor: '#7367F0',
    borderRadius: 28,
    padding: 28,
    marginBottom: 22,
    shadowColor: '#7367F0',
    shadowOpacity: 0.18,
    shadowRadius: 20,
    elevation: 10,
  },
  heroTitle: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 10,
  },
  heroSubtitle: {
    color: '#dcd7ff',
    fontSize: 15,
    lineHeight: 22,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 28,
    padding: 28,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 8,
  },
  iconWrapper: {
    alignSelf: 'center',
    backgroundColor: '#7367F0',
    padding: 16,
    borderRadius: 18,
    marginBottom: 22,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    marginBottom: 10,
    fontSize: 15,
    fontWeight: '600',
    color: '#374151',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 18,
    padding: 16,
    backgroundColor: '#f9fafb',
    fontSize: 16,
    color: '#111827',
  },
  actionButton: {
    backgroundColor: '#7367F0',
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#7367F0',
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 6,
  },
  actionButtonDisabled: {
    backgroundColor: '#c7d2fe',
    shadowOpacity: 0,
  },
  actionText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  note: {
    marginTop: 16,
    color: '#6b7280',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
});

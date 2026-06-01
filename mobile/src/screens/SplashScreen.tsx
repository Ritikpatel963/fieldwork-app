import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';

type SplashScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function SplashScreen() {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    const t = setTimeout(() => {
      navigation.replace('Login');
    }, 1200);

    return () => clearTimeout(t);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoWrap}>
        {/* TODO: Replace with your uploaded logo image from /mobile/assets */}
        <MaterialIcons name="terrain" size={54} color="#FFFFFF" />
      </View>
      <Text style={styles.title}>AMPL SOLUTION</Text>
      <Text style={styles.subtitle}>Fieldwork App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7367F0',
  },
  logoWrap: {
    width: 110,
    height: 110,
    borderRadius: 28,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  subtitle: {
    marginTop: 6,
    color: 'rgba(255,255,255,0.86)',
    fontSize: 13,
    fontWeight: '600',
  },
});


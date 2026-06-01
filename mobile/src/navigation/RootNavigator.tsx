import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/DashboardScreen';
import TrackScreen from '../screens/TrackScreen';
import RewardScreen from '../screens/RewardScreen';
import CalendarScreen from '../screens/CalendarScreen';
import DayStartScreen from '../screens/DayStartScreen';
import DealerListScreen from '../screens/DealerListScreen';
import LoginScreen from '../screens/LoginScreen';
import OTPScreen from '../screens/OTPScreen';
import SplashScreen from '../screens/SplashScreen';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  OTP: {
    phone: string;
  };
  Dashboard: undefined;
  DayStart: undefined;
  DealerList: undefined;
  Track: undefined;
  Reward: undefined;
  Calendar: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="DayStart" component={DayStartScreen} />
      <Stack.Screen name="DealerList" component={DealerListScreen} />
      <Stack.Screen name="Track" component={TrackScreen} />
      <Stack.Screen name="Reward" component={RewardScreen} />
      <Stack.Screen name="Calendar" component={CalendarScreen} />
    </Stack.Navigator>
  );
}

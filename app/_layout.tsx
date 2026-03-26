import '../global.css';
import { Stack } from 'expo-router';
import { Auth0Provider } from 'react-native-auth0';

export default function RootLayout() {
  return (
    <Auth0Provider domain={process.env.EXPO_PUBLIC_AUTH0_DOMAIN as string} clientId={process.env.EXPO_PUBLIC_AUTH0_CLIENT_ID as string}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="register/index" options={{ headerShown: false }} />
      </Stack>
    </Auth0Provider>
  );
}

import { Text, View, Button } from 'react-native';
import { useAuth0 } from 'react-native-auth0';
import { loginManager } from '../manager/LoginManager';

export default function Login() {
  const { user, isLoading } = useAuth0();

  const onLogin = async () => {
    try {
      await loginManager.login();
    } catch (e) {
      console.log('Login error', e);
    }
  };

  const onLogout = async () => {
    try {
      await loginManager.logout();
    } catch (e) {
      console.log('Logout error', e);
    }
  };

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-900">
        <Text className="text-xl text-gray-100">Loading...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 justify-center items-center bg-gray-900">
      <Text className="text-2xl font-bold text-gray-100 mb-4">Luther</Text>
      {user ? (
        <View className="items-center">
          <Text className="text-lg text-green-400 mb-4">Logged in as {user?.name || 'User'}</Text>
          <Button title="Logout" onPress={onLogout} color="#EF4444" />
        </View>
      ) : (
        <View className="items-center">
          <Text className="text-lg text-gray-400 mb-4">Not logged in</Text>
          <Button title="Login with Auth0" onPress={onLogin} color="#3B82F6" />
        </View>
      )}
    </View>
  );
}

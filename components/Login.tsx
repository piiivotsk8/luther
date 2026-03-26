import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useAuth0 } from 'react-native-auth0';
import { useRouter } from 'expo-router';
import { loginManager } from '../manager/LoginManager';
import { LoginForm } from '../interfaces/LoginForm';
import { INITIAL_LOGIN_FORM } from '@/constans/login/initialLoginForm';

export default function Login() {
  const { user, isLoading } = useAuth0();
  const router = useRouter();
  const [form, setForm] = useState<LoginForm>(INITIAL_LOGIN_FORM);

  const handleChange = (field: keyof LoginForm, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const onLogin = async () => {
    try {
      await loginManager.login();
    } catch (e) {
      console.log('Login error', e);
    }
  };

  const onManualLogin = () => {
    if (!form.email || !form.contrasena) {
      Alert.alert('Error', 'Por favor ingresa tu email y contraseña.');
      return;
    }
    // TODO: handle manual login logic
    console.log('Login manual:', form.email);
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
    <View className="flex-1 justify-center items-center bg-gray-900 px-6">
      <Text className="text-2xl font-bold text-gray-100 mb-8">Luther</Text>

      {user ? (
        <View className="w-full items-center">
          <Text className="text-lg text-green-400 mb-6">Logged in as {user?.name || 'User'}</Text>
          <TouchableOpacity
            onPress={onLogout}
            className="w-full bg-red-500 rounded-lg py-3 items-center mb-4"
          >
            <Text className="text-white font-semibold text-base">Cerrar sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push('/register' as any)}
            className="w-full border border-blue-500 rounded-lg py-3 items-center"
          >
            <Text className="text-blue-400 font-semibold text-base">Crear cuenta</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View className="w-full">
          {/* Email */}
          <View className="mb-4">
            <Text className="text-gray-400 text-sm mb-1">Email</Text>
            <TextInput
              className="w-full bg-gray-800 text-gray-100 rounded-lg px-4 py-3 border border-gray-700"
              placeholder="correo@ejemplo.com"
              placeholderTextColor="#6B7280"
              keyboardType="email-address"
              autoCapitalize="none"
              value={form.email}
              onChangeText={v => handleChange('email', v)}
            />
          </View>

          {/* Contraseña */}
          <View className="mb-6">
            <Text className="text-gray-400 text-sm mb-1">Contraseña</Text>
            <TextInput
              className="w-full bg-gray-800 text-gray-100 rounded-lg px-4 py-3 border border-gray-700"
              placeholder="••••••••"
              placeholderTextColor="#6B7280"
              secureTextEntry
              value={form.contrasena}
              onChangeText={v => handleChange('contrasena', v)}
            />
          </View>

          {/* Botón login manual */}
          <TouchableOpacity
            onPress={onManualLogin}
            className="w-full bg-blue-600 rounded-lg py-3 items-center mb-4"
          >
            <Text className="text-white font-semibold text-base">Iniciar sesión</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View className="flex-row items-center w-full my-2">
            <View className="flex-1 h-px bg-gray-700" />
            <Text className="text-gray-500 mx-3 text-xs">O</Text>
            <View className="flex-1 h-px bg-gray-700" />
          </View>

          {/* Botón Auth0 */}
          <TouchableOpacity
            onPress={onLogin}
            className="w-full border border-blue-500 rounded-lg py-3 items-center mb-4 mt-2"
          >
            <Text className="text-blue-400 font-semibold text-base">Iniciar sesión con Auth0</Text>
          </TouchableOpacity>

          {/* Ir a registro */}
          <TouchableOpacity
            onPress={() => router.push('/register' as any)}
            className="w-full border border-gray-600 rounded-lg py-3 items-center"
          >
            <Text className="text-gray-400 font-semibold text-base">Crear cuenta</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

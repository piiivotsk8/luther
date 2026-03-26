import { useState } from 'react';
import { RegisterForm } from '../interfaces/RegisterForm';
import { Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { INITIAL_REGISTER_FORM } from '@/constans/register/initialRegisterForm';
import { useRouter } from 'expo-router';

export default function Register() {
  const [form, setForm] = useState<RegisterForm>(INITIAL_REGISTER_FORM);
  const router = useRouter();

  const handleChange = (field: keyof RegisterForm, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const onRegister = () => {
    const { nombre, email, telefono, contrasena, repetirContrasena } = form;
    if (!nombre || !email || !telefono || !contrasena || !repetirContrasena) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }
    if (contrasena !== repetirContrasena) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }
    // TODO: handle registration logic
    console.log('Registrando:', { nombre, email, telefono });
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 justify-center items-center bg-gray-900 px-6 py-10">
        <Text className="text-2xl font-bold text-gray-100 mb-2">Crear cuenta</Text>
        <Text className="text-sm text-gray-400 mb-8">Regístrate para continuar</Text>

        {/* Nombre */}
        <View className="w-full mb-4">
          <Text className="text-gray-400 text-sm mb-1">Nombre</Text>
          <TextInput
            className="w-full bg-gray-800 text-gray-100 rounded-lg px-4 py-3 border border-gray-700"
            placeholder="Tu nombre completo"
            placeholderTextColor="#6B7280"
            value={form.nombre}
            onChangeText={v => handleChange('nombre', v)}
          />
        </View>

        {/* Email */}
        <View className="w-full mb-4">
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

        {/* Teléfono */}
        <View className="w-full mb-4">
          <Text className="text-gray-400 text-sm mb-1">Número de teléfono</Text>
          <TextInput
            className="w-full bg-gray-800 text-gray-100 rounded-lg px-4 py-3 border border-gray-700"
            placeholder="+52 000 000 0000"
            placeholderTextColor="#6B7280"
            keyboardType="phone-pad"
            value={form.telefono}
            onChangeText={v => handleChange('telefono', v)}
          />
        </View>

        {/* Contraseña */}
        <View className="w-full mb-4">
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

        {/* Repetir Contraseña */}
        <View className="w-full mb-8">
          <Text className="text-gray-400 text-sm mb-1">Repetir contraseña</Text>
          <TextInput
            className="w-full bg-gray-800 text-gray-100 rounded-lg px-4 py-3 border border-gray-700"
            placeholder="••••••••"
            placeholderTextColor="#6B7280"
            secureTextEntry
            value={form.repetirContrasena}
            onChangeText={v => handleChange('repetirContrasena', v)}
          />
        </View>

        {/* Botón Registrarse */}
        <TouchableOpacity
          className="w-full bg-blue-600 rounded-lg py-3 items-center mb-4"
          onPress={onRegister}
          activeOpacity={0.8}
        >
          <Text className="text-white font-semibold text-base">Registrarse</Text>
        </TouchableOpacity>

        {/* Botón volver a Login */}
        <TouchableOpacity
          className="w-full border border-gray-600 rounded-lg py-3 items-center"
          onPress={() => router.back()}
          activeOpacity={0.8}
        >
          <Text className="text-gray-400 font-semibold text-base">Ya tengo cuenta</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

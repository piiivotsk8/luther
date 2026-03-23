import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-900 gap-6">
      <Text className="text-2xl font-bold text-gray-100">Luther</Text>

      <Link href="/loan" className="text-blue-400 mt-4">loan view</Link>
    </View>
  );
}

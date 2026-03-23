import React from 'react';
import { View, Text, Switch } from 'react-native';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';

interface SwitchFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
}

export const SwitchField = <T extends FieldValues>({
  name,
  control,
  label
}: SwitchFieldProps<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onChange, value } }) => (
      <View className="flex-row items-center justify-between mb-4 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <Text className="text-gray-700 flex-1 pr-4 font-medium">{label}</Text>
        <Switch value={value} onValueChange={onChange} trackColor={{ true: '#2563eb' }} />
      </View>
    )}
  />
);

import React from 'react';
import { View, Text, TextInput, KeyboardTypeOptions } from 'react-native';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';

interface InputFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  disabled?: boolean;
}

export const InputField = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder = '',
  keyboardType = 'default',
  disabled = false
}: InputFieldProps<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
      <View className="mb-4">
        <Text className="text-gray-700 font-medium mb-1">{label}</Text>
        <TextInput
          className={`border rounded-xl px-4 py-3 bg-white text-gray-900
            ${error ? 'border-red-500' : 'border-gray-200'}
            ${disabled ? 'bg-gray-100 text-gray-400' : ''}
          `}
          placeholder={placeholder || label}
          placeholderTextColor="#9ca3af"
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          keyboardType={keyboardType}
          editable={!disabled}
        />
        {error && <Text className="text-red-500 text-xs mt-1">{error.message}</Text>}
      </View>
    )}
  />
);

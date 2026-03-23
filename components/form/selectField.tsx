import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';

interface SelectFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  options: string[];
}

export const SelectField = <T extends FieldValues>({
  name,
  control,
  label,
  options
}: SelectFieldProps<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onChange, value }, fieldState: { error } }) => (
      <View className="mb-4">
        <Text className="text-gray-700 font-medium mb-2">{label}</Text>
        <View className="flex-row flex-wrap gap-2">
          {options.map((opt: string) => (
            <Pressable
              key={opt}
              onPress={() => onChange(opt)}
              className={`px-4 py-2 border rounded-full 
                ${value === opt ? 'bg-blue-600 border-blue-600' : 'border-gray-300 bg-white'}
              `}
            >
              <Text className={`${value === opt ? 'text-white' : 'text-gray-700'} font-medium`}>{opt}</Text>
            </Pressable>
          ))}
        </View>
        {error && <Text className="text-red-500 text-xs mt-1">{error.message}</Text>}
      </View>
    )}
  />
);

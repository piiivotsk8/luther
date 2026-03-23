import React from 'react';
import { View, Text } from 'react-native';
import { InputField } from '../form/inputField';
import { SelectField } from '../form/selectField';
import { Control } from 'react-hook-form';
import { LoanWizardForm } from '../../utils/schemas/loan';

export const EmploymentData = ({ control }: { control: Control<LoanWizardForm> }) => (
  <View>
    <Text className="text-2xl font-bold text-gray-900 mb-6">Employment Data</Text>
    <SelectField control={control} name="occupation" label="Occupation" options={['Employed', 'Pensioner', 'Independent']} />
    <SelectField control={control} name="companyName" label="Company Name" options={['Company A', 'Company B', 'Colpensiones', 'Fiduprevisora']} />
    <InputField control={control} name="position" label="Position (Optional)" />
    <InputField control={control} name="seniority" label="Seniority (Optional)" />
    <InputField control={control} name="workAddress" label="Work Address (Optional)" />
    <InputField control={control} name="workCity" label="Work City (Optional)" />
    <InputField control={control} name="workPhone" label="Work Phone (Optional)" keyboardType="phone-pad" />
  </View>
);

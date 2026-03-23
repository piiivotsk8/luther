import React from 'react';
import { View, Text } from 'react-native';
import { InputField } from '../form/inputField';
import { SelectField } from '../form/selectField';
import { Control } from 'react-hook-form';
import { LoanWizardForm } from '../../utils/schemas/loan';

export const CreditData = ({ control }: { control: Control<LoanWizardForm> }) => (
  <View>
    <Text className="text-2xl font-bold text-gray-900 mb-6">Credit Data</Text>
    <InputField control={control} name="requestedAmount" label="Requested Amount" keyboardType="numeric" />
    <InputField control={control} name="termInMonths" label="Term (months)" keyboardType="numeric" />
    <SelectField control={control} name="creditLine" label="Credit Line" options={['Colpensiones', 'Fiduprevisora', 'CREMIL', 'CASUR']} />
    <InputField control={control} name="monthlyInstallment" label="Monthly Installment" disabled />
    <InputField control={control} name="interestRate" label="Interest Rate" disabled />
    <InputField control={control} name="creditStudyCost" label="Credit Study Cost" disabled />
  </View>
);

import React from 'react';
import { View, Text } from 'react-native';
import { InputField } from '../form/inputField';
import { SelectField } from '../form/selectField';
import { Control } from 'react-hook-form';
import { LoanWizardForm } from '../../utils/schemas/loan';

export const DisbursementData = ({ control }: { control: Control<LoanWizardForm> }) => (
  <View>
    <Text className="text-2xl font-bold text-gray-900 mb-6">Disbursement Data</Text>
    <SelectField control={control} name="paymentMethod" label="Payment Method" options={['ACH Transfer', 'Cash']} />
    <InputField control={control} name="bank" label="Bank" />
    <SelectField control={control} name="accountType" label="Account Type" options={['Savings', 'Checking']} />
    <InputField control={control} name="accountNumber" label="Account Number" keyboardType="numeric" />
  </View>
);

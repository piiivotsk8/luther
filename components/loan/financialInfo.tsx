import React from 'react';
import { View, Text } from 'react-native';
import { InputField } from '../form/inputField';
import { Control } from 'react-hook-form';
import { LoanWizardForm } from '../../utils/schemas/loan';

export const FinancialInfo = ({ control }: { control: Control<LoanWizardForm> }) => (
  <View>
    <Text className="text-2xl font-bold text-gray-900 mb-6">Financial Info</Text>
    <Text className="text-lg font-bold text-gray-800 mt-2 mb-2">Income</Text>
    <InputField control={control} name="salaryIncome" label="Salary" keyboardType="numeric" />
    <InputField control={control} name="otherIncome" label="Other Income" keyboardType="numeric" />
    <InputField control={control} name="totalIncome" label="Total Income" keyboardType="numeric" />

    <Text className="text-lg font-bold text-gray-800 mt-4 mb-2">Expenses</Text>
    <InputField control={control} name="familyExpenses" label="Family Expenses" keyboardType="numeric" />
    <InputField control={control} name="loanInstallments" label="Loan Installments" keyboardType="numeric" />
    <InputField control={control} name="rentExpenses" label="Rent Expenses" keyboardType="numeric" />
    <InputField control={control} name="totalExpenses" label="Total Expenses" keyboardType="numeric" />

    <Text className="text-lg font-bold text-gray-800 mt-4 mb-2">Balance</Text>
    <InputField control={control} name="totalAssets" label="Total Assets" keyboardType="numeric" />
    <InputField control={control} name="totalLiabilities" label="Total Liabilities" keyboardType="numeric" />
  </View>
);

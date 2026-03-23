import React from 'react';
import { View, Text } from 'react-native';
import { InputField } from '../form/inputField';
import { SwitchField } from '../form/switchField';
import { Control, UseFormWatch } from 'react-hook-form';
import { LoanWizardForm } from '../../utils/schemas/loan';

export const ComplianceAndInsurance = ({ control, watch }: { control: Control<LoanWizardForm>; watch: UseFormWatch<LoanWizardForm> }) => (
  <View>
    <Text className="text-2xl font-bold text-gray-900 mb-6">Compliance & Insurance</Text>

    <Text className="text-lg font-bold text-gray-800 mt-2 mb-2">PEP Declaration</Text>
    <SwitchField control={control} name="pepHandlesPublicFunds" label="Do you handle public funds?" />
    <SwitchField control={control} name="pepPublicRecognition" label="Do you have public recognition?" />
    <SwitchField control={control} name="pepInternationalOrg" label="Are you a PEP in an international org?" />

    <Text className="text-lg font-bold text-gray-800 mt-4 mb-2">Health</Text>
    <SwitchField control={control} name="healthDiagnosis" label="Do you have a medical diagnosis or illness?" />
    {watch('healthDiagnosis') && (
      <InputField control={control} name="healthDetails" label="Please specify details" />
    )}

    <Text className="text-lg font-bold text-gray-800 mt-4 mb-2">Life Insurance Beneficiaries</Text>
    <InputField control={control} name="beneficiary1Name" label="Beneficiary 1 Name" />
    <InputField control={control} name="beneficiary1Id" label="Beneficiary 1 ID" keyboardType="numeric" />
    <InputField control={control} name="beneficiary2Name" label="Beneficiary 2 Name (Optional)" />
    <InputField control={control} name="beneficiary2Id" label="Beneficiary 2 ID (Optional)" keyboardType="numeric" />
  </View>
);

import React from 'react';
import { View, Text } from 'react-native';
import { InputField } from '../form/inputField';
import { SwitchField } from '../form/switchField';
import { Control, UseFormWatch } from 'react-hook-form';
import { LoanWizardForm } from '../../utils/schemas/loan';

export const AdditionalProfiles = ({ control, watch }: { control: Control<LoanWizardForm>; watch: UseFormWatch<LoanWizardForm> }) => (
  <View>
    <Text className="text-2xl font-bold text-gray-900 mb-6">Additional Profiles</Text>

    <SwitchField control={control} name="hasCoSigner" label="Has Co-Signer?" />
    {watch('hasCoSigner') && (
      <>
        <InputField control={control} name="coSignerName" label="Co-Signer Name" />
        <InputField control={control} name="coSignerId" label="Co-Signer ID" keyboardType="numeric" />
        <InputField control={control} name="coSignerAddress" label="Co-Signer Address (Optional)" />
        <InputField control={control} name="coSignerPhone" label="Co-Signer Phone (Optional)" keyboardType="phone-pad" />
      </>
    )}

    <SwitchField control={control} name="hasSpouse" label="Has Spouse?" />
    {watch('hasSpouse') && (
      <>
        <InputField control={control} name="spouseName" label="Spouse Name" />
        <InputField control={control} name="spouseId" label="Spouse ID (Optional)" keyboardType="numeric" />
        <InputField control={control} name="spouseCompany" label="Spouse Company (Optional)" />
        <InputField control={control} name="spouseIncome" label="Spouse Income (Optional)" keyboardType="numeric" />
      </>
    )}

    <SwitchField control={control} name="hasReferences" label="Has References?" />
    {watch('hasReferences') && (
      <>
        <Text className="font-semibold text-gray-700 mt-2 mb-1">Family Reference</Text>
        <InputField control={control} name="familyReferenceName" label="Name" />
        <InputField control={control} name="familyReferencePhone" label="Phone" keyboardType="phone-pad" />

        <Text className="font-semibold text-gray-700 mt-2 mb-1">Personal Reference</Text>
        <InputField control={control} name="personalReferenceName" label="Name" />
        <InputField control={control} name="personalReferencePhone" label="Phone" keyboardType="phone-pad" />
      </>
    )}

    <SwitchField control={control} name="hasPortfolioPurchase" label="Has Portfolio Purchase?" />
    {watch('hasPortfolioPurchase') && (
      <>
        <InputField control={control} name="portfolioPurchaseEntity" label="Entity" />
        <InputField control={control} name="portfolioPurchaseQuota" label="Quota (Optional)" keyboardType="numeric" />
        <InputField control={control} name="portfolioPurchaseBalance" label="Balance (Optional)" keyboardType="numeric" />
      </>
    )}
  </View>
);

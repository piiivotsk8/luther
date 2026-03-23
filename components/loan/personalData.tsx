import React from 'react';
import { View, Text } from 'react-native';
import { InputField } from '../form/inputField';
import { SelectField } from '../form/selectField';
import { Control } from 'react-hook-form';
import { LoanWizardForm } from '../../utils/schemas/loan';

export const PersonalData = ({ control }: { control: Control<LoanWizardForm> }) => (
  <View>
    <Text className="text-2xl font-bold text-gray-900 mb-6">Personal Data</Text>
    <InputField control={control} name="fullName" label="Full Name" />
    <SelectField control={control} name="documentType" label="Document Type" options={['CC', 'CE']} />
    <InputField control={control} name="documentNumber" label="Document Number" keyboardType="numeric" />
    <InputField control={control} name="issueDate" label="Issue Date" />
    <InputField control={control} name="issueLocation" label="Issue Location" />
    <InputField control={control} name="birthDate" label="Birth Date" />
    <InputField control={control} name="age" label="Age" keyboardType="numeric" />

    <Text className="text-lg font-bold text-gray-800 mt-4 mb-2">Additional Info</Text>
    <SelectField control={control} name="gender" label="Gender (Optional)" options={['M', 'F', 'Other']} />
    <InputField control={control} name="height" label="Height (Optional)" />
    <InputField control={control} name="weight" label="Weight (Optional)" />
    <InputField control={control} name="maritalStatus" label="Marital Status (Optional)" />

    <Text className="text-lg font-bold text-gray-800 mt-4 mb-2">Contact Info</Text>
    <InputField control={control} name="address" label="Address" />
    <InputField control={control} name="neighborhood" label="Neighborhood" />
    <InputField control={control} name="city" label="City" />
    <InputField control={control} name="state" label="State" />
    <InputField control={control} name="homePhone" label="Home Phone" keyboardType="phone-pad" />
    <InputField control={control} name="mobilePhone" label="Mobile Phone" keyboardType="phone-pad" />
    <InputField control={control} name="email" label="Email" keyboardType="email-address" />
  </View>
);

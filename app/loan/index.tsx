import { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';
import { Stack, router } from 'expo-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loanWizardSchema, LoanWizardForm, LoanWizardOutput, stepFields } from '../../utils/schemas/loan';

// Sections
import { CreditData } from '../../components/loan/creditData';
import { PersonalData } from '../../components/loan/personalData';
import { EmploymentData } from '../../components/loan/employmentData';
import { FinancialInfo } from '../../components/loan/financialInfo';
import { DisbursementData } from '../../components/loan/disbursementData';
import { ComplianceAndInsurance } from '../../components/loan/complianceAndInsurance';
import { AdditionalProfiles } from '../../components/loan/additionalProfiles';

export default function LoanWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = stepFields.length;

  const { control, handleSubmit, trigger, watch } = useForm<LoanWizardForm, unknown, LoanWizardOutput>({
    resolver: zodResolver(loanWizardSchema),
    mode: 'onChange',
    defaultValues: {
      monthlyInstallment: '$0',
      interestRate: '2.5% M.E.',
      creditStudyCost: '$0 COP'
    }
  });

  const nextStep = async () => {
    const fieldsToValidate = stepFields[currentStep - 1];
    const isStepValid = await trigger(fieldsToValidate);

    if (isStepValid) {
      if (currentStep < totalSteps) {
        setCurrentStep(prev => prev + 1);
      } else {
        handleSubmit(onSubmit)();
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const onSubmit = (data: LoanWizardOutput) => {
    console.log('Form Finished', data);
    Alert.alert('Success', 'Application submitted correctly', [
      { text: 'Finish', onPress: () => router.push('/') }
    ]);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <CreditData control={control} />;
      case 2: return <PersonalData control={control} />;
      case 3: return <EmploymentData control={control} />;
      case 4: return <FinancialInfo control={control} />;
      case 5: return <DisbursementData control={control} />;
      case 6: return <ComplianceAndInsurance control={control} watch={watch} />;
      case 7: return <AdditionalProfiles control={control} watch={watch} />;
    }
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-gray-50"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Stack.Screen options={{ title: 'New Application' }} />

      {/* Visual progress bar */}
      <View className="bg-white px-6 pt-6 pb-4 border-b border-gray-200">
        <View className="flex-row justify-between mb-2">
          <Text className="text-sm font-semibold text-blue-600">Step {currentStep} of {totalSteps}</Text>
          <Text className="text-sm font-medium text-gray-500">{Math.round((currentStep / totalSteps) * 100)}% Completed</Text>
        </View>
        <View className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <View
            className="h-full bg-blue-600 rounded-full"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </View>
      </View>

      <ScrollView
        className="flex-1 px-6 pt-6 mb-24"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {renderStep()}
        {/* Extra space at the end for smooth scrolling with keyboard */}
        <View className="h-10" />
      </ScrollView>

      {/* Fixed Bottom Bar */}
      <View className="absolute bottom-0 w-full bg-white border-t border-gray-200 p-6 pb-10 flex-row justify-between">
        <Pressable
          className={`flex-1 mr-2 items-center justify-center py-4 rounded-xl border ${currentStep === 1 ? 'border-gray-200 bg-gray-100' : 'border-blue-600 bg-white'}`}
          onPress={prevStep}
          disabled={currentStep === 1}
        >
          <Text className={`font-semibold text-lg ${currentStep === 1 ? 'text-gray-400' : 'text-blue-600'}`}>
            Back
          </Text>
        </Pressable>

        <Pressable
          className="flex-1 ml-2 items-center justify-center py-4 rounded-xl bg-blue-600 active:bg-blue-700"
          onPress={nextStep}
        >
          <Text className="font-semibold text-lg text-white">
            {currentStep === totalSteps ? 'Finish' : 'Next'}
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

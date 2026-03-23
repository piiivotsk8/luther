import { z } from 'zod';

export const creditDataSchema = z.object({
  requestedAmount: z.string().min(1, 'Required'),
  termInMonths: z.string().min(1, 'Required'),
  monthlyInstallment: z.string().optional(),
  interestRate: z.string().optional(),
  creditLine: z.string().min(1, 'Required'),
  creditStudyCost: z.string().optional(),
});

export const personalDataSchema = z.object({
  fullName: z.string().min(1, 'Required'),
  documentType: z.string().min(1, 'Required'),
  documentNumber: z.string().min(1, 'Required'),
  issueDate: z.string().min(1, 'Required'),
  issueLocation: z.string().min(1, 'Required'),
  birthDate: z.string().min(1, 'Required'),
  age: z.string().min(1, 'Required'),
  gender: z.string().optional(),
  height: z.string().optional(),
  weight: z.string().optional(),
  maritalStatus: z.string().optional(),
  address: z.string().min(1, 'Required'),
  neighborhood: z.string().min(1, 'Required'),
  city: z.string().min(1, 'Required'),
  state: z.string().min(1, 'Required'),
  homePhone: z.string().min(1, 'Required'),
  mobilePhone: z.string().min(1, 'Required'),
  email: z.email('Invalid email').min(1, 'Required'),
});

export const employmentDataSchema = z.object({
  occupation: z.string().min(1, 'Required'),
  companyName: z.string().min(1, 'Required'),
  position: z.string().optional(),
  seniority: z.string().optional(),
  workAddress: z.string().optional(),
  workCity: z.string().optional(),
  workPhone: z.string().optional(),
});

export const financialInfoSchema = z.object({
  salaryIncome: z.string().min(1, 'Required'),
  otherIncome: z.string().min(1, 'Required'),
  totalIncome: z.string().min(1, 'Required'),
  familyExpenses: z.string().min(1, 'Required'),
  loanInstallments: z.string().min(1, 'Required'),
  rentExpenses: z.string().min(1, 'Required'),
  totalExpenses: z.string().min(1, 'Required'),
  totalAssets: z.string().min(1, 'Required'),
  totalLiabilities: z.string().min(1, 'Required'),
});

export const disbursementDataSchema = z.object({
  paymentMethod: z.string().min(1, 'Required'),
  bank: z.string().min(1, 'Required'),
  accountType: z.string().min(1, 'Required'),
  accountNumber: z.string().min(1, 'Required'),
});

export const complianceSchema = z.object({
  pepHandlesPublicFunds: z.boolean().default(false),
  pepPublicRecognition: z.boolean().default(false),
  pepInternationalOrg: z.boolean().default(false),
  healthDiagnosis: z.boolean().default(false),
  healthDetails: z.string().optional(),
  beneficiary1Name: z.string().min(1, 'Required'),
  beneficiary1Id: z.string().min(1, 'Required'),
  beneficiary2Name: z.string().optional(),
  beneficiary2Id: z.string().optional(),
});

export const additionalProfilesSchema = z.object({
  hasCoSigner: z.boolean().default(false),
  coSignerName: z.string().optional(),
  coSignerId: z.string().optional(),
  coSignerAddress: z.string().optional(),
  coSignerPhone: z.string().optional(),

  hasSpouse: z.boolean().default(false),
  spouseName: z.string().optional(),
  spouseId: z.string().optional(),
  spouseCompany: z.string().optional(),
  spouseIncome: z.string().optional(),

  hasReferences: z.boolean().default(false),
  familyReferenceName: z.string().optional(),
  familyReferencePhone: z.string().optional(),
  personalReferenceName: z.string().optional(),
  personalReferencePhone: z.string().optional(),

  hasPortfolioPurchase: z.boolean().default(false),
  portfolioPurchaseEntity: z.string().optional(),
  portfolioPurchaseQuota: z.string().optional(),
  portfolioPurchaseBalance: z.string().optional(),
});

export const loanWizardSchema = creditDataSchema
  .extend(personalDataSchema.shape)
  .extend(employmentDataSchema.shape)
  .extend(financialInfoSchema.shape)
  .extend(disbursementDataSchema.shape)
  .extend(complianceSchema.shape)
  .extend(additionalProfilesSchema.shape)
  .superRefine((data, ctx) => {
    if (data.healthDiagnosis && !data.healthDetails) {
      ctx.addIssue({ code: "custom", path: ['healthDetails'], message: 'Details required' });
    }
    if (data.hasCoSigner) {
      if (!data.coSignerName) ctx.addIssue({ code: "custom", path: ['coSignerName'], message: 'Required' });
      if (!data.coSignerId) ctx.addIssue({ code: "custom", path: ['coSignerId'], message: 'Required' });
    }
    if (data.hasSpouse) {
      if (!data.spouseName) ctx.addIssue({ code: "custom", path: ['spouseName'], message: 'Required' });
    }
    if (data.hasReferences) {
      if (!data.familyReferenceName) ctx.addIssue({ code: "custom", path: ['familyReferenceName'], message: 'Required' });
      if (!data.personalReferenceName) ctx.addIssue({ code: "custom", path: ['personalReferenceName'], message: 'Required' });
    }
    if (data.hasPortfolioPurchase) {
      if (!data.portfolioPurchaseEntity) ctx.addIssue({ code: "custom", path: ['portfolioPurchaseEntity'], message: 'Required' });
    }
  });

export type LoanWizardForm = z.input<typeof loanWizardSchema>;
export type LoanWizardOutput = z.infer<typeof loanWizardSchema>;

export const stepFields: Array<Array<keyof LoanWizardForm>> = [
  [
    'requestedAmount', 'termInMonths', 'monthlyInstallment', 'interestRate',
    'creditLine', 'creditStudyCost'
  ],
  [
    'fullName', 'documentType', 'documentNumber', 'issueDate', 'issueLocation',
    'birthDate', 'age', 'gender', 'height', 'weight', 'maritalStatus', 'address',
    'neighborhood', 'city', 'state', 'homePhone', 'mobilePhone', 'email'
  ],
  [
    'occupation', 'companyName', 'position', 'seniority', 'workAddress',
    'workCity', 'workPhone'
  ],
  [
    'salaryIncome', 'otherIncome', 'totalIncome', 'familyExpenses',
    'loanInstallments', 'rentExpenses', 'totalExpenses', 'totalAssets',
    'totalLiabilities'
  ],
  [
    'paymentMethod', 'bank', 'accountType', 'accountNumber'
  ],
  [
    'pepHandlesPublicFunds', 'pepPublicRecognition', 'pepInternationalOrg',
    'healthDiagnosis', 'healthDetails', 'beneficiary1Name', 'beneficiary1Id',
    'beneficiary2Name', 'beneficiary2Id'
  ],
  [
    'hasCoSigner', 'coSignerName', 'coSignerId', 'coSignerAddress', 'coSignerPhone',
    'hasSpouse', 'spouseName', 'spouseId', 'spouseCompany', 'spouseIncome',
    'hasReferences', 'familyReferenceName', 'familyReferencePhone',
    'personalReferenceName', 'personalReferencePhone', 'hasPortfolioPurchase',
    'portfolioPurchaseEntity', 'portfolioPurchaseQuota', 'portfolioPurchaseBalance'
  ]
];

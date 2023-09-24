interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Vehicle Owner'],
  tenantName: 'Administration',
  applicationName: 'Car Rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage user data',
    'Manage administration data',
    'Manage vehicle data',
    'Manage reservation data',
    'Manage usage tracking data',
    'Manage performance assessment data',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/b626f826-9aad-48ca-bd3d-70017a62eba3',
};

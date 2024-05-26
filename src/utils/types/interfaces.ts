export interface ValidationRule {
    value: boolean | RegExp | number;
    message: string;
  }
  
  export  interface FieldConfig {
    name: string;
    type: string;
    label: string;
    validation: {
      required?: ValidationRule;
      pattern?: ValidationRule;
      minLength?: ValidationRule;
      maxLength?: ValidationRule;
    };
  }
  
  export interface SocialLoginConfig {
    ariaLabel: string;
    text: string;
    logo: string;
    alt: string;
  }
  
  export interface FormConfig {
    title: string;
    subtitle: string;
    formAriaLabel: string;
    enableOrSeparator: boolean;
    forgotPasswordText: string;
    forgotPasswordLink: string;
    submitButtonText: string;
    bottomText: string;
    bottomLinkUrl: string;
    submitButotnClass?:string;
    bottomSecondaryText: string;
    socialLogins?: SocialLoginConfig[];
    fields: FieldConfig[];
  }
  
  export interface DynamicFormProps {
    formConfig: FormConfig;
    onSubmit: (data: any) => void;
  }
  
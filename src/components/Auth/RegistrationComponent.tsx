// Dependencies
import React from 'react'
import { FormConfig } from '../../utils/types/interfaces'

// Components
import DynamicForm from '../DynamicForm'

const RegistrationForm: React.FC = () => {
  const onSubmit = (data: any) => {
    console.log(data)
    // Handle form submission logic here
  }

  const formConfig: FormConfig = {
    title: 'welcome_to_registration',
    subtitle: 'please_fill_in_the_details',
    formAriaLabel: 'registration_form',
    enableOrSeparator: false,
    forgotPasswordText: '',
    forgotPasswordLink: '',
    submitButtonText: 'register',
    submitButotnClass: 'primary-no-my-button',
    bottomLinkUrl: '/login',
    bottomText: 'already_have_account',
    bottomSecondaryText: '',
    fields: [
      {
        name: 'email',
        type: 'email',
        label: 'Email',
        validation: {
          required: { value: true, message: 'Email is required' },
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Invalid email address',
          },
        },
      },
      {
        name: 'password',
        type: 'password',
        label: 'Password',
        validation: {
          required: { value: true, message: 'Password is required' },
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters',
          },
        },
      },
      {
        name: 'confirmPassword',
        type: 'password',
        label: 'Confirm Password',
        validation: {
          required: { value: true, message: 'Confirmation is required' },
          validate: (value: string, context: any) =>
            value === context?.password || 'Passwords do not match',
        },
      },
    ],
  }

  return <DynamicForm formConfig={formConfig} onSubmit={onSubmit} />
}

export default RegistrationForm

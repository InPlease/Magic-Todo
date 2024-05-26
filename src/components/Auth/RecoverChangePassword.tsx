import React from 'react'
import DynamicForm from '../DynamicForm'
import { FormConfig } from '../../utils/types/interfaces'

const PasswordResetForm: React.FC = () => {
  const onSubmit = (data: any) => {
    if (data.newPassword !== data.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    console.log(data)
    // Handle form submission logic here
  }

  const formConfig: FormConfig = {
    title: 'welcome_recover_change_password',
    subtitle: 'subititle_recover_change_password',
    formAriaLabel: 'form_aria_label',
    enableOrSeparator: false,
    submitButtonText: 'reset_password',
    bottomLinkUrl: '/login',
    bottomText: 'back_to_login',
    bottomSecondaryText: '',
    socialLogins: [],
    fields: [
      {
        name: 'newPassword',
        type: 'password',
        label: 'new_password',
        validation: {
          required: { value: true, message: 'new_password_required' },
          minLength: {
            value: 6,
            message: 'password_min_length',
          },
        },
      },
      {
        name: 'confirmPassword',
        type: 'password',
        label: 'confirm_password',
        validation: {
          required: { value: true, message: 'confirm_password_required' },
          minLength: {
            value: 6,
            message: 'password_min_length',
          },
        },
      },
    ],
    forgotPasswordText: '',
    forgotPasswordLink: '',
  }

  return <DynamicForm formConfig={formConfig} onSubmit={onSubmit} />
}

export default PasswordResetForm

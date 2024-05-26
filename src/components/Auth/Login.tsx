import React from 'react'
import DynamicForm from '../DynamicForm'
import googleLogo from '../../assets/icons/google-logo.svg'
import { FormConfig } from '../../utils/types/interfaces'

const LoginForm: React.FC = () => {
  const onSubmit = (data: any) => {
    console.log(data)
    // Handle form submission logic here
  }

  const formConfig: FormConfig = {
    title: 'welcome',
    subtitle: 'subtitle',
    formAriaLabel: 'form_aria_label',
    enableOrSeparator: true,
    forgotPasswordText: 'forgot_password',
    forgotPasswordLink: '#',
    submitButtonText: 'sign_in',
    bottomText: 'sign_up',
    bottomLinkUrl: '#',
    bottomSecondaryText: 'no_account',
    socialLogins: [
      {
        ariaLabel: 'sign_in_with_google',
        text: 'login_with_google',
        logo: googleLogo,
        alt: 'google logo',
      },
    ],
    fields: [
      {
        name: 'email',
        type: 'email',
        label: 'email',
        validation: {
          required: { value: true, message: 'email_required' },
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'invalid_email',
          },
        },
      },
      {
        name: 'password',
        type: 'password',
        label: 'password',
        validation: {
          required: { value: true, message: 'password_required' },
          minLength: {
            value: 6,
            message: 'password_min_length',
          },
        },
      },
    ],
  }

  return (
    <>
      <DynamicForm formConfig={formConfig} onSubmit={onSubmit} />
    </>
  )
}

export default LoginForm

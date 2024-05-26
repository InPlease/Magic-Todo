import React from 'react'
import DynamicForm from '../DynamicForm'
import { FormConfig } from '../../utils/types/interfaces'

const LoginForm: React.FC = () => {
  const onSubmit = (data: any) => {
    console.log(data)
    // Handle form submission logic here
  }
  const formConfig: FormConfig = {
    title: 'welcome_recover_magic_link',
    subtitle: 'subititle_recover_magic_link',
    formAriaLabel: 'form_aria_label',
    enableOrSeparator: false,
    forgotPasswordText: '',
    forgotPasswordLink: '',
    submitButtonText: 'send_magic_link',
    submitButotnClass: 'primary-no-my-button',
    bottomLinkUrl: '/login',
    bottomText: 'back_to_login',
    bottomSecondaryText: '',
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
    ],
  }

  return <DynamicForm formConfig={formConfig} onSubmit={onSubmit} />
}

export default LoginForm

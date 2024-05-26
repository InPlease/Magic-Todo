// Dependencies
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

// Components
import AnimatedShinyTextComponent from './Effects/AnimatedShinyTextComponent'

// Define types for props and form config
import { DynamicFormProps } from '../utils/types/interfaces'

const DynamicForm: React.FC<DynamicFormProps> = ({ formConfig, onSubmit }) => {
  const { t } = useTranslation()
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  return (
    <div className="justify-center items-center flex w-full text-white rounded-lg  overflow-hidden z-[1]">
      <div className="max-w-auth-forms flex-col flex justify-center w-full p-8 lg:w-1/2">
        <div className="form-container">
          <h2 className="form-title sm:sm-form-title xs:xs-form-title lg:base-form-title">
            {t(formConfig.title)}
          </h2>
          <p className="sm:sm-form-subtitle xs:xs-form-subtitle lg:base-form-subtitle form-subtitle">
            {t(formConfig.subtitle)}
          </p>
        </div>

        {formConfig.socialLogins && (
          <div className="text-center">
            {formConfig.socialLogins.map((login: any, index: number) => (
              <div key={index} className="flex justify-center space-x-[10px]">
                <AnimatedShinyTextComponent
                  className="w-full secondary-button-quick-login cursor-pointer p-[11px] opacity-80 hover:opacity-100"
                  children={
                    <button
                      className="flex justify-center space-x-5 items-center duration-buttons-duration"
                      aria-label={t(login.ariaLabel)}
                    >
                      <p>{t(login.text)}</p>
                      <img src={login.logo} alt={login.alt} />
                    </button>
                  }
                />
              </div>
            ))}
          </div>
        )}
        {formConfig.enableOrSeparator && (
          <div className="xs:my-[5px] w-full flex items-center">
            <div className="separator-left"></div>
            <p className="text-sm uppercase text-white">{t('or')}</p>
            <div className="separator-right"></div>
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          aria-label={t(formConfig.formAriaLabel)}
        >
          {formConfig.fields.map((field: any, index: number) => (
            <div key={index} className="form-field-container">
              <label htmlFor={field.name} className="block text-sm">
                {t(field.label)}
              </label>
              <Controller
                name={field.name}
                control={control}
                defaultValue=""
                rules={field.validation}
                render={({ field: controllerField }) => (
                  <input
                    type={field.type}
                    id={field.name}
                    {...controllerField}
                    className="form-input-primary bg-gray"
                    aria-invalid={errors[field.name] ? 'true' : 'false'}
                    aria-describedby={`${field.name}-error`}
                  />
                )}
              />
              {errors[field.name] && (
                <span id={`${field.name}-error`} className="error-message">
                  {t(errors[field.name]?.message as string)}
                </span>
              )}
            </div>
          ))}
          {formConfig.forgotPasswordLink && formConfig.forgotPasswordText && (
            <div className="flex justify-between items-center">
              <a
                href={formConfig.forgotPasswordLink}
                className="font-light text-white underline"
              >
                {t(formConfig.forgotPasswordText)}
              </a>
            </div>
          )}
          <button
            type="submit"
            className={formConfig.submitButotnClass || 'primary-button'}
          >
            {t(formConfig.submitButtonText)}
          </button>
        </form>

        <p className="mt-[20px] xs:xs-bottomTextForm sm:text-sm-bottomTextForm text-center">
          <a
            href={formConfig.bottomLinkUrl}
            className="mr-[5px] ml-[5px] text-orange underline"
          >
            {t(formConfig.bottomText)}
          </a>
          {t(formConfig.bottomSecondaryText)}
        </p>
      </div>
    </div>
  )
}

export default DynamicForm

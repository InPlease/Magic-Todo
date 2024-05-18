import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        task_done: 'Todo done',
        task_done_subtitle: 'YOu can do it!',
        empty_task:
          "Even though you couldn't find any task, you should try to create one yourself :)",
        placeholder_create_task: 'write your next task',
      },
    },
  },
  es: {
    translation: {
      task_done: 'Tareas por terminal',
      task_done_subtitle: 'Tu puedes!',
      empty_task:
        'Aunque no pudiste encontar alguna tarea, deberias intentar crea alguna :)',
      placeholder_create_task: 'escribe tu siguiente tarea',
    },
  },
})

export default i18n

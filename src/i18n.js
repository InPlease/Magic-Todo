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
        task_done_subtitle: 'You can do it!',
        empty_task:
          "Even though you couldn't find any task, you should try to create one yourself :)",
        placeholder_create_task: 'write your next task',
        aria_add_task: 'button to add a new task',
        aria_input_add_task: 'field to add task description',
        alt_not_elements:
          "error image, comedy actor saying 'You need to relax'",
        sort_by_latest: 'Sort by latest',
        sort_by_oldest: 'Sort by oldest',
        sort_by_alpha: 'Sort alphabetically',
        change_language_to_spanish: 'Change language to Spanish',
        change_language_to_english: 'Cambiar idioma a Inglés',
      },
    },
    es: {
      translation: {
        task_done: 'Tareas por terminal',
        task_done_subtitle: 'Tu puedes!',
        empty_task:
          'Aunque no pudiste encontar alguna tarea, deberías intentar crear alguna :)',
        placeholder_create_task: 'escribe tu siguiente tarea',
        aria_add_task: 'botón para agregar una tarea',
        aria_input_add_task: 'campo para agregar la descripción de la tarea',
        alt_not_elements:
          "Gif de error, un actor diciéndote 'Tienes que relajarte'",
        sort_by_latest: 'Ordena desde el más nuevo',
        sort_by_oldest: 'Ordena desde el más viejo',
        sort_by_alpha: 'Ordena alfabéticamente',
        change_language_to_spanish: 'Change language to Spanish',
        change_language_to_english: 'Cambiar idioma a Inglés',
      },
    },
  },
})

export default i18n

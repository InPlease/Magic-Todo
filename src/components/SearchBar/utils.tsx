/**
 * @description
 * This utils are section utils in components
 * it means are no general and we only use them
 * for specific components
 */
import React from 'react'
import { useTranslation } from 'react-i18next'

interface CommandOption {
  command: string
  executeImmediately: boolean
}

const commandOptions: CommandOption[] = [
  { command: '/create', executeImmediately: false },
  { command: '/search', executeImmediately: true },
]

const commandHandlers: Record<string, (query: string) => void> = {
  '/create': (query) => handleCreateCommand(query),
  '/search': (query) => handleSearchCommand(),
}

const commandFormats: Record<string, string> = {
  '/create': '/create: task_name',
  '/search': '/search: keyword',
}

const searchTypos = [
  '/serach',
  '/searh',
  '/saerch',
  '/sarch',
  '/seacrh',
  '/serch',
  '/seach',
  '/seaarch',
  '/searhc',
  '/seahrch',
]

const handleCreateCommand = (correctedQuery: string): void => {
  const taskName = correctedQuery.replace('/create:', '').trim()
  if (taskName) {
    // TODO - Create functionality
    alert(`Creating task: ${taskName}`)
  }
}

const handleSearchCommand = (): void => {
  // TODO - Create search functionality
  alert('Opening search modal...')
}

const getSuggestions = (input: string): string[] => {
  return commandOptions
    .map((opt) => opt.command)
    .filter((cmd) => cmd.startsWith(input))
}

const fuzzyMatchCommand = (input: string): string => {
  const commands = commandOptions.map((opt) => opt.command)
  if (commands.includes(input)) {
    return input
  }

  if (searchTypos.some((typo) => input.startsWith(typo))) {
    return '/search'
  }

  return input
}

const suggetionsExamples: React.FC[] = [
  () => {
    const { t } = useTranslation()
    return (
      <p className="flex ml-1 font-light">
        {t('create_task_example')}
        <span className="text-beige ml-2 font-light">/create: task_name</span>
      </p>
    )
  },
  () => {
    const { t } = useTranslation()
    return <p className="ml-1 font-light">{t('search_task_example')}</p>
  },
]

export {
  commandOptions,
  commandHandlers,
  commandFormats,
  getSuggestions,
  fuzzyMatchCommand,
  suggetionsExamples,
}

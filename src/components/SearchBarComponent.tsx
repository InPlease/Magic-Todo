import React, {
  useState,
  ChangeEvent,
  KeyboardEvent,
  FC,
  useRef,
  useEffect,
} from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import HotKeyIconComponent from './HotKeyIconComponent' // Adjust the import path as needed

const CommandSearchBar: FC = () => {
  const [query, setQuery] = useState<string>('')
  const [showModal, setShowModal] = useState<boolean>(false)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value)
  }

  const fuzzyMatchCommand = (input: string): string => {
    const commands: Record<string, string> = {
      '/create': '/create',
      '/search': '/search',
    }

    // Check if the input is a direct match
    if (input in commands) {
      return commands[input]
    }
    // TODO
    /**
     * This is something that need to comes from backend,
     * we will learn form our users to give a better experience
     * also this is funny
     */
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
    if (searchTypos.some((typo) => input.startsWith(typo))) {
      return '/search'
    }

    return input
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key !== 'Enter') return

    const correctedQuery = fuzzyMatchCommand(query)

    if (correctedQuery.startsWith('/create')) {
      handleCreateCommand(correctedQuery)
    } else if (correctedQuery.startsWith('/search')) {
      handleSearchCommand()
    }

    setQuery('')
  }

  const handleCreateCommand = (correctedQuery: string): void => {
    const taskName = correctedQuery.replace('/create', '').trim()
    if (taskName) {
      createTask(taskName)
    }
  }

  const handleSearchCommand = (): void => {
    setShowModal(true)
  }

  const createTask = (taskName: string): void => {
    alert(`Creating task: ${taskName}`)
    // Implement your create task logic here
  }

  const closeModal = (): void => {
    setShowModal(false)
  }

  // Use hotkeys hook to close modal on 'esc' key press
  useHotkeys(
    'esc',
    () => {
      if (showModal) {
        closeModal()
      }
    },
    [showModal]
  )

  return (
    <div className="relative xs:w-full xs:flex-grow-1 md:flex-grow-[.7]">
      <input
        type="text"
        className="text-white w-full px-4 py-2 border border-gray2 rounded-lg shadow-sm bg-gray rounded-default focus-visible:outline-orange focus-visible:outline focus-visible:outline-2"
        placeholder="Type /create to create a task or /search to search"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {showModal && <SearchModal onClose={closeModal} />}
    </div>
  )
}

interface SearchModalProps {
  onClose: () => void
}

const SearchModal: FC<SearchModalProps> = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [results, setResults] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.target.value)
    // Implement your search logic here and update results
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  useHotkeys('esc', onClose, { enableOnFormTags: ['INPUT'] })

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray rounded-default shadow-lg p-6 w-1/2">
        <div>
          <input
            ref={inputRef}
            type="text"
            className="rounded-default text-white w-full opacity-100 px-4 py-2 border border-gray2 rounded-lg shadow-sm bg-gray2 focus-visible:outline-orange focus-visible:outline focus-visible:outline-2"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <ul className="mt-4 space-y-2">
          {results.length === 0 ? (
            <li className="text-white">No results found.</li>
          ) : (
            results.map((result, index) => (
              <li key={index} className="p-2 border border-gray-200 rounded-lg">
                {result}
              </li>
            ))
          )}
        </ul>
        <HotKeyIconComponent hotKey="ESC" infoMessage="To hide search modal." />
      </div>
    </div>
  )
}

export default CommandSearchBar

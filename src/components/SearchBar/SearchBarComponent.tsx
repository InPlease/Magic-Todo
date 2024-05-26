import React, { useState, ChangeEvent, KeyboardEvent, FC } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import {
  commandOptions,
  commandHandlers,
  commandFormats,
  getSuggestions,
  fuzzyMatchCommand,
  suggetionsExamples,
} from './utils'
import SearchModal from './SearchModal'

const CommandSearchBar: FC = () => {
  const [query, setQuery] = useState<string>('')
  const [showModal, setShowModal] = useState<boolean>(false)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const input = event.target.value
    setQuery(input)

    if (input.startsWith('/')) {
      setSuggestions(getSuggestions(input))
      setHighlightedIndex(-1)
    } else {
      setSuggestions([])
    }
  }

  const handleSearchCommand = (): void => {
    setShowModal(true)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault()
      if (highlightedIndex >= 0) {
        const selectedSuggestion = suggestions[highlightedIndex]
        const selectedOption = commandOptions.find(
          (opt) => opt.command === selectedSuggestion
        )

        if (selectedOption?.executeImmediately) {
          if (selectedOption.command === '/search') {
            handleSearchCommand()
          } else {
            commandHandlers[selectedOption.command]('')
          }
          setQuery('')
        } else {
          setQuery(commandFormats[selectedOption!.command])
        }

        setSuggestions([])
        setHighlightedIndex(-1)
      } else {
        const correctedQuery = fuzzyMatchCommand(query)

        const command = commandOptions.find((opt) =>
          correctedQuery.startsWith(opt.command)
        )
        if (command) {
          if (command.executeImmediately) {
            if (command.command === '/search') {
              handleSearchCommand()
            } else {
              commandHandlers[command.command]('')
            }
            setQuery('')
          } else {
            commandHandlers[command.command](correctedQuery)
          }
        }

        setQuery('')
        setSuggestions([])
      }
    } else if (event.key === 'ArrowDown') {
      event.preventDefault()
      setHighlightedIndex((prevIndex) =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : prevIndex
      )
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setHighlightedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      )
    }
  }

  useHotkeys(
    'enter',
    (event) =>
      handleKeyDown(event as unknown as KeyboardEvent<HTMLInputElement>),
    [query, highlightedIndex]
  )
  useHotkeys(
    'down',
    (event) =>
      handleKeyDown(event as unknown as KeyboardEvent<HTMLInputElement>),
    [query, highlightedIndex]
  )
  useHotkeys(
    'up',
    (event) =>
      handleKeyDown(event as unknown as KeyboardEvent<HTMLInputElement>),
    [query, highlightedIndex]
  )
  useHotkeys(
    'esc',
    () => {
      if (showModal) {
        closeModal()
      }
    },
    [showModal]
  )

  const closeModal = (): void => {
    setShowModal(false)
  }

  return (
    <div className="relative xs:w-full xs:flex-grow-1 md:flex-grow-[.7]">
      <input
        type="text"
        className="border-[none] text-white w-full px-4 py-2 bordershadow-sm bg-gray rounded-default focus-visible:outline-orange focus-visible:outline focus-visible:outline-2"
        placeholder="Type /create to create a task or /search to search"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {suggestions.length > 0 && (
        <ul className="mt-[10px] rounded-default absolute z-10 bg-gray text-white border shadow-lg w-full">
          {suggestions.map((suggestion, index) => {
            const SuggestionComponent = suggetionsExamples[index]
            const selectedOption = commandOptions.find(
              (opt) => opt.command === suggestion
            )

            return (
              <li
                key={index}
                className={`flex items-center text-orange px-4 hover:text-white hover:bg-orange transition-all duration-buttons-duration py-2 cursor-pointer ${
                  index === highlightedIndex ? 'bg-gray2 text-white' : ''
                }`}
                onClick={() => {
                  setSuggestions([])
                  setHighlightedIndex(-1)

                  if (selectedOption?.executeImmediately) {
                    if (selectedOption.command === '/search') {
                      handleSearchCommand()
                    } else {
                      commandHandlers[selectedOption.command]('')
                    }
                    setQuery('')
                  } else {
                    setQuery(commandFormats[selectedOption!.command])
                  }
                }}
              >
                <SuggestionComponent />
              </li>
            )
          })}
        </ul>
      )}
      {showModal && <SearchModal onClose={closeModal} />}
    </div>
  )
}

export default CommandSearchBar

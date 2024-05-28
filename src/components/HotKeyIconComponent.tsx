// Dependencies
import React from 'react'

interface HotKeyIconComponentProps {
  hotKey: string
  infoMessage?: string
}

const HotKeyIconComponent: React.FC<HotKeyIconComponentProps> = ({
  hotKey,
  infoMessage,
}) => {
  return (
    <div className="mt-[20px] flex space-x-2 items-center opacity-40">
      <kbd className="px-2 py-1.5 text-xs font-semibold text-white rounded-default border border-solid border-white opacity-50">
        {hotKey}
      </kbd>
      {infoMessage && (
        <p className="text-white font-extralight">- {infoMessage}</p>
      )}
    </div>
  )
}

export default HotKeyIconComponent

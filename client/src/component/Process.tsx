import React from 'react'
import { ProcessProps } from './types'

const Process: React.FC<ProcessProps> = ({ totalWords, doneWordsCount }) => {
  const calculateProgress = () => {
    if (totalWords === 0) {
      return 0
    }
    return Math.round((doneWordsCount / totalWords) * 100)
  }

  const progress = calculateProgress()
  const completionText = `${progress}% complete`

  return (
    <div>
      <div className='process-bar'>
        <div
          className='process'
          style={{
            width: `${calculateProgress()}%`,
          }}
        />
      </div>
      <p className='complete'>{completionText}</p>
    </div>
  )
}

export default Process

import React from 'react'
import { ProcessProps } from './types'
import CheerMessage from './CheerMessage'

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
      <p>Progress:</p>
      <div style={{ width: '100%', backgroundColor: '#ccc', borderRadius: '4px', height: '20px' }}>
        <div
          style={{
            width: `${calculateProgress()}%`,
            backgroundColor: '#4caf50',
            borderRadius: '4px',
            height: '100%',
          }}
        />
      </div>
      <p>{completionText}</p>
    </div>
  )
}

export default Process

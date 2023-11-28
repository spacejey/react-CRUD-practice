import React from 'react'
import { CheerMessageProps } from './types'

const CheerMessage: React.FC<CheerMessageProps> = ({ progress }) => {
  let message = ''

  if (progress >= 100) {
    message = 'Well Done!'
  } else if (progress >= 80) {
    message = 'Almost Done...'
  } else if (progress >= 50) {
    message = 'Amazing, keep going!'
  } else if (progress >= 30) {
    message = 'Lets go!'
  }

  return message ? <p>{message}</p> : null
}

export default CheerMessage

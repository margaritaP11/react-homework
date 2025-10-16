import React, { useEffect, useRef } from 'react'

const ValueDisplay = ({ value }) => {
  const prevValue = useRef('')

  useEffect(() => {
    if (value.trim() !== '') {
      prevValue.current = value
    }
  }, [value])

  return (
    <div>
      <p>
        Current Value:<strong>{value}</strong>
      </p>
      <p>
        Previous Value:<strong>{prevValue.current}</strong>
      </p>
    </div>
  )
}

export default ValueDisplay

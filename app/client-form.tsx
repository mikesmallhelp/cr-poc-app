'use client'

import { useRef, useState } from 'react'
import { setData } from '@/lib/actions'

export default function ClientForm({ initialData }: { initialData: string | null }) {
  const [currentData, setCurrentData] = useState(initialData)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (inputRef.current) {
      const newValue = inputRef.current.value
      try {
        await setData(newValue)
        setCurrentData(newValue)
        inputRef.current.value = ''
      } catch (e) {
        console.error('Failed to save data', e)
      }
    }
  }

  return (
    <>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Nykyinen arvo:</h2>
        <p className="p-2 bg-gray-100 rounded">{currentData || 'Ei arvoa'}</p>
      </div>
      <form onSubmit={handleSubmit} className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Syötä uusi arvo:</h2>
        <input
          type="text"
          name="data"
          ref={inputRef}
          className="p-2 border rounded mr-2"
          required
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Tallenna
        </button>
      </form>
    </>
  )
}
import { getData } from '@/lib/actions'
import ClientForm from '@/app/client-form'

export default async function Home() {
  let currentData: string | null = null
  let error: string | null = null

  try {
    currentData = await getData()
  } catch (e) {
    error = 'Failed to fetch data'
    console.error(error, e)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">POC-sovellus</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div></div>
      )}
      <ClientForm initialData={currentData} />
    </div>
  )
}
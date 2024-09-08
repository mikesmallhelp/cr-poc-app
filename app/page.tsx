import { getData, setData } from '@/lib/actions';

export default async function Home() {
  let currentData: string | null = null;
  let error: string | null = null;

  try {
    currentData = await getData();
  } catch (e) {
    error = 'Failed to fetch data';
    console.error(error, e);
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">POC-sovellus</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Nykyinen arvo:</h2>
          <p className="p-2 bg-gray-100 rounded">{currentData || 'Ei arvoa'}</p>
        </div>
      )}
      <form action={setData} className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Syötä uusi arvo:</h2>
        <input
          type="text"
          name="data"
          className="p-2 border rounded mr-2"
          required
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Tallenna
        </button>
      </form>
    </div>
  );
}
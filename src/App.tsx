import { useRequest } from './hooks/useRequest'
import { PokemonCard } from './components/PokemonCard'

type Poke = {
  name: string
  url: string
}

const App = () => {
  const { data, error }: { data: { results: Poke[] }, error: any } = useRequest('/pokemon')

  if (error) return <h1>Something went wrong!</h1>
  if (!data) return <h1>Loading...</h1>

  return (
    <main className="max-w-6xl p-4 mx-auto my-8 text-center">
      <h1 className="mb-8 text-3xl text-center text-gray-600 uppercase">Pokedex</h1>
      <div className="grid items-center justify-center gap-6 grid-cols-fit-card">
        {data.results.map(pokemon =>
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        )}
      </div>
    </main>
  )
}
export default App
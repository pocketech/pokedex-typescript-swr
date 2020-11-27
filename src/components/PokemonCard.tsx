import { useRequest } from '../hooks/useRequest'

type Poke = {
    name: string
    url: string
}

export const PokemonCard = ({ pokemon }: { pokemon: Poke }) => {
    const { name } = pokemon
    const { data, error } = useRequest('/pokemon', name)
    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>

    return (
        <div className="relative w-48 p-4 overflow-hidden text-center text-yellow-300 duration-200 ease-in-out bg-white border-t-2 border-b-2 border-red-200 rounded-lg shadow-lg cursor-pointer hover:scale-105">
            <span className="absolute top-0 left-0 w-12 p-1 font-bold text-white bg-red-300 rounded-br-lg">#{data.id}</span>
            <img
                className="block w-40 m-auto"
                src={data.sprites.front_default}
                alt={name}
            />
            <h1 className="text-3xl font-bold text-gray-700 capitalize">{name}</h1>
            <span className="text-xl text-red-300">
                {data.types.map((poke: any) => poke.type.name).join(', ')}
            </span>
        </div>
    )
}
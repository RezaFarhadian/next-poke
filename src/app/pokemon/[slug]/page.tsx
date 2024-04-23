import StatsChart from "@/components/statsChart";
import { capitalizeFirstLetter } from "@/lib/utils"
import Image from "next/image";

async function getPokemonById(slug: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`)
  return res.json()
}

export default async function Pokemon({ params }: any) {
  const { slug } = params
  const pokemon = await getPokemonById(slug)

  return (
    <div className="flex flex-col gap-12 text-center mt-12">
      <div className="flex flex-col gap-4 items-center">
        <Image alt="" width="100" height="100" src={pokemon.sprites.front_default} />
        
        <h1 className="text-4xl">
          <b>
            {capitalizeFirstLetter(pokemon.name)}
          </b>
        </h1>
        <p className="opacity-50">
          Height: {pokemon.height}, Weight: {pokemon.weight}
        </p>
        <StatsChart />
      </div>
    </div>
  )
}

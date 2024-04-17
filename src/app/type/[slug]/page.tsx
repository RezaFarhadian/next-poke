import { capitalizeFirstLetter, getLastSegmentOfURL } from "@/lib/utils"

async function getPokemonsByType(slug: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/type/${slug}`)
  return res.json()
}

export default async function Type({ params }: any) {
  const { slug } = params
  const type = await getPokemonsByType(slug)
  
  return (
    <div className="flex flex-col gap-12 text-center mt-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl">
          <b>
            {capitalizeFirstLetter(type.name)}
          </b>
        </h1>
        <p className="opacity-50">
          Here you can see all {type.name}s pokemons!
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        { type.pokemon.map((pokemon: any, i: number) => (
          <a
            key={i}
            href={`/pokemon/${getLastSegmentOfURL(pokemon.pokemon.url)}`}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-2xl font-semibold">
              {
                capitalizeFirstLetter(pokemon.pokemon.name)
              }{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </a>
        )) }
      </div>
    </div>
  )
}

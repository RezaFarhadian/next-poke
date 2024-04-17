"use client"

import { capitalizeFirstLetter, getLastSegmentOfURL } from "@/lib/utils"
import { useState } from "react"
import { FiSearch } from "react-icons/fi"

export default function Search({ pokemons }: any) {
  const [data, setData] = useState<[]>(pokemons)
  const [searchQuery, setSearchQuery] = useState<string>("")

  const filteredPokemons = pokemons.filter(
    (pokemon: any) =>
      pokemon.name.indexOf(searchQuery) > -1
  )

  return (
    <div className="w-full text-center">
      <div className="
        flex
        flex-col
        gap-2
      ">
        <h1 className="text-3xl">
          <b>Search</b>
        </h1>
        <p className="opacity-50">You can filter pokemons by name</p>
      </div>
      <br />
      <div
        className="
          bg-neutral-800
          flex
          flex-row
          p-4
          gap-4
          rounded-lg
        "
      >
        <FiSearch size={30}/>
        <input className="
          bg-transparent
          outline-none
          border-none
          w-full
        " value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="text" placeholder="Please enter query..." />
      </div>

      <div className="flex flex-wrap justify-center mt-10">
        { searchQuery.length > 0 && filteredPokemons.map((pokemon: any, i: number) => (
          <a
            key={i}
            href={`/pokemon/${getLastSegmentOfURL(pokemon.url)}`}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-2xl font-semibold">
              {
                capitalizeFirstLetter(pokemon.name)
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

import Search from "@/components/search";
import { capitalizeFirstLetter, getLastSegmentOfURL } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";

async function getTypes() {
  const res = await fetch("https://pokeapi.co/api/v2/type/")
  return res.json()
}

async function getAllPokemons() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
  return res.json()
}

export default async function Home() {
  const types = await getTypes()
  const pokemons = await getAllPokemons()

  return (
    <main className="flex flex-col items-center justify-between p-24 gap-28">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none place-items-center flex gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="mailto:irezafarhadian@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/rezafarhadian.svg"
              alt="Reza Farhadian Logo"
              className="dark:invert mt-1"
              width={150}
              height={26}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-rose-200 after:via-pink-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-rose-300 before:dark:opacity-10 after:dark:from-pink-700 after:dark:via-[#be123c] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={230}
          height={37}
          priority
        />
      </div>

      <Search pokemons={pokemons.results} />

      <div className="mb-32 mt-16 lg:mt-0 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {
          types.results.map((type: any, i: number) =>
            <Link
              key={i}
              href={`/type/${getLastSegmentOfURL(type.url)}`}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-2xl font-semibold">
                {
                  capitalizeFirstLetter(type.name)
                }{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              {/*<p className="m-0 max-w-[30ch] text-sm opacity-50">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>*/}
            </Link>
          )
        }
      </div>
    </main>
  );
}

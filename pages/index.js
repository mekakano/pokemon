import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home(data) {
  console.log("isi data gea " + JSON.stringify(data.results));
  const daftarPokemon = data.results;
  const number = 0;
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} bg-no-repeat`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2">
         <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors "
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/pokemon.png"
          alt="Next.js Logo"
          width={250}
          height={70}
          priority
        />
        </a>
      </div>

      


<div className="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {daftarPokemon.map((results, index) => {
              index += 1;
              return (
                <>
               
                  <article
                    key={results.name}
                    className="p-6 mb-6  max-w-sm rounded-2xl shadow-lg transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                  >
                    <Link
                      href={{pathname: "/detailpage", query: {nomor: index, name: results.name}}}
                      className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                    />
                    <div className="relative mb-4 rounded-2xl">
                      <Image
                        width={300}
                        height={300}
                        className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index}.png`}
                        alt=""
                      />
                      
                      <Link
                        className="flex justify-center items-center bg-yellow-500 bg-opacity-80  absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                        href={{pathname: "/detailpage", query: {nomor: index}}}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        See Details
                      </Link>
                    </div>
                    <p className="font-medium text-xl leading-8">
                    <span className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>Pokemon's Name</span>
                      <Link
                        href="https://animeflyx.vercel.app/"
                        className="block relative group-hover:text-yellow-500 transition-colors duration-200 uppercase"
                      >
                        {results.name}
                      </Link>
                    </p>
                  </article>
                </>
              );
            })}
          </div>

    </main>
  )
}



export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await response.json();
  const data2 = data.results;
  console.log("isi data 2 " + JSON.stringify(data2));

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: data
  }
}
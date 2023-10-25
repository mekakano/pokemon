import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import React from "react";

const detailpage = ({data, nomor}) => {
    console.log("nama yuda adalah " + JSON.stringify(data.forms[0].name));
    const name = data.forms[0].name;
    const [openTab, setOpenTab] = React.useState(1);
    const daftarSkill = data.abilities;
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
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
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
    <a href="#">
    <Image
                        width={300}
                        height={300}
                        className="max-h-100 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${nomor}.png`}
                        alt=""
                      />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase text-center">{name}</h5>
        </a>
        <a href="#">
            <h6 class="tracking-widest text-lg title-font font-medium text-gray-400 mb-1 uppercase">Abilities</h6>
        </a>
        <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
        {daftarSkill.map((results, index) => {
              index += 1;
              return (
                <>
               <li className='flex items-center'><svg class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>{results.ability.name}</li>

                </>
              );
            })}
  
</ul>
       
        {/* <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a> */}
    </div>
</div>

        {/* <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
<Image
                        width={300}
                        height={300}
                        className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${nomor}.png`}
                        alt=""
                      />
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>

        <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "inline-block rounded-tl-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-xs font-bold uppercase px-5 py-3 leading-normal " +
                  (openTab === 1
                    ? "text-yellow-600 bg-blueGray-600"
                    : "text-black-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Abilities
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
               className={
                "inline-block rounded-tl-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-xs font-bold uppercase px-5 py-3 leading-normal " +
                (openTab === 2
                  ? "text-yellow-600 bg-blueGray-600"
                  : "text-black-600 bg-white")
              }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Settings
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                    "inline-block rounded-tl-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-xs font-bold uppercase px-5 py-3 leading-normal " +
                    (openTab === 3
                      ? "text-yellow-600 bg-blueGray-600"
                      : "text-black-600 bg-white")
                  }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Options
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto items-center justify-between">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div className="flex justify-center items-center pt-12">
        
        <a
         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
         className="group rounded-lg border border-transparent px-5 py-4 transition-colors "
         target="_blank"
         rel="noopener noreferrer"
       >
        <Image
                        width={300}
                        height={300}
                        className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${nomor}.png`}
                        alt=""
                      />
       </a>
     </div>
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence
                    without revolutionary ROI.
                  </p>
                  
                  
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        
        

    


      

      </div>
  )
}


export default detailpage

export async function getServerSideProps(context) {
    const nomor = context.query.nomor;
    
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+nomor);
    const data = await response.json();
    console.log("isi data pokemon detail " + JSON.stringify(data));
  
    return {
      props: {
        data,
        nomor
      },
    };
  }
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="columns-3lg"> 
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-white flex items-center justify-center h-screen">
          Maria Klopot Polak
        </div>
        <Image
                className="rounded"
                src="/portfolio/me.jpeg"
                alt="me"
                width={1024}
                height={768}
              />
      </div>
      {/* <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
        <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Maria Polak</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Audio Software Developer</p>
          <a href="#"
            className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
            Explore Now</a>
        </div>
        <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
          <div className="h-48 flex flex-wrap content-center">
            <div>
              
            </div>
          </div>
        </div>
      </div> */}
    </section>
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    //       <div className="mr-auto place-self-center lg:col-span-7">
    //           <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Maria Polak</h1>
    //           <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Audio Software Developer</p>
    //           <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg dark:bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
    //               Get started
    //               <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    //           </a>
    //           <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
    //               Speak to Sales
    //           </a> 
    //       </div>
    //       <div className="mt-5 lg:mt-0 lg:col-span-5 flex">
    //           <Image
    //           className="rounded"
    //           src="/portfolio/me.jpeg"
    //           alt="me"
    //           width={1024}
    //           height={768}
    //         />
    //       </div>                
    //   </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://www.linkedin.com/in/mariapolak/"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/portfolio/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       LinkedIn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href=""
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/portfolio/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       CV
    //     </a>
    //   </footer>
    // </div>
  );
}

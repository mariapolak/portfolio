import Image from "next/image"

export default function Hero(props: { id: string, ref: React.RefObject<HTMLDivElement | null> }) {
    return (
        <section className="dark:bg-gray-900 dark:text-white z-10" ref={props.ref}>
            <div className="container mx-auto flex items-center justify-center h-screen relative" id={props.id}>
                <div className="flex flex-col items-center lg:justify-normal lg:flex-row gap-5 lg:gap-10 lg:p-5">
                    <div className="flex flex-col items-start lg:items-end justify-center w-4/5 sm:w-1/2">
                        <h1 className="text-4xl font-bold">Maria Polak</h1>
                        <p className="text-xl">DSP Computer Scientist</p>
                        <p className="text-xs text-justify lg:pt-3 lg:w-4/5">Hi, I am Maria. I am a computer scientist with a passion for digital signal processing and audio software development.
                        </p>
                    </div>
                    <div className="flex gap-6 rounded-2xl justify-start w-4/5 sm:w-1/2 lg:w-1/3">
                        <Image
                            className="shadow-xl bg-white sm:p-7 rounded-md md:w-2/3 lg:w-full"
                            src="/me.jpeg"
                            alt="me"
                            width={1024}
                            height={768}
                        />
                    </div>
                </div>
                {/* Arrow See More */}
                <div className="absolute hidden lg:flex bottom-[15px] right-[15px] flex flex-col items-center">
                    <span
                        className="text-xs tracking-widest"
                        style={{
                            whiteSpace: "nowrap",
                            letterSpacing: "0.2em",
                        }}
                    >
                        SCROLL
                    </span>
                    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                        <path d="M8 8L24 20L40 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </section>
    )
}
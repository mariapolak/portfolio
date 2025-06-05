import Image from "next/image"

export default function Hero(props: { id: string }) {
    return (
        <div className="bg-secondary dark:bg-gray-900 dark:text-white flex items-center justify-center h-screen" id={props.id}>
            <div className="flex flex-col items-center lg:justify-normal lg:flex-row gap-5 lg:gap-10 lg:p-5">
                <div className="flex flex-col items-start lg:items-end justify-center w-4/5 sm:w-1/2">
                    <h1 className="text-4xl font-bold">Maria Polak</h1>
                    <p className="text-xl">Audio Software Developer</p>
                    <p className="text-xs text-justify lg:pt-3 lg:w-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat.</p>
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
        </div>
    )
}
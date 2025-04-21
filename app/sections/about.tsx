
export default function About(props: { id: string }) {
    return (
        <section className="relative bg-primary dark:bg-gray-900 dark:text-white text-center h-screen z-10">
            <h1 className="sticky pt-5 top-0 text-3xl font-bold w-full">About Me</h1>

            <div className="flex items-center justify-center h-screen lg:px-5" id={props.id}>
                <div className="w-4/5">
                    <p className="text-lg">I am a passionate developer with a love for creating beautiful and functional web applications.</p>
                </div>
            </div>
        </section>
    )
}


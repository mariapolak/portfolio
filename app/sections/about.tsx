export default function About(props: { id: string }) {
    return (
        <div className="bg-primary dark:bg-gray-900 dark:text-white flex items-center justify-center h-screen" id={props.id}>
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="mt-4 text-lg">I am a passionate developer with a love for creating beautiful and functional web applications.</p>
        </div>
    )

}


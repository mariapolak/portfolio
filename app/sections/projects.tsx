export default function Projects(props: { id: string }) {
    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white flex items-center justify-center h-screen" id={props.id}>
            <h1 className="text-4xl font-bold">Projects</h1>
            <p className="mt-4 text-lg">Here are some of my projects.</p>
        </div>
    )
}
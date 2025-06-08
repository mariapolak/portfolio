import SectionHeader from "@/components/headers/section_header";

export default function About(props: { id: string }) {
    return (
        <section className="relative bg-primary dark:bg-gray-900 dark:text-white text-center h-screen z-10">
            <SectionHeader title="About Me" id={props.id} />

            <div className="flex items-center justify-center h-screen lg:px-5" id={props.id}>
                <div className="w-4/5">
                    <p className="text-lg">I am a passionate developer with a love for creating beautiful and functional web applications.</p>
                </div>
            </div>
        </section>
    )
}


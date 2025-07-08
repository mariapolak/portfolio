import SectionHeader from "@/components/headers/section_header";

export default function Contact(props: { id: string, ref: React.RefObject<HTMLDivElement | null> }) {
    return (
        <section className="bg-primary dark:bg-gray-900 dark:text-white z-10" ref={props.ref}>
            <div className="container mx-auto relative text-center h-screen">
                <SectionHeader title="Contact Me" id={props.id} />
                <div className="flex items-center justify-center text-justify h-screen lg:px-5" id={props.id}>
                </div>
            </div>
        </section>
    )
}


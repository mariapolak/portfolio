import SectionHeader from "@/components/headers/section_header";

export default function Contact(props: { id: string }) {
    return (
        <section className="bg-primary dark:bg-gray-900 dark:text-white z-10">
            <div className="container mx-auto relative text-center h-screen">
                <SectionHeader title="Contact Me" id={props.id} />
            </div>
        </section>
    )
}


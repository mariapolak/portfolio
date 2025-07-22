import SectionHeader from "@/components/headers/section_header";

export default function Contact(props: { id: string, ref: React.RefObject<HTMLDivElement | null> }) {
    return (
        <section className="bg-primary dark:bg-gray-900 dark:text-white z-10" ref={props.ref}>
            <div className="container mx-auto relative text-center flex flex-col min-h-[600px] h-[50vh] pb-10">
                <SectionHeader title="Contact" id={props.id} />
                <div className="flex flex-col h-full justify-center text-left px-10 lg:px-36" id={props.id}>
                    <p className="text-xl py-5">
                        Idea, Project, Chat?
                    </p>
                    <svg width="40" height="130" viewBox="0 0 40 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-current">
                        <path d="M0 5V120" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                        <path d="M0 120L10 110" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="my-5">Reach out to me at <u><a href="mailto:marias.polak@gmail.com">marias.polak@gmail.com</a></u> — I&apos;ll get back to you soon! </p>
                    <p>
                        You can also connect with me on: <a
                            className="hover:underline hover:underline-offset-4"
                            href="https://www.linkedin.com/in/mariapolak/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </p>

                </div>
            </div>
        </section>
    )
}


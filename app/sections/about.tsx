import SectionHeader from "@/components/headers/section_header";

export default function About(props: { id: string, ref: React.RefObject<HTMLDivElement | null> }) {
    return (
        <section className="bg-primary dark:bg-gray-900 dark:text-white z-10 " ref={props.ref}>
            <div className="container mx-auto relative text-center h-[110vh]">

                <SectionHeader title="About Me" id={props.id} />

                <div className="flex items-center justify-center text-justify h-screen lg:px-5" id={props.id}>
                    <div className="w-4/5">
                        <p className="mb-5">
                            I think I am a lot of things.
                        </p>
                        <p className="mb-5 leading-6">
                            Professionally: Usually, I am a <u>audio software developer</u>. From time to time, I am a <u>.NET developer</u>. I was a <u>Java developer</u> for a short while, a <u>C++ software developer</u> and a <u>company owner</u> for a little longer, and I was a <u>machine learning engineer</u> part-time.
                        </p>

                        <p className="mb-5 leading-6">Privately: I study languages. <u>日本語</u> for fun, <u>Dansk</u> out of need, and <u>Italiano</u> for pasta. I do sports. <u>Bouldering</u> for strength. <u>Skiing</u> and <u>snowboarding</u> for the views. <u>Cycling</u> because one needs to commute. Other than that, I play the <u>piano</u>, solve variant <u>sudoku puzzles</u> and enjoy <u>video games</u>.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}


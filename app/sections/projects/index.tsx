import SectionHeader from "@/components/headers/section_header"
import VSTProjects from "./vst"
import HobbyProjects from "./hobby"
import CommercialProjects from "./commercial"

export default function Projects(props: { id: string, ref: React.RefObject<HTMLDivElement | null> }) {
    const subsectionHeaderStyle = "w-6/7 text-left text-2xl mt-10"

    return (
        <section className="dark:bg-gray-900 dark:text-white z-10" ref={props.ref}>
            <div className="container mx-auto relative text-center">
                
                {/* Content */}
                <SectionHeader title="Projects" id={props.id} />

                <div className="flex flex-col items-center gap-5 lg:px-5" id={props.id}>
                    {/* COMMERCIAL VST */}
                    <h2 className={subsectionHeaderStyle}>Commercial Audio</h2>
                    <VSTProjects />

                    {/* HOBBY */}
                    <h2 className={subsectionHeaderStyle}>Hobby Audio</h2>
                    <HobbyProjects />

                    {/* COMMERCIAL DEV */}
                    <h2 className={subsectionHeaderStyle}>Commercial Development</h2>
                    <CommercialProjects />
                </div>
            </div>
        </section>
    )
}
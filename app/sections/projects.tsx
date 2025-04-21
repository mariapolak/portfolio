import Image from "next/image"
import ProjectVST from "./_project_vst"

export default function Projects(props: { id: string }) {
    return (
        <section className="relative dark:bg-gray-900 dark:text-white text-center h-screen z-10">
            <h1 className="sticky pt-5 top-0 text-3xl font-bold w-full">Projects</h1>

            <div className="flex flex-col items-center mt-10 gap-5 lg:px-5" id={props.id}>
                <h2 className=" w-6/7 text-left text-xl">Commercial Audio</h2>
                {/* OCS-45 */}
                <ProjectVST 
                    id="OCS-45" 
                    title="OCS-45" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                    direction={1} 
                    link="https://www.ocs.audio/"
                >   
                    <Image
                        className="lg:w-2/5 rounded-xl mx-5"
                        src="/portfolio/plugin1_1.png"
                        alt="ocs"
                        width={3440}
                        height={2171}
                    />
                </ProjectVST>

                {/* Pancz */}
                <ProjectVST 
                    id="Pancz" 
                    title="Pancz" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                    direction={-1} 
                    link="https://www.ocs.audio/">   
                    <Image
                            className="lg:w-2/5 rounded-xl mx-5"
                            src="/portfolio/plugin2.png"
                            alt="pancz"
                            width={3840}
                            height={2881}
                        />
                </ProjectVST>
                
                {/* Spacer */}
                <ProjectVST 
                    id="Spacer" 
                    title="Spacer" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                    direction={1} 
                    link="https://www.spacer.audio/"
                >   
                    <Image
                            className="lg:w-2/5 rounded-xl mx-5"
                            src="/portfolio/plugin3.png"
                            alt="ocs"
                            width={16}
                            height={9}
                        />
                </ProjectVST>
            </div>

        </section>
    )
}
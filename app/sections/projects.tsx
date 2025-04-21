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
                    link="https://www.ocs.audio/">   
                    <Image
                            className="lg:w-2/5 rounded-xl mx-5"
                            src="/portfolio/plugin1_1.png"
                            alt="ocs"
                            width={3440}
                            height={2171}
                        />
                </ProjectVST>

                {/* Pancz */}
                {/* <ProjectVST 
                    id="Pancz" 
                    title="Pancz" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                    direction={-1} 
                    link="https://www.ocs.audio/">   
                    <Image
                            className="lg:w-2/5 rounded-xl mx-5"
                            src="/portfolio/plugin2.png"
                            alt="ocs"
                            width={3840}
                            height={2881}
                        />
                </ProjectVST> */}
                <div id="Pancz" className="flex flex-col w-6/7 bg-primary rounded-xl">
                    <div className="flex flex-col lg:flex-row items-center py-5 px-3">
                    <Image
                            className="lg:w-2/5 rounded-xl mx-5"
                            src="/portfolio/plugin2.png"
                            alt="ocs"
                            width={3840}
                            height={2881}
                        />
                        <p className="text-justify text-xs w-full">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                        <h3 className="lg:rotate-90 text-4xl whitespace-nowrap my-5 lg:mx-[-20]">Pancz</h3>
                    </div>
                </div>
                {/* Spacer */}
                <div id="Spacer" className="flex flex-col w-6/7 bg-primary rounded-xl">
                    <div className="flex flex-col lg:flex-row items-center py-5 px-3">
                        <h3 className="lg:-rotate-90 text-4xl whitespace-nowrap my-5 lg:mx-[-20]">Spacer</h3>
                        <p className="text-justify text-xs w-full">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                        <Image
                            className="lg:w-2/5 rounded-xl mx-5"
                            src="/portfolio/plugin3.png"
                            alt="ocs"
                            width={16}
                            height={9}
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}
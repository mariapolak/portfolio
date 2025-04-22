import Image from "next/image"
import ProjectVST from "./_project_vst"
import ProjectUni from "./_project_uni"
import ProjectDev from "./_project_dev"

export default function Projects(props: { id: string }) {
    return (
        <section className="relative dark:bg-gray-900 dark:text-white text-center z-10">
            <h1 className="sticky pt-5 top-0 text-3xl font-bold w-full">Projects</h1>

            <div className="flex flex-col items-center mt-10 gap-5 lg:px-5" id={props.id}>
                {/* COMMERCIAL VST */}
                <h2 className=" w-6/7 text-left text-2xl">Commercial Audio</h2>
                {/* OCS-45 */}
                <ProjectVST
                    id="OCS-45"
                    title="OCS-45"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    direction={1}
                    link="https://spectral-plugins.com/"
                >
                    <Image
                        className="w-full sm:w-1/2 lg:w-2/5 rounded-xl mx-5"
                        src="/portfolio/plugins/plugin1.png"
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
                    link="https://spectral-plugins.com/">
                    <Image
                        className="w-full sm:w-1/2 lg:w-2/5 rounded-xl mx-5"
                        src="/portfolio/plugins/plugin2.png"
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
                    link="https://spectral-plugins.com/"
                >
                    <Image
                        className="w-full sm:w-1/2 lg:w-2/5 rounded-xl mx-5"
                        src="/portfolio/plugins/plugin3.png"
                        alt="spacer"
                        width={16}
                        height={9}
                    />
                </ProjectVST>

                {/* HOBBY */}
                <h2 className=" w-6/7 text-left text-2xl">Hobby Audio</h2>

                <div className="grid sm:grid-2 md:grid-cols-3 gap-4 w-6/7">
                    {/* Hand-Controlled GReverb */}
                    <ProjectUni
                        id="STN-PS"
                        title="STN-based Pitch-Shifting"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        link="https://github.com/mp-smc23/STN-based-Pitch-Shifting"
                        className="col-span-2"
                    >
                        <Image
                            className="w-full sm:w-1/2 rounded-xl mx-5"
                            src="/portfolio/hobby/stn/main.png"
                            alt="stn"
                            width={1}
                            height={1}
                        />
                    </ProjectUni>
                    {/* Hand-Controlled GReverb */}
                    <ProjectUni
                        id="Hand-GReverb"
                        title="Granular Hands"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        link="https://github.com/mp-smc23/GranularHands"
                        className="col-span-2 sm:col-span-1"
                    >
                        <Image
                            className="w-full rounded-xl mx-5"
                            src="/portfolio/hobby/greverb/main.png"
                            alt="greverb"
                            width={1}
                            height={1}
                        />
                    </ProjectUni>



                    {/* Banjo */}
                    <ProjectUni
                        id="Banjo"
                        title="Banjo Physical Model"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        link="https://github.com/mp-smc23/banjo-physical-model"
                        className="col-span-2 sm:col-span-1"
                    >
                        <Image
                            className="w-full rounded-xl mx-5"
                            src="/portfolio/hobby/banjo/main.png"
                            alt="banjo"
                            width={1}
                            height={1}
                        />
                    </ProjectUni>

                    {/* Timbre Toys */}
                    <ProjectUni
                        id="TimbreToys"
                        title="Timbre Toys"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        link="https://github.com/SPIS-Girls/timbre-tools"
                        className="col-span-2"
                    >
                        <Image
                            className="w-full sm:w-1/2 rounded-xl mx-5"
                            src="/portfolio/hobby/timbretoys/main.png"
                            alt="timbretoys"
                            width={1}
                            height={1}
                        />
                    </ProjectUni>
                    {/* Roughness */}
                    <ProjectUni
                        id="Roughness"
                        title="Vocal Distortion"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        link="https://github.com/mp-smc23/vocal-distortion"
                        className="col-span-2 sm:col-span-1"
                    >
                        <Image
                            className="w-full rounded-xl mx-5"
                            src="/portfolio/hobby/roughness/main.png"
                            alt="roughness"
                            width={1}
                            height={1}
                        />
                    </ProjectUni>
                    {/* Gluphone */}
                    <ProjectUni
                        id="Gluphone"
                        title="Gluphone"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        link="https://github.com/mp-smc23/NIME"
                        className="col-span-2 sm:col-span-1"
                    >
                        <Image
                            className="w-full rounded-xl mx-5"
                            src="/portfolio/hobby/gluphone/main.jpg"
                            alt="gluphone"
                            width={1}
                            height={1}
                        />
                    </ProjectUni>

                    {/* AIvsHuman Emotions */}
                    <ProjectUni
                        id="Emotions"
                        title="Emotions in AI-generated music"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        link="https://github.com/mp-smc23/NIME"
                        className="col-span-2 sm:col-span-1"
                    >
                        <Image
                            className="w-full rounded-xl mx-5"
                            src="/portfolio/hobby/ai_hum/main.png"
                            alt="emotions"
                            width={1}
                            height={1}
                        />
                    </ProjectUni>
                    {/* Convolutional Instrument Recognition System */}
                    <ProjectUni
                        id="MLME"
                        title="Convolutional Instrument Recognition System"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        link="https://github.com/mp-smc23/MLME"
                        className="col-span-2 sm:col-span-1"
                    >
                        <Image
                            className="w-full rounded-xl mx-5"
                            src="/portfolio/hobby/mlme/main.png"
                            alt="mlme"
                            width={1}
                            height={1}
                        />
                    </ProjectUni>
                </div>

                {/* COMMERCIAL DEV */}
                <h2 className=" w-6/7 text-left text-2xl">Commercial Development</h2>
                <ProjectDev
                        id="intakewise"
                        title="ıntakewıse"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        link="https://www.intakewise.pl/"
                        className="col-span-2 sm:col-span-1"
                    >
                        <Image
                            className="w-full sm:w-1/2 rounded-xl mx-5"
                            src="/portfolio/plugins/plugin1.png"
                            alt="ocs"
                            width={1}
                            height={1}
                        />
                    </ProjectDev>
            </div>



        </section>
    )
}
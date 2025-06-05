import Image from "next/image"
import { ProjectVST, ProjectVSTDescription, ProjectVSTHeader, ProjectVSTHeaderRotated } from "../components/project_vst"
import { ProjectUni, ProjectUniDescription, ProjectUniHeader } from "../components/project_uni"
import { ProjectDev, ProjectDevDescription, ProjectDevHeader } from "../components/project_dev"

export default function Projects(props: { id: string }) {
    const oneColProjectDevStyle = "col-span-2 sm:col-span-1"
    const oneColProjectImgStyle = "w-full rounded-xl mx-5"
    const twoColProjectImgStyle = "w-full sm:w-1/2 rounded-xl mx-5"
    const twoColProjectDevStyle = "col-span-2"
    const subsectionHeaderStyle = "w-6/7 text-left text-2xl"

    const panczDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`

    return (
        <section className="relative dark:bg-gray-900 dark:text-white text-center z-10">
            <h1 className="sticky pt-5 top-0 text-3xl font-bold w-full">Projects</h1>

            <div className="flex flex-col items-center mt-10 gap-5 lg:px-5" id={props.id}>
                {/* COMMERCIAL VST */}
                <h2 className={subsectionHeaderStyle}>Commercial Audio</h2>
                {/* OCS-45 */}
                <ProjectVST
                    id="OCS-45">
                    <div className="hidden md:flex">
                        <ProjectVSTHeaderRotated
                            title="OCS-45"
                            direction={-1}></ProjectVSTHeaderRotated>
                    </div>
                    <div className="hidden md:flex text-justify">
                        <ProjectVSTDescription
                            description={panczDescription}
                            link="portfolio/vst/ocs-45">
                            </ProjectVSTDescription>
                    </div>
                    <Image
                        className="w-full sm:w-1/2 lg:w-2/5 rounded-xl mx-5"
                        src="/portfolio/plugins/plugin1.png"
                        alt="ocs"
                        width={3440}
                        height={2171}
                    />
                    <div className="md:hidden flex-col flex">
                        <ProjectVSTHeader title="OCS-45"></ProjectVSTHeader>
                        <ProjectVSTDescription
                            description={panczDescription}
                            link="/portfolio/vst/ocs-45"
                        ></ProjectVSTDescription>
                    </div>
                </ProjectVST>

                {/* Pancz */}
                <ProjectVST
                    id="Pancz">
                    <Image
                        className="w-full sm:w-1/2 lg:w-2/5 rounded-xl mx-5"
                        src="/portfolio/plugins/plugin2.png"
                        alt="pancz"
                        width={3840}
                        height={2881}
                    />
                    <div className="md:hidden">
                        <ProjectVSTHeader
                            title="Pancz"></ProjectVSTHeader>
                    </div>
                    <ProjectVSTDescription
                        description={panczDescription}
                        link="/portfolio/vst/pancz">
                    </ProjectVSTDescription>
                    <div className="hidden md:flex">
                        <ProjectVSTHeaderRotated
                            title="Pancz"
                            direction={1}></ProjectVSTHeaderRotated>
                    </div>
                </ProjectVST>

                {/* Spacer */}
                <ProjectVST
                    id="Spacer"
                >
                    <div className="hidden md:flex">
                        <ProjectVSTHeaderRotated
                            title="Spacer"
                            direction={-1}></ProjectVSTHeaderRotated>
                    </div>
                    <div className="hidden md:flex text-justify"><ProjectVSTDescription
                        description={panczDescription}
                        link="/portfolio/vst/spacer"></ProjectVSTDescription></div>
                    <Image
                        className="w-full sm:w-1/2 lg:w-2/5 rounded-xl mx-5"
                        src="/portfolio/plugins/plugin3.png"
                        alt="spacer"
                        width={16}
                        height={9}
                    />
                    <div className="md:hidden flex-col flex">
                        <ProjectVSTHeader title="Spacer"></ProjectVSTHeader>
                        <ProjectVSTDescription
                            description={panczDescription}
                            link="/portfolio/vst/spacer"></ProjectVSTDescription>
                    </div>
                </ProjectVST>

                {/* HOBBY */}
                <h2 className={subsectionHeaderStyle}>Hobby Audio</h2>
                <div className="grid sm:grid-2 md:grid-cols-3 gap-4 w-6/7">
                    {/* Hand-Controlled GReverb */}
                    <ProjectUni
                        id="STN-PS"
                        className={twoColProjectDevStyle}
                    >
                        <Image
                            className={twoColProjectImgStyle}
                            src="/portfolio/hobby/stn/main.png"
                            alt="stn"
                            width={1}
                            height={1}
                        />
                        <ProjectUniHeader title="STN-based Pitch-Shifting" />
                        <ProjectUniDescription
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            link="/portfolio/hobby/stn"
                        />

                    </ProjectUni>
                    {/* Hand-Controlled GReverb */}
                    <ProjectUni
                        id="Hand-GReverb"
                        className={oneColProjectDevStyle}
                    >
                        <Image
                            className={oneColProjectImgStyle}
                            src="/portfolio/hobby/greverb/main.png"
                            alt="greverb"
                            width={1}
                            height={1}
                        />
                        <ProjectUniHeader title="Granular Hands" />
                        <ProjectUniDescription
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            link="/portfolio/hobby/greverb"
                        />

                    </ProjectUni>



                    {/* Banjo */}
                    <ProjectUni
                        id="Banjo"
                        className={oneColProjectDevStyle}
                    >
                        <Image
                            className={oneColProjectImgStyle}
                            src="/portfolio/hobby/banjo/main.png"
                            alt="banjo"
                            width={1}
                            height={1}
                        />
                        <ProjectUniHeader title="Banjo Physical Model" />
                        <ProjectUniDescription
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            link="/portfolio/hobby/banjo"
                        />
                    </ProjectUni>


                    {/* Timbre Toys */}
                    <ProjectUni
                        id="TimbreToys"
                        className={twoColProjectDevStyle}
                    >
                        <Image
                            className={twoColProjectImgStyle}
                            src="/portfolio/hobby/timbretoys/main.png"
                            alt="timbretoys"
                            width={1}
                            height={1}
                        />
                        <ProjectUniHeader title="Timbre Toys" />
                        <ProjectUniDescription
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            link="/portfolio/hobby/timbretoys"
                        />

                    </ProjectUni>
                    {/* Roughness */}
                    <ProjectUni
                        id="Roughness"
                        className={oneColProjectDevStyle}
                    >
                        <Image
                            className={oneColProjectImgStyle}
                            src="/portfolio/hobby/roughness/main.png"
                            alt="roughness"
                            width={1}
                            height={1}
                        />
                        <ProjectUniHeader title="Vocal Distortion" />
                        <ProjectUniDescription
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            link="/portfolio/hobby/roughness"
                        />

                    </ProjectUni>
                    {/* Gluphone */}
                    <ProjectUni
                        id="Gluphone"
                        className={oneColProjectDevStyle}
                    >
                        <Image
                            className={oneColProjectImgStyle}
                            src="/portfolio/hobby/gluphone/main.jpg"
                            alt="gluphone"
                            width={1}
                            height={1}
                        />
                        <ProjectUniHeader title="Gluphone" />
                        <ProjectUniDescription
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            link="/portfolio/hobby/gluphone"
                        />

                    </ProjectUni>

                    {/* AIvsHuman Emotions */}
                    <ProjectUni
                        id="Emotions"
                        className={oneColProjectDevStyle}
                    >
                        <Image
                            className={oneColProjectImgStyle}
                            src="/portfolio/hobby/ai_hum/main.png"
                            alt="emotions"
                            width={1}
                            height={1}
                        />
                        <ProjectUniHeader title="Emotions in AI-generated music" />
                        <ProjectUniDescription
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            link="/portfolio/hobby/ai_hum"
                        />

                    </ProjectUni>
                    {/* Convolutional Instrument Recognition System */}
                    <ProjectUni
                        id="MLME"
                        className={oneColProjectDevStyle}
                    >
                        <Image
                            className={oneColProjectImgStyle}
                            src="/portfolio/hobby/mlme/main.png"
                            alt="mlme"
                            width={1}
                            height={1}
                        />
                        <ProjectUniHeader title="Convolutional Instrument Recognition System" />
                        <ProjectUniDescription
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            link="/portfolio/hobby/mlme"
                        />
                    </ProjectUni>
                </div>

                {/* COMMERCIAL DEV */}
                <h2 className={subsectionHeaderStyle}>Commercial Development</h2>
                <ProjectDev
                    id="intakewise"
                    className={oneColProjectDevStyle}
                >
                    <Image
                        className={twoColProjectImgStyle}
                        src="/portfolio/plugins/plugin1.png"
                        alt="ocs"
                        width={1}
                        height={1}
                    />
                    <ProjectDevHeader title="ıntakewıse" />
                    <ProjectDevDescription
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        link="/portfolio/commercial/intakewise"
                    />
                </ProjectDev>
            </div>
        </section>
    )
}
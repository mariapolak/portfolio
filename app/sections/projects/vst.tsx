import { ProjectVST, ProjectVSTDescription, ProjectVSTHeader, ProjectVSTHeaderRotated } from "@/components/project_vst"
import Image from "next/image"

export default function VSTProjects() {
    const ocsDescription = `OCS-45 is a VST plugin that provides a unique sound processing experience. It is designed to enhance audio production with its advanced features and intuitive interface.`;
    const panczDescription = `Pancz is a versatile VST plugin that offers a wide range of sound manipulation capabilities. It is perfect for musicians and producers looking to add depth and character to their audio projects.`;
    const spacerDescription = `Spacer is a powerful VST plugin that allows users to create spacious and immersive soundscapes. It is ideal for film scoring, game audio, and any project that requires a sense of depth in sound.`

    return (
        <section className="flex flex-col items-center divide-gray-400 divide-1 divide-y">
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
                        description={ocsDescription}
                        link="/vst/ocs-45">
                    </ProjectVSTDescription>
                </div>
                <Image
                    className="w-full sm:w-1/2 lg:w-2/5 rounded-xl mx-5"
                    src="/plugins/plugin1.png"
                    alt="ocs"
                    width={3440}
                    height={2171}
                />
                <div className="md:hidden flex-col flex">
                    <ProjectVSTHeader title="OCS-45"></ProjectVSTHeader>
                    <ProjectVSTDescription
                        description={ocsDescription}
                        link="/vst/ocs-45"
                    ></ProjectVSTDescription>
                </div>
            </ProjectVST>

            {/* Pancz */}
            <ProjectVST
                id="Pancz">
                <Image
                    className="w-full sm:w-1/2 lg:w-2/5 rounded-xl mx-5"
                    src="/plugins/plugin2.png"
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
                    link="/vst/pancz">
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
                    description={spacerDescription}
                    link="/vst/spacer"></ProjectVSTDescription></div>
                <Image
                    className="w-full sm:w-1/2 lg:w-2/5 rounded-xl mx-5"
                    src="/plugins/plugin3.png"
                    alt="spacer"
                    width={16}
                    height={9}
                />
                <div className="md:hidden flex-col flex">
                    <ProjectVSTHeader title="Spacer"></ProjectVSTHeader>
                    <ProjectVSTDescription
                        description={spacerDescription}
                        link="/vst/spacer"></ProjectVSTDescription>
                </div>
            </ProjectVST>
        </section>
    );
}
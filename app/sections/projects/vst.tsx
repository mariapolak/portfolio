import { ProjectVST, ProjectVSTDescription, ProjectVSTHeader, ProjectVSTHeaderRotated } from "@/components/project_vst"
import Image from "next/image"

export default function VSTProjects() {
    const descriptions = {
        ocs: "OCS-45 is a sleek cassette-tape simulator that injects tracks with authentic lo-fi character. It features four vintage tape types, modulation quirks like wow, flutter, dropouts, hiss, and five distinct distortion modes—all with independent Dry/Wet and bypass controls for maximum creative flexibility. ",
        pancz: `Pancz is an audio plugin equipped with a powerful multi-band transient shaper, clipping tool, precise waveform analyzer and additional tone manipulation effects. It uses complex audio processing to directly control the shape of the sound. With its convenient waveform window and a “cut line” you are able to visually manipulate the sound making it look and sound the way you want it to. `,
        spacer: `Spacer, a modular creative effects station where time and space are united as one. Spacer has five effects modules which can be linked in any order to generate infinite FX combinations, but are also designed to work as independent processing stations in their own right. It creates dreamlike overtones, shifting soundscapes or contemporary ambiences. `
    }

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
                        description={descriptions.ocs}
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
                        description={descriptions.ocs}
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
                    description={descriptions.pancz}
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
                    description={descriptions.spacer}
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
                        description={descriptions.spacer}
                        link="/vst/spacer"></ProjectVSTDescription>
                </div>
            </ProjectVST>
        </section>
    );
}
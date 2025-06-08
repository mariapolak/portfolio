import { ProjectUni, ProjectUniDescription, ProjectUniHeader } from "@/components/project_uni"
import Image from "next/image";

export default function HobbyProjects() {
    const style = {
        oneColProjectDevStyle: "col-span-2 sm:col-span-1",
        oneColProjectImgStyle: "w-full aspect-4/3 object-cover rounded-xl"
    }

    return (
        <div className="grid sm:grid-2 md:grid-cols-3 gap-x-5 gap-y-5 w-6/7">
            {/* Hand-Controlled GReverb */}
            <ProjectUni
                id="STN-PS"
                className={style.oneColProjectDevStyle}
            >
                <Image
                    className={style.oneColProjectImgStyle}
                    src="/hobby/stn/main.png"
                    alt="stn"
                    width={1}
                    height={1}
                />
                <ProjectUniHeader title="STN-based Pitch-Shifting" />
                <ProjectUniDescription
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    link="/hobby/stn"
                />

            </ProjectUni>
            {/* Hand-Controlled GReverb */}
            <ProjectUni
                id="Hand-GReverb"
                className={style.oneColProjectDevStyle}
            >
                <Image
                    className={style.oneColProjectImgStyle}
                    src="/hobby/greverb/main.png"
                    alt="greverb"
                    width={1}
                    height={1}
                />
                <ProjectUniHeader title="Granular Hands" />
                <ProjectUniDescription
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                           
                    link="/hobby/greverb"
                />

            </ProjectUni>



            {/* Banjo */}
            <ProjectUni
                id="Banjo"
                className={style.oneColProjectDevStyle}
            >
                <Image
                    className={style.oneColProjectImgStyle}
                    src="/hobby/banjo/main.png"
                    alt="banjo"
                    width={1}
                    height={1}
                />
                <ProjectUniHeader title="Banjo Physical Model" />
                <ProjectUniDescription
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                           
                    link="/hobby/banjo"
                />
            </ProjectUni>


            {/* Timbre Toys */}
            <ProjectUni
                id="TimbreToys"
                className={style.oneColProjectDevStyle}
            >
                <Image
                    className={style.oneColProjectImgStyle}
                    src="/hobby/timbretoys/main.png"
                    alt="timbretoys"
                    width={1}
                    height={1}
                />
                <ProjectUniHeader title="Timbre Toys" />
                <ProjectUniDescription
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                           
                    link="/hobby/timbretoys"
                />

            </ProjectUni>
            {/* Roughness */}
            <ProjectUni
                id="Roughness"
                className={style.oneColProjectDevStyle}
            >
                <Image
                    className={style.oneColProjectImgStyle}
                    src="/hobby/roughness/main.png"
                    alt="roughness"
                    width={1}
                    height={1}
                />
                <ProjectUniHeader title="Vocal Distortion" />
                <ProjectUniDescription
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                           
                    link="/hobby/roughness"
                />

            </ProjectUni>
            {/* Gluphone */}
            <ProjectUni
                id="Gluphone"
                className={style.oneColProjectDevStyle}
            >
                <Image
                    className={style.oneColProjectImgStyle}
                    src="/hobby/gluphone/main.jpg"
                    alt="gluphone"
                    width={1}
                    height={1}
                />
                <ProjectUniHeader title="Gluphone" />
                <ProjectUniDescription
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                           
                    link="/hobby/gluphone"
                />

            </ProjectUni>

            {/* AIvsHuman Emotions */}
            <ProjectUni
                id="Emotions"
                className={style.oneColProjectDevStyle}
            >
                <Image
                    className={style.oneColProjectImgStyle}
                    src="/hobby/ai_hum/main.png"
                    alt="emotions"
                    width={1}
                    height={1}
                />
                <ProjectUniHeader title="Emotions in AI-generated music" />
                <ProjectUniDescription
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                           
                    link="/hobby/ai_hum"
                />

            </ProjectUni>
            {/* Convolutional Instrument Recognition System */}
            <ProjectUni
                id="MLME"
                className={style.oneColProjectDevStyle}
            >
                <Image
                    className={style.oneColProjectImgStyle}
                    src="/hobby/mlme/main.png"
                    alt="mlme"
                    width={1}
                    height={1}
                />
                <ProjectUniHeader title="Instrument Recognition" />
                <ProjectUniDescription
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                           
                    link="/hobby/mlme"
                />
            </ProjectUni>
        </div>
    )
}
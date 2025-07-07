import { ProjectUni, ProjectUniDescription, ProjectUniHeader } from "@/components/project_uni"
import Image from "next/image";

export default function HobbyProjects() {
    const style = {
        oneColProjectDevStyle: "col-span-2 sm:col-span-1",
        oneColProjectImgStyle: "w-full aspect-4/3 object-cover rounded-xl"
    }

    const descriptions = {
        pstsm: `Comprehensive evaluation of PS and TSM algorithms, focusing on their perceptual quality, computational performance, and impact on machine learning tasks, particularly speech separation.`,
        stn: `A novel real-time pitch-shifting algorithm designed for complex audio signals. The project integrates fuzzy STN decomposition with specialized processing pipelines for sines, transient, and noise components.`,
        greverb: `Hand movement controlled grain delay effect. The system leverages MediaPipe's real-time hand tracking capabilities, the system interprets hand movements and maps geometric descriptors to manipulate audio effect parameters.`,
        banjo: `A finite difference physical model of a banjo. Implemented in Python, it uses the string equation to simulate the string's vibrations and the membrane's response, creating a realistic banjo sound.`,
        timbretoys: `A timbre manipulation tool that allows the users to interact with a timbre the same way they would interact with a physical object. The main inspiration behind the project was a sonic interaction and a live performance`,
        gluphone: `A new digital musical instrument - the Gluphone. The instrument design tries to overcome limitations of classical instruments, by providing continuous control over pitch and volume.`,
        roughness: `A real-time implementation of a vocal distortion and roughness effect, described in detail in a paper by Gentilucci, Marta, Luc Ardaillon, and Marco Liuni. The effect was implemented as an audio effect plugin using the JUCE framework. `,
        emotions: `Experiment which compares emotions induced through music composed by two different types of composers, namely AI and human. The experiment was conducted in a form of an online survey and the participants were recruited through social-media.`,
        mlme: `A lightweight CNN for musical instrument recognition in polyphonic audio signals. Utilizing the IRMAS dataset, a subset of seven instruments was selected for classification using spectrogram-based image inputs.`
    }

    return (
        <div className="grid sm:grid-2 md:grid-cols-3 gap-x-5 gap-y-5 w-6/7">
             {/* PS-TSM */}
            <ProjectUni
                id="PSTSM"
                className={style.oneColProjectDevStyle}
            >
                <Image
                    className={style.oneColProjectImgStyle}
                    src="/hobby/pstsm/main.png"
                    alt="pstsm"
                    width={1}
                    height={1}
                />
                <ProjectUniHeader title="PS and TSM in Speech Data Augmentation" />
                <ProjectUniDescription
                    description={descriptions.pstsm}
                    link="/hobby/pstsm"
                />

            </ProjectUni>
            {/* STN */}
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
                    description={descriptions.stn}
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
                    description={descriptions.greverb}
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
                    description={descriptions.banjo}
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
                    description={descriptions.timbretoys}
                    link="/hobby/timbretoys"
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
                    description={descriptions.gluphone}
                    link="/hobby/gluphone"
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
                    description={descriptions.roughness}
                    link="/hobby/roughness"
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
                    description={descriptions.emotions}
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
                    description={descriptions.mlme}
                    link="/hobby/mlme"
                />
            </ProjectUni>
        </div>
    )
}
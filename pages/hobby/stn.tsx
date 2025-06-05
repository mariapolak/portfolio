import Image from "next/image";
import ProjectLayout from "@/components/layout_project";
import Link from "next/link";

export default function STN() {
    return (
        <ProjectLayout>
            <div className="flex flex-row w-full h-[calc(100vh-8rem)] pt-[8vh] m-auto px-5 md:px-[10%] gap-5">
                <div className="flex flex-col w-4/7 gap-5 justify-between">
                    <div className="flex flex-col h-1/2 justify-start gap-5">
                        {/* Title */}
                        <h1 className="text-4xl font-bold">STN-based Pitch-Shifting.</h1>
                        {/* Why */}
                        <div className="h-full">
                            <h2 className="text-2xl font-bold mb-3">WHY</h2>
                            <span className="text-justify text-xs w-full">
                                This project explores the use of Spatio-Temporal Networks (STN) for pitch-shifting audio signals.
                                The goal is to leverage the capabilities of STNs to achieve high-quality pitch shifting
                                while maintaining the integrity of the original audio.
                            </span>
                        </div>
                    </div>

                    {/* Img + Achieve */}
                    <div className="flex flex-row h-1/2">
                        <div className="flex w-1/3 items-end mb-10">
                             <Link href="" className="underline text-2xl">GitHub.</Link>
                        </div>
                        <div className="w-2/3 h-auto">
                            <h2 className="text-2xl font-bold mb-3">ACHIEVED</h2>
                            <span className="text-justify text-xs w-full">
                                The project successfully demonstrates the application of STNs in pitch-shifting audio signals.
                                It achieves a significant improvement in pitch accuracy and audio quality compared to traditional methods.
                                The results indicate that STNs can be a powerful tool for audio processing tasks.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-auto gap-5 justify-between">
                    <div className="h-1/2 self-end">
                        <Image
                            className="w-auto h-full"
                            src="/hobby/stn/main.png"
                            alt="stn"
                            width={1}
                            height={1}
                        />
                    </div>
                    <div className="flex flex-row gap-5 h-full">
                        <div className="flex w-1/2 items-center justify-center">
                           {/* <Image
                                className="w-full"
                                src="/hobby/stn/main.png"
                                alt="stn"
                                width={1}
                                height={1}
                            /> */}
                        </div>
                        <div className="w-1/2 h-auto">
                            <h2 className="text-2xl font-bold mb-3">TECH</h2>
                            {/* list technologies */}
                            <ul className="text-xs">
                                <li>Klopot++</li>
                                <li>Klopot#</li>
                                <li>Klopot Framework</li>
                                <li>Klorum</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </ProjectLayout>

    );
}

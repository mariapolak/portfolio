import { ProjectDev, ProjectDevDescription, ProjectDevHeader } from "@/components/project_dev"
import Image from "next/image"


export default function CommercialProjects() {
    const style = {
        oneColProjectDevStyle: "col-span-2 sm:col-span-1",
        twoColProjectImgStyle: "w-full sm:w-1/2 rounded-xl mx-5",
        oneColProjectImgStyle: "w-full rounded-xl mx-5",
        twoColProjectDevStyle: "col-span-2"
    }

    return (
        <ProjectDev
            id="intakewise"
            className={style.oneColProjectDevStyle}
        >
            <Image
                className={style.twoColProjectImgStyle}
                src="/plugins/plugin1.png"
                alt="ocs"
                width={1}
                height={1}
            />
            <ProjectDevHeader title="ıntakewıse" />
            <ProjectDevDescription
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                link="/commercial/intakewise"
            />
        </ProjectDev>
    );
}
import { ProjectDev, ProjectDevDescription, ProjectDevHeader } from "@/components/project_dev"
import Image from "next/image"


export default function CommercialProjects() {
    const style = {
        oneColProjectDevStyle: "col-span-2 sm:col-span-1",
        twoColProjectImgStyle: "w-full sm:w-1/2 rounded-xl mx-5",
        oneColProjectImgStyle: "w-full rounded-xl mx-5",
        twoColProjectDevStyle: "col-span-2"
    }

    const descriptions = {
        intakewise: `A full-stack multi-tenant web app using ASP.NET MVC which allows users to monitor the state of wells and water tanks, and alerts about sudden changes. 
        The app is designed to be used by multiple companies, each with its own set of users and data. It includes features such as user management, data visualization, and real-time notifications.`,
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
                description={descriptions.intakewise}
                link="/commercial/intakewise"
            />
        </ProjectDev>
    );
}
import { ProjectDev, ProjectDevDescription, ProjectDevHeader } from "@/components/project_dev"
import Image from "next/image"


export default function CommercialProjects() {
    const style = {
        oneColProjectDevStyle: "col-span-2 sm:col-span-1",
        oneColProjectImgStyle: "w-full aspect-4/3 object-cover rounded-xl"
    }

    const descriptions = {
        intakewise: `A full-stack multi-tenant web app using ASP.NET MVC which allows users to monitor the state of wells and water tanks, and alerts about sudden changes. 
        The app is designed to be used by multiple companies, each with its own set of users and data. It includes features such as user management, data visualization, and real-time notifications. `,
        flashsoft: `A desktop application designed to streamline the process of analyzing pdf product cards and extracting relevant information to excel files. The application uses advanced algorithms to parse the pdf files and extract the necessary data. `,
    }

    return (
        <div className="grid sm:grid-2 md:grid-cols-2 gap-x-5 gap-y-5 w-6/7">
            <ProjectDev
                id="intakewise"
                className={style.oneColProjectDevStyle}
            >
                <Image
                className={style.oneColProjectImgStyle}
                src="/commercial/intakewise/main.png"
                alt="intakewise"
                width={1}
                height={1}
            />
            <ProjectDevHeader title="ıntakewıse" />
            <ProjectDevDescription
                description={descriptions.intakewise}
                link="/commercial/intakewise"
            />
            </ProjectDev>

            <ProjectDev
                id="flashsoft"
                className={style.oneColProjectDevStyle}
            >
                <Image
                className={style.oneColProjectImgStyle}
                src="/commercial/flashsoft/main.png"
                alt="flashsoft"
                width={1}
                height={1}
            />
            <ProjectDevHeader title="Flashsoft" />
            <ProjectDevDescription
                description={descriptions.flashsoft}
                link="/commercial/flashsoft"
            />
            </ProjectDev>
        </div>
    );
}
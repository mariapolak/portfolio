import Image from "next/image";
import ProjectLayout from "./layout_project";
import Link from "next/link";

export default function ShortProjectPage({  title, image, why, achieved, extra, skills, links }:
    {
        title: string; image: string; why: string; achieved: string; extra: string;
        skills: string[]; links: { name: string; href: string }[]
    }) {

    const titleStyleMobile = "text-4xl font-bold mb-5 lg:hidden order-1";
    const titleStyleDesktop = "text-4xl font-bold mb-5 hidden lg:block";
    const subsectionHeaderStyle = "text-2xl mb-3 underline decoration-gray-200 decoration-2 underline-offset-6 pb-1";
    const subsectionHeaderStyleLeft = subsectionHeaderStyle + " w-full lg:w-5/7"
    const paragraphStyle = "text-justify text-xs w-full lg:w-5/7";

    return (
        <ProjectLayout>
            <div className="flex flex-col lg:flex-row w-full h-[calc(100vh-8rem)] pt-[8vh] pb-[10vh] px-5 md:px-[8%] gap-10">
                <h1 className={titleStyleMobile}>{title}.</h1>
                <div className="flex flex-col gap-5 justify-between w-full lg:w-4/7 pb-[10vh] lg:order-first order-3">
                    <div className="flex flex-col justify-start gap-5">
                        {/* Title */}
                        <h1 className={titleStyleDesktop}>{title}.</h1>
                        {/* Why */}
                        <div className="flex-col flex w-full">
                            <h2 className={subsectionHeaderStyleLeft}>WHY</h2>
                            <span className={paragraphStyle}>
                                {why}
                            </span>
                        </div>
                    </div>
                    {/* Achieve */}
                    <div className="flex-col flex w-full items-center">
                        <h2 className={subsectionHeaderStyleLeft}>ACHIEVED</h2>
                        <span className={paragraphStyle}>
                            {achieved}
                        </span>
                    </div>
                    {/* Extra */}
                    <div className="flex-col flex w-full items-end">
                        <h2 className={subsectionHeaderStyleLeft}>EXTRA</h2>
                        <span className={paragraphStyle}>
                            {extra}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-10 items-center lg:justify-start w-full lg:w-3/7 order-2 lg:order-last">
                    <Image
                        className="shadow-lg bg-white sm:p-7 rounded-md w-full md:w-2/3 lg:w-full"
                        src={image}
                        alt="stn"
                        width={1}
                        height={1}
                    />
                    <div className="flex flex-col sm:flex-row w-full gap-5">
                        <div className="flex flex-col items-center lg:items-start sm:w-1/2">
                            <h2 className={subsectionHeaderStyle}>SKILLS</h2>
                            {/* list technologies */}
                            <ul className="list-inside text-sm w-4/5">
                                {skills.map(skill => (
                                    <TechnologyItem key={skill} name={skill} />
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col items-center lg:items-start sm:w-1/2">
                            <h2 className={subsectionHeaderStyle}>LINKS</h2>
                            {/* list technologies */}
                            <ul className="list-inside lg:text-left text-center text-sm w-4/5">
                                {links.map(link => (
                                    <LinkItem key={link.name} name={link.name} href={link.href} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </ProjectLayout>

    );
}


export function LinkItem({ name, href }: { name: string; href: string }) {
    return (
        <li className="list-none mb-2">
            <Link
                className="underline" // Add hover effect
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
                {name}
            </Link>
        </li>
    );
}

export function TechnologyItem({ name }: { name: string }) {
    return (
        <li className="list-disc mb-2">{name}</li>
    );
}
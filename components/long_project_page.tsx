import Image from "next/image";
import ProjectLayout from "./layout_project";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LongProjectPage({ title, image, why, achieved, extra, skills, links, galleryImages }:
    {
        title: string; image: string; why: string; achieved: string; extra: string;
        skills: string[]; links: { name: string; href: string }[]; galleryImages: string[]
    }) {

    const styles = {
        titleStyleDesktop: "text-4xl font-bold mb-5 hidden lg:block",
        titleStyleMobile: "text-4xl font-bold mb-5 lg:hidden order-1",
        subsectionHeaderStyle: "text-2xl mb-3 underline decoration-gray-400 decoration-1 underline-offset-6 pb-1",
        subsectionHeaderStyleLeft: "text-2xl mb-3 underline decoration-gray-400 decoration-1 underline-offset-6 pb-1 w-full lg:w-5/7",
        paragraphStyle: "text-justify text-xs w-full lg:w-5/7",
        galleryImageStyle: "h-auto w-full rounded-lg"
    }

    const columns = 4;
    const galleryCols = Array.from({ length: columns }, (_, colIdx) =>
        galleryImages.filter((_, imgIdx) => imgIdx % columns === colIdx)
    );

    return (
        <ProjectLayout>
            <div className="flex flex-col w-full pt-[8vh] pb-[10vh] px-5 md:px-[8%] gap-10">
                <div className="flex flex-col lg:flex-row lg:h-[calc(100vh-10vh)] gap-10">
                    <h1 className={styles.titleStyleMobile}>{title}.</h1>
                    <div className="flex flex-col gap-5 justify-between w-full lg:w-4/7 pb-[10vh] lg:order-first order-3">
                        <div className="flex flex-col justify-start gap-5">
                            {/* Title */}
                            <h1 className={styles.titleStyleDesktop}>{title}.</h1>
                            {/* Why */}
                            <div className="flex-col flex w-full">
                                <h2 className={styles.subsectionHeaderStyleLeft}>WHY</h2>
                                <span className={styles.paragraphStyle}>
                                    {why}
                                </span>
                            </div>
                        </div>
                        {/* Achieve */}
                        <div className="flex-col flex w-full items-center">
                            <h2 className={styles.subsectionHeaderStyleLeft}>ACHIEVED</h2>
                            <span className={styles.paragraphStyle}>
                                {achieved}
                            </span>
                        </div>
                        {/* Extra */}
                        <div className="flex-col flex w-full items-end relative">
                            {/* Arrow See More */}
                            <div className="absolute hidden lg:flex bottom-[-10px] left-[-10px] flex flex-col items-center">
                                <span
                                    className="mb-2 text-xs tracking-widest"
                                    style={{
                                        writingMode: "vertical-rl",
                                        transform: "rotate(-180deg)",
                                        whiteSpace: "nowrap",
                                        letterSpacing: "0.2em",
                                    }}
                                >
                                    SCROLL TO SEE MORE
                                </span>
                                <svg width="40" height="130" viewBox="0 0 40 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                                    <motion.path d="M20 5V120" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                                        initial={{ pathLength: 0 }} 
                                        animate={{ pathLength: 1 }} 
                                        transition={{ duration: 0.75 }}/>
                                    <motion.path d="M10 110L20 120L30 110" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                                        initial={{ pathLength: 0 }} 
                                        animate={{ pathLength: 1 }} 
                                        transition={{ duration: 0.75 }}/>
                                </svg>
                            </div>
                            <h2 className={styles.subsectionHeaderStyleLeft}>EXTRA</h2>
                            <span className={styles.paragraphStyle}>
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
                                <h2 className={styles.subsectionHeaderStyle}>SKILLS</h2>
                                {/* list technologies */}
                                <ul className="list-inside text-sm w-4/5">
                                    {skills.map(skill => (
                                        <TechnologyItem key={skill} name={skill} />
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col items-center lg:items-start sm:w-1/2">
                                <h2 className={styles.subsectionHeaderStyle}>LINKS</h2>
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
                <div className="flex flex-col items-center">
                    <h2 className={styles.subsectionHeaderStyle}>GALLERY</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {/* Gallery Images */}
                        {galleryCols.map((colImages, colIdx) => (
                            <div key={colIdx} className="grid gap-4">
                                {colImages.map((imgSrc, imgIdx) => (
                                    <div key={imgIdx} className="">
                                        <Image
                                            className={styles.galleryImageStyle}
                                            src={imgSrc}
                                            alt=""
                                            width={1}
                                            height={1}
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}

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
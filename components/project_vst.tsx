import { SeeMoreButton } from "./see_more_button"
import { motion } from "framer-motion";

export function ProjectVST(prop: { id: string, children: React.ReactNode }) {
    return (
        <motion.div id={prop.id} className="flex flex-col w-6/7 py-2"
            whileHover={{ scale: 1.01, transition: { duration: 0.5 }, }}>
            <div className="flex flex-col md:flex-row items-center gap-3 p-5 md:py-5 md:px-3 ">
                {prop.children}
            </div>
        </motion.div>
    )
}

export function ProjectVSTHeaderRotated({ title, direction }: { title: string, direction: 1 | -1 }) {
    return (
        <h3 className={`text-4xl whitespace-nowrap my-5 ${direction === 1 ? "rotate-90" : "-rotate-90"} mx-[-20]`}>{title}</h3>
    )
}

export function ProjectVSTHeader({ title }: { title: string }) {
    return (
        <h3 className="text-xl">{title}</h3>
    )
}

export function ProjectVSTDescription({ description, link }: { description: string, link: string }) {
    return (
        <span className="text-justify text-xs w-full">{description}
            <SeeMoreButton className="inline" link={link} />
        </span>
    )
}

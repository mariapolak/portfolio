// import { motion } from "motion/react"

import Link from "next/link";

export function SeeMoreButton({ className, link }: { className: string, link: string }) {
    return (
        <div className={className}>
            <button className={`px-2 text-xs underline text-secondary hover:text-current transition-colors duration-200`}>
                <Link href={link}>see more...</Link>
            </button>
        </div>

    )
}

// import { motion } from "motion/react"

import Link from "next/link";

export function SeeMoreButton({ className, link }: { className: string, link: string }) {
    return (
        <div className={className}>
            <button className={`text-xs underline text-current hover:text-secondary transition-colors duration-200`}>
                <Link href={link}>see more...</Link>
            </button>
        </div>

    )
}

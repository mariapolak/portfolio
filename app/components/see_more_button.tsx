import { motion } from "motion/react"

export function SeeMoreButton({ className, link }: { className: string, link: string }) {
    return (
        <div className={className}>
            <button className={`px-2 text-xs underline text-secondary hover:text-current transition-colors duration-200`}>
                <a href={link} target="_blank" rel="noopener noreferrer">see more...</a>
            </button>
        </div>

    )
}

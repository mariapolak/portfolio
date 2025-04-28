import { motion } from "motion/react"

export function SeeMoreButton({ className, link }: { className: string, link: string }) {
    return (
        <div className={className}>
            <button className={`border rounded-lg px-2 py-1 text-xs`}>
                <a href={link} target="_blank" rel="noopener noreferrer">see more...</a>
            </button>
        </div>

    )
}

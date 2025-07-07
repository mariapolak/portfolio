import { SeeMoreButton } from "./see_more_button"

export function ProjectDev(prop: { id: string, className?: string, children: React.ReactNode }) {
    return (
        <div id={prop.id} className={`flex flex-col bg-primary ${prop.className}`}>
            <div className="flex flex-col items-center gap-3 p-5">
                {prop.children}
            </div>
        </div>
    )
}

export function ProjectDevHeader({ title }: { title: string }) {
    return (
        <div className="min-h-12 justify-center items-center flex border-b border-gray-400 w-full">
            <h3 className="font-bold">{title}</h3>
        </div>
    )
}

export function ProjectDevDescription({ description, link }: { description: string, link: string }) {
    return (
        <span className="text-justify text-xs w-full">{description}
            <SeeMoreButton className="inline" link={link} />
        </span>
    )
}


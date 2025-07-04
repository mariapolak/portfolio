import { SeeMoreButton } from "./see_more_button"

export function ProjectDev(prop: { id: string, className?: string, children: React.ReactNode }) {
    return (
        <div id={prop.id} className={`flex flex-col w-6/7 bg-primary rounded-xl ${prop.className}`}>
            <div className="flex flex-col items-center gap-3 p-5">
                {prop.children}
            </div>
        </div>
    )
}

export function ProjectDevHeader({ title }: { title: string }) {
    return (
        <h3 className="text-xl">{title}</h3>
    )
}

export function ProjectDevDescription({ description, link }: { description: string, link: string }) {
    return (
        <span className="text-justify text-xs w-full">
            {description}
        <SeeMoreButton className="inline" link={link}/>
        </span>
    )
}


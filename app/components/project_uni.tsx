export function ProjectUni(prop: { id: string, className?: string, children: React.ReactNode }) {
    return (
        <div id={prop.id} className={`flex flex-col bg-primary rounded-xl ${prop.className}`}>
            <div className="flex flex-col items-center gap-3 p-5">
                {prop.children}
            </div>
        </div>
    )
}

export function ProjectUniHeader({title}: {title: string}) {
    return (
        <h3 className="text-xl">{title}</h3>
    )
}

export function ProjectUniDescription({description}: {description: string}) {
    return (
        <p className="text-justify text-xs w-full">{description}</p>
    )
}
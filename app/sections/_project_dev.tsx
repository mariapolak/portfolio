export default function ProjectDev(prop: { id: string, title: string, description: string, link?: string, className?: string, children: React.ReactNode }) {
    // var isLink = prop.link !== undefined && prop.link !== null && prop.link !== "" ? true : false;
    return (
        <div id={prop.id} className={`flex flex-col w-6/7 bg-primary rounded-xl ${prop.className}`}>
            <div className="flex flex-col items-center gap-3 p-5">
                {prop.children}
                <h3 className="text-xl">{prop.title}</h3>
                <p className="text-justify text-xs w-full">{prop.description}</p>
            </div>
        </div>
    )
}
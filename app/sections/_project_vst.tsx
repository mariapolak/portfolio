export default function ProjectVST(prop: { id: string, title: string, description: string, direction: 1 | -1, link?: string, children: React.ReactNode }) {
    // var isLink = prop.link !== undefined && prop.link !== null && prop.link !== "" ? true : false;
    return (
        <div id={prop.id} className="flex flex-col w-6/7 bg-primary rounded-xl">
            {prop.direction === 1 ? (

                <div className="flex flex-col lg:flex-row items-center py-5 px-3">
                    <h3 className="lg:-rotate-90 text-4xl whitespace-nowrap my-5 lg:mx-[-20]">{prop.title}</h3>
                    <p className="text-justify text-xs w-full">{prop.description}</p>
                    {prop.children}
                </div>

            ) : (

                <div className="flex flex-col lg:flex-row items-center py-5 px-3">
                    {prop.children}
                    <p className="text-justify text-xs w-full">{prop.description}</p>
                    <h3 className="lg:rotate-90 text-4xl whitespace-nowrap my-5 lg:mx-[-20]">{prop.title}</h3>
                </div>
            )}
        </div>
    )
}
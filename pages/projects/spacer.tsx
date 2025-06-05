
export default function Spacer() {
    return (
        <div className="flex flex-col w-full h-20 md:h-40 bg-primary rounded-xl">
            <div className="flex flex-col md:flex-row items-center gap-3 p-5 md:py-5 md:px-3">
                <h3 className="text-xl">Spacer</h3>
                <span className="text-justify text-xs w-full">This is a spacer component to create space in the layout.</span>
            </div>
        </div>
    )
}
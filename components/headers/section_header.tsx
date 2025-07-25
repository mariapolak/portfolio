export default function SectionHeader({ title, id }: { title: string, id: string }) {
    const style = "sticky py-10 top-0 text-3xl w-full z-10";
    return (
        <h1 className={style} key={id}>{title}</h1>
    );
}
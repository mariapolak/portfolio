export default function SectionHeader({ title, id }: { title: string, id: string }) {
    const style = "sticky pt-5 top-0 text-3xl w-full";
    return (
        <h1 className={style} key={id}>{title}</h1>
    );
}
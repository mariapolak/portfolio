import ShortProjectPage from "@/components/short_project_page";

export default function Flashsoft() {
    const title = "Flashsoft";
    const why = "Because it's a great project";
    const achieved = "Achieved a lot";
    const extra = "Some extra information";
    const skills = ["Next.js", "React", "TypeScript"];
    const links = [{ name: "GitHub", href: "https://github.com" }];

    return (
        <ShortProjectPage
            title={title}
            image="/commercial/flashsoft/main.png"
            why={why}
            achieved={achieved}
            extra={extra}
            skills={skills}
            links={links}
        />
    );
}
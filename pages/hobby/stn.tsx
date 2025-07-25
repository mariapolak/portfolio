import ShortProjectPage from "@/components/short_project_page";

export default function STN() {
    const title = "STN-Based Pitch-Shifting";
    const why = "Because it's a great project";
    const achieved = "Achieved a lot";
    const extra = "Some extra information";
    const skills = ["Next.js", "React", "TypeScript"];
    const links = [{ name: "GitHub", href: "https://github.com" }];

    return (
        <ShortProjectPage
            title={title}
            image="/hobby/stn/main.png"
            why={why}
            achieved={achieved}
            extra={extra}
            skills={skills}
            links={links}
        />
    );
}
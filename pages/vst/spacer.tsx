import LongProjectPage from "@/components/long_project_page";

export default function Spacer() {
    const title = "Spacer";
    const why = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const achieved = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const extra = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const skills = ["JUCE Framework", "C++17", "Python", "Prototyping", "Signal Processing", "Multi-OS Development", "Code Release", "Collaboration", "Code Review", "Azure", "Git"];
    const links = [
        { name: "Official Website", href: "https://spectral-plugins.com/" }, 
        { name: "YouTube Demo", href: "https://www.youtube.com/watch?v=QtNnskjqnQ8&t=853s&ab_channel=SpectralPlugins"},
        { name: "KVR Audio", href: "https://www.kvraudio.com/product/spacer-by-spectral-plugins"}];

    const galleryImages = [
        "/plugins/spacer/1.png",
        "/plugins/spacer/2.png",
        "/plugins/spacer/3.png",
        "/plugins/spacer/4.png",
        "/plugins/spacer/5.png",
        "/plugins/spacer/6.png"
    ];

    return (
        <LongProjectPage
            title={title}
            image="/plugins/plugin3.png"
            why={why}
            achieved={achieved}
            extra={extra}
            skills={skills}
            links={links}
            galleryImages={galleryImages}
        />
    );
}
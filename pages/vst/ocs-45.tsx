import LongProjectPage from "@/components/long_project_page";

export default function OCS_45() {
    const title = "OCS-45";
    const why = "Spectral Plugins is a company that specializes in creating high-quality audio plugins for music production. Spectral's first plugin, OCS-45, is a cassette tape simulator that emulates the sound of classic cassette tapes. The plugin is designed to add warmth and character to digital recordings, making them sound more analog and less sterile.";
    const achieved = "I was the main DSP developer of the OCS-45 plugin, responsible for implementing the core audio processing algorithms and ensuring the plugin's performance and stability. I worked closely with audio producers and musicians to refine the plugin's sound and usability. I implemented sound processing algorithms using C++ and the JUCE framework, which is widely used in the audio industry for developing plugins and applications. I played a key role in system architecture design, collaborated with a UX designer to create an intuitive user interface, built universal binaries for macOS, and developed macOS installers.";
    const extra = "The plugin brought initial recognition to Spectral Plugins, and it has been well-received by the audio community. The success of OCS-45 has paved the way for future plugin development. This was an important milestone in my career as a DSP developer, it introduced me to the world of audio plugin development and inspired a long lasting passion.";
    const skills = ["JUCE Framework", "C++14", "Signal Processing", "Multi-OS Development", "Code Release", "Collaboration", "Code Review", "Azure", "Git"];
    const links = [
        { name: "Official Website", href: "https://spectral-plugins.com/" }, 
        { name: "YouTube Demo", href: "https://www.youtube.com/watch?v=rUU5xXXdtAM&ab_channel=SpectralPlugins"},
        { name: "KVR Audio", href: "https://www.kvraudio.com/product/ocs-45-cassette-simulation-by-spectral-plugins"}];

    const galleryImages = [
        "/plugins/ocs/1.webp",
        "/plugins/ocs/2.webp",
        "/plugins/ocs/3.webp",
        "/plugins/ocs/4.webp",
        "/plugins/ocs/5.webp",
        "/plugins/ocs/6.png",
        "/plugins/ocs/7.png",
        "/plugins/ocs/8.png",
        "/plugins/ocs/9.png",
        "/plugins/ocs/10.png",
        "/plugins/ocs/11.png",
        "/plugins/ocs/12.png",
    ];

    return (
        <LongProjectPage
            title={title}
            image="/plugins/plugin1.png"
            why={why}
            achieved={achieved}
            extra={extra}
            skills={skills}
            links={links}
            galleryImages={galleryImages}
        />
    );
}
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="fixed bottom-10 w-full">
            <div className="flex gap-6 flex-wrap font-thin text-10px items-center justify-center ">
                <div className="flex gap-6 bg-primary rounded-lg px-4 py-1">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://www.linkedin.com/in/mariapolak/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/portfolio/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    LinkedIn
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/portfolio/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    CV
                </a>
                </div>
                
            </div>
        </footer>
    );
}
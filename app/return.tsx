"use client";
import Link from "next/link";

export default function Return() {
    return (
         <div className="block fixed top-0 flex pt-4 pl-7 text-gray-700">
            <Link href="/" className="text-current hover:text-secondary transition-colors duration-200">Go back</Link>
        </div>
    );
}
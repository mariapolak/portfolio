"use client"

import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

export default function Spacer() {
    // var isLink = prop.link !== undefined && prop.link !== null && prop.link !== "" ? true : false;

    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <AnimatePresence>
            {isOpen && (
                <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    background: "black",
                    zIndex: 4,
                }}
                />
            )}
            </AnimatePresence>
            <motion.div
            whileTap={{ scale: 0.95 }}
            layout
            style={
                isOpen
                ? {
                    position: "fixed",
                    top: "10vh",
                    left: "10%",
                    width: "80%",
                    height: "80vh",
                    zIndex: 5,
                }
                : {}
            }
            onClick={() => setOpen(!isOpen)}
            className={`flex flex-col bg-primary rounded-xl `}
            >
            <div className="flex flex-col items-center gap-3 p-5">
                {/* <h3 className="text-xl">Spacer</h3>
                <p className="text-justify text-xs w-full">TEST</p> */}
            </div>
            </motion.div>
            {isOpen && (
            <div className={`flex flex-col `}></div>
            )}
        </>
    )
}

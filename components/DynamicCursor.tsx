"use client";
import { useEffect, useRef, useState } from "react";

const OUTER_SIZE = 32;
const INNER_SIZE = 8;
const COLOR = "#2563EB";

export default function DynamicCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const initialized = useRef(false);
    const hasMoved = useRef(false);
    const pos = useRef<{ x: number; y: number } | null>(null);

    // Force re-render once to render cursor after first movement
    const [, forceRender] = useState(false);

    useEffect(() => {
        const appRoot = document.getElementById("app-root");

        const moveCursor = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            if (!initialized.current) {
                pos.current = { x: clientX, y: clientY };
                hasMoved.current = true;
                initialized.current = true;
                forceRender(v => !v); // force initial render
                return;
            }

            if (cursorRef.current) {
                cursorRef.current.style.left = `${clientX - OUTER_SIZE / 2}px`;
                cursorRef.current.style.top = `${clientY - OUTER_SIZE / 2}px`;
            }
            if (innerRef.current) {
                innerRef.current.style.left = `${clientX - INNER_SIZE / 2}px`;
                innerRef.current.style.top = `${clientY - INNER_SIZE / 2}px`;
            }

            pos.current = { x: clientX, y: clientY };
        };

        const hideCursor = () => {
            if (cursorRef.current) cursorRef.current.style.opacity = "0";
            if (innerRef.current) innerRef.current.style.opacity = "0";
        };

        const showCursor = () => {
            if (!hasMoved.current || !pos.current) return;

            const { x, y } = pos.current;

            if (cursorRef.current) {
                cursorRef.current.style.opacity = "0.6";
                cursorRef.current.style.left = `${x - OUTER_SIZE / 2}px`;
                cursorRef.current.style.top = `${y - OUTER_SIZE / 2}px`;
            }
            if (innerRef.current) {
                innerRef.current.style.opacity = "1";
                innerRef.current.style.left = `${x - INNER_SIZE / 2}px`;
                innerRef.current.style.top = `${y - INNER_SIZE / 2}px`;
            }
        };

        window.addEventListener("mousemove", moveCursor);
        if (appRoot) {
            appRoot.addEventListener("mouseleave", hideCursor);
            appRoot.addEventListener("mouseenter", showCursor);
        }

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            if (appRoot) {
                appRoot.removeEventListener("mouseleave", hideCursor);
                appRoot.removeEventListener("mouseenter", showCursor);
            }
        };
    }, []);

    if (!hasMoved.current || !pos.current) return null;

    const { x, y } = pos.current;

    return (
        <>
            <div
                ref={cursorRef}
                style={{
                    position: "fixed",
                    left: x - OUTER_SIZE / 2,
                    top: y - OUTER_SIZE / 2,
                    width: OUTER_SIZE,
                    height: OUTER_SIZE,
                    borderRadius: "50%",
                    background: COLOR,
                    opacity: 0.6,
                    pointerEvents: "none",
                    zIndex: 9999,
                    mixBlendMode: "difference",
                }}
            />
            <div
                ref={innerRef}
                style={{
                    position: "fixed",
                    left: x - INNER_SIZE / 2,
                    top: y - INNER_SIZE / 2,
                    width: INNER_SIZE,
                    height: INNER_SIZE,
                    borderRadius: "50%",
                    background: "currentColor",
                    opacity: 1,
                    pointerEvents: "none",
                    zIndex: 10000,
                    color: COLOR,
                }}
            />
        </>
    );
}

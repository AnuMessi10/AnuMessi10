"use client";

import { useState, useEffect } from "react";

const useIsMobile = () => {
    const [isSmallDevice, setIsSmallDevice] = useState<boolean>(
        typeof window !== "undefined" && window.innerWidth < 768
    );

    const handleResize = () => {
        setIsSmallDevice(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return { isSmallDevice };
};

export default useIsMobile;

"use client";
import { ReactLenis } from 'lenis/react'
import React, { PropsWithChildren } from 'react';

const SmoothScroll: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <ReactLenis root>
            {children}
        </ReactLenis>
    )
}

export default SmoothScroll;
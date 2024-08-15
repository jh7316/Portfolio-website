import React, { createContext, useRef, ReactNode } from 'react';

// Define the context type
interface RefContextType {
    homeRef: React.RefObject<HTMLDivElement> | null;
    aboutRef: React.RefObject<HTMLDivElement> | null;
    projectsRef: React.RefObject<HTMLDivElement> | null;
    contactRef: React.RefObject<HTMLDivElement> | null;
}

// Create a context with a default value
export const RefContext = createContext<RefContextType>({
    homeRef: null,
    aboutRef: null,
    projectsRef: null,
    contactRef: null,
});

// Create a provider component
export const RefProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Create a ref
    const homeRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    return (
        <RefContext.Provider value={{ homeRef,aboutRef,projectsRef,contactRef }}>
            {children}
        </RefContext.Provider>
    );
};
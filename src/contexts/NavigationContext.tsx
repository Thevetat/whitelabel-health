import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface NavigationContextType {
    currentPageName: string;
    metaTitle: string;
    metaDescription: string;
    updatePageInfo: (name: string, title: string, description: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
    const [currentPageName, setCurrentPageName] = useState('');
    const [metaTitle, setMetaTitle] = useState('');
    const [metaDescription, setMetaDescription] = useState('');

    const updatePageInfo = (name: string, title: string, description: string) => {
        setCurrentPageName(name);
        setMetaTitle(title);
        setMetaDescription(description);
    };

    useEffect(() => {
        document.title = metaTitle;
        const metaDescriptionTag = document.querySelector('meta[name="description"]');
        if (metaDescriptionTag) {
            metaDescriptionTag.setAttribute('content', metaDescription);
        }
    }, [metaTitle, metaDescription]);

    return (
        <NavigationContext.Provider value={{ currentPageName, metaTitle, metaDescription, updatePageInfo }}>
            {children}
        </NavigationContext.Provider>
    );
}

export function useNavigation() {
    const context = useContext(NavigationContext);
    if (context === undefined) {
        throw new Error('useNavigation must be used within a NavigationProvider');
    }
    return context;
}

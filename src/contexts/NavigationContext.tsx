import { APP_NAME } from '@/data/SiteLinks';
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface NavigationContextType {
    metaTitle: string;
    metaDescription: string;
    updatePageInfo: (title: string, description: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
    const [metaTitle, setMetaTitle] = useState('');
    const [metaDescription, setMetaDescription] = useState('');

    const updatePageInfo = (title: string, description: string) => {
        setMetaTitle(title);
        setMetaDescription(description);
    };

    useEffect(() => {
        document.title = `${metaTitle} | ${APP_NAME}`;
        const metaDescriptionTag = document.querySelector('meta[name="description"]');
        if (metaDescriptionTag) {
            metaDescriptionTag.setAttribute('content', metaDescription);
        }
    }, [metaTitle, metaDescription]);

    return (
        <NavigationContext.Provider value={{ metaTitle, metaDescription, updatePageInfo }}>
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

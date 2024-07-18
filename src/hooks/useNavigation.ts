import { useState, useCallback } from 'react';

export function useNavigation() {
    const [currentPageName, setCurrentPageName] = useState('');

    const updateCurrentPageName = useCallback((name: string) => {
        setCurrentPageName(name);
    }, []);

    return {
        currentPageName,
        updateCurrentPageName,
    };
}

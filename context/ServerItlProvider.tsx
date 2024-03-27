"use client";
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { IntlProvider } from 'react-intl';
import Arabic from '@/lang/ar.json';
import Hebrew from '@/lang/he.json';

type Language = 'ar' | 'he';

type LanguageContextType = {
    language: Language;
    setLanguage: (language: Language) => void;
};

const defaultLanguage: Language = 'he';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(defaultLanguage);

    const handleChangeLanguage = (newLanguage: Language) => {
        setLanguage(newLanguage);
    };

    const messages = language === 'ar' ? Arabic : Hebrew;

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleChangeLanguage }}>
            <IntlProvider locale={language} messages={messages}>
                {children}
            </IntlProvider>
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if(!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

"use client"
import React, { createContext, useState, useContext } from 'react';

const ResumeContext = createContext();

export const useResume = () => {
    return useContext(ResumeContext);
};

export const ResumeProvider = ({ children }) => {
    const [resumeData, setResumeData] = useState({
        basicInfo: {},
        education: {},
        experiences: {},
        achievments: {},
        hobbies: {},
        skills: {},
        projects: {},
        activities: {}
    });

    const updateResumeData = (section, data) => {
        setResumeData(prevData => ({
            ...prevData,
            [section]: data,
        }));
    };

    return (
        <ResumeContext.Provider value={{ resumeData, updateResumeData }}>
            {children}
        </ResumeContext.Provider>
    );
};

import '../../styles/life-nav-styles/app-details-card.css';
import '../../styles/life-nav-styles/app-detail-card-section.css';

import AppDetailsCard from './app-details-card';


import React, { useRef } from 'react';

function AppDetailCardSection() {

    const detailsRef = useRef(null); // Create a reference to the <details> element

    const handleScrollToDetails = () => {
        detailsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Align the element to the top
        });
    };

    const trackerData = [
        { id: 1, title: "Habit Tracker", description: "Build and track habits!" },
        { id: 2, title: "Simple Planner", description: "Organize your daily tasks!" },
        { id: 3, title: "Daily To-Do List", description: "Minimalist daily planning tool!" },
        { id: 4, title: "Bucket List", description: "Track your life goals!" },
        { id: 5, title: "Meal Planner", description: "Plan meals for healthy living!" },
        { id: 6, title: "Workout Tracker", description: "Track fitness and progress!" },
        { id: 7, title: "Diary Journal", description: "Record your thoughts daily!" },
        { id: 8, title: "Financial Planner", description: "Manage your finances easily!" },
    ];
    
    

    const studyToolsData = [
        // Study Assisting Tools
        { id: 10, title: "CheatSheet Maker", description: "Create quick reference cheat sheets." },
        { id: 11, title: "Study Notes Taker", description: "Easily take and organize notes." },
        { id: 12, title: "Countdown Timer Widget", description: "Track time with countdown timer." },
        { id: 13, title: "Flashcards for different Domains", description: "Learn with flashcards." },
        { id: 14, title: "Interview Q&A", description: "Prepare with interview questions." },
    ];
    

    const softskillsData = [
        // Soft Skills building tools
        { id: 15, title: "Goal Setting Builder", description: "Set and achieve your goals." },
        { id: 16, title: "Roadmap and Vision Board Creator", description: "Create vision boards and plans." },
        { id: 17, title: "Soft Skill Builder Tool", description: "Develop essential soft skills." },
    ];
    

    const documentAutomationData = [
        // Document Automations
        { id: 18, title: "Resume Generator", description: "Generate professional resumes quickly." },
        { id: 19, title: "Document Generator", description: "Create documents effortlessly." },
        { id: 20, title: "PDF Processing Automation", description: "Automate PDF tasks and actions." },
        { id: 21, title: "Image Converter and Resizer", description: "Convert and resize images instantly." },
    ];
    

    const calculatorsData = [
        // Calculators
        { id: 22, title: "Engineering Calculators", description: "Tools for engineering calculations." },
    ];
    
    const dashboardData = [
        // Dashboard
        { id: 1, title: "Dashboard", description: "Overview of your key metrics." },
    ];
    
    const businessPlanData = [
        // Business Plan creator
        { id: 23, title: "Business Plan Creator", description: "Create professional business plans." },
        { id: 24, title: "Startup Guide", description: "Guide to launching your startup." },
    ];

    const resourceData = [
        // Business Plan creator
        { id: 25, title: "Resources-handbook", description: "Handy Cheatsheet for upskilling, reskilling and building yourself." }
    ];
    
    
    return ( 
        <>
            <div className='app-detail-card-section'>
            <details ref={detailsRef}>
                <summary className='summary-blue' onClick={handleScrollToDetails}><h2>Plannars and Trackers</h2></summary>
                <div className='card-container'>
                    {trackerData.map((item) => (     
                    <AppDetailsCard key={item.id}
                                    title={item.title}
                                    description={item.description}></AppDetailsCard> ))}
                </div>

            </details>
            
            <details ref={detailsRef}>
                <summary className='summary-green' onClick={handleScrollToDetails}><h2>Study Assisting Tools</h2></summary>
                <div className='card-container'>
                    {studyToolsData.map((item) => (
                    <AppDetailsCard key={item.id}
                                    title={item.title}
                                    description={item.description}></AppDetailsCard> ))}
                </div>

            </details>

            <details ref={detailsRef}>
                <summary className='summary-purple' onClick={handleScrollToDetails}><h2>Soft Skills Builders</h2></summary>
                <div className='card-container'>
                    {softskillsData.map((item) => (
                    <AppDetailsCard key={item.id}
                                    title={item.title}
                                    description={item.description}></AppDetailsCard> ))}
                </div>

            </details>

            <details ref={detailsRef}>
                <summary className='summary-orange' onClick={handleScrollToDetails}><h2>Document Automation Assistants</h2></summary>
                <div className='card-container'>
                    {documentAutomationData.map((item) => (
                    <AppDetailsCard key={item.id}
                                    title={item.title}
                                    description={item.description}></AppDetailsCard> ))}
                </div>

            </details>

            <details ref={detailsRef}>
                <summary className='summary-red' onClick={handleScrollToDetails}><h2>Calculators</h2></summary>
                <div className='card-container'>
                    {calculatorsData.map((item) => (
                    <AppDetailsCard key={item.id}
                                    title={item.title}
                                    description={item.description}></AppDetailsCard> ))}
                </div>

            </details>

            <details ref={detailsRef}>
                <summary className='summary-teal' onClick={handleScrollToDetails}><h2>Entrepreneurship Assistance</h2></summary>
                <div className='card-container'>
                    {businessPlanData.map((item) => (
                    <AppDetailsCard key={item.id}
                                    title={item.title}
                                    description={item.description}></AppDetailsCard> ))}
                </div>

            </details>  

            <details ref={detailsRef}>
                <summary className='summary-pink-purple' onClick={handleScrollToDetails}><h2>Dashboard</h2></summary>
                <div className='card-container'>
                    {dashboardData.map((item) => (
                    <AppDetailsCard key={item.id}
                                    title={item.title}
                                    description={item.description}></AppDetailsCard> ))}
                </div>

            </details>

            <details ref={detailsRef}>
                <summary className='summary-blue' onClick={handleScrollToDetails}><h2>Resources</h2></summary>
                <div className='card-container'>
                    {resourceData.map((item) => (
                    <AppDetailsCard key={item.id}
                                    title={item.title}
                                    description={item.description}></AppDetailsCard> ))}
                </div>

            </details>
        </div>

       
        
        </>



    )
}

export default AppDetailCardSection;



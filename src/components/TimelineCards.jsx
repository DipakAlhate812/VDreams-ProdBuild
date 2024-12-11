import React from "react";
import "../styles/TimelineCards.css";

const dictionary = [
  {
    date: "Dec, 2024",
    title: "Product Launch",
    description: `-Digital Products Base Versions
                    -Habit Tracker
                    -Diary Journal
                    -Flashcard Generator
                    -Roadmap and Vision Board Creator
                    -Vision, Mission & Strategy
                    -Micro Level Business Plan with revenue model - Service, Products, Workshops
                    -Case studies on problem statements and solutions in terms of microproducts
                    -Website Development
                    -Pre-Launch
                    -Instagram Product Account`,
  },
  {
    date: "Jan, 2025",
    title: "Website Revamp",
    description: "Our website has been revamped for a better user experience.",
  },
  // Additional timeline entries go here...
];

function TimelineCards() {
  return (
    <div className="timeline-container">
      {dictionary.map((item, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-date">{item.date}</div>
          <div className="timeline-card">
            <h3 className="timeline-title">{item.title}</h3>
            {/* Convert the description string into a list */}
            <ul className="timeline-description">
              {item.description
                .split("\n") // Split the description by newlines
                .map((line, idx) => line.trim() && <li key={idx}>{line.trim()}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TimelineCards;

import React from "react";
import "../styles/UpdateCard.css";

function UpdateCard() {
  return (
    <div className="update-card">
      <h2 className="update-card-title">Latest Updates</h2>
      <div className="update-card-list">
        <details className="update-card-item">
          <summary className="update-card-summary">16 Dec 2024: Pre-Launch!</summary>
          <p>Update 1: Website Pre-launch for MVP testing and communication!</p>
          <p>Update 2: Digital Product Development started. One tool will be released every 14 days.</p>
          <p>Update 3: Beta testing with user and feedback collection to be started along with every product release.</p>
          <p>Update 4: Register yourself for updates and early customer benefits.</p>
        </details>
      </div>
    </div>
  );
}

export default UpdateCard;

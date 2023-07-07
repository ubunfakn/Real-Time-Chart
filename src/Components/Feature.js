import React from "react";
import '../style.css'

export default function Feature() {
  return (
    <div className="container feature-container">
      <div className="col-md-6 offset-md-3">
        <div className="card feature-card">
          <div className="card-body feature-body">
            <h1>Features</h1>
            <ul>
                <li>This is a real-time Weather-update API</li>
                <li>You can view live temperature updates of your city</li>
                <li>Live updates are displayed using Line-Chart</li>
                <li>This updates are from trusted weather site so they are accurate</li>
                <li>Latest temperatures are stored in the database</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

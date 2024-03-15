import React from "react";
import "./Left.css"; // CSS file for styling

function LeftSection() {
  return (
    <div className="left-section">
      <h2>About Us</h2>
      <div className="paragraphs">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque nisl auctor, fermentum turpis id, feugiat ligula. Nulla
          facilisi. Integer non leo eget odio efficitur fermentum. Maecenas
          quis libero et eros posuere rhoncus. Ut laoreet convallis
          pellentesque. Phasellus sollicitudin nulla ut elit ultrices
          ullamcorper.
        </p>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Fusce in turpis vitae lorem pretium
          convallis. Vestibulum eu turpis quis libero commodo varius. Etiam
          convallis justo eget nisi scelerisque, ut placerat magna sodales.
          Mauris in massa eu metus luctus feugiat.
        </p>
      </div>
    </div>
  );
}

export default LeftSection;

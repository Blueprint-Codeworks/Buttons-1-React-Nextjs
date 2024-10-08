// src/components/CustomTextarea.tsx
import React from 'react';

const CustomTextarea: React.FC = () => {
  return (
    <div className="card">
      <textarea
        className="customTextarea"
        rows={4}
        placeholder="Type your message..."
      ></textarea>
    </div>
  );
};

export default CustomTextarea;

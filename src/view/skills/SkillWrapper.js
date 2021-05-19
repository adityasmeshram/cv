import React from 'react';
import "./SkillWrapper.css";

const SkillWrapper = ({skill}) => {
  return (
    <div className="skill-wrapper">
      <b>{skill}</b>
    </div>
  );
}

export default SkillWrapper;

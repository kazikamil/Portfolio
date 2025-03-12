// src/ProgressBar.js
"use client";
import React, { useEffect, useRef, useState } from 'react';

const ProgressBar = ({ skill, percentage, color, type, typeP }) => {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const progressBarRef = useRef(null);

  useEffect(() => {
    setWidth(percentage);
  }, [percentage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, [progressBarRef]);

  const progressClassName = isVisible ? `animate ${type}` : `${type}`;

  return (
    <div className={"flex items-center space-x-3 md:space-x-10 progress-bar"}>
      {type && (
        <span className="skill-name">{skill}</span>
      )}
      <div className="progress" ref={progressBarRef}>
        <div className={`${typeP} ${color} ${progressClassName}`} style={{ width: `${width}%` }}>
          {width}%
        </div>
      </div>
      {!type && (
        <span className="skill-name">{skill}</span>
      )}
    </div>
  );
};

export default ProgressBar;

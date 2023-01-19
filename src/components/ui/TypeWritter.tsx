import React, { useState, useEffect } from 'react';

type TypewriterProps = {
  text: string[] | string;
};

const Typewriter = ({ text }: TypewriterProps) => {
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState(
    typeof text !== 'string' ? text[0] : text
  );

  useEffect(() => {
    if (text.length) {
      const interval = setInterval(() => {
        if (currentText.length === index) {
          setIndex(1);
          if (typeof text === 'object') {
            const newTextIndex =
              text.findIndex((text) => text === currentText) + 1;
            if (newTextIndex !== text.length)
              setCurrentText(text[newTextIndex]);
            else setCurrentText(text[0]);
          }
        } else {
          setIndex(index + 1);
        }
      }, 300);
      return () => clearInterval(interval);
    }
  }, [index, text]);

  return <span>{currentText.substring(0, index)}|</span>;
};

export { Typewriter };

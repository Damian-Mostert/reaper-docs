import React, { useEffect, useState } from "react";

const getRandomColor = () => {
  return `hsl(${Math.random() * 360}, 100%)`;
};

const ColoredCode = ({ code,codeStyle,preStyle }: { code: string,codeStyle:any,preStyle:any }) => {
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    setColors(code.split("").map(() => getRandomColor()));
  }, [code]);

  useEffect(() => {
    const interval = setInterval(() => {
      setColors(prevColors => prevColors.map(() => getRandomColor()));
    }, 500); // Change colors every 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <pre style={preStyle}>
      <code style={codeStyle}>
        {code.split("").map((char, index) => (
          <span key={index} style={{ color: colors[index], transition: "color 0.5s" }}>
            {char}
          </span>
        ))}
      </code>
    </pre>
  );
};

export default ColoredCode;
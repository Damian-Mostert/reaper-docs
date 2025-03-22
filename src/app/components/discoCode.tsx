import React, { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";


const getRandomColor = (theme: string) => {
  if (theme === "light") {
    const shade = Math.floor(Math.random() * 10) + 30; // Shades of blue between 50% and 90%
    return `hsl(210, 100%, ${shade}%)`; // Blue color (hue: 210)
  }
  const shade = Math.floor(Math.random() * 40) + 50; // Shades of red between 50% and 90%
  return `hsl(0, 100%, ${shade}%)`; // Red color (hue: 0)
};

const ColoredCode = ({ code,codeStyle,preStyle }: { code: string,codeStyle:any,preStyle:any }) => {
  const {theme} = useTheme()
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    setColors(code.split("").map(() => getRandomColor(theme)));
  }, [code,theme]);

  useEffect(() => {
    const interval = setInterval(() => {
      setColors(prevColors => prevColors.map(() => getRandomColor(theme)));
    }, 5000); // Change colors every 500ms

    return () => clearInterval(interval);
  }, [theme]);

  return (
    <pre style={preStyle}>
      <code style={codeStyle}>
        {code.split("").map((char, index) => (
          <span key={index} style={{ color: colors[index], transition: "color 5s" }}>
            {char}
          </span>
        ))}
      </code>
    </pre>
  );
};

export default ColoredCode;
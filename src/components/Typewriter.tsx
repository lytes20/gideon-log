import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}
export default function Typewriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 1200,
}: TypewriterProps) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // current word index
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[index]; // current word

    let timeout;

    if (!isDeleting) {
      // Typing phase
      timeout = setTimeout(() => {
        setText(current.substring(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }, typingSpeed);
    } else {
      // Deleting phase
      timeout = setTimeout(() => {
        setText(current.substring(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, words, index, typingSpeed, deletingSpeed, pauseTime]);

  return <h2>{text}</h2>;
}

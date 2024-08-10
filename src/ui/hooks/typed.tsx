import { useState, useEffect, FC } from 'react';

type TypewriterProps = {
    text: string[];
    delay: number;
}

export const Typewriter: FC<TypewriterProps> = ({text, delay}) => {
    const [currentText, setCurrentText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = text[wordIndex];
            const updatedText = isDeleting
                ? currentWord.substring(0, currentText.length - 1)
                : currentWord.substring(0, currentText.length + 1);

            setCurrentText(updatedText);

            if (!isDeleting && updatedText === currentWord) {
                setTimeout(() => setIsDeleting(true), 3000);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setWordIndex((prevIndex) => (prevIndex + 1) % text.length);
            }
        };

        const timeout = setTimeout(handleTyping, delay);
        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, delay, text, wordIndex]);


    return <span>
        {currentText}
        <span className="animate-pikPoint font-Raleway font-bold">|</span>
    </span>
};
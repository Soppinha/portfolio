import {useState, useEffect} from 'react';

// eslint-disable-next-line react/prop-types
export const Typewriter = ({text, delay}) => {
    const [currentText, setCurrentText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = text[wordIndex];
            const updatedText = isDeleting
                // eslint-disable-next-line react/prop-types
                ? currentWord.substring(0, currentText.length - 1)
                // eslint-disable-next-line react/prop-types
                : currentWord.substring(0, currentText.length + 1);

            setCurrentText(updatedText);

            if (!isDeleting && updatedText === currentWord) {
                setTimeout(() => setIsDeleting(true), 3000);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                // eslint-disable-next-line react/prop-types
                setWordIndex((prevIndex) => (prevIndex + 1) % text.length);
            }
        };

        const timeout = setTimeout(handleTyping, delay);
        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, delay, text, wordIndex]);


    return <span>
      {currentText}
        <span className="animate-pikPoint font-Raleway font-extrabold">|</span>
    </span>
};
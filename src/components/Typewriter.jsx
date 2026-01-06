import React, { useState, useEffect } from 'react';

const Typewriter = ({ phrases, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }) => {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const currentPhrase = phrases[currentPhraseIndex];
        
        if (isPaused) {
            const pauseTimer = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, pauseTime);
            return () => clearTimeout(pauseTimer);
        }

        if (isDeleting) {
            if (currentText === '') {
                setIsDeleting(false);
                setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
            } else {
                const timer = setTimeout(() => {
                    setCurrentText((prev) => prev.slice(0, -1));
                }, deletingSpeed);
                return () => clearTimeout(timer);
            }
        } else {
            if (currentText === currentPhrase) {
                setIsPaused(true);
            } else {
                const timer = setTimeout(() => {
                    setCurrentText((prev) => currentPhrase.slice(0, prev.length + 1));
                }, typingSpeed);
                return () => clearTimeout(timer);
            }
        }
    }, [currentText, isDeleting, isPaused, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime]);

    return (
        <span className="typewriter-text">
            {currentText}
            <span className="cursor">|</span>
        </span>
    );
};

export default Typewriter;


import React, { useState, useEffect } from 'react';

// Split string by Unicode code points (keeps emojis as single "characters")
const toSegments = (str) => [...str];

const Typewriter = ({ phrases, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }) => {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [displayIndex, setDisplayIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const currentPhrase = phrases[currentPhraseIndex] ?? '';
    const segments = toSegments(currentPhrase);
    const currentText = segments.slice(0, displayIndex).join('');

    useEffect(() => {
        if (isPaused) {
            const pauseTimer = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, pauseTime);
            return () => clearTimeout(pauseTimer);
        }

        if (isDeleting) {
            if (displayIndex === 0) {
                setIsDeleting(false);
                setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
            } else {
                const timer = setTimeout(() => {
                    setDisplayIndex((prev) => prev - 1);
                }, deletingSpeed);
                return () => clearTimeout(timer);
            }
        } else {
            if (displayIndex === segments.length) {
                setIsPaused(true);
            } else {
                const timer = setTimeout(() => {
                    setDisplayIndex((prev) => prev + 1);
                }, typingSpeed);
                return () => clearTimeout(timer);
            }
        }
    }, [displayIndex, isDeleting, isPaused, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime, segments.length]);

    return (
        <span className="typewriter-text">
            {currentText}
            <span className="cursor">|</span>
        </span>
    );
};

export default Typewriter;


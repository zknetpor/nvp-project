import React, { useState, useEffect } from 'react';

const JokeGenerator = () => {
    const [joke, setJoke] = useState('');

    const fetchJoke = async () => {
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Any');
            const data = await response.json();
            if (data.setup) {
                setJoke(`${data.setup} - ${data.delivery}`);
            } else {
                setJoke(data.joke);
            }
        } catch (error) {
            console.error('Error fetching joke:', error);
            setJoke('Failed to fetch a joke');
        }
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <div>
            <h2>Joke Generator</h2>
            <p>{joke}</p>
            <button onClick={fetchJoke}>Generate New Joke</button>
        </div>
    );
};

export default JokeGenerator;

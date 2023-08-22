import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const Speech = () => {
  const [text, setText] = useState('');
  const { speak, speaking, supported } = useSpeechSynthesis();

  const handleSpeak = () => {
    speak({ text });
  };

  return (
    <div>
      <h2>Text to Speech</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to be spoken..."
        rows="4"
        cols="50"
      />
      <button
        onClick={handleSpeak}
        disabled={speaking || !supported}
        className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md ${
          speaking || !supported ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Speak
      </button>
    </div>
  );
};

export default Speech;

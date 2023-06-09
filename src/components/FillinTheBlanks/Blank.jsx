import React, { useState, useRef, useEffect } from 'react';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import { useDispatch, useSelector } from 'react-redux';
import { addPoint, noPoint } from '../../features/score/scoreSlice';
import CheckMark from '../CheckMark';
import CrossMark from '../CrossMark';

export default function Blank({ id, answer, submitted, example, reset }) {
  const dispatch = useDispatch();
  const points = useSelector((state) => state.point.points);

  const [paste, setPaste] = useState('');
  const [result, setResult] = useState(null); // Track the result (check mark or cross mark)
  const [inputValue, setInputValue] = useState(''); // Track the input field value
  const [isReset, setIsReset] = useState(false)
  const slotRef = useRef(null);





  const getTextContent = () => {
    if (slotRef.current) {
      const textContent = slotRef.current.textContent;
      return textContent;
    }
    return '';
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const clipboardText = event.clipboardData.getData('text/plain');
    setPaste(clipboardText);
    setInputValue(clipboardText); // Update the input value state
  };

  const handleClick = () => {

    navigator.clipboard.readText().then((clipboardText) => {
      setPaste(clipboardText);
      setInputValue(clipboardText); // Update the input value state
    });
  };

  const correctAnswer = answer;
  useEffect(() => {
    if (submitted && !example) {
      const textContent = getTextContent();
      if (slotRef.current) {
        slotRef.current.innerHTML = textContent;
        const isCorrect = textContent === correctAnswer;
        if (isCorrect) {
          dispatch(addPoint());
          setResult(
            <>
              <div style={{ display: "inline-flex" }}>
                <CheckMark />
              </div>
            </>
          );
        } else {
          dispatch(noPoint());
          setResult(<CrossMark />);
        }
      }
    }
  }, [submitted]);

  const handleReset = () => {
    setPaste('');
    setInputValue('');
    
  };

  useEffect(() => {
    if (reset && id !== '0') {
      handleReset();
      
    }
  }, [reset, isReset]);

  return (
    <>
      <div style={{ display: 'inline-block' }}>
        <button
          onClick={handleClick}
          style={{
            marginRight: '2px',
            border: 'none',
            borderRadius: '5px',
            boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
          }}
          disabled={id === '0' || submitted} // Disable paste button during reset
          className='paper'
        >
          <ContentPasteGoIcon sx={{ fontSize: '0.75em' }} />
        </button>
        {!submitted ? (
          <div
            // id={id}
            style={{ minWidth: '8em', display: 'inline-block', margin: "2px" }}
            contentEditable={id !== "0"}
            onPaste={handlePaste}
            className='border-paper'
            ref={slotRef}
          >
            {example}
            {inputValue}
          </div>
        ) : (
          <div
            id={id}
            style={{ minWidth: '4em', display: 'inline-block' }}
            ref={slotRef}
            className="border-grey"
          >
            {getTextContent()}
          </div>
        )}
        {result}
      </div>
    </>
  );
}

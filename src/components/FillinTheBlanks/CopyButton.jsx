import React, { useRef, useState } from "react";
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const CopyButton = ({ text, isReset, example, submitted }) => {
  const buttonRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  
  const isExample = (text, example) => {
    return text == example;
  };


  isExample(text, example)
  const copyText = () => {
    const range = document.createRange();
    range.selectNode(buttonRef.current);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    navigator.clipboard.writeText(range)
    window.getSelection().removeAllRanges();
    setIsClicked(true);
  };

  const buttonStyle = {
    textDecoration: isClicked || isExample(text, example) ? "line-through" : "none"
  };


  React.useEffect(() => {
    setIsClicked(false);
  }, [isReset]);

  return (
    <>
    <div>
      <Button  ref={buttonRef} onClick={copyText} style={buttonStyle} className="small button"sx={{m:0.5, color:'rgb(50 50 50)',  textTransform: 'none', textAlign:"justify"}} disabled={submitted}  >
      <ContentCopyIcon sx={{fontSize:"0.85em", pr:0.5}} color="success"/><span className="text">{text}</span>
      </Button>
    </div>
    <div>
    </div>
    </>
  );
};



export default CopyButton;
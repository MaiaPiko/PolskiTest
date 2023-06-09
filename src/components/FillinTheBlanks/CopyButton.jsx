import React, { useRef, useState } from "react";
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const CopyButton = ({ text, isReset, example=false, submitted }) => {
  const buttonRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);


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
    textDecoration: isClicked || example ? "line-through" : "none"
  };


  React.useEffect(() => {
    setIsClicked(false);
  }, [isReset]);

  return (
    <div>
      <Button  ref={buttonRef} onClick={copyText} style={buttonStyle} className="small"sx={{m:0.5, color:'rgb(50 50 50)',  textTransform: 'none'}} disabled={submitted}  >
      <ContentCopyIcon sx={{fontSize:"0.85em", pr:0.5}} color="success"/>{text}
      </Button>
    </div>
  );
};



export default CopyButton;
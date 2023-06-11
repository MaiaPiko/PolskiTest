import React, { useEffect } from 'react';
import { useState } from "react";
import SectionCard from '../components/SectionCard';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import Timer from '../components/Timer';
import Instructions from '../components/Instructions';
import content from "../../public/content.json";
import parse from 'html-react-parser';
import Stack from '@mui/material/Stack';
import TextCard from '../components/TextCard';
import MultipleChoice from '../components/MultipleChoice';
import { Button } from "@mui/material";
import { green } from '@mui/material/colors';
import TrueOrFlase from '../components/TrueOrFalse';
import Test2Part3 from '../components/FillinTheBlanks/Test2Part3';
import WordBox from '../components/FillinTheBlanks/WordBox';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ExerciseRow from '../components/Grid/ExerciseRow';
import ExerciseTable from '../components/Grid/ExerciseTable';
import Test2Part5 from '../components/FillinTheBlanks/Test2Part5';


export default function ReadingTest2(){
    const dispatch = useDispatch();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const points = useSelector((state) => state.point.points);
    const [isReset, setIsReset] = useState(false);
    const [isReset2, setIsReset2] = useState(false);
    const [isReset3, setIsReset3] =useState(false)

  const handleReset = () => {
    // setIsReset((prevState) => !prevState );
    setIsReset(true)
    setTimeout(() => {
      setIsReset(false);
    }, 2000); 
  };



  const handleReset2 = () => {
    setIsReset2(true);
    setTimeout(() => {
      setIsReset2(false);
    }, 2000); 
    
  };


  const handleReset3 = () => {
    setIsReset3(true);
    setTimeout(() => {
      setIsReset3(false);
    }, 2000); 
    
  };

    const handleSubmit = () => {
        setIsSubmitted(true);    
      };
    

      const set1 = Array.from({ length: 5 }, (_, i) => (
        <Container key={i} maxWidth="sm" sx={{ px: 2 }}>
          <Stack spacing={2}>
            <TextCard text={parse(content.test2.reading.part1[i].text)} />
            <MultipleChoice
              id={i}
              question={content.test2.reading.part1[i].question}
              choiceA={content.test2.reading.part1[i].choices.a}
              choiceB={content.test2.reading.part1[i].choices.b}
              choiceC={content.test2.reading.part1[i].choices.c}
              answer={content.test2.reading.part1[i].answer}
              submitted={isSubmitted}
            />
          </Stack>
        </Container>
      ));
      
      const set2 = []
      for (let i=0; i < 8; i++){
        set2.push(
        <Container key={i} maxWidth="sm" sx={{ px: 0 }}>
        <Stack  sx={{m:2}} >
          <TextCard text={content.test2.reading.part2[i].question}/>
          <TrueOrFlase submitted={isSubmitted} answer={content.test1.reading.part2[i].answer} id={i}/>
        </Stack>
          </Container>
          );   
      }

      const rows = [<ExerciseRow id={"0"}  example={content.test2.reading.part4.choices[0]} submitted={isSubmitted} sentence={content.test2.reading.part4.sentences[0]}/>]
  for (let i=1; i < 7; i++){
    rows.push(
    <ExerciseRow id={i} submitted={isSubmitted}  reset={isReset2} answer={content.test2.reading.part4.choices[content.test2.reading.part4.answers[i]]} sentence={content.test2.reading.part4.sentences[i]}/>)}



    return(
        <>
        <Container maxWidth="md">
      <h2 className='text' style={{textAlign:"center"}}>{parse(content.test2.reading.title)} </h2>
      <p className='text' style={{textAlign:"justify"}}>{parse(content.test2.reading.description)}</p>
      <Timer minutes={45}/>
        <Instructions text={content.test2.reading.part1.instructions} />
        <p className='text' style={{fontSize:"0.75em"}}>{content.scoreValue[1]}</p>
        <SectionCard>
        
        <Stack spacing={2} sx={{my: 5,}}>
        
        {set1}
        </Stack>
        </SectionCard>
        <Instructions text={content.test2.reading.part2.instructions} />
        <p className='text' style={{fontSize:"0.75em"}}>{content.scoreValue[1]}</p>

        <SectionCard>
        <Container maxWidth="sm" sx={{ px: 2 }}>

          <Stack sx={{alignContent:"center"}}>
        <p style={{textAlign:"center", fontWeight:500}}>{content.test2.reading.part2.title}</p>
       {parse(content.test2.reading.part2.text)}
        </Stack>
        {set2}
        </Container>
      </SectionCard>
      <Instructions text={content.test2.reading.part3.instructions} />
      <p className='text' style={{fontSize:"0.75em"}}>{content.scoreValue[1]}</p>

      <SectionCard>
      <Stack sx={{alignContent:"center"}}>
      <WordBox textArray={Object.values(content.test2.reading.part3.choices)} isReset={isReset} submitted={isSubmitted}/>
 
      <Container maxWidth="md">
      <p  style={{textAlign:"center", fontWeight:500}}>{content.test2.reading.part3.title}</p>

        <div style={{fontSize:"1em", padding:"1em"}}>   
          <Test2Part3 isSubmitted={isSubmitted} isReset={isReset}/>
          <div style={{textAlign:"right"}}>
          <button onClick={handleReset} style={{border:"none", borderRadius: '5px',
            boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',}} className="paper" disabled={isSubmitted}>
          <RestartAltIcon className='text' />
          </button>
          </div>
          </div>

        
        </Container>
        </Stack>
         </SectionCard>
         <Instructions text={content.test2.reading.part4.instructions}  />
         <p className='text' style={{fontSize:"0.75em"}}>{content.scoreValue[1]}</p>
         <Stack sx={{alignContent:"center"}}>
        <SectionCard>
        <Container>
        <WordBox textArray={Object.values(content.test2.reading.part4.choices)} isReset={isReset2} submitted={isSubmitted} 
        example={content.test2.reading.part4.choices[0]}/>
        <p style={{textAlign:"center", fontWeight:500}}>{content.test1.reading.part4.title}</p>

        <ExerciseTable rows={rows}/>
        <div style={{textAlign:"right", padding:"5px"}}>
        <button onClick={handleReset2} style={{border:"none", borderRadius: '5px',
            boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',}} className="paper" disabled={isSubmitted}>
          <RestartAltIcon className='text'/>
          </button>
          </div>
        </Container>
        </SectionCard>
        </Stack>
        <Instructions text={content.test2.reading.part5.instructions} />
        <p className='text' style={{fontSize:"0.75em"}}>{content.scoreValue[0.5]}</p>
        <SectionCard>
        <Stack sx={{alignContent:"center"}}>
       
       
        <WordBox style={{paddingRight:"2px"}} textArray={Object.values(content.test2.reading.part5.choices)} isReset={isReset3} submitted={isSubmitted} example={content.test2.reading.part5.choices[0]}/>
        <Container maxWidth="md">
        <div style={{fontSize:"1em", padding:"1em"}}>   

        <Test2Part5 isReset={isReset3} isSubmitted={isSubmitted}/>
        
        <div style={{textAlign:"right"}}>
          <button onClick={handleReset3} style={{border:"none", borderRadius: '5px',
            boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',}} className="paper" disabled={isSubmitted}>
          <RestartAltIcon className='text'/>
          </button>
          </div>
          </div>
        </Container>
        </Stack>
        </SectionCard>




        <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
  {!isSubmitted && (
    <Button color="success" variant="contained" onClick={handleSubmit} sx={{backgroundColor:green[500], textAlign:"center", fontWeight: "bold", m:3}}>Oblicz wynik</Button> 
  )}
  {isSubmitted && (<h3>{points}/30</h3>)}
</div>


        </Container>
        </>
    );
}
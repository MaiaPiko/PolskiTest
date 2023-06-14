import React, { useEffect } from 'react';
import { useState } from "react";
import Description from "../components/Description";
import Container from '@mui/material/Container';
import Instructions from "../components/Instructions";
import content from "../../public/content.json";
import TextCard from "../components/TextCard";
import MultipleChoice from "../components/MultipleChoice";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { restart } from "../features/score/scoreSlice";
import Timer from "../components/Timer";
import Stack from '@mui/material/Stack';
import SectionCard from "../components/SectionCard";
import parse from 'html-react-parser';
import TrueOrFlase from "../components/TrueOrFalse";
import { green } from '@mui/material/colors';
import WordBox from "../components/FillinTheBlanks/WordBox";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Part3Text from "../components/FillinTheBlanks/Part3Text";
import ExerciseRow from '../components/Grid/ExerciseRow';
import ExerciseTable from '../components/Grid/ExerciseTable';
import Part5 from '../components/Drop/Part5';
import Test3Part3 from '../components/FillinTheBlanks/Test3Part3';
import Test3Part5 from '../components/Drop/Test3Part5';

export default function ReadingTest3() {
    const dispatch = useDispatch();
    const points = useSelector((state) => state.point.points);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isReset, setIsReset] = useState(false);
    const [isReset2, setIsReset2] = useState(false);
    const [inputValues, setInputValues] = useState({});
  
  
  
    useEffect(() => {
      dispatch(restart());
    }, [dispatch]);
  
    const handleInputChange = (id, value) => {
      setInputValues((prevInputValues) => ({
        ...prevInputValues,
        [id]: value,
      }));
    };
    const handleSubmit = () => {
  
      setIsSubmitted(true);
  
    };

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


    

    const set1 = [];

    for (let i = 0; i < 6; i++) {
      set1.push(
      
  
        <Container key={i} maxWidth="sm" sx={{ px: 2 }}>
            <Stack spacing={2} >
          <TextCard text={parse(content.test3.reading.part1[i].text)} id={i}/>
          <MultipleChoice
          id={i}
            question={content.test3.reading.part1[i].question}
            choiceA={content.test3.reading.part1[i].choices.a}
            choiceB={content.test3.reading.part1[i].choices.b}
            choiceC={content.test3.reading.part1[i].choices.c}
            answer={content.test3.reading.part1[i].answer}
            submitted={isSubmitted}
          />
          </Stack>
        </Container>
      );
    };


    const set2 = []
    for (let i=0; i < 8; i++){
      set2.push(
      <Container key={i} maxWidth="sm" sx={{ px: 0 }}>
      <Stack  sx={{m:2}} >
        <TextCard text={content.test3.reading.part2[i].question} id={i}/>
        <TrueOrFlase submitted={isSubmitted} answer={content.test3.reading.part2[i].answer} id={i}/>
      </Stack>
        </Container>
        
        );
      }
      
      const rows = [<ExerciseRow id={"0"}  example={content.test3.reading.part4.choices[0]} submitted={isSubmitted} sentence={content.test3.reading.part4.sentences[0]}/>]
      for (let i=1; i < 8; i++){
        rows.push(
        <ExerciseRow id={i} submitted={isSubmitted}  reset={isReset2}
         answer={content.test3.reading.part4.choices[i]} sentence={content.test3.reading.part4.sentences[i]}/>)
    
    
      }

return(
    <>
    <Container maxWidth="md" sx={{alignContent:"center"}}>
              <h2 style={{textAlign:"center"}} className='text'>{parse(content.test3.reading.title)} </h2>
              <p className='text' style={{textAlign:"justify"}}>{parse(content.test3.reading.description)}</p>
              <Timer minutes={45}/>
              <Instructions text={content.test3.reading.part1.instructions} />
              <p className='text' style={{fontSize:"0.75em"}}>{content.scoreValue[1]}</p>
              <SectionCard>
              <Stack spacing={2} sx={{my: 5,}}>
              {set1}
              </Stack>
              </SectionCard>
              <Instructions text={content.test3.reading.part2.instructions} />
              <p className='text' style={{fontSize:"0.75em"}}>{content.scoreValue[1]}</p>
            
        <SectionCard>
        <Container maxWidth="sm" sx={{ px: 2 }}>

          <Stack sx={{alignContent:"center"}}>
        <p style={{textAlign:"center", fontWeight:500}}>{content.test3.reading.part2.title}</p>
       {parse(content.test3.reading.part2.text)}
        </Stack>
        {set2}
        </Container>
        </SectionCard>
        <Instructions text={content.test3.reading.part3.instructions} />
      <p className='text' style={{fontSize:"0.75em"}}>{content.scoreValue[1]}</p>

      <SectionCard>
      <Stack sx={{alignContent:"center"}}>
      <WordBox textArray={Object.values(content.test3.reading.part3.choices)} isReset={isReset} submitted={isSubmitted} example={content.test3.reading.part3.choices.C}/>

      <Container maxWidth="md">
      <p style={{textAlign:"center", fontWeight:500}}>{content.test3.reading.part3.title}</p>

        <div style={{fontSize:"1em", padding:"1em"}}>   
          <Test3Part3 isSubmitted={isSubmitted} isReset={isReset}/>
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
        <Instructions text={content.test3.reading.part4.instructions}  />
        <p className='text' style={{fontSize:"0.75em"}}>{content.scoreValue[1]}</p>
        <Stack sx={{alignContent:"center"}}>
        <SectionCard>
        <Container>
        <WordBox textArray={Object.values(content.test3.reading.part4.choices)} isReset={isReset2} submitted={isSubmitted} 
        example={content.test3.reading.part3.choices.C}/>
        <p style={{textAlign:"center", fontWeight:500}}>{content.test3.reading.part4.title}</p>

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
        <Instructions text={content.test3.reading.part5.instructions} />
        <p className='text' style={{fontSize:"0.75em"}}>{content.scoreValue[0.5]}</p>

      <SectionCard>
      <Container >
        <Test3Part5 submitted={isSubmitted}/>
       </Container>
        </SectionCard>

<div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
  {!isSubmitted && (
    <Button variant="contained"color='success' onClick={handleSubmit} sx={{backgroundColor:green[700], textAlign:"center", m:3,  }}>Oblicz wynik</Button> 
  )}
  {isSubmitted && (<h3 className='text'>{points}/30</h3>)}
</div>
    </Container>
    </>
);



    
  
}
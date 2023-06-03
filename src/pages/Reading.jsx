import { useState } from "react";
import Description from "../components/Description";
import Container from '@mui/material/Container';
import Instructions from "../components/Instructions";
import content from "../../public/content.json";
import TextCard from "../components/TextCard";
import MultipleChoice from "../components/MultipleChoice";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { addPoint, noPoint } from "../features/score/scoreSlice";
import Timer from "../components/Timer";
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import SectionCard from "../components/SectionCard";
import parse from 'html-react-parser';
import TrueOrFlase from "../components/TrueOrFalse";


function Reading() {
  const dispatch = useDispatch();
  const points = useSelector((state) => state.point.points);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {

    setIsSubmitted(true);

  };



  const set1 = [];

  for (let i = 1; i < 6; i++) {
    set1.push(
    

      <Container key={i} maxWidth="sm" sx={{ px: 2 }}>
          <Stack spacing={2} >
        <TextCard text={content.test1.reading.part1[i].text} />
        <MultipleChoice
          question={content.test1.reading.part1[i].question}
          choiceA={content.test1.reading.part1[i].choices.a}
          choiceB={content.test1.reading.part1[i].choices.b}
          choiceC={content.test1.reading.part1[i].choices.c}
          answer={content.test1.reading.part1[i].choices.answer}
          submitted={isSubmitted}
        />
        </Stack>
      </Container>
    );
  }

const set2 = []
for (let i=1; i < 8; i++){
  set2.push(
  <Container key={i} maxWidth="sm" sx={{ px: 0 }}>
  <Stack  sx={{m:2}} >
    <TextCard text={content.test1.reading.part2[i].question}/>
    <TrueOrFlase submitted={isSubmitted} answer={content.test1.reading.part2.answer}/>
  </Stack>
    </Container>
    
    );
  
}



  return (
    <>
    
      <Container maxWidth="md">

      <Timer minutes={45}/>
        <Instructions text={content.test1.reading.part1.instructions} />
        <SectionCard>
        <Stack spacing={2} sx={{my: 5}}>

        {set1}
        </Stack>
        </SectionCard>

       
        <Instructions text={content.test1.reading.part2.instructions} />
        <SectionCard>
        <Container maxWidth="sm" sx={{ px: 2 }}>

          <Stack sx={{alignContent:"center"}}>
        <p style={{textAlign:"center", fontWeight:500}}>{content.test1.reading.part2.title}</p>
       {parse(content.test1.reading.part2.text)}
        </Stack>
        {set2}
        </Container>
        </SectionCard>
      
     
      

        {!isSubmitted && (
        <button onClick={handleSubmit}>Submit Answers</button>
      )}
        <h3>Score: {points}</h3>

      </Container>
     
    </>
  );
}

export default Reading;

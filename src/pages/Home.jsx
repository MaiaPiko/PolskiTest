import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { green, red } from '@mui/material/colors';

function Home() {
  const matches = useMediaQuery('(max-width:1200px)');

  return (
    
    <div 
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height:matches?"auto": 'auto' }}
    >
      <Stack sx={{ m: 5 }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>

      <Card 
      sx={{display: "flex", justifyContent: 'center', alignItems: 'center',m:0, height: 'auto', width:matches?"90vw":"30vw"}}>
      <Stack sx={{m:5}}>
      <Typography variant="h5" component="div" sx={{textAlign:"center"}}>
      O tej stronie
        </Typography>
        <p>Ta strona zawiera ćwiczenia, które powstały na podstawie egzaminów praktycznych znalezionych na <a href='https://certyfikatpolski.pl/'>certyfikatpolski.pl</a>.</p>
        <p>Stworzyłam tę stronę, ponieważ pomyślałam, że byłoby fajnie móc wypróbować sekcje egzaminacyjne, zawsze i wszędzie.

        Dodałam również licznik czasu i kalkulator wyników, abyś mógł dobrze zorientować się o swoim poziomie.</p>
      <p>Jeśli chcesz się ze mną skontaktować lub mnie obserwować, niedawno zaczęłam korzystać z <a href='https://twitter.com/Maia_Creates'>Twittera</a> i fajnie byłoby cię tam zobaczyć.</p>

    </Stack>
      </Card>
      </div>
      <p style={{textAlign:"center"}} className='text'>Wybierz Test:</p>
      {/* <div style={{ display: 'flex', justifyContent:"center",textAlign:"center"  }}> */}
     
        <div style={{ display: 'flex', alignContent:"center",textAlign:"center", paddingX:5  }}>
       
          <Button variant="contained" color="success" component={Link} to="/test/1"  sx={{ p: 5, ml: 0.5,  width:"60%", backgroundColor:green[400] }}> Test 1 </Button>
          <Button variant="contained" color="success" component={Link} to="/test/2"  sx={{ p: 5, ml:0.5 , width:"60%", backgroundColor:green[400]}}> Test 2</Button>
          <Button variant="contained" color="success" component={Link} to="/test/3"  sx={{ p: 5, ml:0.5 , width:"60%", backgroundColor:green[400]}}> Test 3</Button>

        {/* </div> */}
        </div>
        <p className="text" style={{textAlign:"center",  padding:"0", margintop:1, marginButton:"0em"}}>Ćwicz swoje umiejętności gramatyczne:</p>
        <p  className="text" style={{textAlign:"center", fontSize:"0.75em", padding:"0", marginTop:0}}>(Zostaniesz przekierowany na inną stronę internetową)</p>

        <div style={{ display: 'flex', justifyContent:"center",textAlign:"center"  }}>
     
        <Button variant="contained"
         sx={{ m: 1, backgroundColor: "white", color: "black",  textTransform: "none", width:"30%", textAlign:"center" }} color="success" component={Link} to="https://fleksja.onrender.com/">
        <img src="fleksja.png" style={{ maxHeight: "1em" }} alt="Fleksja" /> &nbsp; Fleksja
        </Button>
        </div>
      </Stack>
    </div>
  );
}

export default Home;

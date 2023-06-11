import React from 'react';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';





export default function About(){
    const matches = useMediaQuery('(max-width:1000px)');

    return(
        <div 
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
    > <Stack sx={{m:5}}>

      

      <Card sx={{display: "flex", justifyContent: 'center', alignItems: 'center', height: 'auto', width:matches?"90vw":"45vw"}}>
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
      </Stack>
    </div>
    )
}
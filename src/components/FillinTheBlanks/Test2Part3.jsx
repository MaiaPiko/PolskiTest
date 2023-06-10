import React from 'react'
import Blank from "./Blank"
import content from "../../../public/content.json"

export default function Test2Part3({isReset, isSubmitted}){

    return(
        <>
        <p><strong>*Jarmark -</strong> - impreza, podczas której można kupić i sprzedać różne rzeczy</p>
        <p>Słynny na cały świat Jarmark* Dominikański w Gdańsku ma bardzo długą tradycję,
<Blank id="0" example="bo pierwszy raz odbył się w 1260 roku"/>. Z historii możemy się dowiedzieć, że w XVI wieku jarmark odbywał się
w sierpniu <Blank id="1" answer={content.test2.reading.part3.choices['H']} submitted={isSubmitted} reset={isReset}/>. Z tej okazji na cały ten czas do Gdańska przyjeżdżali sprzedawcy z całej
Europy, a razem z nimi grupy artystów ulicznych, <Blank id="2" answer={content.test2.reading.part3.choices['A']} submitted={isSubmitted} reset={isReset}/>. Do miasta przypływały również
wielkie statki z winem francuskim i hiszpańskim, jedwabiem, oliwą, cytrynami, konfiturami
i egzotycznymi przyprawami. Przez wiele wieków było to każdego roku wielkie święto miasta
<Blank id="3" answer={content.test2.reading.part3.choices['E']} submitted={isSubmitted} reset={isReset}/>. Powrócono do niej w 1972 roku, ale wówczas jarmark stał się imprezą wyłącznie
handlową, umożliwiającą kupowanie produktów, <Blank id="4" answer={content.test2.reading.part3.choices['F']} submitted={isSubmitted} reset={isReset}/>.</p>

<p>Dzisiaj jarmark jest główną atrakcją turystyczną Gdańska. Jest to największa impreza
handlowo-kulturalna w Polsce, <Blank id="5"answer={content.test2.reading.part3.choices['C']} submitted={isSubmitted} reset={isReset}/>, kolorowa i pełna życia. Turyści z całego świata
przyjeżdżają chętnie w sezonie letnim, <Blank id="6"answer={content.test2.reading.part3.choices['D']} submitted={isSubmitted} reset={isReset}/>. Jedni – pyszne regionalne jedzenie: sery,
wędliny, ciasta oraz kawę i różne rodzaje herbaty. Inni – spektakle i koncerty. Ludzie kupują,
<Blank id="7"answer={content.test2.reading.part3.choices['I']} submitted={isSubmitted} reset={isReset}/>, a dla dzieci organizowane są atrakcyjne warsztaty, gry i zabawy. W czasie jarmarku
nigdy nie jest nudno, <Blank id="8"answer={content.test2.reading.part3.choices['G']} submitted={isSubmitted} reset={isReset}/>. Dookoła słychać radosny śmiech najmłodszych, rozmowy w wielu
językach, muzykę dobiegającą ze sceny. Obecnie Jarmark Dominikański rozpoczyna się zawsze w
ostatnią sobotę lipca i trwa 23 dni.</p>
</>
    );
}
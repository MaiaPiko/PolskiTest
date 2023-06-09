import React from 'react'

import Blank from "./Blank"
import content from "../../../public/content.json"



export default function Part3Text({isSubmitted, isReset}){

    return(
        <>
    <p>Obecnie większość czasu spędzamy w 
    <Blank id={'0'} answer={content.test1.reading.part3.choices['A']} example='pomieszczeniach: mieszkaniach, biurach, fabrykach' submitted={isSubmitted} reset={isReset}/>.
     Unikamy wysiłku, nie chodzimy na piechotę, a w wolnym czasie zamiast na przykład pójść <Blank id={'1'} answer={content.test1.reading.part3.choices['F']} submitted={isSubmitted} reset={isReset}/>
      oglądać telewizję. Tak jest nam wygodniej. </p> <p> Jeśli chcesz poprawić kondycję fizyczną bez
         <Blank id={'2'} submitted={isSubmitted} answer={content.test1.reading.part3.choices['C']} reset={isReset}/>, wybierz łatwy i tani sposób, czyli spacer. Ruch potrzebny jest wszystkim
          <Blank id={'3'} submitted={isSubmitted} answer={content.test1.reading.part3.choices['B']} reset={isReset}/>. Największym plusem spacerów jest to, że nie musimy kupować żadnego specjalistycznego sprzętu.
           Trzeba mieć tylko wygodne buty. Co więcej, <Blank id={'4'} submitted={isSubmitted} answer={content.test1.reading.part3.choices['E']} reset={isReset}/> i przy każdej pogodzie. Najlepiej spacerować w
            <Blank id={'5'} answer={content.test1.reading.part3.choices['D']}submitted={isSubmitted} reset={isReset}/> i miejskiego ruchu – człowiek najlepiej wypoczywa na łonie przyrody. </p>
             <p>Już jedna godzina spaceru dziennie <Blank id={'6'} submitted={isSubmitted} answer={content.test1.reading.part3.choices['H']} reset={isReset}/>. 
             Powinien to być jednak wtedy intensywny marsz, w tempie 5 – 6 kilometrów na godzinę. </p>
              <p>Odmianą spaceru jest popularny także w Polsce nordic walking, czyli dynamiczny marsz z kijkami. Ogromną zaletą tej formy ruchu jest to, że można go polecić wszystkim, a zwłaszcza
                 <Blank id={'7'} submitted={isSubmitted} answer={content.test1.reading.part3.choices['G']} reset={isReset}/>. Jest on bowiem bezpieczną formą aktywności, połączonej ze spędzaniem czasu na świeżym powietrzu. </p>
    </>
    )
}
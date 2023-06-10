import React from 'react'
import Blank from "./Blank"
import content from "../../../public/content.json"



export default function Test2Part5({isSubmitted, isReset}){

    return(
        <>
        <p>
    <Blank id={'0'} example={"częścią"} answer={"częścią"} submitted={isSubmitted} reset={isReset}/>jest częścią PRZYKŁAD kampanii, którą prowadzi fundacja
„Zmiana”. W polskich więzieniach nie ma <Blank id={'1'} half={true} answer={"nowych"} submitted={isSubmitted} reset={isReset}/>
, wydanych
w ostatnim czasie książek. Powód jest prosty – ich ceny są za <Blank half={true} id={'2'} answer={"wysokie"} submitted={isSubmitted} reset={isReset}/>
.
Dlatego grupa fanów literatury postanowiła <Blank id={'3'} half={true} submitted={isSubmitted} answer={"zorganizować"} reset={isReset}/>zbiórkę. Celem akcji
było zachęcenie wszystkich <Blank id={'4'} half={true} submitted={isSubmitted} answer={"mieszkańców"} reset={isReset}/>Warszawy do oddawania swoich
książek do zakładów karnych. Organizatorzy tak tłumaczyli nazwę kampanii: Majewski to
<Blank id={'5'} half={true} answer={"popularne"}submitted={isSubmitted} reset={isReset}/>nazwisko, każdy z nas zna jakiegoś Majewskiego. Każdy z nas
słyszał też o kimś, kto znalazł się w więzieniu. Chcemy zwrócić uwagę na fakt, że w tego typu
miejscach są osoby, które po wyjściu na <Blank id={'6'} half={true} submitted={isSubmitted} answer={"wolność"} reset={isReset}/>mają możliwość
rozpoczęcia nowego życia. Dzięki mądrym książkom dajemy szansę nie tylko
<Blank id={'7'} half={true} submitted={isSubmitted} answer={"młodzieży"} reset={isReset}/>
, ale też starszym, którzy chcą się zmienić. Mogą oni zwrócić
<Blank id={'8'} half={true} submitted={isSubmitted} answer={"książkę"} reset={isReset}/>lub zatrzymać ją na zawsze. Do akcji
<Blank id={'9'} half={true} submitted={isSubmitted} answer={"przyłączyło się"} reset={isReset}/>kilka znanych osób, między innymi piosenkarka Alicja Majewska i
showman Szymon Majewski – noszą oni nazwisko, które <Blank id={'10'} half={true} submitted={isSubmitted} answer={"pojawiło się"} reset={isReset}/>w
kampanii.
</p>
    </>
    )
}
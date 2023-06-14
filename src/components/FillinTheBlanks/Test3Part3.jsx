import React from 'react';
import Blank from "./Blank";
import content from "../../../public/content.json";

export default function Test3Part3({ isSubmitted, isReset }) {
  return (
    <>
      <p>
        Jeszcze kilkanaście lat temu, <Blank id={'0'} example={"aby zagrać w piłkę nożną"} answer={"aby zagrać w piłkę nożną"} submitted={isSubmitted} reset={isReset} />, trzeba było spotkać się z kolegami, pójść na pobliskie boisko, podzielić się na dwie drużyny i można było zaczynać. Dzisiaj coraz częściej zamiast biegania po boisku dzieci wybierają zabawę na komputerze. Grają z rodziną, kolegami, przyjaciółmi, ze znajomymi z całej Polski, <Blank id={'1'} answer={"a nawet z mieszkańcami innych kontynentów"} submitted={isSubmitted} reset={isReset} />. Gry nie są już tylko rozrywką, <Blank id={'2'} answer={"ale powoli stają się pracą i źródłem dochodów"} submitted={isSubmitted} reset={isReset} />.
      </p>
      <p>
        Zawody w różnego rodzaju grach komputerowych, czyli turnieje e-sportowe, odbywają się już w wielu krajach, <Blank id={'3'} answer={"w tym także w Polsce"} submitted={isSubmitted} reset={isReset} />.
      </p>
      <p>
        Podczas ostatniej edycji mistrzostw e-sportowych w Katowicach można było wygrać nagrody warte milion dolarów. Widowiska te są tak bardzo popularne, <Blank id={'4'} answer={"że oglądają je ludzie z całego świata"} submitted={isSubmitted} reset={isReset} />. Ponadto kiedyś można je było oglądać tylko w internecie, <Blank id={'5'} answer={"natomiast teraz także w telewizji"} submitted={isSubmitted} reset={isReset} />.
      </p>
      <p>
        Zainteresowanie sportem elektronicznym (e-sportem) jest coraz większe. W jednej z polskich szkół powstała nawet klasa, <Blank id={'6'} answer={"w której uczą się przyszli zawodnicy"} submitted={isSubmitted} reset={isReset} />. Granie w gry jest bardzo częstym sposobem spędzania wolnego czasu, a w przyszłości prawdopodobnie będzie najpopularniejszą formą rozrywki.
      </p>
      <p>
        Najlepsi gracze poza nagrodami pieniężnymi zyskują także ogromną sławę. Ich zdjęcia umieszczane są na okładkach czasopism, a nawet w reklamach telewizyjnych. Stają się oni idolami nastolatków, <Blank id={'7'} answer={"którzy interesują się e-sportem"} submitted={isSubmitted} reset={isReset} />.
      </p>
    </>
  );
}

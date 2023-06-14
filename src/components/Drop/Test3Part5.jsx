import React from 'react';
import DropMenu from './DropMenu';

export default function Test3Part5({ submitted }) {
  return (
    <>
      <p>
        Kolorowe święto holi{' '}
        <DropMenu
          submitted={submitted}
          choice1={'pochodzi'}
          choice2={'wychodzi'}
          choice3={'przyjechało'}
          id={'0'}
          answer={'pochodzi'}
        />
        PRZYKŁAD z Indii. To pierwszy dzień wiosny, na ulicach można{' '}
        <DropMenu
          submitted={submitted}
          choice1={'widać'}
          choice2={'zobaczyć'}
          choice3={'przeglądać'}
          id={'1'}
          answer={'zobaczyć'}
        />
        radość. Ludzie są dla siebie bardziej serdeczni niż{' '}
        <DropMenu
          submitted={submitted}
          choice1={'zwykle'}
          choice2={'często'}
          choice3={'rzadko'}
          id={'2'}
          answer={'zwykle'}
        />
        , śpiewają i tańczą. Wszyscy oblewają się wodą i obsypują różnobarwnymi
        proszkami zrobionymi z kwiatów.{' '}
        <DropMenu
          submitted={submitted}
          choice1={'Następnego'}
          choice2={'dalszego'}
          choice3={'przyszłego'}
          id={'3'}
          answer={'Następnego'}
        />{' '}
        dnia rano odbywa się karnawał kolorów. Uczestnicy{' '}
        <DropMenu
          submitted={submitted}
          choice1={'zwiedzają'}
          choice2={'odwiedzają'}
          choice3={'widzą'}
          id={'4'}
          answer={'odwiedzają'}
        />{' '}
        przyjaciół i rodzinę, żeby podzielić się radością.
      </p>
      <p>
        W Polsce także{' '}
        <DropMenu
          submitted={submitted}
          choice1={'odbywamy'}
          choice2={'obchodzimy'}
          choice3={'bierzemy'}
          id={'5'}
          answer={'obchodzimy'}
        />
        to święto – nazywa się Festiwal Kolorów. Jednak nie ma wiele{' '}
        <DropMenu
          submitted={submitted}
          choice1={'takiego samego'}
          choice2={'identycznego'}
          choice3={'wspólnego'}
          id={'6'}
          answer={'wspólnego'}
        />
        z kulturą Indii. Z oryginalnego święta został tylko różnobarwny proszek.
        To ma być przede wszystkim dobra{' '}
        <DropMenu
          submitted={submitted}
          choice1={'gra'}
          choice2={'zabawa'}
          choice3={'nauka'}
          id={'7'}
          answer={'zabawa'}
        />
        i okazja do „kolorowania miasta”. Organizatorzy informują, że proszek
        nie jest szkodliwy dla zdrowia i łatwo go zmyć ze skóry. W tym roku dla
        uczestników przygotowano wiele dodatkowych{' '}
        <DropMenu
          submitted={submitted}
          choice1={'spektakli'}
          choice2={'pomysłów'}
          choice3={'atrakcji'}
          id={'8'}
          answer={'atrakcji'}
        />
        : koncerty zespołów muzycznych, taniec zumba, karaoke i kolorowe
        tatuaże.
      </p>
    </>
  );
}

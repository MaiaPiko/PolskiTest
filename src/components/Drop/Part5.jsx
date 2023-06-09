import DropMenu from "./DropMenu";

export default function Part5({ submitted}){

    return(
        <>
        <p>
            W drugą rocznicę śmierci Marka Grechuty <DropMenu submitted={submitted} id={"0"} choice1={"znajdzie się"} choice2={"odbędzie się"} choice3={"wystąpi"} answer={"odbędzie się"}/> w Krakowie pierwsza edycja festiwalu jego twórczości pt.: „Korowód”. 
        </p>
        <p>
            Anna Treter – krakowska piosenkarka i szefowa Fundacji „Piosenkarnia” opowiada:
Żona Marka dobrze <DropMenu submitted={submitted} choice1={"wie"} choice2={"umie"} choice3={"zna"} id={"1"} answer={"zna"}/> koncerty piosenki literackiej przygotowywane przez
Fundację i poprosiła mnie, żebym <DropMenu submitted={submitted} choice1={"zorganizowała"} choice2={"zbudowała"} choice3={"zagrała"} id={"2"} answer={"zorganizowała"}/> 
koncert w drugą
rocznicę śmierci jej męża. Propozycja ta zgadzała się z celami Fundacji, 
<DropMenu submitted={submitted} choice1={"dlatego"} choice2={"ponieważ"} choice3={"dlaczego"} id={"3"} answer={"dlatego"}/> postanowiłam zrealizować ten pomysł. Najpierw odbył się konkurs na
interpretację piosenek Marka Grechuty, a <DropMenu submitted={submitted} choice1={"późno"} choice2={"dalej"} choice3={"potem"} id={"4"} answer={"potem"}/>
zdecydowaliśmy się
dołączyć nowe elementy do przygotowywanego koncertu .
        </p>
        <p>
            <DropMenu choice1={"Dla"} choice2={"Po"} choice3={"Na"} id={"5"} answer={"Na"} submitted={submitted}/>
festiwalu będzie można nie tylko słuchać muzyki. Przygotowujemy
również <DropMenu choice1={"wystawę"} choice2={"przedstawienie"} choice3={"spektakl"} id={"6"} answer={"wystawę"} submitted={submitted}/>
 obrazów Marka Grechuty. Natomiast fotograf
– Adam Bujak pokaże publicznie po raz pierwszy swoje archiwalne (zdjęcia, płyty, rysunki)7
,
które robił Markowi Grechucie.
        </p>
        <p>
Festiwal zakończy modlitwa w jednym z krakowskich <DropMenu submitted={submitted} choice1={"teatrów"} choice2={"kościołów"} choice3={"parków"} id={"8"} answer={"kościołów"}/>
a potem wszyscy przejdą na cmentarz Rakowiecki, aby tam przy pomniku Marka Grechuty
złożyć kwiaty.
        </p>
        </>
    );
}
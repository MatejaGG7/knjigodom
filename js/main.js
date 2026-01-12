//INDEX
if (document.body.id === "index") {
const knjige = [  
  {naziv: "Srećna voda", autor: "Nenad Šaponja", cena: 1400, slika: "Assets/img/knjiga1.jpg", kategorija: "novo", opis: "Roman 'Srećna voda' Nenada Šaponje vodi nas na putovanje kroz vreme i prostor, istražujući duboke ljudske emocije i veze koje nas povezuju. Kroz bogate opise i složene likove, autor nas uvodi u svet ispunjen nadom, tugom i potragom za smislom."},
  {naziv: "Rat dveju kraljica", autor: "Dženifer L. Armentraut", cena: 1200, slika: "Assets/img/knjiga2.jpg", kategorija: "novo", opis: "U romanu 'Rat dveju kraljica', Dženifer L. Armentraut stvara epsku priču o moći, izdaji i ljubavi. Kroz splet intriga i sukoba, pratimo sudbine dve kraljice čiji se putevi ukrštaju u borbi za presto, dok se istovremeno suočavaju sa sopstvenim unutrašnjim demonima."},
  {naziv: "Lutajući Bokelj", autor: "Nikola Malović", cena: 1800, slika: "Assets/img/knjiga3.jpg", kategorija: "novo", opis: "Nikola Malović u romanu 'Lutajući Bokelj' donosi priču o čoveku koji luta kroz život tražeći svoje mesto pod suncem. Kroz njegove avanture i susrete sa različitim ljudima, čitaoci će biti uvučeni u svet pun kontrasta, gde se prepliću radost i tuga, nada i očaj."},
  {naziv: "Jedro nade", autor: "Nikola Malović", cena: 1100, slika: "Assets/img/knjiga4.jpg", kategorija: "novo", opis: "U romanu 'Jedro nade', Nikola Malović nas vodi na putovanje kroz olujne vode života, gde glavni lik traži smisao i svrhu. Kroz njegove izazove i trijumfe, čitaoci će biti inspirisani da pronađu svoje jedro nade u svetu punom neizvesnosti."},
  {naziv: "Vreme čuda", autor: "Borislav Pekić", cena: 1500, slika: "Assets/img/knjiga5.jpg", kategorija: "novo", opis: "Borislav Pekić u romanu 'Vreme čuda' istražuje granice ljudske percepcije i stvarnosti. Kroz složenu naraciju i duboke filozofske teme, autor nas uvodi u svet gde se čuda dešavaju, a granice između mogućeg i nemogućeg brišu, ostavljajući čitaoce da preispitaju svoje shvatanje sveta oko sebe."},

  {naziv: "Naruto", autor: "Masaši Kišimoto", cena: 300, slika: "Assets/img/knjiga6.jpg", kategorija: "manga", opis: "Masaši Kišimoto u mangi 'Naruto' prati avanture mladog nindže, Naruta Uzumakija, koji sanja o tome da postane najjači nindža u svom selu. Kroz brojne borbe, prijateljstva i izazove, Naruto se suočava sa sopstvenim slabostima i jača svoju odlučnost da zaštiti svoje voljene i ostvari svoje snove."},
  {naziv: "Ultraman", autor: "Tetsuo Kinjo", cena: 700, slika: "Assets/img/knjiga7.jpg", kategorija: "manga", opis: "Tetsuo Kinjo u mangi 'Ultraman' prati avanture mladog heroja koji se suočava sa različitim čudovišnim stvorima. Kroz borbe i borbu protiv zla, Ultraman se suočava sa svojim izazovima i otkriva svoju pravu moć."},
  {naziv: "Bakuman", autor: "Takeši Obata", cena: 1100, slika: "Assets/img/knjiga8.jpg", kategorija: "manga", opis: "Takeši Obata u mangi 'Bakuman' prati priču o dvojici mladih ljudi koji žele da postanu najbolji strip-artisti. Kroz borbu za uspeh i borbu protiv prepreka, oni se suočavaju sa izazovima koje moraju prevazići da bi ostvarili svoje snove."},
  {naziv: "Napad titana", autor: "Hadžime Isajama", cena: 900, slika: "Assets/img/knjiga9.jpg", kategorija: "manga", opis: "Hadžime Isajama u mangi 'Napad titana' prati priču o mladom čoveku koji se suočava sa titanicima. Kroz borbe i izazove, on se suočava sa svojim strahovima i otkriva svoju pravu moć."},
  {naziv: "Tokijski osvetnici", autor: "Ken Vakui", cena: 400, slika: "Assets/img/knjiga10.jpg", kategorija: "manga", opis: "Ken Vakui u mangi 'Tokijski osvetnici' prati priču o mladom čoveku koji se suočava sa različitim čudovišnim stvorima. Kroz borbe i borbu protiv zla, on se suočava sa svojim izazovima i otkriva svoju pravu moć."},

  {naziv: "Ime vetra", autor: "Patrik Rotfus", cena: 1800, slika: "Assets/img/knjiga11.jpg", kategorija: "fantasy", opis: "Patrik Rotfus u romanu 'Ime vetra' donosi priču o mladom muzičaru i čarobnjaku koji traži odgovore o svojoj prošlosti. Kroz bogat svet magije i avantura, pratimo njegov put ka otkrivanju sopstvenog identiteta i moći."},
  {naziv: "Lord of the Rings", autor: "J.R.R. Tolkien", cena: 2500, slika: "Assets/img/knjiga12.jpg", kategorija: "fantasy", opis: "J.R.R. Tolkien u epskom romanu 'Lord of the Rings' vodi nas na putovanje kroz Srednju Zemlju, gde se hrabri hobit Frodo Baggins suočava sa zadatkom da uništi moćni Prsten. Kroz borbe, prijateljstva i iskušenja, pratimo njegovu avanturu koja oblikuje sudbinu čitavog sveta."},
  {naziv: "A Song of Ice and Fire", autor: "George R.R. Martin", cena: 3200, slika: "Assets/img/knjiga13.jpg", kategorija: "fantasy", opis: "George R.R. Martin u serijalu 'A Song of Ice and Fire' stvara složeni svet prepun intriga, moći i sukoba. Kroz brojne likove i njihove sudbine, pratimo borbu za presto u kraljevstvu Westeros, gde se savezi sklapaju i razbijaju, a sudbina nacije visi o tankoj niti."},
  {naziv: "Harry Potter", autor: "J.K. Rowling", cena: 3500, slika: "Assets/img/knjiga14.jpg", kategorija: "fantasy", opis: "J.K. Rowling u serijalu 'Harry Potter' prati avanture mladog čarobnjaka Harryja Pottera dok se suočava sa zlim silama koje prete čarobnjačkom svetu. Kroz prijateljstva, magiju i hrabrost, Harry otkriva svoju sudbinu i bori se za pravdu."},
  {naziv: "The Witcher", autor: "Andrzej Sapkowski", cena: 1500, slika: "Assets/img/knjiga15.jpg", kategorija: "fantasy", opis: "Andrzej Sapkowski u serijalu 'The Witcher' prati avanture mladog čarobnjaka Gerala, koji se suočava sa različitim čudovišnim stvorima. Kroz borbe i iskušenja, Geralt otkriva svoju pravu moć i bori se za pravdu."},

  {naziv: "Gavran i najbolje priče", autor: "Edgar Alan Poe", cena: 3800, slika: "Assets/img/knjiga41.jpg", kategorija: "horror", opis: "Edgar Alan Poe u zbirci 'Gavran i najbolje priče' donosi mračne i uznemirujuće priče koje istražuju teme smrti, ludila i natprirodnog. Kroz svoj jedinstveni stil pisanja, Poe nas uvodi u svet strave i užasa, ostavljajući čitaoce da se suoče sa svojim najdubljim strahovima."},
  {naziv: "Nikadođija", autor: "Nil Gejmen", cena: 900, slika: "Assets/img/knjiga42.jpg", kategorija: "horror", opis: "Nil Gejmen u romanu 'Nikadođija' prati priču o mladom čoveku koji se suočava sa različitim čudovišnim stvorima. Kroz borbe i borbu protiv zla, on se suočava sa svojim izazovima i otkriva svoju pravu moć."},
  {naziv: "Priznanja", autor: "Kanae Minato", cena: 1500, slika: "Assets/img/knjiga43.jpg", kategorija: "horror", opis: "Kanae Minato u romanu 'Priznanja' prati priču o mladom čoveku koji se suočava sa različitim čudovišnim stvorima. Kroz borbe i borbu protiv zla, on se suočava sa svojim izazovima i otkriva svoju pravu moć."},
  {naziv: "Christkind", autor: "Boris Dežulović", cena: 4000, slika: "Assets/img/knjiga44.jpg", kategorija: "horror", opis: "Boris Dežulović u romanu 'Christkind' prati priču o mladom čoveku koji se suočava sa različitim čudovišnim stvorima. Kroz borbe i borbu protiv zla, on se suočava sa svojim izazovima i otkriva svoju pravu moć."},
  {naziv: "Igra prokleststva", autor: "Klajv Barker", cena: 1500, slika: "Assets/img/knjiga45.jpg", kategorija: "horror", opis: "Klajv Barker u romanu 'Igra prokleststva' prati priču o mladom čoveku koji se suočava sa različitim čudovišnim stvorima. Kroz borbe i borbu protiv zla, on se suočava sa svojim izazovima i otkriva svoju pravu moć."},

  {naziv: "Mitopedija", autor: "Good Wives and Warriors", cena: 5000, slika: "Assets/img/knjiga46.jpg", kategorija: "encyklopedia", opis: "Mitopedija je sveobuhvatna enciklopedija koja istražuje mitologiju iz različitih kultura širom sveta. Kroz detaljne opise i ilustracije, ova knjiga pruža uvid u bogatstvo mitoloških priča, likova i simbola koji su oblikovali ljudsku civilizaciju."},
  {naziv: "Mačke - ilustrovani vodič", autor: "Brus Fogl", cena: 4500, slika: "Assets/img/knjiga47.jpg", kategorija: "encyklopedia", opis: "Knjiga 'Mačke - ilustrovani vodič' Brusa Fogla pruža detaljan pregled različitih rasa mačaka, njihovih karakteristika i ponašanja. Kroz bogate ilustracije i informacije, čitaoci će naučiti kako da bolje razumeju i brinu o svojim mačjim prijateljima."},
  {naziv: "Psi - ilustrovani vodič", autor: "Brus Fogl", cena: 7000, slika: "Assets/img/knjiga48.jpg", kategorija: "encyklopedia", opis: "Knjiga 'Psi - ilustrovani vodič' Brusa Fogla pruža detaljan pregled različitih rasa psi, njihovih karakteristika i ponašanja. Kroz bogate ilustracije i informacije, čitaoci će naučiti kako da bolje razumeju i brinu o svojim psi."},
  {naziv: "Sve ptice Srbije", autor: "Javor Rašajski", cena: 2500, slika: "Assets/img/knjiga49.jpg", kategorija: "encyklopedia", opis: "Knjiga 'Sve ptice Srbije' Javora Rašajskog pruža detaljan pregled različitih vrsta ptica koje žive u Srbiji. Kroz bogate ilustracije i informacije, čitaoci će naučiti kako da bolje razumeju i brinu o svojim pticama."},
  {naziv: "Enciklopedija praistorijskih životinja", autor: "Dušan Krtolica", cena: 4000, slika: "Assets/img/knjiga50.jpg", kategorija: "encyklopedia", opis: "Enciklopedija praistorijskih životinja pruža detaljan pregled različitih vrsta životinja koje su živote u praistoriji. Kroz bogate ilustracije i informacije, čitaoci će naučiti kako da bolje razumeju i brinu o svojim praistorijskim prijateljima."},

  {naziv: "Vladalac", autor: "Nikolo Makijaveli", cena: 1000, slika: "Assets/img/knjiga51.jpg", kategorija: "philosophy", opis: "Nikolo Makijaveli u knjizi 'Vladalac' prati priču o političkom čarobnjaku koji se suočava sa različitim čudovišnim stvorima. Kroz borbe i borbu protiv zla, on se suočava sa svojim izazovima i otkriva svoju pravu moć."},
  {naziv: "Filozofija", autor: "Edvard Krejg", cena: 400, slika: "Assets/img/knjiga52.jpg", kategorija: "philosophy", opis: "Edvard Krejg u knjizi 'Filozofija' prati priču o mladom čoveku koji se suočava sa različitim čudovišnim stvorima. Kroz borbe i borbu protiv zla, on se suočava sa svojim izazovima i otkriva svoju pravu moć."},
  {naziv: "Sreća", autor: "Vilhelm Šmid", cena: 3000, slika: "Assets/img/knjiga53.jpg", kategorija: "philosophy", opis: "Vilhelm Šmid u knjizi 'Sreća' prati priču o mladom čoveku koji se suočava sa različitim čudovišnim stvorima. Kroz borbe i borbu protiv zla, on se suočava sa svojim izazovima i otkriva svoju pravu moć."},
  {naziv: "Spokojstvo", autor: "Vilhelm Šmid", cena: 1200, slika: "Assets/img/knjiga54.jpg", kategorija: "philosophy", opis: "Vilhelm Šmid u knjizi 'Spokojstvo' prati priču o mladom čoveku koji se suočava sa različitim čudovišnim stvorima. Kroz borbe i borbu protiv zla, on se suočava sa svojim izazovima i otkriva svoju pravu moć."},
  {naziv: "Posle apokalipse", autor: "Srećko Horvat", cena: 4000, slika: "Assets/img/knjiga55.jpg", kategorija: "philosophy", opis: "Srećko Horvat u knjizi 'Posle apokalipse' prati priču o mladom čoveku koji se suočava sa različitim čudovišnim stvorima. Kroz borbe i borbu protiv zla, on se suočava sa svojim izazovima i otkriva svoju pravu moć."},

  {naziv: "Žene su besne", autor: "Dženifer Koks", cena: 450, slika: "Assets/img/knjiga56.jpg", kategorija: "educational", opis: "Dženifer Koks u knjizi 'Žene su besne' istražuje teme ženskog besa i njegovog uticaja na društvo. Kroz analizu različitih aspekata besa, autorica pruža uvid u načine na koje žene mogu kanalizovati svoj bes za pozitivne promene."},
  {naziv: "Svi za jednog, jedan za sve!", autor: "Frančesko Fača", cena: 700, slika: "Assets/img/knjiga57.jpg", kategorija: "educational", opis: "Frančesko Fača u knjizi 'Svi za jednog, jedan za sve!' prati priču o mladom čoveku koji se suočava sa različitim čudovišnim stvorima. Kroz borbe i borbu protiv zla, on se suočava sa svojim izazovima i otkriva svoju pravu moć."},
  {naziv: "Pesma ćelije", autor: "Sidarta Mukardži", cena: 2000.00, slika: "Assets/img/knjiga58.jpg", kategorija: "educational", opis: "Sidarta Mukardži u knjizi 'Pesma ćelije' prati priču o mladom čoveku koji se suočava sa različitim čudovišnim stvorima. Kroz borbe i borbu protiv zla, on se suočava sa svojim izazovima i otkriva svoju pravu moć."},
  {naziv: "Kulturna istorija Srba", autor: "Jovan Deretić", cena: 1100.00, slika: "Assets/img/knjiga59.jpg", kategorija: "educational", opis: "Jovan Deretić u knjizi 'Kulturna istorija Srba' prati priču o mladom čoveku koji se suočava sa različitim čudovišnim stvorima. Kroz borbe i borbu protiv zla, on se suočava sa svojim izazovima i otkriva svoju pravu moć."},
  {naziv: "Moć drveća", autor: "Peter Moleben", cena: 800.00, slika: "Assets/img/knjiga60.jpg", kategorija: "educational", opis: "Peter Moleben u knjizi 'Moć drveća' prati priču o mladom čoveku koji se suočava sa različitim čudovišnim stvorima. Kroz borbe i borbu protiv zla, on se suočava sa svojim izazovima i otkriva svoju pravu moć."}
];

function ispisiKnjige(kategorija, idKontejnera) {
    const kontejner = document.getElementById(idKontejnera);
    kontejner.innerHTML = "";

    for (let i = 0; i < knjige.length; i++) {
        if (knjige[i].kategorija === kategorija) {
            const blokKnjige = document.createElement("div");
            blokKnjige.className = "blok";
            blokKnjige.innerHTML = `
                <img src="${knjige[i].slika}" alt="${knjige[i].naziv}">
                <p>
                    ${knjige[i].naziv}<br/>
                    ${knjige[i].autor}<br/>
                    Cena: ${knjige[i].cena} RSD
                </p>
                <button class="btn" id="knjiga${i+1}">Više</button>
            `;
            kontejner.appendChild(blokKnjige);
        }
    }
}
ispisiKnjige("novo", "novoBooks");
ispisiKnjige("manga", "mangaBooks");
ispisiKnjige("fantasy", "fantasyBooks");
ispisiKnjige("horror", "horrorBooks");
ispisiKnjige("encyklopedia", "encyclopediaBooks");
ispisiKnjige("philosophy", "philosophyBooks");
ispisiKnjige("educational", "educationalBooks");


let niz=document.getElementsByClassName("btn")
for(let i=0;i<niz.length;i++){
niz[i].addEventListener("click", function() {
    console.log(this);
    document.getElementById("overlay").style.display="block";
    document.getElementById("velikaSlika").src=knjige[i].slika;
    document.getElementById("nazivKnjige").innerText=knjige[i].naziv;
    document.getElementById("opisKnjige").innerText=knjige[i].opis;
    document.getElementById("autorKnjige").innerText="Autor: "+knjige[i].autor;
    document.getElementById("cenaKnjige").innerText="Cena: "+knjige[i].cena+" RSD";
}
);
}
document.getElementById("X").addEventListener("click", function() {
document.getElementById("overlay").style.display="none";
}
);
}



//GALLERY
if (document.body.id === "gallery-page") {
document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    if (!gallery) return;
    const slike = [
        { src: "Assets/img/knjizara.jpg", alt: "Knjižara 1",  },
        { src: "Assets/img/knjizara1.png", alt: "Knjižara 2" },
        { src: "Assets/img/knjizara2.jpg", alt: "Knjižara 3" },
        { src: "Assets/img/knjizara3.jpg", alt: "Knjižara 4" },
        { src: "Assets/img/knjizara4.jpg", alt: "Knjižara 5" },
        { src: "Assets/img/knjizara5.jpg", alt: "Knjižara 6" },
        { src: "Assets/img/knjizara6.jpg", alt: "Knjižara 7" },
        { src: "Assets/img/knjizara7.jpg", alt: "Knjižara 8" },
        { src: "Assets/img/knjizara8.jpg", alt: "Knjižara 9" },
        { src: "Assets/img/knjizara9.jpg", alt: "Knjižara 10" },
        { src: "Assets/img/knjizara10.jpg", alt: "Knjižara 11" },
        { src: "Assets/img/knjizara11.jpg", alt: "Knjižara 12" }
    ];
    let red;
    slike.forEach((slika, index) => {
        if (index % 3 === 0) {
            red = document.createElement("div");
            red.classList.add("gallery-item");
            gallery.appendChild(red);
        }
        const img = document.createElement("img");
        img.src = slika.src;
        img.alt = slika.alt;
        img.addEventListener("click", () => { window.open(slika.src, "_blank"); });
        red.appendChild(img);
    });
});
}


//CATEGORIES
if (document.body.id === "categories-page") {
const knjige = [

  { naziv: "Ratnik", autor: "Stiven Presfild", cena: 1100, slika: "Assets/img/knjiga16.jpg", kategorija: "istorijski", opis: "Roman 'Ratnik' Stivena Presfilda vodi nas kroz epsku priču o hrabrosti, časti i borbi u drevnoj Grčkoj. Kroz oči mladog ratnika, pratimo njegove avanture na bojnom polju, suočavanje sa unutrašnjim demonima i potragu za smislom u svetu ispunjenom sukobima i izdajama."},
  { naziv: "Ikonostas", autor: "Goran Petrović", cena: 1900, slika: "Assets/img/knjiga17.jpg", kategorija: "istorijski", opis: "Ikonostas je roman koji prikazuje život u srednjem veku, sa fokusom na religijske i društvene teme."},
  { naziv: "Enco", autor: "Enriko Brici", cena: 700, slika: "Assets/img/knjiga18.jpg", kategorija: "istorijski", opis: "Enco je roman koji prikazuje život u srednjem veku, sa fokusom na religijske i društvene teme."},
  { naziv: "Na Drini Ćuprija", autor: "Ivo Andrić", cena: 1100, slika: "Assets/img/knjiga19.jpg", kategorija: "istorijski", opis: "Na Drini Ćuprija je roman koji prikazuje život u srednjem veku, sa fokusom na religijske i društvene teme."},
  { naziv: "Mundo Libre", autor: "Marko Krstić", cena: 1500, slika: "Assets/img/knjiga20.jpg", kategorija: "istorijski", opis: "Mundo Libre je roman koji prikazuje život u srednjem veku, sa fokusom na religijske i društvene teme."},
  
  { naziv: "Buba", autor: "Gradimir Stojković", cena: 700, slika: "Assets/img/knjiga21.jpg", kategorija: "fantazija", opis: "Roman 'Buba' Gradimira Stojkovića vodi nas na putovanje kroz svet fantazije i avanture, gde se granice između stvarnosti i mašte brišu. Kroz bogate opise i složene likove, autor nas uvodi u svet ispunjen čudovištima, magijom i epskim sukobima."},
  { naziv: "Quattro Stagioni", autor: "Slobodan Tišma", cena: 500, slika: "Assets/img/knjiga22.jpg", kategorija: "fantazija", opis: "Quattro Stagioni je roman koji prikazuje život u srednjem veku, sa fokusom na religijske i društvene teme."},
  { naziv: "Kišni psi", autor: "Dejan Stojiljković", cena: 1000, slika: "Assets/img/knjiga23.jpg", kategorija: "fantazija", opis: "Kišni psi je roman koji prikazuje život u srednjem veku, sa fokusom na religijske i društvene teme."},
  { naziv: "Osmi život", autor: "Uroš Timić", cena: 2000, slika: "Assets/img/knjiga24.jpg", kategorija: "fantazija", opis: "Osmi život je roman koji prikazuje život u srednjem veku, sa fokusom na religijske i društvene teme."},
  { naziv: "Serafim", autor: "Dejan Stojiljković", cena: 1200, slika: "Assets/img/knjiga25.jpg", kategorija: "fantazija", opis: "Serafim je roman koji prikazuje život u srednjem veku, sa fokusom na religijske i društvene teme."},
 
  { naziv: "Kotao", autor: "Jovica Aćin", cena: 1100, slika: "Assets/img/knjiga26.jpg", kategorija: "drama", opis: "Roman 'Kotao' Jovice Aćina vodi nas kroz duboku i emotivnu priču o ljudskim odnosima, sukobima i iskušenjima. Kroz složene likove i njihove sudbine, autor nas uvodi u svet ispunjen tugom, nadom i potragom za smislom u svetu punom neizvesnosti."},
  { naziv: "Doktor Živago", autor: "Boris Pasternak", cena: 1300, slika: "Assets/img/knjiga27.jpg", kategorija: "drama", opis: "Doktor Živago je roman koji prikazuje život u srednjem veku, sa fokusom na religijske i društvene teme."},
  { naziv: "Zamir", autor: "Hakan Gundaj", cena: 1500, slika: "Assets/img/knjiga28.jpg", kategorija: "drama", opis: "Zamir je roman koji prikazuje život u srednjem veku, sa fokusom na religijske i društvene teme."},
  { naziv: "Žuti šafran", autor: "Lejla Ibrahim", cena: 1700, slika: "Assets/img/knjiga29.jpg", kategorija: "drama", opis: "Žuti šafran je roman koji prikazuje život u srednjem veku, sa fokusom na religijske i društvene teme."},
  { naziv: "Sandro", autor: "Elvin Nezirović", cena: 1900, slika: "Assets/img/knjiga30.jpg", kategorija: "drama", opis: "Sandro je roman koji prikazuje život u srednjem veku, sa fokusom na religijske i društvene teme."},

  { naziv: "Ilon Mask", autor: "Volter Ajzakson", cena: 1400, slika: "Assets/img/knjiga31.jpg", kategorija: "biografija", opis: "Volter Ajzakson u biografiji 'Ilon Mask' donosi detaljan pregled života i dostignuća jednog od najinovativnijih preduzetnika našeg doba. Kroz priču o njegovim usponima, padovima i vizionarskim idejama, čitaoci će dobiti uvid u um čoveka koji je oblikovao budućnost tehnologije i svemirskih istraživanja."},
  { naziv: "Euforija", autor: "Elin Kulhed", cena: 1200, slika: "Assets/img/knjiga32.jpg", kategorija: "biografija", opis: "Euforija je biografija koja prikazuje život i dostignuća jednog od najinovativnijih preduzetnika našeg doba. Kroz priču o njegovim usponima, padovima i vizionarskim idejama, čitaoci će dobiti uvid u um čoveka koji je oblikovao budućnost tehnologije i svemirskih istraživanja."},
  { naziv: "Panonski admiral", autor: "Ivan Ivačković", cena: 1800, slika: "Assets/img/knjiga33.jpg", kategorija: "biografija", opis: "Panonski admiral je biografija koja prikazuje život i dostignuća jednog od najinovativnijih preduzetnika našeg doba. Kroz priču o njegovim usponima, padovima i vizionarskim idejama, čitaoci će dobiti uvid u um čoveka koji je oblikovao budućnost tehnologije i svemirskih istraživanja."},
  { naziv: "Ovo sam ja", autor: "Aca Lukas", cena: 1100, slika: "Assets/img/knjiga34.jpg", kategorija: "biografija", opis: "Ovo sam ja je biografija koja prikazuje život i dostignuća jednog od najinovativnijih preduzetnika našeg doba. Kroz priču o njegovim usponima, padovima i vizionarskim idejama, čitaoci će dobiti uvid u um čoveka koji je oblikovao budućnost tehnologije i svemirskih istraživanja."},
  { naziv: "Biti Elvis Prisli", autor: "Rej Konoli", cena: 1500, slika: "Assets/img/knjiga35.jpg", kategorija: "biografija", opis: "Biti Elvis Prisli je biografija koja prikazuje život i dostignuća jednog od najinovativnijih preduzetnika našeg doba. Kroz priču o njegovim usponima, padovima i vizionarskim idejama, čitaoci će dobiti uvid u um čoveka koji je oblikovao budućnost tehnologije i svemirskih istraživanja."},

  { naziv: "Mali princ", autor: "Antoan de Sent Egziperi", cena: 1400, slika: "Assets/img/knjiga36.jpg", kategorija: "za decu", opis: "Mali princ je priča koja prikazuje život u srednjem veku, sa fokusom na religijske i društvene teme."},
  { naziv: "Začarana sprava", autor: "Uroš Petrović", cena: 1200, slika: "Assets/img/knjiga37.jpg", kategorija: "za decu", opis: "Začarana sprava je priča koja prikazuje život u srednjem veku, sa fokusom na religijske i društvene teme."},
  { naziv: "Bajke", autor: "Uroš Petrović", cena: 1800, slika: "Assets/img/knjiga38.jpg", kategorija: "za decu", opis: "Bajke je priča koja prikazuje život u srednjem veku, sa fokusom na religijske i društvene teme."},
  { naziv: "Tajne dedinog kofera", autor: "Bojan Ljubenović", cena: 1100, slika: "Assets/img/knjiga39.jpg", kategorija: "za decu", opis: "Tajne dedinog kofera je priča koja prikazuje život u srednjem veku, sa fokusom na religijske i društvene teme."},
  { naziv: "Lesi dolazi kući", autor: "Erik Najt", cena: 1500, slika: "Assets/img/knjiga40.jpg", kategorija: "za decu", opis: "Lesi dolazi kući je priča koja prikazuje život u srednjem veku, sa fokusom na religijske i društvene teme."}
];

function dobijUnikatneKategorije() {
    let unikatne = [];
    for (let i = 0; i < knjige.length; i++) {
        if (!unikatne.includes(knjige[i].kategorija)) {
            unikatne.push(knjige[i].kategorija);
        }
    }
    return unikatne;
}

function generisiStrukturu() {
    const glavniKontejner = document.getElementById("shop-container");
    const kategorije = dobijUnikatneKategorije();

    for (let i = 0; i < kategorije.length; i++) {
        let kat = kategorije[i];


        let sekcija = document.createElement("div");
        sekcija.className = "category-section";


        sekcija.innerHTML = `
            <div class="naslov">
                <h2 class="section-title" style="text-transform: capitalize;">${kat}</h2>
            </div>
            <hr class="section-divider"/>
            <div class="blokovi" id="grid-${kat}"></div>
        `;

        glavniKontejner.appendChild(sekcija);

        popuniKnjige(kat);
    }
}

function popuniKnjige(kategorija) {
    const grid = document.getElementById("grid-" + kategorija);

    for (let i = 0; i < knjige.length; i++) {
        if (knjige[i].kategorija === kategorija) {
            let knjiga = knjige[i];
            
            let blok = document.createElement("div");
            blok.className = "blok";
            blok.innerHTML = `
                <img src="${knjiga.slika}" alt="${knjiga.naziv}">
                <p>
                    <strong>${knjiga.naziv}</strong><br/>
                    ${knjiga.autor}<br/>
                    Cena: ${knjiga.cena} RSD
                </p>
                <button class="btn">Više</button>
            `;
            grid.appendChild(blok);
        }
    }
}

generisiStrukturu();

let niz=document.getElementsByClassName("btn")
for(let i=0;i<niz.length;i++){
niz[i].addEventListener("click", function() {
    console.log(this);
    document.getElementById("overlay").style.display="block";
    document.getElementById("velikaSlika").src=knjige[i].slika;
    document.getElementById("nazivKnjige").innerText=knjige[i].naziv;
    document.getElementById("opisKnjige").innerText=knjige[i].opis;
    document.getElementById("autorKnjige").innerText="Autor: "+knjige[i].autor;
    document.getElementById("cenaKnjige").innerText="Cena: "+knjige[i].cena+" RSD";
}
);
}
document.getElementById("X").addEventListener("click", function() {
document.getElementById("overlay").style.display="none";
}
);
}


//CONTACT
if (document.body.id === "contact-page"){
document.getElementById("btnPosalji").addEventListener("click", proveriFormu);

function proveriFormu() {
    let brojGresaka = 0;

    //Dohvatanje elemenata
    let ime = document.getElementById("tbIme");
    let prezime = document.getElementById("tbPrezime");
    let email = document.getElementById("tbEmail");
    let telefon = document.getElementById("tbTelefon");
    let razlog = document.getElementById("ddlRazlog");
    let poruka = document.getElementById("taPoruka");

    //Regularni izrazi
    let reImePrezime = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,14}$/;
    let reEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let reTelefon = /^06[0-9]{7,8}$/;
    
    //Validacija imena
    if (!reImePrezime.test(ime.value)) {
        document.getElementById("errIme").innerHTML = "Ime mora početi velikim slovom (3-15 slova).";
        brojGresaka++;
    } else {
        document.getElementById("errIme").innerHTML = "";
    }

    //Validacija prezimena
    if (!reImePrezime.test(prezime.value)) {
        document.getElementById("errPrezime").innerHTML = "Prezime mora početi velikim slovom.";
        brojGresaka++;
    } else {
        document.getElementById("errPrezime").innerHTML = "";
    }

    //Validacija Email-a
    if (!reEmail.test(email.value)) {
        document.getElementById("errEmail").innerHTML = "Email nije ispravan (npr. ime@gmail.com).";
        brojGresaka++;
    } else {
        document.getElementById("errEmail").innerHTML = "";
    }

    //Validacija telefona
    if (!reTelefon.test(telefon.value)) {
        document.getElementById("errTelefon").innerHTML = "Telefon mora biti u formatu 06XXXXXXXX.";
        brojGresaka++;
    } else {
        document.getElementById("errTelefon").innerHTML = "";
    }

    //Validacija dropdown-a
    if (razlog.value == "0") {
        document.getElementById("errRazlog").innerHTML = "Izaberite razlog.";
        brojGresaka++;
    } else {
        document.getElementById("errRazlog").innerHTML = "";
    }

    //Validacija poruke
    if (poruka.value.length < 5) {
        document.getElementById("errPoruka").innerHTML = "Poruka mora imati bar 5 karaktera.";
        brojGresaka++;
    } else {
        document.getElementById("errPoruka").innerHTML = "";
    }

    //Ako nema grešaka
    if (brojGresaka == 0) {
        document.getElementById("uspesna-poruka").innerHTML = "Forma je uspešno poslata!";
        document.getElementById("contact-form").reset();
    } else {
        document.getElementById("uspesna-poruka").innerHTML = "";
    }
    // Dohvatanje elementa
    let newsletter = document.getElementById("chbNewsletter");

    // Provera da li je štiklirano
    if (newsletter.checked) {
    console.log("Korisnik se prijavio na newsletter.");
}
}

}
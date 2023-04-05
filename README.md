# Browser Technologies @cmda-minor-web 2022 - 2023

## Opdracht

Voor de eindopdracht ontwerp en maak je een interactieve toepassing volgens het principe van Progressive Enhancement. De bedoeling is dat gebruikers op elke browser een zo goed mogelijk werkend product te zien krijgen. 

## Use Case 

'Ik wil een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. Ik wil duidelijk zien waar ik ben en hoeveel ik nog te doen heb. Ik wil eerder ingevulde vragen kunnen herzien. Als ik de enquête niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.'

## Proces

Hieronder zal ik mijn hele proces vastleggen, waar ben ik begonnen, wat heb ik fout en of goed gedaan en waar ben ik allemaal tegenaan gelopen. 

### Week 1
In week 1 ben ik meteen begonnen met het maken van mijn HTML pagina, ik had het idee dat als ik vanuit HTML begon, ik eigenlijk vanzelf de website zou 'enhancen', omdat ik hem dan stap voor stap beter ga maken. 

Al snel had ik een klein prototype staan, waarmee ik toch wel al begonnen was met CSS en Javascript zonder hier eigenlijk goed bij na te denken. 

### Week 2
<img width="866" alt="Screenshot 2023-04-05 at 19 57 46" src="https://user-images.githubusercontent.com/24406793/230164246-0d4e1ecd-cdb8-42a4-8d4f-d3eb047f3630.png">
Dit was het eerste resultaat, nog niet veel aandacht besteed aan de CSS, wel aan de Javascript, het was alleen al wat ingewikkelder geworden dan mijn plan was. 

Aan het einde van week 2 heb ik besloten om helemaal opnieuw te beginnen met de kennis die ik nu had over het opslaan in de local storage en het later afmaken van vragen.
Nu ben ik eerste begonnen met het maken van een goede en duidelijke HTML structuur. Ik gebruik meerdere HTML pagina's zodat een gebruiker ook zonder CSS nog niet te veel vragen op 1 scherm ziet. 

<img width="745" alt="Screenshot 2023-04-05 at 20 03 08" src="https://user-images.githubusercontent.com/24406793/230165468-c794b1e0-797a-44ff-8cb2-8d35752589fe.png">

### Week 3
Toen de eerste HTML er stond, heb ik gewerkt aan een klein design zodat ik een beetje wist in welke richting ik wou gaan met de styling.
<img width="291" alt="Screenshot 2023-04-05 at 20 05 53" src="https://user-images.githubusercontent.com/24406793/230166011-d7cc3de9-b91b-4765-8378-b00ca36f5e26.png">

Vervolgens heb ik dit uitgewerkt in CSS.
Toen de CSS stond ben ik gaan werken aan het opslaan in de local storage, waardoor je antwoorden kan opslaan en later de enquête af kan maken wanneer je de browser afsluit.

```Javascript
window.addEventListener('beforeunload', function() {
    var pageId = 'page1';
    var sections = ['lesstof1', 'geleerd1'];
    sections.forEach(function(section) {
        var selectedValue = document.querySelector('input[name="' + section + '"]:checked').value;
        localStorage.setItem(pageId + '_' + section, selectedValue);
    });
});
```
Hier gebruik ik een addEventListener met 'beforeunload', hiermee voer ik de functie uit op het moment dat ik de browser afsluit of naar een andere pagina navigeer. Vervolgens zet ik voor elke section de data uit een checkbox in een variabele, en zet ik deze samen met de juiste pageina in de local storage, waardoor hij later weer op te halen is. 




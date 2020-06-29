//useState brukes til Hooks
import React, {useState, useEffect} from "react";

//Gjør kall til en nettside, URL til json format
const APIUrl = "https://www.reddit.com/r/dadjokes/top.json?t=day&limit=1";


//Assigner funksjonskall til Reddit konstant, som returnerer teksten "Reddit"
const Reddit = () => {
    //Kan bruke joke variabel, og kaller setJoke funksjonen
    const [joke, setJoke] = useState({});

    //funksjonen kaller fetch (javascript funcksjon) som sender et 
    //API kall til URLen vi suppelerer, og returnerer et promise
    //.then venter til den forrige er ferdig med det den skal, og sier hva som skal skje når den er ferdig men kallet
    //.catch = hva skjer dersom noe går feil
    //konverterer objektet vi får til json format, slik at vi kan jobbe med det.
    const getJoke = () => {
        fetch(APIUrl)
        .then((response) => response.json())
        .then((json) => setJoke(json.data.children[0].data))
        .catch((err) => console.error(err));
    };

    //useEffect hooken sin funksjon er å håndtere bieffekter i koden
    //Kan replace life cycle hooks med useEffect
    //"Hvis komponenten endres, gjør dette kallet."
    //Kjører uavhengig av render-metode
    useEffect(() => {
        getJoke();
    }, []);
    //Hvis man putter en variabel i [] vil komponenten triggere på nytt

    console.log(joke);
    //classes brukes primært for å kommunisere med CSS
    // {} in this case: JavaScript kode inni HTML
    // bruker ternary for at hvis noe går galt, får react i det minste tilbake en tom div
    //siden react forventer en komponent tilbake herifra
    return joke ? (
        <div className="reddit">
            <p>{joke.title}</p>
            <p>{joke.selftext}</p>
        </div>
    ) : (
        <></>
    );
};
//Gjør Reddit tilgjengelig i de andre filene
export default Reddit;
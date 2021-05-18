export const getQuote = async () => {
    const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    const json = await res.json();

    return {
        name: json[0].character,
        text: json[0].quote,
        image: json[0].image,
    };
}
const quotes  = [
    {
        quote: "With great power comes great responsibility.",
        authur: "Peter Benjamin Parker",
    },
    {
        quote: "Age is no guarantee of maturity.",
        authur: "Lawana Blackwell",
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        authur: "Maya Angelou",
    },
    {
        quote: "Turn your wounds into wisdom.",
        authur: "Oprah Gail Winfrey",
    },
    {
        quote: "A mind troubled by doubt cannot focus on the course of victory.",
        authur: "Arthur Golden",
    },
    {
        quote: "The way to get started is to quit talking and begin doing. ",
        authur: "Walt Disney",
    },
    {
        quote: "Tough times never last, but tough people do.",
        authur: "Robert H. Schuller",
    },
    {
        quote: "The secret of getting ahead is getting started.",
        authur: "Mark Twain",
    },
    {
        quote: "Despite the forecast, live like it’s spring",
        authur: "Lilly Pulitzer",
    },
    {
        quote: "If you focus on what you left behind, you will never see what lies ahead.",
        authur: "Ratatouille",
    },
];

const quote     = document.querySelector("#quote span:first-child");
const authur    = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//배열 길이만큼의 숫자를 랜덤 숫자에 곱해서 소수점 내림 후, 나오게함.
//console.log(quotes[n]); //array의 특정 배열을 로깅하는 식

quote.innerText = todaysQuote.quote;
authur.innerText = todaysQuote.authur;
function hentai(n) {
    var returnVar = "https://nhentai.to/g/";
    var ranSauce = Math.floor((Math.random() * 0.9 + 0.1) * Math.pow(10, n));

    if (n >= 7) {
        return "No breaky my codey UwU! - Koshka";
    }

    while (ranSauce > 426505) {
        ranSauce = Math.floor((Math.random() * 0.9 + 0.1) * Math.pow(10, n));
    }

    return {
        number: ranSauce,
        link: returnVar + ranSauce
    };
}

function generateHentai() {
    var result = hentai(6);
    var resultText = result.number !== undefined
        ? `Generated Number: ${result.number}, Hentai Link: ${result.link}`
        : result;

    document.getElementById("hentaiResult").innerText = resultText;
}
//when this goes public this will be hidden some where in the files just replace (ranSauce > 426505)with the newest sauce number so it works
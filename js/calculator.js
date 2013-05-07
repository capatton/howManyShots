function onSubmit(){
    var beerNum = inputForm.elements["volume"].value;
    var beerAlcPercent = inputForm.elements["alcPercent"].value / 100.0;

    var beerUnits = Units.value;


    if (isNaN(beerNum) || isNaN(beerAlcPercent))
    {
        document.getElementById("ErrorText").innerHTML = "Input valid numbers."
        document.getElementById("numShotsResult").innerHTML = "";
        document.getElementById("shotsLabel").innerHTML = "";
        document.getElementById("disclaimer").innerHTML = "";
        return;
    }

    var vodkaOz = 1.50;
    var vodkaAlcPercent = .4;
    var vodkaTotalAlc = vodkaOz * vodkaAlcPercent;

    var beerTotalAlc = beerUnits * beerAlcPercent * beerNum;

    var numShots = parseFloat(beerTotalAlc / vodkaTotalAlc).toFixed(2);

    document.getElementById("ErrorText").innerHTML = "";
    document.getElementById("numShotsResult").innerHTML = numShots;
    document.getElementById("shotsLabel").innerHTML = " vodka shots";
    document.getElementById("disclaimer").innerHTML = "Assumes standard 1.5 oz shots, 80 proof vodka";
}

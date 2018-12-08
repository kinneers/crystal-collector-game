$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var targetNumber = Math.floor(Math.random() * 120) + 1;
    var counter = 0;
    var crystalValueOptions = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1];
    var crystalURLs = ["assets/images/my-icons-collection/png/002-crystal-1.png", 
                    "assets/images/my-icons-collection/png/001-crystal.png", 
                    "assets/images/my-icons-collection/png/003-mineral.png", 
                    "assets/images/my-icons-collection/png/004-crystal-2.png"];
    var crystalsAlt = ["Purple Crystal", "Teal Crystal", "Pink Crystal", "Blue Crystal"];

    console.log(crystalValueOptions);

    $("#targetNumberText").text("Your target number is: " + targetNumber);

    for (var i = 0; i < crystalValueOptions.length; i++) {
        var imageCrystal = $("<img>)");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", crystalURLs[i]);
        imageCrystal.attr("data-crystalValue", crystalValueOptions[i]);
        imageCrystal.attr("alt", crystalsAlt[i]);
        $("#crystalButtons").append(imageCrystal);
    }

    function reset() {
        targetNumber = Math.floor(Math.random() * 120) + 1;
        counter = 0;
        crystalValueOptions = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1];
        crystalURLs = ["assets/images/my-icons-collection/png/002-crystal-1.png", 
                        "assets/images/my-icons-collection/png/001-crystal.png", 
                        "assets/images/my-icons-collection/png/003-mineral.png", 
                        "assets/images/my-icons-collection/png/004-crystal-2.png"];
        crystalsAlt = ["Purple Crystal", "Teal Crystal", "Pink Crystal", "Blue Crystal"];
        $("#targetNumberText").text("Your target number is: " + targetNumber);
        $("#guessTotal").text("Current Score: " + counter);
    }
    
    $(".crystal-image").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalValue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#guessTotal").text("Current Score: " + counter);
        $("crystal-image").text(crystalValue);

        if (counter === targetNumber) {
            wins++;
            $('#winsText').text("Wins: " + wins);
            reset();
        }

        else if (counter >= targetNumber) {
            alert("You lose!!");
            losses++;
            $('#lossesText').text("Losses: " + losses);
            reset();           
        } 
    })
})
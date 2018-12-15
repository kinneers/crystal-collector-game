/*
Developer: Sarah Kinneer
Title: Crystals Collector (unit 4 game)
Description: Homework 4 (JavaScript + jQuery Game)
Date: 12-8-2018
*/

$(document).ready(function() {
    var wins = 0;
    var losses = 0;
    var targetNumber = Math.floor(Math.random() * 102) + 19;
    var counter = 0;
    $("#targetNumberText").text("Your target number is: " + targetNumber);
    var val1 = Math.floor(Math.random() * 12) + 1;
    var val2 = Math.floor(Math.random() * 12) + 1;
    var val3 = Math.floor(Math.random() * 12) + 1;
    var val4 = Math.floor(Math.random() * 12) + 1;
    $('.one').attr('value', parseInt(val1));
    $('.two').attr('value', parseInt(val2));
    $('.three').attr('value', parseInt(val3));
    $('.four').attr('value', parseInt(val4));

    $(".crystal-image").on("click tap", function() {
        var crystalValue = ($(this).attr("value"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#guessTotal").text("Current Score: " + counter);

        if (counter === targetNumber) {
            alert("You win!");
            wins++;
            $('#winsText').text("Wins: " + wins);
            reset();
        }

        else if (counter > targetNumber) {
            alert("You lose!");
            losses++;
            $('#lossesText').text("Losses: " + losses);
            reset();           
        } 
    })

    function reset() {
        targetNumber = Math.floor(Math.random() * 102) + 19;
        counter = 0;
        $("#targetNumberText").text("Your target number is: " + targetNumber);
        $("#guessTotal").text("Current Score: " + counter);
        val1 = Math.floor(Math.random() * 12) + 1;
        val2 = Math.floor(Math.random() * 12) + 1;
        val3 = Math.floor(Math.random() * 12) + 1;
        val4 = Math.floor(Math.random() * 12) + 1;
        $('.one').attr('value', parseInt(val1));
        $('.two').attr('value', parseInt(val2));
        $('.three').attr('value', parseInt(val3));
        $('.four').attr('value', parseInt(val4));
    }
})
/* eslint-disable no-undef */
/*
Developer: Sarah Kinneer
Title: Crystals Collector
Description: JavaScript + jQuery Game
Date: 12-8-2018
*/

$(document).ready(function() {
    //Sets initial game values
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
        //Adds the value of the selected crystal to the counter
        var crystalValue = ($(this).attr("value"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#guessTotal").text("Current Score: " + counter);

        //When the counter equals the target number, alert win, increment wins, and reset to start new round
        if (counter === targetNumber) {
            alert("You win!");
            wins++;
            $('#winsText').text("Wins: " + wins);
            reset();
        }

        //If the counter becomes greater than the target number, alert loss, increment losses, and reset to start a new round
        else if (counter > targetNumber) {
            alert("You lose!");
            losses++;
            $('#lossesText').text("Losses: " + losses);
            reset();           
        } 
    })

    //Starts new round: sets new crystal values and target number; resets counter; displays on page
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
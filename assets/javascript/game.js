$(document).ready(function () {
    var random = Math.floor(Math.random() * 101 + 19);
    $("#randomNo").text(random);

    var crys1 = Math.floor(Math.random() * 11 + 1)
    var crys2 = Math.floor(Math.random() * 11 + 1)
    var crys3 = Math.floor(Math.random() * 11 + 1)
    var crys4 = Math.floor(Math.random() * 11 + 1)

    var total = 0;
    var wins = 0;
    var losses = 0;

    $("#noOfWins").text(wins);
    $("#noOfLosses").text(losses);

    function reset() {
        random = Math.floor(Math.random() * 101 + 19);
        console.log(random)
        $('#randomNo').text(random);
        crys1 = Math.floor(Math.random() * 11 + 1);
        crys2 = Math.floor(Math.random() * 11 + 1);
        crys3 = Math.floor(Math.random() * 11 + 1);
        crys4 = Math.floor(Math.random() * 11 + 1);
        total = 0;
        $('#finalTotal').text(total);
    }
    function won() {
        alert("You won!");
        wins++;
        $('#totalWins').text(wins);
        reset();
    }
    function lost() {
        alert("You lose!");
        losses++;
        $('#totalLosses').text(losses);
        reset()
    }
    $('#blue').on('click', function () {
        total = total + crys1;
        console.log("New userTotal= " + total);
        $('#finalTotal').text(total);

        if (total == random) {
            won();
        }
        else if (total > random) {
            lost();
        }
    })
    $('#red').on('click', function () {
        total = total + crys2;
        console.log("New userTotal= " + total);
        $('#finalTotal').text(total);
        if (total == random) {
            won();
        }
        else if (total > random) {
            lost();
            console.log(total)
        }
    })
    $('#green').on('click', function () {
        total = total + crys3;
        console.log("New userTotal= " + total);
        $('#finalTotal').text(total);
        //sets win/lose conditions
        if (total == random) {
            won();
        }
        else if (total > random) {
            lost();
        }
    })
    $('#purple').on('click', function () {
        total = total + crys4;
        console.log("New userTotal= " + total);
        $('#finalTotal').text(total);

        if (total == random) {
            won();
        }
        else if (total > random) {
            lost();
        }
    });
})
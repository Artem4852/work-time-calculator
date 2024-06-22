prices = {
    "pile_of_stickers": 1,
    "sticker": 2,
    "openai_credits": 4,
    "domain": 4,
    "notebook": 5,
    "logic_analyzer": 5,
    "breadboard": 6,
    "multimeter": 7,
    "arcade_ticket_counter": 7,
    "soldering_iron": 8,
    "pinecil": 14,
    "yubikey": 15,
    "github_keycaps": 15,
    "octocat": 15,
    "wacom": 25,
    "invertocat_backpack": 50,
    "flipper": 70,
    "mechanical_keyboard": 75,
    "framework": 120,
    "prusa": 130,
    "bambu_lab": 135,
    "framework13": 175,
    "quest_3": 200,
    "framework16": 400,
    "macbook": 400
}

function CalculateHours() {
    // get every input element and its price
    var requiredTickets = 0;
    var inputElements = document.getElementsByTagName("input");
    for (var i = 0; i < inputElements.length; i++) {
        var element = inputElements[i];
        if (element.id != "tickets_available" && element.id != "days_absent") {
            requiredTickets += element.value * prices[element.id];
        }
    }
    // subtract available tickets
    requiredTickets -= document.getElementById("tickets_available").value;
    // get number of days left in summer excluding today
    var today = new Date();
    var end = new Date(today.getFullYear(), 8, 1);
    var diff = end - today;
    var daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
    // subtract days absent
    daysLeft -= document.getElementById("days_absent").value;
    // calculate hours
    var hours = requiredTickets / daysLeft;
    // display hours
    document.getElementById("result").style = "display: block;";
    document.getElementById("total_tickets").innerHTML = requiredTickets;
    document.getElementById("hours_a_day").innerHTML = hours.toFixed(2);
}

function AddNumber(id) {
    var element = document.getElementById(id);
    if (element.value != element.max) {
        element.value++;
    }
}

function SubtractNumber(id) {
    var element = document.getElementById(id);
    if (element.value != element.min) {
        element.value--;
    }
}
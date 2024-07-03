prices = {
    "pile_of_stickers_": 1,
    "sticker_of_your_choice": 2,
    "openai_credits_": 4,
    "domain_for_1_year": 4,
    "notebook_from_github": 5,
    "logic_analyzer_": 5,
    "breadboard_+_jumper_wires": 6,
    "multimeter_": 7,
    "arcade_ticket_counter_(timer)": 7,
    "yubikey_": 8,
    "soldering_iron_+_solder": 8,
    "raspberry_pi_zero_2_w": 9,
    "pinecil_": 14,
    "github_keycaps_x8": 15,
    "wacom_intuos_s": 15,
    "octocat_plushie": 15,
    "invertocat_backback_miir": 50,
    "keychron_k6_pro": 50,
    "flipper_zero": 70,
    "logitech_mx_mechanical": 75,
    "wacom_one_display": 90,
    "framework_factory_seconds": 120,
    "prusa_mini+": 130,
    "bambu_lab_a1_mini": 135,
    "ipad_10th_gen_+_1st_gen_apple_pencil": 160,
    "framework_13_inch": 175,
    "quest_3_": 200,
    "framework_16_inch": 400,
    "macbook_air_m2": 400
}

opinions = {
    "nothing": ["Did you even select any products?"],
    "easy": ["You can do this for sure", "Definitely achievable", "Easy peasy", "You could even get more"],
    "medium": ["You can do this with some effort", "Definitely achievable"],
    "hard": ["This is a bit challenging", "You can do this with some effort", "This would require some grinding"],
    "very_hard": ["Good luck, what else can I say", "Unless you feel like grinding, this is basically impossible", "If I was you, I would choose less products"],
    "insane": ["You must be insane"]
}

function ShowRacoon(hours_a_day) {
    // document.getElementById("racoon").style = "display: block;";
    if (hours_a_day <= 0) {
        difficulty = "nothing";
    }
    else if (hours_a_day <= 1) {
        difficulty = "easy";
    }
    else if (hours_a_day <= 3) {
        difficulty = "medium";
    }
    else if (hours_a_day <= 5) {
        difficulty = "hard";
    }
    else if (hours_a_day <= 12) {
        difficulty = "very_hard";
    }
    else {
        difficulty = "insane";
    }
    document.getElementById("opinion").innerHTML = opinions[difficulty][Math.floor(Math.random() * opinions[difficulty].length)];
}

function CalculateDaily(requiredTickets) {
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
    document.getElementById("result_everyday").style = "display: flex;";
    document.getElementById("total_tickets").innerHTML = requiredTickets;
    document.getElementById("hours_a_day").innerHTML = hours.toFixed(2);

    ShowRacoon(hours);
}

function CalculateHourly(requiredTickets) {
    hours_a_day_possible = document.getElementById("hours_a_day_possible").value;
    days = requiredTickets / hours_a_day_possible;
    end = new Date();
    end.setDate(end.getDate() + days);

    document.getElementById("result_hourly").style = "display: flex;";
    if (end.getMonth() < 8) {
        document.getElementById("impossible").style = "display: none;";
        document.getElementById("possible").style = "display: block;";
        document.getElementById("hours_a_day_info_possible").innerHTML = hours_a_day_possible;
        document.getElementById("total_tickets_possible").innerHTML = requiredTickets;
        // set end day
        document.getElementById("day").innerHTML = end.getDate();
        // set end month in readable format
        document.getElementById("month").innerHTML = end.toLocaleString('default', { month: 'long' });
    }
    else {
        document.getElementById("possible").style = "display: none;";
        document.getElementById("impossible").style = "display: block;";
        document.getElementById("hours_a_day_info_impossible").innerHTML = hours_a_day_possible;
        document.getElementById("total_tickets_impossible").innerHTML = requiredTickets;
    }
}

function ShowResult() {
    document.getElementById("result_everyday").style = "display: none;";
    document.getElementById("result_hourly").style = "display: none;";
    var requiredTickets = 0;
    var inputElements = document.getElementsByTagName("input");
    for (var i = 0; i < inputElements.length; i++) {
        var element = inputElements[i];
        if (element.id != "tickets_available" && element.id != "days_absent" && element.id != "hours_a_day_possible") {
            console.log(element.id, element.value, prices[element.id])
            console.log(requiredTickets)
            requiredTickets += element.value * prices[element.id];
        }
    }
    console.log(requiredTickets)
    // subtract available tickets
    requiredTickets -= document.getElementById("tickets_available").value;

    days_absent = document.getElementById("days_absent").value;
    hours_a_day_possible = document.getElementById("hours_a_day_possible").value;

    if (hours_a_day_possible != 0) { CalculateHourly(requiredTickets) }
    else if (days_absent != 0) { CalculateDaily(requiredTickets) }
    else if (hours_a_day_possible == 0) { CalculateDaily(requiredTickets) };
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
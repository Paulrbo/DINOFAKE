$(function() {
    $("#home_to_chrono").hover(function() {
        $("#defilement").show();
        $("#defilement").fadeOut(2000);

    });
    $("#map_to_home").hover(function() {
        $("#haut").show();
        $("#haut").fadeOut(2000);
    });
});

function home_to_chrono() {
    $("#chrono_section").show("fast");
    $("#home_to_chrono").hide("fast");
}

function chrono_to_stakes() {
    $("#stakes_section").show("fast");
    $("#chrono_to_stakes").hide("fast");
}

function stakes_to_answer() {
    $("#answer_section").show("fast");
    $("#stakes_to_answer").hide("fast");
}

function answer_to_map() {
    $("#map_section").show("fast");
    $("#answer_to_map").hide("fast");
}

function home_section() {
    $("#home_section").show("fast");
    //$("#answer_to_map").hide("fast");
}
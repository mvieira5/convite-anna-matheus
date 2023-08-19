$(document).ready(function() {
    var convite1 = $("#convite1");

    convite1.click(function() {
        convite1.fadeOut("slow");
    });
});


$(document).ready(function() {
    $("#cerimonia").click(function() {
        $(".convite2").fadeOut(); // Esconde a div convite2
    });
});

$(document).ready(function() {
    $("#retorno").click(function() {
        $(".convite2").fadeIn(); // Esconde a div convite2
    });
});

$(document).ready(function() {
    $("#menu1").click(function() {
        window.open("https://goo.gl/maps/jZbZKCJiAC1Je7kg9", "_blank");
    });
});

$(document).ready(function() {
    $("#menu2").click(function() {
        window.open("https://goo.gl/maps/jZbZKCJiAC1Je7kg9", "_blank");
    });
});

$(document).ready(function() {
    $("#recepcao").click(function() {
        window.open("https://noivos.casar.com/anna-e-matheus-2023#/recepcao", "_blank");
    });
});

$(document).ready(function() {
    $("#presentes").click(function() {
        window.open("https://noivos.casar.com/anna-e-matheus-2023#/presentes", "_blank");
    });
});

$(document).ready(function() {
    $("#confirmacao").click(function() {
        window.open("https://noivos.casar.com/anna-e-matheus-2023#/rsvp", "_blank");
    });
});
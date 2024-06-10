$(document).ready(function() {
    $("#button").click(() => {
        $(".b").hide();
        jsConfetti.addConfetti();
        $("h1").fadeIn(5000);
    });
});

const jsConfetti = new JSConfetti();
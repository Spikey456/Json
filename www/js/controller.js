$(document).ready(function() {
    $.getJSON("books.json", function(result) {
        $.each(result, function(i, field) {
            $("#output").append("Title: " + field.title + " Duration: " + field.duration + " Price: " + field.price)
        });
    });
});
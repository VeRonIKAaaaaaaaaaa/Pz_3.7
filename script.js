$ ("document").ready(function() {
    $("p").text('Змінений текст');

    $("#task1").addClass("highlight");
    $(".highlight").css('color', 'green').hide().fadeIn('slow');
    $("#task1 p").last().text('Новий останній текст');

    $("li").addClass("list-item");
    $(".list-item").css('background-color', 'brown');

    $('#Knopka').on('click', function() {
        $('.list-item').remove();
    });
});
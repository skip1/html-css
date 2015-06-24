$(function () {
    $('#dropdown').on("click", function () {
        alert("ll");
        $('#slide').slideToggle("fast", "linear");
    });
    $("input[type='text']").focusin(function () {
        $(this).css("background-color", "palegoldenrod");
    });
     $("input[type='text']").focusout(function () {
        $(this).css("background-color", "white");
    });
    $("#submit").on("click", function () {
        if ($("#name").val() === '') {
            alert("Please enter a name");
        } else if ($("#password").val() === '') {
            alert ("Please enter a password");
            } else if ($("#password").val().length < 5) {
                alert("Password must be at least of 5 characters");
        };
    });
});

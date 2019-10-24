$("#submit").on("click", function (event) {

    var friend = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: [
            $("#q1").val().trim(),
            $("#q2").val().trim(),
            $("#q3").val().trim(),
            $("#q4").val().trim(),
            $("#q5").val().trim(),
            $("#q6").val().trim(),
            $("#q7").val().trim(),
            $("#q8").val().trim(),
            $("#q9").val().trim(),
            $("#q10").val().trim()
        ]
    };

    console.log(friend);

    $.post("api/friends", friend, function (data) {
        if (data) {
            var modal = $("#results-modal");
            modal.find("#match-name").text(data.name);
            modal.find("#match-img").attr("src", data.photo);
            modal.modal("show");
        }
    });

});
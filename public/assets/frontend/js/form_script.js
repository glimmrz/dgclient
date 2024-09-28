$(document).ready(function () {
    const formSteps = $(".form-step");
    let currentStep = 0;

    formSteps.eq(currentStep).addClass("active");

    $(".card").on("click", function () {
        var checkbox = $(this).find('input[type="checkbox"]');
        checkbox.prop("checked", !checkbox.prop("checked"));
        $(this).toggleClass("selected", checkbox.prop("checked"));
        updateSelectedValues();
    });

    function updateSelectedValues() {
        var selectedValues = $(".card.selected")
            .map(function () {
                return $(this).data("value");
            })
            .get();
        $("#selected_values").val(selectedValues.join(","));
    }

    $(".next").on("click", function () {
        if (currentStep < formSteps.length - 1) {
            formSteps
                .eq(currentStep)
                .removeClass("active")
                .addClass("slide-out");
            currentStep++;
            formSteps.eq(currentStep).addClass("active slide-in");

            setTimeout(() => {
                formSteps.eq(currentStep - 1).removeClass("slide-out");
                formSteps.eq(currentStep).removeClass("slide-in");
            }, 500);

            updateProgressBar();
        }
    });

    $(".previous").on("click", function () {
        if (currentStep > 0) {
            formSteps
                .eq(currentStep)
                .removeClass("active")
                .addClass("slide-out");
            currentStep--;
            formSteps.eq(currentStep).addClass("active slide-in");

            setTimeout(() => {
                formSteps.eq(currentStep + 1).removeClass("slide-out");
                formSteps.eq(currentStep).removeClass("slide-in");
            }, 500);

            updateProgressBar();
        }
    });

    $(".option").on("click", function () {
        $(this).toggleClass("selected");
    });

    function updateProgressBar() {
        const progress = ((currentStep + 1) / formSteps.length) * 100;
        $("#progress-bar").css("width", progress + "%");
    }

    // logo form
    $(".card").on("click", function () {
        var value = $(this).data("value");
        $("#logoType").val(value);
        $("#logoForm").submit();
    });
});

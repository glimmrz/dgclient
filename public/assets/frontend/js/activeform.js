$(document).ready(function() {
    let formStepIndex = 0;
    const formSteps = $('.form-step');
    const progressBar = $('#progress-bar');
    const logoType = $('#logoType');
    const selectedFontInput = $('#selected-font');
    const selectedAdditionalNeedInput = $('#additional-need');
    const selectedLogoTypeSelection = $('#logo-type-selection');

    function updateProgressBar() {
        const progress = ((formStepIndex / (formSteps.length - 1)) * 100) + '%';
        progressBar.css('width', progress);
    }


    ///
    function updateAdditionalNeed() {
        let selectedNeeds = [];
        $('.additional-need-checkbox:checked').each(function() {
            selectedNeeds.push($(this).val());
        });
        selectedAdditionalNeedInput.val(JSON.stringify(selectedNeeds));
    }



    // Next button click handler
    $('.next').click(function() {
        if (formStepIndex < formSteps.length - 1) {
            // Handle specific step data capture
            if (formStepIndex === 0) {
                const selectedLogoType = $('input[name="logo_type"]:checked').val();
                logoType.val(selectedLogoType);
            } else if (formStepIndex === 1) {
                // Handle font selection data capture
                const selectedFont = selectedFontInput.val();
                // You can also handle validations or checks here before proceeding
            }

            // Move to next step
            formSteps.eq(formStepIndex).removeClass('active');
            formStepIndex++;
            formSteps.eq(formStepIndex).addClass('active');
            updateProgressBar();
        }
    });

    // Previous button click handler
    $('.previous').click(function() {
        if (formStepIndex > 0) {
            formSteps.eq(formStepIndex).removeClass('active');
            formStepIndex--;
            formSteps.eq(formStepIndex).addClass('active');
            updateProgressBar();
        }
    });

    // Font selection click handler (for Step 2)
    $('.font-selection').click(function() {
        const checkbox = $(this).find('.font-selection-checkbox');
        checkbox.prop('checked', !checkbox.prop('checked'));
        $(this).toggleClass('selected');
        // updateSelectedFont();
    });

    // Logo type selection click handler (for Step 1)
    $('.logo-type-selection').click(function() {
        const checkbox = $(this).find('.logo-type-selection-checkbox');
        checkbox.prop('checked', !checkbox.prop('checked'));
        $(this).toggleClass('selected');
        // updateAdditionalNeed();
    });

    // Additional needs selection click handler (for Step 8)
    $('.additional-need').click(function() {
        const checkbox = $(this).find('.additional-need-checkbox');
        checkbox.prop('checked', !checkbox.prop('checked'));
        $(this).toggleClass('selected');
        updateAdditionalNeed();
    });

    updateProgressBar();
});

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import $ from 'jquery'; // Import jQuery if needed
import { Helmet } from 'react-helmet';
import WebMultiStepForm from './MultiStepForm/WebMultiStepForm';

const WebForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        logoType: [],
        fontSelection: [],
        websites: '',
        companyDescription: '',
        details: '',
        additionalNeeds: [],
        source: [],
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        company: '',
    });

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const price = searchParams.get('price') || '';
    const productName = searchParams.get('product') || '';

    useEffect(() => {
        setFormData({
            ...formData,
            price,
            productName,
        });
    }, [price, productName]);

    useEffect(() => {
     
        const script2 = document.createElement('script');
        script2.src = "https://kit.fontawesome.com/14c3ef5dcc.js";
        script2.crossOrigin = "anonymous";
        script2.async = true;
        document.body.appendChild(script2);

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

        function updateAdditionalNeed() {
            let selectedNeeds = [];
            $('.additional-need-checkbox:checked').each(function() {
                selectedNeeds.push($(this).val());
            });
            selectedAdditionalNeedInput.val(JSON.stringify(selectedNeeds));
        }

        $('.next').click(function() {
            if (formStepIndex < formSteps.length - 1) {
                if (formStepIndex === 0) {
                    const selectedLogoType = $('input[name="logo_type"]:checked').val();
                    logoType.val(selectedLogoType);
                } else if (formStepIndex === 1) {
                    const selectedFont = selectedFontInput.val();
                }

                formSteps.eq(formStepIndex).removeClass('active');
                formStepIndex++;
                formSteps.eq(formStepIndex).addClass('active');
                updateProgressBar();
            }
        });

        $('.previous').click(function() {
            if (formStepIndex > 0) {
                formSteps.eq(formStepIndex).removeClass('active');
                formStepIndex--;
                formSteps.eq(formStepIndex).addClass('active');
                updateProgressBar();
            }
        });

        $('.font-selection').click(function() {
            const checkbox = $(this).find('.font-selection-checkbox');
            checkbox.prop('checked', !checkbox.prop('checked'));
            $(this).toggleClass('selected');
        });

        $('.logo-type-selection').click(function() {
            const checkbox = $(this).find('.logo-type-selection-checkbox');
            checkbox.prop('checked', !checkbox.prop('checked'));
            $(this).toggleClass('selected');
        });

        $('.additional-need').click(function() {
            const checkbox = $(this).find('.additional-need-checkbox');
            checkbox.prop('checked', !checkbox.prop('checked'));
            $(this).toggleClass('selected');
            updateAdditionalNeed();
        });

        updateProgressBar();

        // Cleanup function to remove event handlers when the component unmounts
        return () => {
            $('.next').off('click');
            $('.previous').off('click');
            $('.font-selection').off('click');
            $('.logo-type-selection').off('click');
            $('.additional-need').off('click');
        };
    }, [location.search]); // Dependency array to re-run useEffect if location.search changes




    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };

    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
                <style>
                    {`
                        .form-step {
                            display: none;
                        }

                        .form-step.active {
                            display: block;
                        }

                        .progress-container {
                            margin-bottom: 20px;
                        }

                        .progress-bar {
                            height: 5px;
                            background-color: #007bff;
                            width: ${((step / 8) * 100)}%;
                            transition: width 0.3s;
                        }

                        .card {
                            cursor: pointer;
                        }

                        .card.selected {
                            border: 2px solid #007bff;
                        }
                    `}
                </style>
                <link rel="stylesheet" href="/assets/frontend/css/form_style.css" />
            </Helmet>
            <div className="container mt-4">
             

                <form id="multi-step-form" className="mt-4" onSubmit={handleSubmit}>
                    <input type="hidden" name="form_type" value="logo_form" />
                    <input type="hidden" name="price" value={formData.price} />
                    <input type="hidden" name="productName" value={formData.productName} />

                <WebMultiStepForm /> 
                 
                </form>
            </div>
        </>
    );
};

export default WebForm;

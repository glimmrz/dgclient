import React, { useState } from 'react';
import ProgressBar from './LogoMultiStepForm/ProgressBar';
import Step1 from './LogoMultiStepForm/Step1';
import Step2 from './LogoMultiStepForm/Step2';
import Step3 from './LogoMultiStepForm/Step3';
import Step4 from './LogoMultiStepForm/Step4';
import Step5 from './LogoMultiStepForm/Step5';
import Step6 from './LogoMultiStepForm/Step6';
import Step7 from './LogoMultiStepForm/Step7';
import Step8 from './LogoMultiStepForm/Step8';

import { useNavigate } from 'react-router-dom';

const LogoMultiStepForm = () => {


    const navigate = useNavigate(); // Use useNavigate instead of useHistory
 

    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        logoType: '',
        fontSelection: '',
        companyDescription: '',
        websites: '',
        details: '',
        additionalNeeds: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        company: ''
    });
    const totalSteps = 8;

    const handleNext = (data) => {
        setFormData(prevData => ({
            ...prevData,
            ...data
        }));
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = (finalData) => {
        // Handle final form submission here
        console.log('Final form data:', finalData);
        navigate('/thank-you');
    };

    const renderStep = () => {
        const stepProps = {
            onNext: handleNext,
            onPrevious: handlePrevious,
            previousData: formData // Pass form data to each step
        };

        switch (currentStep) {
            case 1:
                return <Step1 {...stepProps} />;
            case 2:
                return <Step2 {...stepProps} />;
            case 3:
                return <Step3 {...stepProps} />;
            case 4:
                return <Step4 {...stepProps} />;
            case 5:
                return <Step5 {...stepProps} />;
            case 6:
                return <Step6 {...stepProps} />;
            case 7:
                return <Step7 {...stepProps} />;
            case 8:
                return <Step8
                    {...stepProps}
                    onSubmit={handleSubmit} // Pass handleSubmit function
                />;
            default:
                return null;
        }
    };

    return (
        <div>
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
            <br />
            {renderStep()}
        </div>
    );
};

export default LogoMultiStepForm;

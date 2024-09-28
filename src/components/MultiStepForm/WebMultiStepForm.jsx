import React, { useState } from 'react';
import ProgressBar from './WebMultiStepForm/ProgressBar';
import Step1 from './WebMultiStepForm/Step1';
import Step2 from './WebMultiStepForm/Step2';
import Step3 from './WebMultiStepForm/Step3';
import Step4 from './WebMultiStepForm/Step4';
import Step5 from './WebMultiStepForm/Step5';
import Step6 from './WebMultiStepForm/Step6';
import Step7 from './WebMultiStepForm/Step7';
import Step8 from './WebMultiStepForm/Step8';
import Step9 from './WebMultiStepForm/Step9';
import Step10 from './WebMultiStepForm/Step10';

import { useNavigate } from 'react-router-dom';

const WebMultiStepForm = () => {

    const navigate = useNavigate(); // Use useNavigate instead of useHistory
 


    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Initialize with fields you need
        field1: '',
        field2: '',
        // ... add all fields needed for your form
    });

    const totalSteps = 10;

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

    const renderStep = () => {
        const stepProps = {
            onNext: handleNext,
            onPrevious: handlePrevious,
            previousData: formData // Pass form data to each step
        };

        const handleSubmit = (finalData) => {
            // Handle final form submission here
            console.log('Final form data:', finalData);
            navigate('/thank-you');
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
                return <Step8 {...stepProps} />;
            case 9:
                return <Step9 {...stepProps} />;
            case 10:
                return <Step10 {...stepProps}
                onSubmit={handleSubmit}  />;
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

export default WebMultiStepForm;

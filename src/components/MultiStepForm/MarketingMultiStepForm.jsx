import React, { useState } from 'react';
import ProgressBar from './MarketingMultiStepForm/ProgressBar';
import Step1 from './MarketingMultiStepForm/Step1';
import Step2 from './MarketingMultiStepForm/Step2';
import Step3 from './MarketingMultiStepForm/Step3';
import Step4 from './MarketingMultiStepForm/Step4';
import Step5 from './MarketingMultiStepForm/Step5';
import Step6 from './MarketingMultiStepForm/Step6';
import Step7 from './MarketingMultiStepForm/Step7';
import Step8 from './MarketingMultiStepForm/Step8';
import Step9 from './MarketingMultiStepForm/Step9';
import Step10 from './MarketingMultiStepForm/Step10';


import { useNavigate } from 'react-router-dom';

const MarketingMultiStepForm = () => {
    
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
 

    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Initialize with fields you need
        field1: '',
        field2: '',
        // ... add all the fields needed for your form
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
            // You might want to send `finalData` to a server or process it as needed
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
                return <Step10 
                    {...stepProps}
                     onSubmit={handleSubmit}   />;
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

export default MarketingMultiStepForm;

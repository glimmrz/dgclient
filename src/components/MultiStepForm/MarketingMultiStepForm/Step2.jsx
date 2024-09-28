    import React, { useState } from 'react';

    const Step2 = ({ onNext, onPrevious, previousData }) => {
        const [marketingGoal, setMarketingGoal] = useState('');

        const handleNext = () => {
            if (marketingGoal.trim() === '') {
                alert('Please enter your marketing goal.');
            } else {
                onNext({ marketing_goal: marketingGoal });
                console.log('Step2 data:', {
                    marketing_goal: marketingGoal,
                    logoType: previousData.logoType // Log Step1 data
                });
            }
        };

        return (
            <div className="form-step2">
                <p>
                    <span className="step-number">2 →</span> What is the goal of your online marketing campaign: This question is required.*
                </p>
                <p className="subtext">i.e. Promote our new website</p>
                <input
                    type="text"
                    id="marketing_goal"
                    className="form-control_custom"
                    name="marketing_goal"
                    placeholder="Type your answer here..."
                    value={marketingGoal}
                    onChange={(e) => setMarketingGoal(e.target.value)}
                />
                <button type="button" className="next btn btn-primary" onClick={handleNext}>
                    Ok
                </button>
                <button type="button" className="previous btn btn-secondary" onClick={onPrevious}>
                    <span><i className="fa-solid fa-chevron-up"></i></span>
                </button>
            </div>
        );
    };

    export default Step2;

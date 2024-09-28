import React, { useState } from 'react';

const Step7 = ({ onNext, onPrevious, previousData }) => {
    const [selectedBudgets, setSelectedBudgets] = useState([]);
    const [error, setError] = useState('');

    const handleBudgetChange = (event) => {
        const { value } = event.target;
        setSelectedBudgets((prev) =>
            prev.includes(value) ? prev.filter((budget) => budget !== value) : [...prev, value]
        );
        setError(''); // Clear error when user selects a budget
    };

    const handleNext = () => {
        if (selectedBudgets.length === 0) {
            setError('Please select at least one budget range.');
            return;
        }
        onNext({ source_7: selectedBudgets });
        console.log('Step7 data:', {
            source_7: selectedBudgets ,
            source_6: previousData.source_6,
            source_5: previousData.source_5,
            stape_4: previousData.stape_4,
            font_selection: previousData.font_selection,
            web_pages: previousData.web_pages,
            company_description: previousData.company_description // Log Step1 data
        });
    };

    return (
        <div className="form-step7">
            <p>
                <span className="step-number">7 →</span> What is your budget for this
                project: This question is required.*
            </p>
            <p className="subtext">
                How much do you plan to dedicate to this project? If you're unsure,
                please mention a rough figure.
            </p>
            <div className="options_5 row">
                {[
                    { label: "5'00-2'000", value: "5'00-2'000" },
                    { label: "2'000-4'000", value: "2'000-4'000" },
                    { label: "5'000-7'000", value: "5'000-7'000" },
                    { label: "8'000-10'000", value: "8'000-10'000" },
                    { label: "100'00+", value: "100'00+" },
                ].map((budget) => (
                    <div key={budget.value} className="col-md-3 option_5">
                        <label className="m-0">
                            <input
                                type="checkbox"
                                name="source_7[]"
                                value={budget.value}
                                checked={selectedBudgets.includes(budget.value)}
                                onChange={handleBudgetChange}
                            />
                            <span>{budget.label.charAt(0)}</span> {budget.label}
                        </label>
                    </div>
                ))}
            </div>
            {error && <div className="text-danger">{error}</div>}
            <p className="subtext">Shift + Enter to make a line break</p>
            <button type="button" className="next btn btn-primary" onClick={handleNext}>Ok</button>
            <button type="button" className="previous btn btn-secondary" onClick={onPrevious}>
                <span><i className="fa-solid fa-chevron-up"></i></span>
            </button>
        </div>
    );
};

export default Step7;

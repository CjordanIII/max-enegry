"use client"
import { useState } from "react";
import Paper from "../../components/paper/Paper";

const categories = {
    "General": [
        {
            paperLabel: "Why is this project needed?",
            style: "bg-blue-900 p-5 rounded-lg w-full max-w-[80vw] md:max-w-[150vh] h-auto md:h-[200px] flex items-center justify-center text-center text-white font-extrabold text-2xl md:text-4xl shadow-[0_10px_15px_rgba(0,0,0,0.6)]",
            answer: `This new infrastructure will allow us to meet the growing energy needs, continue reliable electric service, and maintain compliance 
                    with federal reliability standards.`
        },
        {
            paperLabel: "How can I analyze my usage?",
            style: "bg-blue-900 p-5 rounded-lg w-full max-w-[80vw] md:max-w-[150vh] h-auto md:h-[200px] flex items-center justify-center text-center text-white font-extrabold text-2xl md:text-4xl shadow-[0_10px_15px_rgba(0,0,0,0.6)]",
            answer: `Sign in to your account to see how your energy use affects your bill over time!`
        },
    ],
    "Rates": [
        {
            paperLabel: "How often do rates change?",
            style: "bg-blue-900 p-5 rounded-lg w-full max-w-[80vw] md:max-w-[150vh] h-auto md:h-[200px] flex items-center justify-center text-center text-white font-extrabold text-2xl md:text-4xl shadow-[0_10px_15px_rgba(0,0,0,0.6)]",
            answer: `Rates are typically reviewed annually and may change based on regulatory decisions, market conditions, and operational costs. 
                    We will notify customers in advance of any rate changes. `
        },
        {
            paperLabel: "What are the current rates?",
            style: "bg-blue-900 p-5 rounded-lg w-full max-w-[80vw] md:max-w-[150vh] h-auto md:h-[200px] flex items-center justify-center text-center text-white font-extrabold text-2xl md:text-4xl shadow-[0_10px_15px_rgba(0,0,0,0.6)]",
            answer: `Our current rates for both gas and electric can be found here. These rates apply to both residential customers and business customers. `
        },
    ],
    "Next Steps": [
        {
            paperLabel: "What are the next steps I should be aware of?",
            style: "bg-blue-900 p-5 rounded-lg w-full max-w-[80vw] md:max-w-[150vh] h-auto md:h-[200px] flex items-center justify-center text-center text-white font-extrabold text-2xl md:text-4xl shadow-[0_10px_15px_rgba(0,0,0,0.6)]",
            answer: `Our project team will focus on public outreach in summer 2025 to ensure all interested community members are aware of the 
                    project and have an opportunity to share feedback with our team as we continue the planning process. We intend to file an application
                    with the SSC in late summer 2025.`
        },
        {
            paperLabel: "How will I be informed about project updates?",
            style: "bg-blue-900 p-5 rounded-lg w-full max-w-[80vw] md:max-w-[150vh] h-auto md:h-[200px] flex items-center justify-center text-center text-white font-extrabold text-2xl md:text-4xl shadow-[0_10px_15px_rgba(0,0,0,0.6)]",
            answer: `We will provide updates through our website, email newsletters, and community meetings. You can also sign up for SMS alerts to receive 
                    real-time notifications about the project's progress.`
        },
    ]
};

const FaqPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredCategories = Object.keys(categories).reduce((acc, category) => {
        // checks if the category name matches the search term
        if (category.toLowerCase().includes(searchTerm.toLowerCase())) {
            acc[category] = categories[category];
        } else {
            // filter the questions within the category
            const filteredQuestions = categories[category].filter(q =>
                q.paperLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
                q.answer.toLowerCase().includes(searchTerm.toLowerCase())
            );
            if (filteredQuestions.length > 0) {
                acc[category] = filteredQuestions;
            }
        }
        return acc;
    }, {});

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {/* this is the title */}
            <div className="font-extrabold text-3xl md:text-7xl mt-5 md:mt-10 mb-5 md:mb-10 text-blue-900 text-center">
                Frequently Asked Questions
            </div>

            {/* this is our search bar */}
            <div className="w-full flex justify-center md:justify-end px-5 md:px-10">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full md:w-auto mb-5 p-2 border-2 border-blue-900 rounded-lg text-center"
                />
            </div>

            {/* renders the categories and the questions */}
            {Object.keys(filteredCategories).map(category => (
                <div key={category} className="mb-8 w-full max-w-5xl">
                    <h2 className="text-2xl md:text-5xl text-blue-900 mb-5 text-left">{category}</h2>
                    {filteredCategories[category].map((paper, index) => (
                        <div key={index} className="mb-5 flex flex-col items-center">
                            <Paper
                                style={paper.style}
                                paperLabel={paper.paperLabel}
                            />
                            {/* renders the answer of said question */}
                            <div className="pt-5 pb-5 flex justify-center w-full">
                                <div className="text-center font-bold max-w-[80vw] md:max-w-[150vh]">
                                    {paper.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default FaqPage;

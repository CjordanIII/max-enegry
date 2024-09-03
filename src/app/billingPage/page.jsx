"use client";

import Paper from "../../components/paper/Paper";


const papersData = [
    {
        paperLabel: (
            <a href="#" className="relative w-full h-full flex items-center justify-center overflow-hidden group">
                <div
                    className="absolute inset-0 bg-cover bg-center transition duration-300 ease-in-out group-hover:opacity-60"
                    style={{
                        backgroundImage: "url('/images/1080x1080_billing_cta3.jpg')",
                        filter: "brightness(80%)"
                    }}
                ></div>
                <div className="absolute inset-0 bg-blue-500 opacity-40 group-hover:opacity-60 transition duration-300 ease-in-out"></div>
                <div className="relative text-4xl font-extrabold text-white z-100">PAY MY BILL</div>
            </a>
        ),
        style: "relative p-0 m-0 rounded-lg shadow-lg w-[425px] h-[250px] flex items-center justify-center text-center text-4xl font-extrabold",
    },
    {
        paperLabel: (
            <a href="#" className="relative w-full h-full flex items-center justify-center overflow-hidden group">
                <div
                    className="absolute inset-0 bg-cover bg-center transition duration-300 ease-in-out group-hover:opacity-60"
                    style={{
                        backgroundImage: "url('/images/1080x1080_billing_cta2.jpg')",
                        filter: "brightness(80%)"
                    }}
                ></div>
                <div className="absolute inset-0 bg-blue-500 opacity-40 group-hover:opacity-60 transition duration-300 ease-in-out"></div>
                <div className="relative text-4xl font-extrabold text-white z-100">
                    <div>UNDERSTAND</div>
                    <div>MY BILL</div>
                </div>
            </a>
        ),
        style: "relative p-0 m-0 rounded-lg shadow-lg w-[425px] h-[250px] flex items-center justify-center text-center text-4xl font-extrabold",
    },
    {
        paperLabel: (
            <a href="#" className="relative w-full h-full flex items-center justify-center overflow-hidden group">
                <div
                    className="absolute inset-0 bg-cover bg-center transition duration-300 ease-in-out group-hover:opacity-60"
                    style={{
                        backgroundImage: "url('/images/1080x1080_billing_cta1.jpg')",
                        filter: "brightness(80%)"
                    }}
                ></div>
                <div className="absolute inset-0 bg-blue-500 opacity-40 group-hover:opacity-60 transition duration-300 ease-in-out"></div>
                <div className="relative text-4xl font-extrabold text-white z-100">ASSISTANCE PROGRAMS</div>
            </a>
        ),
        style: "relative p-0 m-0 rounded-lg shadow-lg w-[425px] h-[250px] flex items-center justify-center text-center text-4xl font-extrabold",
    }
];

const papersTogether = [
    {
        paperLabel: (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/pexels-ketut-subiyanto-4126743.jpg')"
                    }}
                ></div>
            </div>
        ),
        style: "relative p-0 m-0 rounded-lg shadow-lg w-[660px] h-[280px] flex items-center justify-center text-center font-bold",
    },
    {
        paperLabel: (
            <div>
                <div className="text-left flex-1">
                    <p className="font-bold text-lg mb-2">Manage your account needs online:</p>
                    <ul className="list-disc ml-5 space-y-2 text-base">
                        <li>View and pay your bills</li>
                        <li>View your energy usage</li>
                        <li>Make your payments arrangements</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center justify-center flex-1">
                    <div className="flex justify-center text-center space-x-4 mt-4">
                        <button
                            className="bg-blue-500 text-white px-6 py-2 w-32 rounded-lg text-lg">
                            Log In
                        </button>
                        <button
                            className="bg-white text-blue-500 border border-blue-500 px-6 py-2 w-32 rounded-lg text-lg">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        ),
        style: "bg-blue-900 p-5 shadow-lg w-[660px] h-[280px] flex flex-col justify-center text-white font-bold",
    }
];




const twoPapers = [
    {
        paperLabel: (
            <a href="#" className="relative w-full h-full flex items-center justify-center overflow-hidden group">
                <div
                    className="absolute inset-0 bg-cover bg-center transition duration-300 ease-in-out group-hover:opacity-60"
                    style={{
                        backgroundImage: "url('/images/490x300-family-online.jpg')",
                        filter: "brightness(80%)"
                    }}
                ></div>
                <div className="absolute inset-0 bg-blue-500 opacity-40 group-hover:opacity-60 transition duration-300 ease-in-out"></div>
                <div className="relative text-4xl font-extrabold text-white z-10">Budget Problems</div>
            </a>
        ),
        style: "relative p-0 m-0 rounded-lg shadow-lg w-[425px] h-[250px] flex items-center justify-center text-center text-4xl font-extrabold",
    },
    {
        paperLabel: (
            <a href="#" className="relative w-full h-full flex items-center justify-center overflow-hidden group">
                <div
                    className="absolute inset-0 bg-cover bg-center transition duration-300 ease-in-out group-hover:opacity-60"
                    style={{
                        backgroundImage: "url('/images/490x300-ebill-cta.jpg')",
                        filter: "brightness(80%)"
                    }}
                ></div>
                <div className="absolute inset-0 bg-blue-500 opacity-40 group-hover:opacity-60 transition duration-300 ease-in-out"></div>
                <div className="relative text-center text-white z-10">
                    <div className="text-4xl font-extrabold">eBill</div>
                    <div className="text-2xl font-extrabold">(pay online)</div>
                </div>
            </a>
        ),
        style: "relative p-0 m-0 rounded-lg shadow-lg w-[425px] h-[250px] flex items-center justify-center text-center",
    }
];

const BillingPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 pt-32 px-4 sm:pt-40 sm:px-8">
            <div className="text-3xl sm:text-5xl font-extrabold">
                Billing
            </div>
            <br />
            <div className="font-bold text-xl sm:text-2xl">
                We make understanding and paying your bills easy
            </div>
            <br />
            <div className="text-lg sm:text-2xl">
                Explore a variety of simple and secure payment methods and options to fit your home or business needs. Need help or reducing or paying your bill? We can help!
            </div>
            <div className="text-center text-2xl sm:text-4xl font-light my-5 sm:my-10">
                How Can We Help Today
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {papersData.map((paper, index) => (
                    <Paper
                        key={index}
                        style={`${paper.style} sm:w-[425px] sm:h-[250px] w-full h-[150px]`}
                        paperLabel={paper.paperLabel}
                    />
                ))}
            </div>

            <div className="flex justify-center mt-5 sm:mt-10">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
                    <Paper
                        style={`${papersTogether[0].style} w-full sm:w-[660px] h-[180px] sm:h-[280px]`}
                        paperLabel={papersTogether[0].paperLabel}
                    />
                    <Paper
                        style={`${papersTogether[1].style} w-full sm:w-[660px] h-[180px] sm:h-[280px]`}
                        paperLabel={papersTogether[1].paperLabel}
                    />
                </div>
            </div>

            <div className="text-center text-2xl sm:text-4xl font-light my-5 sm:my-10">
                Learn How to Make Payments Quickly & Easily
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <Paper
                    style={`${twoPapers[0].style} w-full sm:w-[425px] h-[150px] sm:h-[250px]`}
                    paperLabel={twoPapers[0].paperLabel}
                />
                <Paper
                    style={`${twoPapers[1].style} w-full sm:w-[425px] h-[150px] sm:h-[250px]`}
                    paperLabel={twoPapers[1].paperLabel}
                />
            </div>
        </div>
    );
};

export default BillingPage;

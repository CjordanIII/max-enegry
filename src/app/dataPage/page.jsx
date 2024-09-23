"use client";

import Paper from "../../components/paper/Paper";
import Button from "../../components/button/Button"; // Importing Button component
import { payNow } from "../../components/button/buttonMetadata"; // Importing payNow metadata
import Footer from "../../components/footer/Footer";
import UsageChart from "../../components/echarts/UsageChart";

const billingPaper = [
    {
        paperLabel: (
            <div className="flex flex-col justify-center h-full text-left space-y-4 text-white">
                <div className="text-lg font-extrabold text-center mb-4">Billing</div> {/* Billing Label */}
                <div className="flex justify-between w-full px-4">
                    <p>Previous Balance</p>
                    <p><strong>$430.00</strong></p>
                </div>
                <hr className="w-full border-t-2 border-white" />
                <div className="flex justify-between w-full px-4">
                    <p className="mr-2">Last Payment Received</p>
                    <div className="text-right">
                        <p className="mb-1"><strong>$430.00</strong></p>
                        <p className="text-sm">Received 07/12/2024</p>
                    </div>
                </div>
                <hr className="w-full border-t-2 border-white" />
                <div className="flex justify-between w-full px-4">
                    <p>DATE DUE</p>
                    <p><strong>Sep 27 2024</strong></p>
                </div>
                <hr className="w-full border-t-2 border-white" />
                <div className="flex justify-between w-full px-4">
                    <p>AMOUNT DUE</p>
                    <p><strong>$540.00</strong></p>
                </div>
                <div className="flex justify-center w-full mt-6">
                    <Button {...payNow} />
                </div>
            </div>
        ),
        style: "bg-blue-900 p-10 rounded-lg shadow-lg w-full h-auto text-white font-bold text-center" // Adjusted style
    }
];

const usagePaper = [
    {
        paperLabel: (
            <div className="flex flex-col justify-center h-full text-left space-y-4 text-white">
                <div className="text-lg font-extrabold text-center mb-4">Usage</div>
                <div className="flex justify-between w-full px-4">
                    <UsageChart />
                </div>
            </div>
        ),
        style: "bg-blue-900 p-10 rounded-lg shadow-lg w-full h-auto text-white font-bold text-center"
    }
];

const smartPricingPaper = [
    {
        paperLabel: (
            <div className="flex flex-col justify-center h-full text-left space-y-4 text-white">
                <div className="text-lg font-extrabold text-center mb-4">Smart Pricing Plan</div>
                <div className="text-center">
                    <table className="w-full table-fixed border-collapse text-white">
                        <thead>
                            <tr>
                                <th className="w-1/2 text-left py-4 text-center">Time</th>
                                <th className="w-1/6 text-red-500">A</th>
                                <th className="w-1/6 text-yellow-300">B</th>
                                <th className="w-1/6 text-green-500">C</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-4">12 am to 10 am</td>
                                <td className="py-4">8.3¢</td>
                                <td className="py-4">7.2¢</td>
                                <td className="py-4">6.2¢</td>
                            </tr>
                            <tr>
                                <td className="py-4">10 am to 1 pm</td>
                                <td className="py-4">14.0¢</td>
                                <td className="py-4">11.1¢</td>
                                <td className="py-4">8.4¢</td>
                            </tr>
                            <tr>
                                <td className="py-4">1 pm to 7 pm</td>
                                <td className="py-4">50.3¢</td>
                                <td className="py-4">11.1¢</td>
                                <td className="py-4">8.4¢</td>
                            </tr>
                            <tr>
                                <td className="py-4">7 pm to 10 pm</td>
                                <td className="py-4">14.0¢</td>
                                <td className="py-4">11.1¢</td>
                                <td className="py-4">8.4¢</td>
                            </tr>
                            <tr>
                                <td className="py-4">10 pm to 12 am</td>
                                <td className="py-4">8.3¢</td>
                                <td className="py-4">7.2¢</td>
                                <td className="py-4">6.2¢</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        ),
        style: "bg-blue-900 p-10 rounded-lg shadow-lg w-full h-auto text-white font-bold text-center"
    }
]

const moreInfoPaper = [
    {
        paperLabel: (
            <div className="flex flex-col justify-center h-full text-left space-y-4 text-white">
                <div className="text-lg font-extrabold text-center mb-4">Maximizing Savings with Smart Pricing</div>
                <div className="space-y-6">
                    <p className="text-base">
                        Our Smart Pricing Plan helps you save on your electricity bill by using energy at off-peak times when prices are lower. Here are some tips:
                    </p>
                    <ul className="list-disc list-inside">
                        <li>Use large appliances like dishwashers, washing machines, and dryers during off-peak hours (10 pm to 10 am).</li>
                        <li>Charge electric vehicles overnight to take advantage of lower rates.</li>
                        <li>Schedule your heating or cooling systems to run during off-peak periods when possible.</li>
                        <li>Turn off or unplug electronic devices during peak pricing hours to avoid unnecessary charges.</li>
                        <li>Install a programmable thermostat to automate energy-saving measures.</li>
                        <li>Consider energy-efficient upgrades like LED lighting and smart appliances to further reduce your costs.</li>
                    </ul>
                    <div className="mt-6">
                        <h3 className="text-xl font-bold">Peak vs Off-Peak Pricing</h3>
                        <table className="w-full mt-4 text-white border-collapse">
                            <thead>
                                <tr>
                                    <th className="border-b border-white py-4 text-center">Time Period</th>
                                    <th className="border-b border-white py-4 text-center">Rate Type</th>
                                    <th className="border-b border-white py-4 text-center">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-4 text-center">10 pm - 10 am</td>
                                    <td className="text-center">Off-Peak</td>
                                    <td className="text-center">6.2¢ / kWh</td>
                                </tr>
                                <tr>
                                    <td className="py-4 text-center">10 am - 1 pm</td>
                                    <td className="text-center">Mid-Peak</td>
                                    <td className="text-center">8.4¢ / kWh</td>
                                </tr>
                                <tr>
                                    <td className="py-4 text-center">1 pm - 7 pm</td>
                                    <td className="text-center">Peak</td>
                                    <td className="text-center">50.3¢ / kWh</td>
                                </tr>
                                <tr>
                                    <td className="py-4 text-center">7 pm - 10 pm</td>
                                    <td className="text-center">Mid-Peak</td>
                                    <td className="text-center">14.0¢ / kWh</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        ),
        style: "bg-blue-900 p-10 rounded-lg shadow-lg text-white font-bold text-center"
    }
]


const DataPage = () => {
    return (
        <div className="flex flex-col min-h-screen space-y-8 pt-20  px-0"> {/* Added px-4 for better spacing on mobile */}
            <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-4 sm:space-y-0"> {/* Stack vertically on mobile, horizontally on larger screens */}
                {/* Billing Paper */}
                <Paper
                    style={`${billingPaper[0].style} max-w-[660px] w-full sm:w-[425px] h-auto sm:min-h-[350px]`}
                    paperLabel={billingPaper[0].paperLabel}
                />

                {/* Usage Paper */}
                <Paper
                    style={`${usagePaper[0].style} max-w-[660px] w-full sm:w-[425px] h-auto sm:min-h-[350px]`}
                    paperLabel={usagePaper[0].paperLabel}
                />

                {/* Smart Pricing Plan Paper */}
                <Paper
                    style={`${smartPricingPaper[0].style} max-w-[660px] w-full sm:w-[425px] h-auto sm:min-h-[350px]`}
                    paperLabel={smartPricingPaper[0].paperLabel}
                />
            </div>

            <div>
                {/* More Info Paper */}
                <Paper
                    style={`${moreInfoPaper[0].style} max-w-[1300px] w-full h-auto sm:min-h-[350px] mx-auto`}
                    paperLabel={moreInfoPaper[0].paperLabel}
                />
            </div>

            {/* Footer */}
            <div> 
                <Footer />
            </div>
        </div>
    );
};




export default DataPage;





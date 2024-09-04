"use client"
import Button from "../button/Button"
import {
    tryTaskeyFree,
    startToday,
    handleTryTaskeyFreeButtion,
    handleStartTodayButtion,
    svg
} from "../button/buttonMetadata"

const sectionThree = () => {
    return (
        <div className="bg-yellow-500 text-center text-white p-20">
            <h1 className="font-bold text-5xl mb-6">Try Dominion Energy today!</h1>
            <p className="mb-6">Get started for free. Add your whole team as your needs grow.</p>
            <div className="flex justify-center">
                <Button
                    style={tryTaskeyFree.style}
                    btnLabel={tryTaskeyFree.btnLabel}
                    handleButtion={handleTryTaskeyFreeButtion}
                    svg={svg}
                />
            </div>
            <div className="mt-10">
                <p className="mb-4">Have more questions? Help is available under Contact Us</p>
                <div className="flex justify-center gap-6">

                </div>
            </div>
            <footer className="bg-yellow-500 text-white p-10">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-20">
                        <div>
                            <img src={"./dom-white-logo.svg"} alt="Dominion Energy" className="h-8 mb-4" />
                            <p className="text-sm leading-relaxed">
                                whitespace was created for the new ways we live and work. We make a better workspace around the world.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2">Product</h3>
                            <ul className="text-sm">
                                <li>Overview</li>
                                <li>Pricing</li>
                                <li>Customer stories</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2">Resources</h3>
                            <ul className="text-sm">
                                <li>Blog</li>
                                <li>Guides & tutorials</li>
                                <li>Help center</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2">Company</h3>
                            <ul className="text-sm">
                                <li>About us</li>
                                <li>Careers</li>
                                <li>Media kit</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Try It Today</h3>
                        <p className="text-sm mb-4">Get started for free. Add your whole team as your needs grow.</p>
                        <div className="flex justify-center">
                            <Button
                                style={startToday.style}
                                btnLabel={startToday.btnLabel}
                                handleButtion={handleStartTodayButtion}
                                svg={svg}
                            />
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-300 pt-4 text-xs flex justify-between">
                    <div className="flex gap-4">
                        <p>English</p>
                        <p>Terms & privacy</p>
                        <p>Security</p>
                        <p>Status</p>
                        <p>©2021 Whitespace LLC.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default sectionThree;
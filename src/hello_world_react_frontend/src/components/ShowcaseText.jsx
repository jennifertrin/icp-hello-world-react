import React from 'react';
import { motion } from "framer-motion";
import logo from "../../logo2.svg";

const ShowcaseText = () => {
    return (
        <div>
            <motion.div
                className="bg-white text-black shadow-mg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <div className="p-8 space-y-6">
                        <p className="text-gray-600 leading-relaxed">
                            This guide shows how to get started developing on ICP quickly by deploying your first 'Hello, world!' smart contract.
                        </p>
                        <h3 className="text-xl font-semibold">Key Features:</h3>
                        <ul className="space-y-3">
                            {[
                                "A React frontend and Motoko-based backend fully deployed on ICP",
                                "A query function that accepts a name",
                                "A frontend that displays the query function return",
                            ].map((feature, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-center space-x-3 text-gray-600"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>{feature}</span>
                                </motion.li>
                            ))}
                        </ul>
                        <img src={logo} alt="On-chain logo" className="logo w-64 h-24" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ShowcaseText;
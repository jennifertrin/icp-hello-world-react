import React, { useState } from 'react';
import { motion } from "framer-motion";
import ShowcaseText from "./ShowcaseText";
import { hello_world_react_backend } from 'declarations/hello_world_react_backend';

const NameInput = () => {
    const [greeting, setGreeting] = useState(null);
    const [name, setName] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();
        hello_world_react_backend.greet(name).then((newGreeting) => {
            setGreeting(newGreeting);
        });
        return false;
    }

    function handleGoBack() {
        setName('');
        setGreeting(null);
    }

    return (
        <div className="bg-dark-infinite h-full w-full flex text-white justify-center items-center rounded antialiased font-sans py-8 px-4">
            <motion.div
                className={"relative w-full max-w-md transition-transform duration-500"}
                style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {!greeting ?
                    <Card className="w-full h-full relative shadow-2xl shadow-blue-500/20 duration-500 transform">
                        <form onSubmit={handleSubmit} className="rounded-[20px] p-6 bg-infinite">
                            <div className="bg-meteorite shadow-xl mb-4 p-4 flex items-center">
                                <h1 className="text-white mr-2 text-xl font-bold">Enter Your Name</h1>
                            </div>
                            <p className="mb-4 text-gray-300">Please enter your name below and click submit.</p>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e?.target?.value)}
                                placeholder="Enter your name"
                                className="w-full px-3 py-2 mb-4 placeholder-gray-400 rounded-md text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent"
                                required
                            />
                            <button type="submit" className="mt-2 w-full px-3 py-4 text-white bg-picton-blue rounded-md hover:bg-picton-blue focus:outline-none focus:ring-2 focus:ring-picton-blue focus:ring-opacity-50 transition duration-300 ease-in-out font-semibold shadow-lg hover:shadow-xl hover:shadow-picton-blue/30">
                                Submit
                            </button>
                        </form>
                    </Card> :
                    <Card className="rounded-xl shadow-2xl shadow-blue-500/20 w-full h-full transition-opacity duration-500 transform backface-hidden">
                        <div className="rounded-[20px] py-12 bg-infinite px-4 h-full w-full flex flex-col justify-center items-center">
                            <h2 className="text-3xl font-bold text-white mb-4">{greeting}</h2>
                            <p className="mb-6 text-gray-300">Thank you for submitting your name.</p>
                            <button onClick={handleGoBack} className="px-4 py-2 bg-picton-blue rounded-md focus:outline-none focus:ring-2 focus:ring-picton-blue focus:ring-opacity-50 hover:bg-picton-blue transition duration-300 ease-in-out font-semibold shadow-lg hover:shadow-xl hover:shadow-picton-blue/30">
                                Go Back
                            </button>
                        </div>
                    </Card>}
            </motion.div>
        </div >
    );
};

const Card = ({ greeting, className, children }) => (
    <div className={`${className} ${greeting ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'}`}>
        {children}
    </div>
);


const ExampleForm = () => {
    return (
        <div className="max-w-4xl mx-auto my-12">
            <h1 className="text-3xl font-bold mb-6">Hello, world! Example</h1>
            <div className="grid md:grid-cols-2 gap-8 h-[500px]">
                <div className="p-4 flex flex-col overflow-hidden border border-gray-200">
                    <div className="flex-grow overflow-auto ">
                        <ShowcaseText />
                    </div>
                </div>
                <div className="bg-gray-200 rounded-lg p-8 flex flex-col overflow-hidden">
                    <h2 className="text-2xl font-semibold mb-6">Live Demo</h2>
                    <div className="flex-grow overflow-auto">
                        <NameInput />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ExampleForm;
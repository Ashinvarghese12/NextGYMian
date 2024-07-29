'use client';
import React, { useState } from "react";

const trainers = [
    {
        name: "John Doe",
        image: "https://as2.ftcdn.net/v2/jpg/08/35/36/43/1000_F_835364338_sHxTOSopb428fV3RikFv3nzYTtpa2Phm.jpg",
        description: "Certified personal trainer specializing in strength training.",
        experience: "10+ years of experience in fitness coaching."
    },
    {
        name: "Jane Smith",
        image: "https://as2.ftcdn.net/v2/jpg/01/35/03/35/1000_F_135033526_AqUilEdcR4GDkt44JZA943dZIC1ev8sw.jpg",
        description: "Fitness enthusiast with a passion for yoga and mindfulness.",
        experience: "5+ years of experience teaching yoga and meditation."
    },
    {
        name: "Alex Johnson",
        image: "https://as2.ftcdn.net/v2/jpg/06/08/69/31/1000_F_608693114_530lhyaKzf7X9j3KfYYW9AWbPAsfTU6t.jpg",
        description: "Former athlete turned professional fitness coach.",
        experience: "7+ years of experience in athletic training and conditioning."
    },
    {
        name: "Emily Brown",
        image: "https://as1.ftcdn.net/v2/jpg/06/35/17/52/1000_F_635175286_Ve3RnNYKcHmWsHRNNhoWq4c38pLpZapu.jpg",
        description: "Specializes in nutrition and lifestyle coaching.",
        experience: "Nutritionist with 8+ years of experience in diet planning."
    },
    {
        name: "Michael Davis",
        image: "https://as2.ftcdn.net/v2/jpg/04/01/64/09/1000_F_401640938_LxWGDdVpQtsMAvcxSL3KZfpgxZU2HjRS.jpg",
        description: "Physical therapist focusing on injury rehabilitation.",
        experience: "15+ years of experience in physical therapy and rehabilitation."
    },
    {
        name: "Sarah Wilson",
        image: "https://as2.ftcdn.net/v2/jpg/05/65/00/31/1000_F_565003133_vitIL7nDx4ySwURSFzyEsCBn7LbxQgB8.jpg",
        description: "Dedicated to promoting holistic wellness through fitness.",
        experience: "Fitness coach with 6+ years of experience in holistic health."
    },
    {
        name: "Daniel White",
        image: "https://as2.ftcdn.net/v2/jpg/05/45/06/25/1000_F_545062574_b6LZ6PKkZm7r4wVBFpcQPA1j33VauEZB.jpg",
        description: "Expert in functional training and corrective exercises.",
        experience: "10+ years of experience in functional fitness training."
    },
    {
        name: "Olivia Green",
        image: "https://as1.ftcdn.net/v2/jpg/07/32/65/04/1000_F_732650497_jXQjmlrrB6qT3nZrexd0WrnmeKejmxSc.jpg",
        description: "Strength and conditioning coach for professional athletes.",
        experience: "Former athlete with 12+ years of coaching experience."
    }
];

export default function TrainersPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredTrainers = trainers.filter((trainer) =>
        trainer.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex flex-col items-center pt-10 px-10 pb-10 ">
            <div className="flex flex-row justify-between items-center w-full mb-8">
                <h1 className="text-4xl text-white font-serif font-bold">Meet Our Trainers</h1>
                <input
                    type="text"
                    placeholder="Search trainers by name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="ml-4 p-2 rounded-lg border border-gray-400"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredTrainers.map((trainer, index) => (
                    <div key={index} className="bg-white border rounded-lg shadow-lg p-6">
                        <div className="flex justify-center">
                            <img
                                src={trainer.image}
                                alt={trainer.name}
                                className="w-48 h-48 object-cover rounded-full mb-4 hover:scale-110"
                            />
                        </div>
                        <h2 className="text-xl font-bold mb-2">{trainer.name}</h2>
                        <p className="text-gray-600 mb-4">{trainer.description}</p>
                        <p className="text-sm text-gray-500 mb-4">{trainer.experience}</p>
                        <div className="flex justify-center">
                            <button className="bg-black text-white py-2 px-4 rounded hover:scale-105">
                                Contact
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

"use client";
import Link from "next/link";
import React, { useState } from "react";

const programs = [
  {
    name: 'Beginner Bootcamp',
    duration: '4 weeks',
    cost: '$99',
    description: 'A perfect start for fitness enthusiasts who are new to working out.',
    exercises: ['Push-ups', 'Squats', 'Planks']
  },
  {
    name: 'Intermediate Intensive',
    duration: '8 weeks',
    cost: '$199',
    description: 'Step up your game with this intensive program designed for those with some experience.',
    exercises: ['Bench Press', 'Deadlift', 'Lunges']
  },
  {
    name: 'Advanced Athlete',
    duration: '12 weeks',
    cost: '$299',
    description: 'Push your limits with advanced workouts for seasoned athletes.',
    exercises: ['Snatch', 'Clean and Jerk', 'Pull-ups']
  },
  {
    name: 'Total Transformation',
    duration: '16 weeks',
    cost: '$399',
    description: 'Comprehensive program aimed at transforming your body and fitness level.',
    exercises: ['Burpees', 'Mountain Climbers', 'Running']
  },
  {
    name: 'Express Fit',
    duration: '2 weeks',
    cost: '$49',
    description: 'Quick and effective workout plan for those with a busy schedule.',
    exercises: ['Jump Rope', 'Push-ups', 'High Knees']
  },
  {
    name: 'Strength & Conditioning',
    duration: '10 weeks',
    cost: '$249',
    description: 'Focused on building strength and improving overall conditioning.',
    exercises: ['Squats', 'Deadlift', 'Bench Press']
  },
  {
    name: 'Cardio Blast',
    duration: '6 weeks',
    cost: '$149',
    description: 'High-intensity cardio program to improve endurance and burn calories.',
    exercises: ['Running', 'Cycling', 'Rowing']
  },
  {
    name: 'Flexibility & Mobility',
    duration: '5 weeks',
    cost: '$129',
    description: 'Enhance your flexibility and mobility with targeted exercises.',
    exercises: ['Yoga', 'Stretching', 'Pilates']
  },
  {
    name: 'Core Strengthening',
    duration: '3 weeks',
    cost: '$79',
    description: 'Focuses on improving core muscles for better stability and posture.',
    exercises: ['Plank Variations', 'Russian Twists', 'Leg Raises']
  },
  {
    name: 'Endurance Builder',
    duration: '8 weeks',
    cost: '$179',
    description: 'Designed to enhance endurance and stamina through progressive training.',
    exercises: ['Long Distance Running', 'Swimming', 'Circuit Training']
  },
  {
    name: 'Agility Training',
    duration: '6 weeks',
    cost: '$129',
    description: 'Improves agility and speed with dynamic exercises and drills.',
    exercises: ['Agility Ladder Drills', 'Sprint Intervals', 'Jumping Drills']
  },
  {
    name: 'Mind-Body Balance',
    duration: '4 weeks',
    cost: '$99',
    description: 'Promotes holistic wellness through a blend of yoga, meditation, and mindfulness.',
    exercises: ['Mindful Yoga Flow', 'Breathing Techniques', 'Guided Meditation']
  }
];

export default function ProgramsPage() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const handleViewMore = (program) => {
    setSelectedProgram(program);
  };

  const handleClose = () => {
    setSelectedProgram(null);
  };

  return (
    <div className="flex flex-col items-center pb-10 pt-7 px-10 z-0">
      <h1 className="text-4xl font-serif text-white font-bold mb-8 text-center">
        "Achieve Your Goals with Our Tailored Training Programs"
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {programs.map((program, index) => (
          <div key={index} className="relative p-4 bg-white border rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold font-serif text-center mb-2">{program.name}</h2>
            <p className="text-3xl font-medium font-serif text-center mb-2">{program.duration}</p>
            <p className="text-3xl font-medium font-mono text-center mb-4">{program.cost}</p>
            <p className="text-center">{program.description}</p>
            <div className="flex justify-center pt-5">
              <button
                className="border p-3 rounded-md hover:scale-110 bg-black text-white"
                onClick={() => handleViewMore(program)}
              >
                View More &gt;
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProgram && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700 text-4xl"
              onClick={handleClose}
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-4">{selectedProgram.name}</h2>
            <p className="mb-4">{selectedProgram.description}</p>
            <ul className="list-disc list-inside mb-4">
              {selectedProgram.exercises.map((exercise, index) => (
                <li key={index}>{exercise}</li>
              ))}
            </ul>
            <div className="flex justify-center">
              <Link href={`/register?name=${encodeURIComponent(selectedProgram.name)}&cost=${encodeURIComponent(selectedProgram.cost)}&duration=${encodeURIComponent(selectedProgram.duration)}`}>
                <button className="border p-3 rounded-md hover:scale-110 bg-black text-white">
                  Register Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const cost = searchParams.get('cost');
  const duration = searchParams.get('duration');

  const [userData, setUserData] = useState({
    userName: '',
    height: '',
    weight: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and payment logic here
    console.log('Form submitted', userData);
  };

  return (
    <div className="flex flex-col items-center pt-12 px-10 z-0  pb-14">
      <h1 className="text-5xl text-white font-bold font-serif  mb-8 text-center">Register for {name}</h1>
      <p className="text-3xl text-white font-mono mb-4">Price: {cost}</p>
      <p className="text-2xl text-white font-serif mb-8">Duration: {duration}</p>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold  mb-2" htmlFor="userName">
            Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userData.userName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="height">
            Height (cm)
          </label>
          <input
            type="number"
            id="height"
            name="height"
            value={userData.height}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
            Weight (kg)
          </label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={userData.weight}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={userData.age}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex justify-center pt-6">
          <button type="submit" className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700">
            Make Payment
          </button>
        </div>
      </form>
    </div>
  );
}

'use client';
import { useState } from 'react';

export default function AboutUsPage() {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({
        name: '',
        content: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setReviews([...reviews, newReview]);
        setNewReview({ name: '', content: '' });
    };

    return (
        <>
            <div className='text-white text-center text-4xl font-serif pt-10 pb-10 space-y-2'>
                <p>Welcome to <span className='text-6xl text-amber-500'>NextGYMian</span>, your ultimate fitness destination! Our state-of-the-art gym is designed <br></br> 
                to help you achieve your fitness goals, whether you're a <span className='text-6xl text-amber-500'> beginner or a seasoned athlete</span>. Our<br></br>  
                team of certified trainers and instructors are dedicated to providing a supportive and motivating <br></br> 
                environment that will help you push your limits and reach new heights.</p>

                <p>At <span className='text-6xl text-amber-500'>NextGYMian</span>, we believe that fitness is a journey, not a destination. That's why we offer a<br></br>  
                wide range of group classes, personal training sessions, and cutting-edge equipment to help you stay on track. <br></br> 
                <span className='text-6xl text-amber-500'>Our goal is to empower you to take control of your health and wellness</span>, and to provide you with the tools <br></br> 
                and resources you need to succeed.</p>
            </div>
            <div className="container mx-auto p-4 pt-16 flex">
                <div className="w-1/4 bg-gray-200 p-5 rounded h-80 ">
                    <h2 className="text-lg mb-4">Leave a Review</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <label className="mb-2">
                            Name:
                            <input
                                type="text"
                                value={newReview.name}
                                onChange={(event) =>
                                    setNewReview({ ...newReview, name: event.target.value })
                                }
                                placeholder="Your name"
                                className="w-full p-2"
                            />
                        </label>
                        <label className="mb-2">
                            Review:
                            <textarea
                                value={newReview.content}
                                onChange={(event) =>
                                    setNewReview({ ...newReview, content: event.target.value })
                                }
                                placeholder="Your review"
                                className="w-full p-2"
                            />
                        </label>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                    </form>
                </div>
                <div className="w-3/4 p-4">
                    <h2 className="text-lg mb-4">Reviews</h2>
                    <div className="flex flex-wrap -mx-4">
                        {reviews.map((review, index) => (
                            <div key={index} className="w-full md:w-1/2 xl:w-1/3 p-4">
                                <div className="bg-white border border-gray-200 shadow-md rounded p-4">
                                    <div className="flex justify-between mb-2">
                                        <h3 className="text-2xl text-black">{review.name}</h3>
                                        <span className="text-gray-400 text-sm">{/* add a rating system here, e.g. */} 4.5/5</span>
                                    </div>
                                    <p className="text-black">{review.content}</p>
                                    <hr className="my-2" />
                                    <p className="text-black text-sm">Posted on {/* add a date here */} March 12, 2023</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
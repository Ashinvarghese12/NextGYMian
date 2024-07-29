import React from "react";

const exercises = [
    {
        name: 'Push-up',
        image: 'https://res.cloudinary.com/peloton-cycle/image/fetch/f_auto,c_limit,w_1080,q_90/https://images.ctfassets.net/6ilvqec50fal/JdeBsAsNI2XepyM4IDL1U/ef2c96e26f7c3af5bce6db428cd1237f/Screenshot_2024-03-21_at_12.36.05_PM.png',
        description: 'A push-up is a common calisthenics exercise beginning from the prone position.'
    },
    {
        name: 'Squat',
        image: 'https://static.india.com/wp-content/uploads/2017/04/Squats1.jpg?impolicy=Medium_Widthonly&w=700',
        description: 'A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up.'
    },
    {
        name: 'Lunge',
        image: 'https://hips.hearstapps.com/hmg-prod/images/muscular-man-training-his-legs-doing-lunges-with-royalty-free-image-1677586874.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
        description: 'A lunge is a single-leg bodyweight exercise that works your hips, glutes, quads, hamstrings, and core.'
    },
    {
        name: 'Plank',
        image: 'https://evolve-mma.com/wp-content/uploads/2021/10/plank-exercises-800x450.jpg',
        description: 'A plank is an isometric core exercise that involves maintaining a position similar to a push-up for the maximum possible time.'
    },
    {
        name: 'Bench Press',
        image: 'https://www.dmarge.com/wp-content/uploads/2022/01/how-to-bench-press-1200x800.jpg',
        description: 'The bench press is an upper-body strength training exercise that consists of pressing a weight upwards from a supine position.'
    },
    {
        name: 'Mountain Climber',
        image: 'https://barbend.com/wp-content/uploads/2023/07/mountain-climber-barbend.com_.jpg',
        description: 'Mountain climbers are a bodyweight floor exercise designed to work several muscle groups.'
    },
    {
        name: 'Bicycle Crunch',
        image: 'https://t3.ftcdn.net/jpg/04/80/37/00/240_F_480370069_lsWwtk3ikP4a9f7NVPjVtGIrkcm3Dp1u.jpg',
        description: 'The bicycle crunch is an effective ab exercise targeting the rectus abdominis and the obliques.'
    },
    {
        name: 'Leg Raise',
        image: 'https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTk3MzIyNDgyODQyMDg0NjI5/legraises.webp',
        description: 'A leg raise is an abdominal exercise that strengthens the lower abs and hip flexors.'
    },
    {
        name: 'Deadlift',
        image: 'https://optimalhealth.fit/df_media/W1siZiIsIjIwMjQvMDIvMjgvMDIvMzgvMDYvZGNjOTYzZmItZTFhMS00NTA4LTk5NDktYjY4MDQ2YTRlYzllL2RlYWRsaWZ0LWZvcm0tMzAweDIzNC5qcGciXSxbInAiLCJ0aHVtYiIsIjE1MDB4Nzg0XHUwMDNlIl1d/deadlift-form-300x234.jpg?sha=72073db444c66ff2',
        description: 'The deadlift is a weight training exercise where the loaded barbell or bar is lifted off the ground to the level of the hips, and then lowered back to the ground.'
    },
    {
        name: 'Pull-up',
        image: 'https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2015/08/bb_pull-ups-regular_web.jpg',
        description: 'A pull-up is an upper-body strength exercise. The pull-up is a closed-chain movement where the body is suspended by the hands and pulls up.'
    },
    {
        name: 'Russian Twist',
        image: 'https://cdn.mos.cms.futurecdn.net/gnTkzdpDtoMRUMa8mqmSfK-650-80.jpg.webp',
        description: 'The Russian twist is a type of exercise that is used to work the abdominal muscles by performing a twisting motion on the torso.'
    },
    {
        name: 'Jumping Jack',
        image: 'https://experiencelife.lifetime.life/wp-content/uploads/2021/08/bid-jumping-jack.jpg',
        description: 'A jumping jack is a physical jumping exercise performed by jumping to a position with the legs spread wide and the hands touching overhead, then returning to a position with the feet together and the arms at the sides.'
    }
];


export default function WorkOutPage() {
    return (
        <div className="flex flex-col items-center pt-10 z-0 pb-10 ">
            <h1 className="text-4xl text-white font-semibold font-serif mb-8 text-center">
                "Push Yourself, Because No One Else is Going to Do It for You"
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {exercises.map((exercise, index) => (
                    <div key={index} className="relative  pb-10 bg-white border rounded-lg shadow-lg hover:bg-gray-100">
                        {exercise.image && (
                            <img
                                src={exercise.image}
                                alt={exercise.name}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                        )}
                        <h2 className="text-2xl font-bold text-center">{exercise.name}</h2>
                        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-85 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <p className="p-4 text-center">{exercise.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

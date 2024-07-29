'use client';
import logo from '@/public/image/logo.jpg'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MainHeaderPage() {
    const path = usePathname();
    

    return (
        <nav className='sticky top-0 z-10 bg-black'>
            <div className="flex justify-between">
                <div className='flex gap-2 pt-3 ps-10 '>
                    <img
                        src={logo.src}
                        alt="Description of image"
                        width={100}
                        height={100}
                        className='rounded-full hover:scale-110'
                    />
                    <p className="text-4xl pt-6 font-semibold text-white font-serif">NextGYMian</p>
                </div>
                <div>
                    <ul className='flex gap-10 pt-8 pe-10 text-lg text-white  font-serif'>
                        <li className='pt-3'>
                            <Link href='/' className={path.startsWith('/') ? 'font-semibold text-2xl' : undefined} end>
                                Home
                            </Link>
                        </li>
                        <li className='pt-3'>
                            <Link href='/workout' className={path.startsWith('/workout') ? 'font-semibold text-2xl' : undefined}>
                                Workouts
                            </Link>
                        </li>
                        <li className='pt-3'>
                            <Link href='/programs' className={path.startsWith('/programs') ? 'font-semibold text-2xl' : undefined}>
                                Training-Plan
                            </Link>
                        </li>
                        <li className='pt-3'>
                            <Link href='/trainers' className={path.startsWith('/trainers') ? 'font-semibold text-2xl' : undefined}>
                                Trainers
                            </Link>
                        </li>
                        <li className='pt-3'>
                            <Link href='/aboutUs' className={path.startsWith('/aboutUs') ? 'font-semibold text-2xl' : undefined}>
                                About-Us
                            </Link>
                        </li>
                        <li className='pt-3'>
                            <Link href='/contact' className={path.startsWith('/contact') ? 'font-semibold text-2xl' : undefined}>
                                Contact
                            </Link>
                        </li>
                        <li className='bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg border border-gray-300 cursor-pointer'>
                            <Link href=''>LogOut</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
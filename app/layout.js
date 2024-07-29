import { Inter } from 'next/font/google';
import './globals.css';
import MainHeaderPage from './main-header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NextGYMian',
  description: 'Generated by Ashin',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen bg-black">
          <MainHeaderPage />
          {children}
      </body>
    </html>
  );
}
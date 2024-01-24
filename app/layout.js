import { Inter } from 'next/font/google';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Beanibazar Govt. College',
  description: 'Beanibazar Govt. College',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-primary">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

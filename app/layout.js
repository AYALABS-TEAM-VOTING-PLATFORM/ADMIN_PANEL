
import '../styles/globals.css'
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Sidenav from '@/components/Sidenav';

const inter = Inter({
    weight: '400',
    subsets: ['latin'],
})


export const metadata = {
    title: 'Dashboard',
    description: 'A simple dashboard',
}



export default function RootLayout({ children }) {
    return (
      //   <html lang="en">
      //   <body className={inter.className}>
      //     <div className="flex">
      //       <div className="flex relative">
      //         <Sidenav />
      //       </div>
      //       <div className="flex ml-[17%] sm:ml-0 md:ml-0 w-full">
      //         <div className="flex-1">
      //           <Navbar />
      //           <div className="px-8 py-6 h-[calc(100vh - 110px)]">{children}</div>
      //         </div>
      //       </div>
      //     </div>
      // </body>
      // </html>

      <html lang="en">
  <body className={inter.className}>
    <div className="flex">
      <div className="flex relative">
        <Sidenav /> {/* Replace YourSidebarComponent with your actual component */}
      </div>
      <div className="flex ml-[17%] sm:ml-0 md:ml-0 w-full">
        <div className="flex-1">
          <Navbar /> {/* Replace YourNavComponent with your actual component */}
          <div className="px-8 py-6 h-[calc(100vh - 110px)]">{children}</div>
        </div>
      </div>
    </div>
  </body>
</html>

    )
}
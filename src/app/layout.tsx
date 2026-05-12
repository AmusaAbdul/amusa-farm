"use client";
import "./globals.css";
import Sidebar from "./sidebar/sidebar";
import Footer from "./footer/Footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


 
  return ( 
    <html lang="en">
      <body>
        <div className="h-screen md:hidden">
          <div className="grid  w-full">
            <div className="text-black ">
              <Sidebar />
              {children}
            </div>
            <div className="bg-green-500 flex justify-center items-center h-12  text-white  italic bg-[url(https://media.istockphoto.com/id/1154958041/photo/taking-care-of-the-crop-aerial-view-of-a-tractor-fertilizing-a-cultivated-agricultural-field.jpg?s=2048x2048&w=is&k=20&c=H0a7ngBV9Bu8Oq9SMWBnLxluAOVD7_-hBra_zrNRzcg=)] bg-cover bg-center">
              <Footer />
            </div>
          </div>
        </div>

        <div className="hidden md:flex ">
          <Sidebar />
          <div className="grid  w-full">
            <div className="text-black ">
              {children}
            </div>
            <div className="bg-green-500 flex justify-center items-center h-12 text-white italic bg-[url(https://media.istockphoto.com/id/1154958041/photo/taking-care-of-the-crop-aerial-view-of-a-tractor-fertilizing-a-cultivated-agricultural-field.jpg?s=2048x2048&w=is&k=20&c=H0a7ngBV9Bu8Oq9SMWBnLxluAOVD7_-hBra_zrNRzcg=)] bg-cover bg-center ">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}



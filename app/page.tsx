import Image from "next/image";
import "./globals.css"
import logoHome from '../public/logoHome2.jpg';



export default function Home() {
  return (
    <main className="center-container">
      <h1 className="mainTitle">This is the home page.</h1>
      <Image 
        src={logoHome} 
        alt="Логотип" 
        width={300} 
        height={300}
      />
    </main>
  );
}


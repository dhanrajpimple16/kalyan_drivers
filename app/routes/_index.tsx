import type { MetaFunction } from "@remix-run/node";
import AboutUs from "~/component/AboutUs";
import Footer from "~/component/Footer";
import Home from "~/component/Home";
import Location from "~/component/Location";
import Navbar from "~/component/Navbar";
import Services from "~/component/Services";

import styles from "~/Style/Home.css?url";


export default function Index() {
  return (
    <div>
     <Navbar/> 
    <Home/>
    <AboutUs/>
    <Location/>
    <Services/>
    <Footer/>
    </div>
  );
}



export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

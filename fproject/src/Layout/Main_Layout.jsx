import {Outlet } from "react-router-dom";
 import Navbar from "../components/Navbar"; 
 import MainNavbar from "../components/MainNavbar"; 
 import Footer from "../components/Footer";  
 import ButtonBack from "../components/ButtonBack"; 
 import { ProductProvider } from "../Context/ProductContext"; 
 function Main_Layout() { 
  return ( 
  <ProductProvider> 
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}> 

      <Navbar />
       <MainNavbar /> 

       <div style={{ flex: 1 }}>

         <Outlet></Outlet>
          </div> 
          <Footer /> 
          <ButtonBack /> 
          </div> 
           </ProductProvider> 
           );
           }
export default Main_Layout;

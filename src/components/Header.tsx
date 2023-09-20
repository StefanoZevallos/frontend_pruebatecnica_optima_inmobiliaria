"use client";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import ListNavBar from "./ListNavBar";
import { useRecoilState } from "recoil";
import { cartState } from "@/atoms/cartState";
import { loginState } from "@/atoms/loginState"


const renderIconsDer = () => {
  const [cartItem] = useRecoilState(cartState);
  const [showRedDiv, setShowRedDiv] = useState(false);
  const [login, setLogin] = useRecoilState(loginState)

  const toggleRedDiv = () => {
    setShowRedDiv(!showRedDiv);
  };

  const LogoutButton = () => {
    localStorage.removeItem("token");
    setLogin("Mi cuenta")
  }

  return (
    <>
      {/* <Link href={"/login"} className="flex space-x-1.5"> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
      {/* MI CUENTA  */}
      <div onClick={toggleRedDiv} className="flex space-x-1.5">
        <p className="text-white">{login}</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      {/* DROP DOWN CON CONDICIONALES */}
      {showRedDiv ? (
        <div
          className="bg-gradient-to-t from-[#0F2027] bg-[#2C5364]  w-[145px] h-[100px] absolute top-[76px] flex flex-col justify-center items-center text-white"
        >
          {login !== "Mi cuenta" ? (
            <>
              <p className="font-bold">¡Hola!, {login}</p>

            
              <Link onClick={()=> LogoutButton()} href={'/'}>
              <p className="text-red-500 font-bold">Cerrar Sesión</p>
              </Link>
      
            </>
          ) : (
            <>
            <Link href={'/login'}>
            <p>Iniciar Sesión</p>
            </Link>
            

            <Link href={'/register'}>
            <p>Registrate</p>
            </Link>
           </>
          )}
        </div>
      ) : null}
      {/* </Link> */}
     
    </>
  );
};

const Header = () => {
  /* UseState -> used for change the icons of Hamburguer menu and Close */
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="sticky top-0 z-10">
      <nav className="w-full px-6 py-2 bg-gradient-to-t from-[#0F2027] bg-[#2C5364]">
        <div className="justify-between lg:w-full lg:items-center lg:flex lg:px-10">
          {/* First part */}
          <>
            {/* Hamburguer menu for mobile*/}
            <div className="flex items-center justify-between py-1.5 lg:py-0">
            <Link href={"/"}>
                <h1 className="hidden lg:block text-2xl text-[#50C2D8] font-bold">
                  Optima<span className="text-[#8AD2E1] font-bold">Inmobiliaria</span>
                </h1>
               
              </Link>
              <div className="flex space-x-4 lg:hidden">{renderIconsDer()}</div>
            </div>
          </>
          {/* Second part */}
          <div
            className={`flex-1 justify-self-center pb-10 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? "p-12 lg:p-0 block" : "hidden"
              }`}
          >
            <ul className="h-screen lg:h-auto items-center justify-center lg:flex ">
              <ListNavBar
                nameSection="---------------"
                onClickReturn={()=>{"NADA"}}
                url="/"
              />

              <ListNavBar
                nameSection="IR AL INICIO"
                onClickReturn={()=>{"NADA"}}
                url="/"
              />

              <ListNavBar
                nameSection="---------------"
                onClickReturn={()=>{"NADA"}}
                url="/"
              />
            </ul>
          </div>
          <div className="hidden lg:flex lg:space-x-4">{renderIconsDer()}</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

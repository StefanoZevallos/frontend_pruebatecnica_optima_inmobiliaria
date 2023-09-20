"use client"
import Maps from '@/components/Maps';
import Product from '@/components/Product';
import { useEffect, useState } from 'react'
import BtnForm from "@/components/BtnForm";
import Hero from "@/components/Hero";
import React from 'react';
import SectionInstructions from '@/components/SectionInstructions';
import Carousel from '@/components/Carousel';



export default function Home() {

  /* characteres son los productos obtenidos de la api, tiene como valor iniciar "[]"
  y setCharacters servirá para actualizar el estado de characters */



  return (

    <main className="flex w-full flex-col items-center justify-between h-[810px] bg-blue-900 ">
      <Hero
        titulo="Bienvenido al Home" 
       
        button={<BtnForm label="Ir al Login" labelColor="white" ruta='/login'/>}
      />
    </main>

  );
}

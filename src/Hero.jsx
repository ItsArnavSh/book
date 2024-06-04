import logo from "./assets/Items/logo.png"
import talk from "./assets/Items/Group5.png"
import started from "./assets/g3.svg"
import { useState } from "react";
import { useEffect } from "react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  let contents = ["Product","Pricing","Industry","Customer Stories","About","Blog"];
  let writer = contents.map(x => (<a className=" p-3 text-sm andika-regular">{x}</a>))
  
import cover from "./assets/Items/img.png"
function Menu()
{
    return(
        <>
        <Drawer>
  <DrawerTrigger><img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png" className=" ml-3 mt-9 h-[30px]"/></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Menu</DrawerTitle>
      <DrawerDescription>
        <div className="text-black flex flex-col">{writer}</div>
        
      </DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      
      <DrawerClose>
        
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

        </>
    )
}
function Logo()
{
    return(
        <>
         <div className="flex flex-row">
            <img src = {logo} alt = "Logo of CleverBooks" className = "w-[100px]"></img>
            <p className="pt-8 andika-bold text-white text-3xl">CleverBooks</p>
            <div className="md:hidden block">
                <Menu />
            </div>
         </div>
        </>
    )
}
function Contents()
{


   
    return(
        <>
        <div className="text-center  md:flex-row flex-col md:flex h-[40px] hidden text-white">
            {writer}
        </div>
        </>
    )
}
function Login()
{
    return(
        <div className = " md:flex md:flex-row h-[40px] hidden">
            <p className="text-gradient p-2">Login</p>
            <img src = {talk}></img>
        </div>
    )
}
function Heading()
{
    return (
        <div className="flex flex-col md:flex-row justify-between w-full items-center">
      <Logo className = ""/>
      <Contents  className = ""/>
      <Login />

      </div>
    )
}

function Title()
{
    return(
    <div className="w-[50%] flex flex-col ">
    <p className="text-white md:text-6xl text-2xl andika-bold mt-10 text-center md:text-left">Collect, Connect<br />
    and <span className="gradient-text">Comprehend</span></p>
    <div className="h-[50px]"></div>
    <p className="text-white text-sm andika-regular" >Empower Your Learning Journey with CleverBooks. Unlock the tools you need for seamless learning: Effortless note-taking, intuitive idea connections, Dynamic flashcard creation, and AI-guided summaries.</p>
    <div className="h-[50px] "></div>
    <img src={started} className="w-full md:w-[50%]"></img>
    </div>)
}
function HeroMain()
{
    return(
    <div className="flex md:flex-row flex-col w-full items-center justify-center">
    <Title  />
    <img src = {cover}></img>
    </div>
    )

}
function Divider()
{
    return(
        
        <>
                <div className="custom-shape-divider-bottom-1717495877 hidden md:block ">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className="shape-fill"></path>
    </svg>
    </div>
        </>
    )
}
export default function Hero() {
    return(
        <div className="flex flex-col md:h-lvh herosec  p-0 m-0 md:border-white md:border-2">
        <Heading />
        <p className="text-center"></p>
        <HeroMain />
        <Divider />
      </div>
    )}
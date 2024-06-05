
import Problems from './Problems'
import Reviews from './Reviews'
import Uses from './Uses'
import Key from './Key'
import CTA from './CTA'
import Footer from './Footer'
import { useRef } from 'react'
import logo from "./assets/Items/logo.png"
import talk from "./assets/Items/Group5.png"
import started from "./assets/g3.svg"
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

  let contents = [["Our Solutions",0],["Stats",1], ["Reviews",2],["Main Features",3],["Get Started",4]];
  let refs=['O',"S","R","M","G"];
  let writer = contents.map(x => (<button className=" p-3 text-xl andika-regular hover:text-3xl transition-all" onClick={()=>{refs[x[1]].current?.scrollIntoView()}} >{x[0]}</button>))

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
        <div className="flex flex-row justify-between items-center p-4 border-b border-gray-200">
            <div className="flex items-center">
                <img src={logo} alt="Logo of CleverBooks" className="w-[100px]" />
                <p className="andika-bold text-white text-5xl cleverbooks ml-4 md:ml-0">CleverBooks</p>
            </div>
            <div className='w-full'></div>
            <div className="md:hidden block pb-5">
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
        <div className = " md:flex md:flex-row h-[50px] hidden mr-10 ">
            <button className="gradient-text p-2 andika-bold text-xl hover:text-white  transition-all">Login</button>
            <button><img src = {talk} className=''></img></button>
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
    <div className="md:w-[50%] flex flex-col items-left">
    <p className="text-white md:text-6xl text-5xl andika-bold mt-10  md:text-left">Collect, Connect<br />
    and <span className="gradient-text">Comprehend</span></p>
    <div className="h-[50px]"></div>
    <p className="text-white text-xl andika-regular w-[80%] text-left" >Empower Your Learning Journey with CleverBooks. Unlock the tools you need for seamless learning: Effortless note-taking, intuitive idea connections, Dynamic flashcard creation, and AI-guided summaries.</p>
    <div className="h-[50px] "></div>
    <button><img src={started} className=" w-[60%] md:w-[50%] hover:w-[60%] md:hover:width-[70%] transition-all"></img></button>
    </div>)
}
function HeroMain()
{
    return(
    <div className="flex md:flex-row flex-col w-full items-center justify-center">
    <Title  />
    <img src = {cover} className="w-[700px]"></img>
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
function Hero() {
    return(
        <div className="flex flex-col md:h-lvh herosec  p-0 m-0 md:border-white md:border-2">
        <Heading />
        <div className="flex flex-row justify-center h-full"><HeroMain /></div>
        
        <Divider />
      </div>
    )}
export default function App()
{
    for(let i=0;i<refs.length;i++)
        {
            refs[i] = useRef();
        }
    return(
        <>
        <Hero />
        <div  ref={refs[0]}>
        <Problems />
        </div>
        <div ref={refs[1]}>
        <Key />
        </div>
        <div ref={refs[2]}><Reviews /></div>
        <div ref={refs[3]}> <Uses /></div>
        <div ref={refs[4]}><CTA /></div>
        
       
        
        <Footer />
        </>
    )
}
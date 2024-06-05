import logo from "./assets/Items/logo.png"
function Logo()
{
    return(
        <>
         <div className="flex flex-row">
            <img src = {logo} alt = "Logo of CleverBooks" className = "w-[100px]"></img>
            <p className="pt-8 andika-bold text-white text-3xl">CleverBooks</p>
            <div className="md:hidden block">
                
            </div>
         </div>
        </>
    )
}
export default function Footer()
{
    return(
        <div className="bg-black text-white andika-regular h-[300px]">
            <div className="flex flex-col md:flex-row w-full items-left md:items-center md:justify-center">
                <div className="w-full md:w-[30%] items-center justify-center">
                <Logo />
                <p className="text-left">Our brand creates software aimed at helping lessen the burden of schoolwork from students, and help them be more curious.</p>
                </div>
                <div className="text-left">Located in Noida,India</div>
            </div>
        </div>
    )
}
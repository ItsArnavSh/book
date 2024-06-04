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
            <div className="flex flex-row w-full items-center justify-center">
                <div className="w-full md:w-[30%]">
                <Logo />
                <p>Our brand creates software aimed at helping lessen the burden of schoolwork from students, and help them be more curious.</p>
                </div>
                <div>Located in Noida,India</div>
            </div>
        </div>
    )
}
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Appstore from "./assets/appstore.png"
import Logo from "./assets/Items/logo.png"
function Tas()
{
    return (
        <>
    <Tabs defaultValue="account" className="w-[200px]">
  <TabsList>
    <TabsTrigger value="Android">Android</TabsTrigger>
    <TabsTrigger value="IOS">IOS</TabsTrigger>
    <TabsTrigger value="Web">Website</TabsTrigger>
  </TabsList>
  <TabsContent value="Android">
    <div className="flex flex-col items-center">
        <p>Install The Latest Version from PlayStore:</p>
        <a href = "/    "> <img src = "https://static.vecteezy.com/system/resources/previews/017/396/800/non_2x/google-play-store-mobile-apps-logo-free-png.png" className="h-[60px]"/> </a>
    </div>
  </TabsContent>
  <TabsContent value="IOS">
  <div className="flex flex-col items-center">
        <p>Install The Latest Version from AppStore:</p>
        <a href = "/    "> <img src = {Appstore} className="h-[60px]"/> </a>
    </div>
  </TabsContent>
  <TabsContent value="Web">
  <div className="flex flex-col items-center">
        <p>Visit our Website for More Information:</p>
        <a href = "/    "> <img src = {Logo} className="h-[60px]"/> </a>
    </div>
  </TabsContent>
</Tabs>
        </>
    )

}
export default function CTA()
{
    return(
        <div className="flex flex-col items-center h-lvh justify-center">
            <h1 className="text-5xl andika-bold p-5">So, What are you waiting for? </h1>
            <p className="text-2xl andika-regular text-center">Install CleverBooks On The Platform of Your Choice!</p>
            <div className="h-[200px] p-5"><Tas /></div>
            
            
        </div>
    )
}
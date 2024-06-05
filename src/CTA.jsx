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
        <p className="text-center andika-regular">Install The Latest Version from PlayStore:</p>
        <a href = "/    "> <img src = "https://static.vecteezy.com/system/resources/previews/017/396/800/non_2x/google-play-store-mobile-apps-logo-free-png.png" className="h-[80px] p-4"/> </a>
    </div>
  </TabsContent>
  <TabsContent value="IOS">
  <div className="flex flex-col items-center">
        <p className="text-center andika-regular">Install The Latest Version from AppStore:</p>
        <a href = "/    "> <img src = {Appstore} className="h-[80px] p-4"/> </a>
    </div>
  </TabsContent>
  <TabsContent value="Web">
  <div className="flex flex-col items-center">
        <p className="text-center andika-regular">Visit our Website for More Information:</p>
        <a href = "/    "> <img src = {Logo} className="h-[100px] p-4"/> </a>
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
            <p className="text-3xl md:text-5xl andika-bold p-5 text-center">Install <span className="gradient-text cleverbooks">CleverBooks</span> Today!</p>
            <div className="h-[200px] p-5"><Tas /></div>
            
            
        </div>
    )
}
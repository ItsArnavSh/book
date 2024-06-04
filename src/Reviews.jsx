import { useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { Card, CardContent } from "@/components/ui/card"
  function Reviewer({details,name,designation,profile,companyProfile,point1,point2,cover})
{

}
export default function Reviews()
{
    let [index,setIndex] = useState(0)
    const info = [
        {
            details : "",
            name : "",
            designation : "",
            company : "",
            profile: "",
            companyProfile: "",
            point1: "",
            point2: "",
            cover: ""

        }
    ]
    return(
        <div className="flex flex-col items-center">
            <CarouselD />
        </div>
        )
}
function CarouselD() {
    return (
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )
  }
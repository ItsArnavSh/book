import { useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { Card, CardContent } from "@/components/ui/card"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Reviews()
{

    return(
        <div className="flex flex-col items-center md:h-lvh md:justify-center">
            <h1 className="andika-bold text-center text-5xl p-4 m-5 ">Customer Testimonials</h1>
            <CarouselD />
        </div>
        )
}
function CarouselD() {
    const customers = [
        {
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            name: "Jimmy",
            designation: "Teacher",
            company: "Edibles",
            profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQefv-EQBVmicVIzhjn-SyioTT8-RA4DIvTlw&s",
            companyProfile: "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg",
            point1:"Up to 95%",
            point11:"Demand Fulfilment",
            point2:"<3%",
            point22:"Daily Stock Out",
            cover:"https://image.cnbcfm.com/api/v1/image/104702698-GettyImages-583816330-book-club.jpg?v=1532563764"

        }
    ]
    return (
      <Carousel className="w-[80%]">
        <CarouselContent>
          {Array.from({ length: customers.length }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1 w-full flex flex-col md:flex-row items-center andika-regular">
                <div className="flex flex-col flex-grow">
                    <p>{customers[index].details}</p>
                    <div className="flex flex-row">
                        <div className="flex flex-row p-2">
                        <Avatar>
            <AvatarImage src={customers[index].profile} />
                <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                        </div>
                        <div className="flex flex-col flex-grow">
                        <p className="andika-regular">{customers[index].name}</p>
                        <p>{customers[index].designation}, {customers[index].company}</p>
                        </div>
                        <Avatar className = "">
            <AvatarImage src={customers[index].companyProfile} />
                <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                    </div>
                    <div className="flex flex-row ">
                    <div className="p-3 m-4 bg-green-100 rounded-md andika-regular"><p className="gradient-text andika-bold text-xl">{customers[index].point1}</p><p className="">{customers[index].point11}</p></div>
                    <div className="p-3 m-4 bg-green-100 rounded-md andika-regular"><p className="gradient-text andika-bold text-xl">{customers[index].point2}</p><p className="">{customers[index].point22}</p></div>
                    </div>
                </div>
                <div>
                    <img src={customers[index].cover} className="min-w-[200px] p-6"/>
                </div>

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )
  }
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
        details: "CleverBooks has transformed the way I teach by providing me with innovative tools to create AI flashcards and summaries. My students are more engaged, and their performance has significantly improved.",
        name: "Sarah Williams",
        designation: "Professor",
        company: "Future Minds",
        profile: "https://randomuser.me/api/portraits/women/68.jpg",
        companyProfile: "https://www.example.com/company-profile1.jpg",
        point1: "80%",
        point11: "Student Engagement",
        point2: "20%",
        point22: "Efficiency Improvement",
        cover: "https://images.pexels.com/photos/5427659/pexels-photo-5427659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        details: "As a researcher, CleverBooks has been indispensable in organizing my notes and creating study schedules. The AI summaries save me hours every week.",
        name: "Dr. James Anderson",
        designation: "Research Scientist",
        company: "Innovative Research Labs",
        profile: "https://randomuser.me/api/portraits/men/32.jpg",
        companyProfile: "https://www.example.com/company-profile2.jpg",
        point1: "70%",
        point11: "Time Saved",
        point2: "60%",
        point22: "Research Efficiency",
        cover: "https://images.pexels.com/photos/1181307/pexels-photo-1181307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        details: "The integration of CleverBooks into our study programs has been a game changer. Our students are now able to create personalized flashcards and summaries, which has boosted their retention rates.",
        name: "Maria Garcia",
        designation: "Curriculum Developer",
        company: "Bright Future Academy",
        profile: "https://randomuser.me/api/portraits/women/65.jpg",
        companyProfile: "https://www.example.com/company-profile3.jpg",
        point1: "85%",
        point11: "Retention Rate",
        point2: "50%",
        point22: "Course Completion",
        cover: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        details: "CleverBooks has streamlined my study process with its powerful AI tools. The flashcards and summaries have been particularly helpful for my exam preparations.",
        name: "Liam Johnson",
        designation: "Medical Student",
        company: "Health Sciences University",
        profile: "https://randomuser.me/api/portraits/men/44.jpg",
        companyProfile: "https://www.example.com/company-profile4.jpg",
        point1: "90%",
        point11: "Exam Preparation",
        point2: "75%",
        point22: "Study Efficiency",
        cover: "https://images.pexels.com/photos/8617970/pexels-photo-8617970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        details: "Using CleverBooks, I've been able to create detailed study schedules that keep me on track. The AI-generated summaries and flashcards are fantastic for quick reviews.",
        name: "Olivia Brown",
        designation: "Software Engineering Student",
        company: "Tech Innovators Institute",
        profile: "https://randomuser.me/api/portraits/women/72.jpg",
        companyProfile: "https://www.example.com/company-profile5.jpg",
        point1: "95%",
        point11: "Study Organization",
        point2: "80%",
        point22: "Time Management",
        cover: "https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        details: "CleverBooks' AI tools have been a revelation for our training programs. The ease of creating and sharing flashcards and summaries has made learning more interactive and effective.",
        name: "Ethan Martinez",
        designation: "Training Manager",
        company: "Corporate Learning Solutions",
        profile: "https://randomuser.me/api/portraits/men/39.jpg",
        companyProfile: "https://www.example.com/company-profile6.jpg",
        point1: "88%",
        point11: "Employee Engagement",
        point2: "65%",
        point22: "Training Efficiency",
        cover: "https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        details: "The ability to quickly create AI-generated summaries and flashcards with CleverBooks has been invaluable. It’s a must-have tool for any serious student.",
        name: "Isabella Davis",
        designation: "Graduate Student",
        company: "Elite Business School",
        profile: "https://randomuser.me/api/portraits/women/54.jpg",
        companyProfile: "https://www.example.com/company-profile7.jpg",
        point1: "92%",
        point11: "Study Effectiveness",
        point2: "70%",
        point22: "Learning Speed",
        cover: "https://images.pexels.com/photos/5428012/pexels-photo-5428012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        details: "CleverBooks has made a significant impact on how we approach education. The AI features for creating summaries and flashcards are cutting-edge and incredibly useful.",
        name: "Michael Wilson",
        designation: "Dean",
        company: "Advanced Learning Institute",
        profile: "https://randomuser.me/api/portraits/men/55.jpg",
        companyProfile: "https://www.example.com/company-profile8.jpg",
        point1: "85%",
        point11: "Educational Impact",
        point2: "60%",
        point22: "Administrative Efficiency",
        cover: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

];


    return (
      <Carousel className="w-[80%]">
        <CarouselContent>
          {Array.from({ length: customers.length }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1 w-full flex flex-col md:flex-row items-center andika-regular">
                <div className="flex flex-col flex-grow">
                    <p>{customers[index].details}</p>
                    <div className="flex flex-row justify-center items-center mt-4">
                        <div className="flex flex-row m-2   ">
                        <Avatar>
            <AvatarImage src={customers[index].profile} />
                <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                        </div>
                        <div className="flex flex-col flex-grow pl-5">
                        <p className="andika-bold">{customers[index].name}</p>
                        <p>{customers[index].designation}, {customers[index].company}</p>
                        </div>
                       
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
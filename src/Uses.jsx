import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import Blob from "./assets/blob.gif"
export default function Uses()
{
    const list1 = [
        {
            trigger: "Self Generated Summaries",
            response: "Automatically generate concise summaries of your notes to quickly review key points. This feature uses AI to extract the most important information, helping you retain and recall material efficiently.",
            value: "item-1"
        },
        {
            trigger: "Curated Study Schedules",
            response: "Create personalized study schedules that optimize your learning based on your goals and deadlines. The app analyzes your study habits and suggests the best times to review each topic, ensuring you stay on track.",
            value: "item-2"
        },
        {
            trigger: "Revision with Spaced Repetition and Active Recall",
            response: "Enhance your memory retention with scientifically proven techniques like spaced repetition and active recall. The app schedules reviews at optimal intervals, making it easier to remember information over the long term.",
            value: "item-3"
        },
    ];
    const list2= [
        {
            trigger: "Connect Related Ideas Easily",
            response: "Link related notes and ideas seamlessly to build a comprehensive knowledge network. This helps you see connections between different concepts, fostering deeper understanding and creative insights.",
            value: "item-4"
        },
        {
            trigger: "Get Access to a Growing Forest of Information",
            response: "Tap into a continuously expanding repository of notes and resources contributed by a community of learners. Share your own insights and benefit from the collective knowledge of others.",
            value: "item-5"
        },
        {
            trigger: "Seamless Integration with other Apps",
            response: "Integrate your notes and schedules with other popular apps and tools you use daily. Whether it's syncing with your calendar, exporting to Markdown, or connecting with productivity apps, our app ensures a smooth workflow.",
            value: "item-6"
        }
    ]
    
    const plot1 = list1.map((x)=><>
      <AccordionItem value={x.value}>
    <AccordionTrigger className = "text-xl andika-italic ">{x.trigger}</AccordionTrigger>
    <AccordionContent>
      {x.response}
    </AccordionContent>
  </AccordionItem></>)
      const plot2 = list2.map((x)=><>
      <AccordionItem value={x.value}>
    <AccordionTrigger className = "text-xl andika-italic ">{x.trigger}</AccordionTrigger>
    <AccordionContent>
      {x.response}
    </AccordionContent>
  </AccordionItem></>)
    return(
        <div className="flex flex-col items-center ">
             <div className="h-[800px] p-10 justify-center flex flex-col herosec2  text-white w-full rounded-lg">
         
         <h1 className="text-center text-5xl andika-bold ">Our Main Features</h1>
         <h1 className="text-center text-sm p-4 ">Click on the Entries to Learn More</h1>
         <div className="p-5 flex flex-row justify-center">
         <Accordion type="single" collapsible className="flex flex-col w-[50%] m-2">
             {plot1}
         </Accordion>
         <Accordion type="single" collapsible className="flex flex-col w-[50%] m-2">
             {plot2}
         </Accordion>
         </div>
       
     </div>
 
        </div>
       
    )
}
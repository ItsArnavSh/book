import stopwatch from './assets/Items/stopwatch.png'
import task from './assets/Items/task-list.png'
import thinking from './assets/Items/thinking.png'
import ai from './assets/Items/artificial-intelligence.png'

function Solution({name,icon,desc})
{
    return(
        <>
        <div className=' bg-blue-200 rounded-md flex flex-col md:h-[300px]  md:w-[20%] m-2 p-3'>
        <img src={icon} className='h-10 w-10 md:h-20 md:w-20'/>
        <div className='m-3'></div>
        <h1 className='text-xl'>{name}</h1>
        <div className='m-3'></div>
        <p className='text-sm'>{desc}</p>
        </div>
        </>
    )
}
export default function Problems()
{
    const data = [
        {
            name: "Time Management",
            icon: stopwatch,
            desc : "CleverBooks optimizes study schedules with AI, helping users efficiently allocate time for exam preparation."
        },
        {
            name: "Learning Efficiency",
            icon: thinking,
            desc : "CleverBooks enhances learning by automating tasks like note-taking and flashcard creation, allowing for deeper understanding of concepts."
        },
        {
            name: "Cognitive Load Reduction",
            icon: ai,
            desc : "CleverBooks lightens cognitive load by offering AI-guided summaries and flashcards, making complex topics more manageable."
        },
        {
            name: "Organizational Challenges",
            icon: task,
            desc : "CleverBooks simplifies organization by providing a centralized platform for note-taking and idea connection, ensuring materials are easily accessible and organized."
        }
    ]
    const print = data.map((x)=> <Solution name = {x.name} icon={x.icon} desc = {x.desc} className = ""/>)
    return(
        <>
        <div className='w-full'>
        
        

    <h1 className="text-center andika-bold p-8 text-2xl md:text-5xl">Key Problems Solved by CleverBooks </h1>
        <div className='flex md:flex-row flex-col md:items-center justify-center w-full'>
            {print}
        </div>
        
        </div>
        </>
    )
}
import Hero from './Hero'
import Problems from './Problems'
import Reviews from './Reviews'
export default function App()
{
    return(
        <>
        <Hero />
        
        <Problems />
        <Reviews />
        <footer className = "bg-black">
        <p className='text-white'>CleverBooks</p>
        <p></p>
        </footer>
        </>
    )
}
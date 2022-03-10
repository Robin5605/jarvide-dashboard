import {FaCloud, FaTerminal, FaArrowRight, FaPaperPlane} from 'react-icons/fa'

const Section1 = () => {
    return (
        <div className="flex justify-center p-12 bg-dark-900 h-108">
            <div className="flex flex-col space-y-4">
                <h1 className="text-gray-200 text-3xl">Easy To Use</h1>
                <p className="text-gray-400 w-96">
                    Our bot has features that will make your life easier. 
                    Simple features that are necessary.
                </p>

                <div className="inline-flex flex-row h-max space-x-6">
                    <div className="inline-flex h-max border-2 p-2 border-gray-500">
                        <FaCloud className='text-gray-300' size={50}/>
                    </div>
                    
                    <div className="inline-flex flex-col h-max w-96 space-y-1 text-left self-center">
                        <h1 className="text-gray-200">Save and record.</h1>
                        <h2 className="text-gray-400">
                            Jarvide saves all of your work to the cloud to be later 
                            reopened and used again for further use.
                        </h2>
                    </div>
                </div>

                <div className="inline-flex flex-row h-max space-x-6">
                    <div className="inline-flex h-max border-2 p-2 border-gray-500">
                        <FaTerminal className='text-gray-300' size={50}/>
                    </div>
                    
                    <div className="inline-flex flex-col h-max w-96 space-y-1 text-left self-center">
                        <h1 className="text-gray-200">Simple commands.</h1>
                        <h2 className="text-gray-400">
                            Jarvide gives the experience of high level commands 
                            with the simplicity for beginners.
                        </h2>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

const Section2 = () => {
    return (
        <div className="flex justify-center p-12 bg-dark-600 h-128">
            <div className="flex flex-col space-y-4">
                <h1 className="text-gray-200 text-3xl">Jarvide Works Anywhere</h1>
                <p className="text-gray-400 w-108">
                Jarvide{"'"}s IDE works anywhere, from your phone to your PC. 
                Its IDE works pleasurably on mobile devices with the same 
                experience you would get on a laptop or PC.
                </p>

                <div className="inline-flex flex-row h-max space-x-6">
                    <div className="inline-flex h-max border-2 p-2 border-gray-500">
                        <FaCloud className='text-gray-300' size={50}/>
                    </div>
                    
                    <div className="inline-flex flex-col h-max w-96 space-y-1 text-left self-center">
                        <h1 className="text-gray-200">Upload to the cloud.</h1>
                        <h2 className="text-gray-400">
                        You make it. We save it. All your files will be easily 
                        accessible from any device you choose.
                        </h2>
                    </div>
                </div>

                <div className="inline-flex flex-row h-max space-x-6">
                    <div className="inline-flex h-max border-2 p-2 border-gray-500">
                        <FaArrowRight className='text-gray-300' size={50}/>
                    </div>
                    
                    <div className="inline-flex flex-col h-max w-96 space-y-1 text-left self-center">
                        <h1 className="text-gray-200">Code on the move.</h1>
                        <h2 className="text-gray-400">
                            Using our cloud, you can download your files and code 
                            with the same experience as you would on a PC.
                        </h2>
                    </div>
                </div>

                <div className="inline-flex flex-row h-max space-x-6">
                    <div className="inline-flex h-max border-2 p-2 border-gray-500">
                        <FaPaperPlane className='text-gray-300' size={50}/>
                    </div>
                    
                    <div className="inline-flex flex-col h-max w-96 space-y-1 text-left self-center">
                        <h1 className="text-gray-200">Favouring simplicity and style.</h1>
                        <h2 className="text-gray-400">
                            Simplicity and style makes both the world of high-end 
                            coders and new-beginners meet.
                        </h2>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

const Section3 = () => {
    return (
        <div className="flex justify-center p-12 bg-dark-900 h-96">
            <div className="flex flex-col space-y-4">
                <h1 className="text-gray-200 text-3xl">Email Support</h1>
                <p className="text-gray-400 w-132">
                    Jarvide has an outstanding support team. We will help you no matter what, 
                    no matter when. We will guarantee an email within 3-5 working days. Our support 
                    team consists of the developers and helpers that have made this bot so your 
                    answer will be to high standards.
                </p>
                <div className="border-b-4 w-max border-gray-500 cursor-pointer hover:border-gray-400 duration-200">
                    <a className="text-gray-300 tracking-tight" href="#">GET SUPPORT NOW</a>
                </div>

            </div>
            
        </div>
    );
}

const Section4 = () => {
    return (
        <div className="flex h-60 bg-purple-1000 items-center px-128">
            <div className="flex flex-col space-y-2">
                <h1 className="text-gray-100 text-3xl">Start Making Your Life Easier</h1>
                <h3 className="text-gray-350 text-md">Get the Discord bot of the future.</h3>
            </div>
        </div>
    );
}

const Sections = () => {
    return (
        <>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
        </>
        
    );
}
export default Sections;
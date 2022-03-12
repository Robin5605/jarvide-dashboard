import Image from "next/image";

const DiscordBar = () => {
    return (
        <div className="flex justify-center w-full h-24 bg-black">
            <Image src="/discord.svg" width={150} height={150} alt="The official Discord logo"/>
        </div>
    );
}

export default DiscordBar;
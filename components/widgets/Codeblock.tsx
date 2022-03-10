interface CodeblockPropType {
    text: string;
}

const Codeblock = ({ text }: CodeblockPropType) => {
    return (
        <span className="font-mono bg-gray-700 p-1 rounded-md text-md">
            { text }
        </span>
    );
}

export default Codeblock;
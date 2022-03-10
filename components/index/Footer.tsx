interface ILabelPropType {
    text: string
}

const ColumnHeading = ({ text }: ILabelPropType) => {
    return (
        <a className="text-gray-200 text-base" href="#">{ text }</a>
    );
}

const InfoLabel = ({ text }: ILabelPropType) => {
    return (
        <a className="text-gray-400 text-sm hover:text-gray-300 duration-200" href="#">{ text }</a>
    );
}

const EmailField = () => {
    return (
        <div>
            <input className="w-44 h-10 p-3 bg-dark-400 text-gray-300 border-2 border-dark-500 rounded-l-md outline-none" type="text" placeholder="Your email"/>
            <button className="w-12 h-10 bg-dark-350 text-gray-300 border-2 border-dark-500 hover:bg-dark-400 border-l-0 rounded-r-md duration-200 outline-none" type="button">OK</button>
        </div>
    );
}

const Spacer = () => {
    return (
        <span className="mt-3"></span>
    );
}

const Footer = () => {
    return (
        <div className="flex justify-center items-center bg-dark-900 h-72">
            <div className="flex flex-row space-x-36">
                <div className="flex flex-col">
                    <ColumnHeading text="COMPANY"/>
                    <Spacer/>
                    <InfoLabel text="Home"/>
                    <InfoLabel text="About Jarvide"/>
                    <InfoLabel text="Usage"/>
                    <InfoLabel text="GitHub"/>
                </div>

                <div className="flex flex-col">
                    <ColumnHeading text="GET HELP"/>
                    <Spacer/>
                    <InfoLabel text="Frequently Asked Questions"/>
                    <InfoLabel text="Contact Us"/>
                </div>

                <div className="flex flex-col">
                    <ColumnHeading text="BORING STUFF"/>
                    <Spacer/>
                    <InfoLabel text="Privacy Policy"/>
                    <InfoLabel text="Terms of Service"/>
                </div>

                <div className="flex flex-col">
                    <EmailField/>
                    <p className="text-sm text-gray-500 track">We send about 2 email a month</p>
                </div>


            </div>
        </div>
    );
}

export default Footer;
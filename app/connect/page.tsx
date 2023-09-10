"use client"
const sendEmail = () => {
    const recipient = 'contact.swiftder@gmail.com';
    const subject = 'Hi, Nice to Meet you';
    const body = 'Nice to e-meet you.';

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Use JavaScript to open the default email client with the "mailto" link
    window.location.href = mailtoLink;
};

const ClickEmail: React.FC = () => {
    return (
        <div className="my-10">
            <button className="text-xl rounded-full text-white 
            bg-orange-500 font-bold px-5 py-1 hover:bg-orange-700" onClick={() => sendEmail()}> Click to Email </button>
        </div>
    )
}


export default function Home() {
    return (
        <div className="w-full 
            h-[calc(100vh-100px)]  flex flex-col 
            items-center justify-center p-10 md:p-20">
            <h1 className="text-center text-3xl">
                Thank you for taking the time to connect with Us.
                Please reach out to us at <span className="text-orange-500 font-bold">
                    contact.swiftder@gmail.com </span>
            </h1>
            <ClickEmail />
        </div>
    )
}
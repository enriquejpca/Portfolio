const Contact = () => {
    return (
        <div
            name="contact"
            className="w-full h-screen bg-[#0a192f] flex justify-center p-4"
        >
            <form
                method="POST"
                action="https://getform.io/f/9fd0881a-2c9e-4a45-8b48-f959bdd73de8"
                className=" flex flex-col max-w-[600px] w-full"
            >
                <div className="pb-6 pt-24">
                    <p className="text-4xl font-bold inline border-b-4 border-yellow-700 text-gray-300">
                        Contact
                    </p>
                    <p className="text-gray-300 py-4">
                        Submit the form below or send me an email to
                        enriquejpca@gmail.com
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <input
                        className="bg-[#ccd6f6] p-2 "
                        type="text"
                        placeholder="Name"
                        name="name"
                    />
                    <input
                        className="bg-[#ccd6f6] p-2"
                        type="text"
                        placeholder="Surname"
                        name="surname"
                    />
                </div>

                <input
                    className="bg-[#ccd6f6] p-2 my-4"
                    type="text"
                    placeholder="Email"
                    name="email"
                />
                <textarea
                    className="bg-[#ccd6f6] p-2 "
                    name="message"
                    rows="10"
                    placeholder="Message"
                ></textarea>
                <button className="text-white  border-2 px-4 py-3 my-8 flex items-center hover:bg-yellow-700 hover:border-yellow-700 mx-auto ">
                    Send
                </button>
            </form>
        </div>
    );
};

export default Contact;

const Contact = () => {
    return (
        <div
            name="contact"
            className="w-full h-screen bg-[#0a192f] flex justify-center p-4"
        >
            <form
                method="POST"
                action="https://getform.io/f/9fd0881a-2c9e-4a45-8b48-f959bdd73de8"
                className="flex flex-col max-w-[600px] w-full"
            >
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
                        Contact
                    </p>
                    <p className="text-gray-300 py-4">
                        Submit the form below or shoot me an email -
                        enriquejpca@gmail.com
                    </p>
                </div>
                <input
                    className="bg-[#ccd6f6] p-2"
                    type="text"
                    placeholder="Name"
                    name="name"
                />
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
                <button className="text-white  border-2 px-4 py-3 my-8 flex items-center hover:bg-pink-600 hover:border-pink-600 mx-auto flex items-center">
                    Let´s colaborate
                </button>
            </form>
        </div>
    );
};

export default Contact;

"use client";
const LandingPage = () => {

    async function handleSubmit(event) {
        event.preventDefault();

        const data = {
            name: String(event.target.name.value),
            email: String(event.target.email.value),
            message: String(event.target.message.value),
            
        }
        console.log(data)
    }

    return <div className="mx-auto max-w-2xl px-4 my-10">
        <h1 className="font-bold text-gray-1000">Contact Us</h1>

        <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col my-4">
                <label className="font-bold text-gray-1000" htmlFor="name">Name</label>
                <input type="text" required className="p-4 bg-gray-50 border border-gray-100" autoComplete="off" id="name" />
            </div>
            <div className="w-full flex flex-col my-4">
                <label className="font-bold text-gray-1000" htmlFor="email">Email</label>
                <input type="email" required className="p-4 bg-gray-50 border border-gray-100" autoComplete="off" id="email" />
            </div>
            <div>
            <label className="font-bold text-gray-1000" htmlFor="message">Message</label>
                <textarea rows={4}
                required
                minLength={10}
                maxLength={500}
                name="message"
                className="w-full p-4 bg-gray-50 border border-gray-100"/>
            </div>
            <button type="submit" className="px-4 py-2 w-24 bg-gray-700 text-white font-medium">Send</button>
        </form>


    </div>;
};

export default LandingPage;

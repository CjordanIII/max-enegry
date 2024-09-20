"use client";
import Footer from "../../components/footer/Footer";
const registrationPage = () => {
  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      password: String(event.target.password.value),
      confirmpassword: String (event.target.confirmpassword.value)
    };
    console.log(data);
  }

  return (
    <div>
      <div className="border bg-blue-800 mx-auto max-w-2xl px-20 py-20 my-4 text-white">
        <h1 className="font-bold text-white">Register</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col my-4">
              <label className="font-bold text-gray-1000" htmlFor="name">Name</label>
              <input type="text" required className="text-black p-4 bg-gray-50 border border-gray-100" autoComplete="off" id="name" />
            </div>

            <div className="w-full flex flex-col my-4">
              <label className="font-bold text-gray-1000" htmlFor="email">Email</label>
              <input type="email" required className="text-black p-4 bg-gray-50 border border-gray-100" autoComplete="off" id="email" />
            </div>

            <div className="w-full flex flex-col my-4">
              <label className="font-bold text-gray-1000" htmlFor="password">Password</label>
              <input type="password" required className="text-black p-4 bg-gray-50 border border-gray-100" autoComplete="off" id="password" />
            </div>

            <div className="w-full flex flex-col my-4">
              <label className="font-bold text-gray-1000" htmlFor="Confirm-password">Confirm Password</label>
              <input type="password" required className="text-black p-4 bg-gray-50 border border-gray-100" autoComplete="off" id="confirmpassword" />
            </div>

            <button type="submit" className="px-4 py-2 w-24 bg-yellow-500 text-white font-medium">Sign Up</button>
          </form>

          <h1>
            Already have an account?
            <button type="button" className="px-4 py-2 w-24 bg-yellow-500 text-white font-medium">Login</button>
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default registrationPage;

import { useState } from "react";

function LogIn() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [submitData, setSubmitData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitData(formData);
  };

  return (
    <>
      <div className="w-full flex bg-slate-500 h-[100vh] justify-center">
        <div className="bg-slate-100 w-[500px] h-[500px] rounded-md mt-10 p-5">
          <h1 className="text-center font-semibold text-xl pb-3">Login Form</h1>
          <div>
            <form onSubmit={handleSubmit}>
              <label> Username</label> <br />
              <input
                className="w-full mt-3 px-3 p-2 rounded-md"
                type="text"
                placeholder="Enter Your Username"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <br />
              <label> Email</label>
              <br />
              <input
                className="w-full mt-3 px-3 p-2 rounded-md"
                type="email"
                placeholder="Enter Your Email"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <br />
              <label> Password</label>
              <br />
              <input
                className="w-full mt-3 px-3 p-2 rounded-md"
                type="password"
                required
                placeholder="Password"
              />
              <br />
              <button
                className="w-full mt-3 text-white bg-blue-600 rounded-md p-1"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
          <hr />
          <div>
            <h3 className="w-full text-xl font-semibold text-center mt-4">
              Submit Info
            </h3>
            <p>Name : {submitData.name}</p>
            <p>Email : {submitData.email} </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;

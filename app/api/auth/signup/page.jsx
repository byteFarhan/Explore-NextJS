"use client";
import React from "react";

const SignupPage = () => {
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;

    const newUser = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      image: form.image.value,
      type: form.type.value,
    };
    // console.log(user);
    const resp = await fetch("http://localhost:3000/api/auth/signup/new-user", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(resp);
    if (resp.status === 200) {
      form.reset();
    }
  };
  return (
    <div className="flex items-center justify-center mt-24">
      <div>
        <h6 className="text-lg font-semibold">
          Sign Up with Email and Password
        </h6>

        <div>
          <form onSubmit={handleRegister} action="">
            <label htmlFor="name"> Name </label> <br />
            <input
              type="text"
              name="name"
              required={true}
              placeholder="your full name"
              className="my-2.5 px-3 py-2 border-2 border-black rounded outline-none text-slate-700 "
            />{" "}
            <br /> <br />
            <label htmlFor="email"> Email </label> <br />
            <input
              type="email"
              name="email"
              required={true}
              placeholder="your email"
              className="my-2.5 px-3 py-2 border-2 border-black rounded outline-none text-slate-700"
            />{" "}
            <br /> <br />
            <label htmlFor="password"> Password </label> <br />
            <input
              type="password"
              name="password"
              required={true}
              placeholder="your password"
              className="my-2.5 px-3 py-2 border-2 border-black rounded outline-none text-slate-700"
            />
            <br />
            <label htmlFor="image"> Image </label> <br />
            <input
              type="text"
              name="image"
              required={true}
              placeholder="your image"
              className="my-2.5 px-3 py-2 border-2 border-black rounded outline-none text-slate-700"
            />
            <br />
            <label htmlFor="type"> Type </label> <br />
            <select
              name="type"
              placeholder="user type"
              required={true}
              className="my-2.5 px-3 py-2 border-2 border-black rounded outline-none text-slate-700"
            >
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
              <option value="member">Member</option>
            </select>
            <br />
            <button
              type="submit"
              className="p-3 mt-4 font-medium text-white bg-black"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

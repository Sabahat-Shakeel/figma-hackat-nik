"use client"; 



import { useState } from "react";
import Image from "next/image";


export default function JoinUs() {



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = () => {
    console.log({ email, password, firstName, lastName, birthday, country, gender, termsAccepted });
  };

  return (
    <div className="reveal min-h-screen flex items-center justify-center mt-12 pb-11">
      <div className=" p-8 rounded-lg w-full max-w-md">
        
        {/* Nike Logo */}
        <div className="flex justify-center mb-4">
    <Image 
    src = {"/images/logo.png"}
    alt = {'nike logo'}
    width ={50}
    height = {50}
    />
        </div>

        {/* Heading */}
        <h1 className="reveal text-2xl font-bold text-center mb-4">BECOME A NIKE MEMBERS</h1>
        <p className="text-sm text-zinc-500/70 text-center mb-6">
          Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
        </p>

        {/* Login Form */}
        <div className="space-y-4">
          {/* Email Input */}
          <input
            type="email"
            className="border border-gray-300 p-2 w-full rounded-md"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Input */}
          <input
            type="password"
            className="border border-gray-300 p-2 w-full rounded-md"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* First Name */}
          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded-md"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          {/* Last Name */}
          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded-md"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          {/* Birthday Input */}
          <input
            type="date"
            className="border border-gray-300 p-2 w-full rounded-md"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />

          {/* Birthday Question */}
          <div className="text-sm text-zinc-500/70 mb-2">Get a Nike Member Reward every year on your Birthday.</div>
          <select
            className="border border-gray-300 p-2 w-full rounded-md"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select a Country</option>
            <option value="Pakistan">Pakistan</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
          </select>

          {/* Gender Selection */}
          <div className="mt-2">
            <span className="text-sm text-zinc-500/70">Select Gender:</span>
            <div className="flex space-x-4 mt-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={() => setGender("Male")}
                  className="border-gray-500"
                />
                <span className="ml-2 text-sm text-zinc-500/70">Male</span>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={() => setGender("Female")}
                  className="border-gray-500"
                />
                <span className="ml-2 text-sm text-zinc-500/70">Female</span>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="mt-4 flex items-center space-x-2">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="border-gray-500"
            />
            <span className="text-sm text-zinc-500/70">
            Sign up for emails to get updates from Nike on products, offers and your Member benefits
           
            </span>
          
          </div>
          <div>
            <p className="text-center text-zinc-500/70">
          By creating an account, you agree to {'Nike\u0027s'} <span className="underline underline-offset-2 text-zinc-500/90">Privacy Policy</span> and <span className="underline underline-offset-2 text-zinc-500/90">Terms of Use</span>
          </p>
          </div>
          {/* Join Us Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800"
          >
            Join Us
          </button>

          {/* Already Signed-In Link */}
          <div className="text-center mt-4">
            <span className="text-sm text-zinc-500/70">Already a Member? </span>
            <a href="#" className="font-normal underline underline-offset-4 ml-1">Sign-In</a>
          </div>
        </div>
      </div>
    </div>
  );
}
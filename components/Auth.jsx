import { closeLoginModal, openLoginModal } from "@/Redux/ModalSlice";
import { auth } from "@/firebase";
import { Modal } from "@mui/material";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignup] = useState(false);
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.loginModal);
  async function handleSignIn() {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("login")
  }

  async function handleSignUp() {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("login")
  }

  return (
    <>
      <button
        onClick={() => dispatch(openLoginModal())}
        className="rounded-3xl px-4 py-1 bg-[#e4e3d3] text-[#6d9f71]"
      >
        Login/SignUp
      </button>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLoginModal())}
        className="flex justify-center items-center"
      >
        <div
          className="w-[90%] h-[500px] 
    bg-[#8bb08a] text-white
    border border-[#e4e3d3] rounded-lg
    md:w-[560px] md:h-[600px] 
    flex justify-center 
    "
        >
          <div className="w-[90%] mt-8 flex flex-col">
            <h1 className="text-xl p-3 mt-4 font-bold md:text-4xl text-left">
              Sign in to your account
            </h1>
            {signup && (
              <input
                onChange={(e) => setName(e.target.value)}
                className="h-10 rounded-md bg-transparent border outline-transparent placeholder-[#e4e3d3] border-[#e4e3d3] p-6 mt-8"
                placeholder="username"
                type={"name"}
              />
            )}
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="h-10 rounded-md outline-transparent bg-transparent border placeholder-[#e4e3d3] border-[#e4e3d3] p-6 mt-8"
              placeholder="email"
              type={"email"}
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="h-10 rounded-md bg-transparent border outline-transparent placeholder-[#e4e3d3] border-[#e4e3d3] p-6 mt-8"
              placeholder="password"
              type={"password"}
            />
            <button
              onClick={signup ? handleSignUp : handleSignIn}
              className="bg-[#e4e3d3] text-[#8bb08a] rounded-md mt-8
          w-full font-bold text-lg p-2"
            >
              {signup ? "Sign up" : "Sign in"}
            </button>
            <h2 className="mt-2 md:mt-5 text-xl">
              or{" "}
              <span
                className=" text-bold cursor-pointer text-[#ffffff]"
                onClick={() => setSignup(!signup)}
              >
                sign up here
              </span>
            </h2>
          </div>
        </div>
      </Modal>
    </>
  )
}

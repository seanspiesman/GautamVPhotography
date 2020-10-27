import React from "react";
import { socialLogin } from "../common/firestore/firebaseService";
import Navbar from "./Navbar/Navbar";

export default function LoginForm() {
  function handleSocialLogin() {
    socialLogin("google");
  }

  return (
    <>
      <Navbar />
      <div className="text-center" style={{ marginTop: "30%" }}>
        <button
          onClick={() => handleSocialLogin()}
          type="button"
          className="btn btn-primary"
          aria-label="Close"
        >
          Login with Google
        </button>
      </div>
    </>
  );
}

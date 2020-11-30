import React from "react";
import { useSelector } from "react-redux";
import {
  socialLogin,
  signOutFirebase,
} from "../common/firestore/firebaseService";

export default function LoginForm() {
  const authenticated = useSelector((state) => state.auth.authenticated);

  function handleSocialLogin() {
    socialLogin("google");
  }

  function handleSignOut() {
    signOutFirebase();
  }

  console.log(authenticated);

  return (
    <>
      {!authenticated ? (
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
      ) : (
        <div className="text-center" style={{ marginTop: "30%" }}>
          <button
            onClick={() => handleSignOut()}
            type="button"
            className="btn btn-primary"
            aria-label="Close"
          >
            Logout with Google
          </button>
        </div>
      )}
    </>
  );
}

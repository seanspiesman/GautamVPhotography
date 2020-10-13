import React from "react";
import { socialLogin } from "../common/firestore/firebaseService"

export default function LoginForm() {
  function handleSocialLogin() {
    socialLogin("google");
  }

  return (
    <>
            <div className='text-center' style={{marginTop: '30%'}}>
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

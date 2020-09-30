import React from "react";
import { socialLogin } from "../firestore/firebaseService";

export default function LoginForm() {
  function handleSocialLogin() {
    socialLogin("google");
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@mdo"
      >
        Login
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button type="button" className="close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-footer">
              <button
                onClick={() => handleSocialLogin()}
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                aria-label="Close"
              >
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

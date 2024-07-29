import React, { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Firebase/Context/Contextindex";
import { doCreateUserWithEmailAndPassword } from "../../Firebase/auth/auth";
const SignUp = () => {
  const navigate = useNavigate();

  const [text, settext] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { userLoggedIn } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      try {
        await doCreateUserWithEmailAndPassword(email, password);
        setErrorMessage(""); // Clear any previous error message
        navigate("/modules/Login/Login"); // Redirect to login page after successful signup
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setErrorMessage("البريد الإلكتروني مستخدم بالفعل.");
        } else {
          setErrorMessage("حدث خطأ أثناء إنشاء الحساب. حاول مرة أخرى.");
        }
        setIsRegistering(false);
      }
    }
  };

  return (
    <>
      {userLoggedIn && (
        <Navigate to={"/modules/SignUp/SignUp"} replace={true} />
      )}

      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Creat your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={onSubmit}
          >
            <div>
              <label
                for="name"
                className="block text-sm font-medium leading-6 text-gray-500"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  autocomplete="name"
                  required
                  value={text}
                  onChange={(e) => {
                    settext(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                for="name"
                className="block text-sm font-medium leading-6 text-gray-500"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  autocomplete="name"
                  value={text}
                  onChange={(e) => {
                    settext(e.target.value);
                  }}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                className="block text-sm font-medium leading-6 text-gray-500"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:indigo-600 shadow-sm rounded-lg transition duration-300"
                />{" "}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="block text-sm font-medium leading-6 text-gray-500"
                >
                  Password
                </label>
              </div>

              <div className="mt-2">
                <input
                  disabled={isRegistering}
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                />{" "}
              </div>

              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="block text-sm font-medium leading-6 text-gray-500"
                >
                  {" "}
                  Confirm Password
                </label>
              </div>

              <div className="mt-2">
                <input
                  disabled={isRegistering}
                  type="password"
                  autoComplete="off"
                  required
                  value={confirmPassword}
                  onChange={(e) => {
                    setconfirmPassword(e.target.value);
                  }}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                />{" "}
              </div>
            </div>
            <div>
              <div>
                {errorMessage && (
                  <span className="text-red-600 font-bold">{errorMessage}</span>
                )}

                <button
                  type="submit"
                  disabled={isRegistering}
                  className={`w-full px-4 py-2 text-white font-medium rounded-lg ${
                    isRegistering
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300"
                  }`}
                >
                  {isRegistering ? "Signing Up..." : "Sign Up"}
                </button>
              </div>
            </div>
          </form>

          <Link to="/modules/Login/Login">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-3"
            >
              Login 👉
            </button>
          </Link>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="#"
              className="font-semibold leading-6 ml-5 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;

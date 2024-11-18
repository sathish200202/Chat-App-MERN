import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log("inputs: ", inputs);
    await signup(inputs);
  };
  return (
    <div className="flex flex-col  items-center justify-center">
      <div className="w-full p-8 rounded-lg shadow-md  bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base text-gray-300 label-text">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your Full name"
              className="input input-bordered input-info w-full max-w-xs bg-gray-600 h-10 "
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base text-gray-300 label-text">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Create your Username"
              className="input input-bordered  input-info w-full max-w-xs bg-gray-600 h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base text-gray-300 label-text">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Create your Password"
              className="input input-bordered input-info w-full max-w-xs bg-gray-600 h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base text-gray-300 label-text">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm your Password"
              className="input input-bordered input-info w-full max-w-xs bg-gray-600 h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <GenderCheckBox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />
          <Link
            to="/login"
            className="text-sm hover:underline text-gray-300 hover:text-blue-700 inline-block"
          >
            Already have an account?
          </Link>

          <div>
            <button
              className="btn btn-sm mt-2 w-80  border-1 text-sky-500 border-sky-500 bg-gray-600 hover:text-gray-600 hover:bg-sky-500 hover:border-2 hover:border-transparent"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner text-sky-600"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

//STARTTED CODE FOR THIS FILE

// import GenderCheckBox from "./GenderCheckBox";

// const SignUp = () => {
//   return (
//     <div className="flex flex-col  items-center justify-center">
//       <div className="w-full p-8 rounded-lg shadow-md  bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Sign Up <span className="text-blue-500"> ChatApp</span>
//         </h1>

//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base text-gray-300 label-text">
//                 Full Name
//               </span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your Full name"
//               className="input input-bordered input-info w-full max-w-xs bg-gray-600 h-10 "
//             />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base text-gray-300 label-text">
//                 Username
//               </span>
//             </label>
//             <input
//               type="text"
//               placeholder="Create your Username"
//               className="input input-bordered  input-info w-full max-w-xs bg-gray-600 h-10"
//             />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base text-gray-300 label-text">
//                 Password
//               </span>
//             </label>
//             <input
//               type="password"
//               placeholder="Create your Password"
//               className="input input-bordered input-info w-full max-w-xs bg-gray-600 h-10"
//             />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base text-gray-300 label-text">
//                 Confirm Password
//               </span>
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm your Password"
//               className="input input-bordered input-info w-full max-w-xs bg-gray-600 h-10"
//             />
//           </div>
//           <GenderCheckBox />
//           <a
//             href="#"
//             className="text-sm hover:underline text-gray-300 hover:text-blue-700 inline-block"
//           >
//             Already have an account?
//           </a>

//           <div>
//             <button className="btn btn-sm mt-2 w-80  border-1 text-sky-500 border-sky-500 bg-gray-600 hover:text-gray-600 hover:bg-sky-500 hover:border-2 hover:border-transparent">
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

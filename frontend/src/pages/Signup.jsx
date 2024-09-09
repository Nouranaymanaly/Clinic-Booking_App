import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/images/patient-avatar.png";
import uploadImageToCloudinary from "../utilities/UploadCloudinary";
import { toast } from "react-toastify";
import { BASE_URL } from "../configs";

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.file[0];
    const data = await uploadImageToCloudinary(file);
    // could use cloudinary to upload images
    console.log(data);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: json.stringify(formData),
      });
      console.log(res.data);
      const { message } = await res.json();
      if (!res.ok) {
        throw new Error(message);
      }
      setLoading(false);
      toast.success(message);
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };
  return (
    <section className="px-5 lg:px-0">
      <div className="max-w-[500px] mx-auto rounded-lg shadow-md p-10 text-justify">
        <h3 className="text-primaryColor text-[17px] leading-9 mb-10 font-semibold">
          Create An Account
        </h3>

        <form onSubmit={submitHandler}>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="border border-solid border-[#026a6e] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md text-[12px] leading-7 cursor-pointer"
              required
            />
          </div>

          <div className="mb-5">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border border-solid border-[#026a6e] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md text-[12px] leading-7 cursor-pointer"
              required
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="border border-solid border-[#026a6e] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md text-[12px] leading-7 cursor-pointer"
              required
            />
          </div>

          <div className="mb-5 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
            <label className="text-primaryColor font-bold text-[15px] leading-7">
              User Role:
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="text-headingColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
              >
                <option value="patient"> Patient </option>
                <option value="clinic"> Clinic </option>
              </select>
            </label>

            <label className="text-primaryColor font-bold text-[15px] leading-7">
              Gender:
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="text-headingColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
              >
                <option value=""> Select </option>
                <option value="male"> Male </option>
                <option value="female"> Female </option>
                <option value="other"> Prefer Not To Say </option>
              </select>
            </label>
          </div>

          <div className="mb-5 flex items-center gap-3">
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
              <img src={avatar} alt="" className="w-full rounded-full" />
            </figure>
            <div className="relative w-[115px] h-[50px]">
              <input
                type="file"
                name="photo"
                id="customFile"
                onChange={handleFileInputChange}
                accept=".jpg, .png"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
              <label
                htmlFor="customFile"
                className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#c9f0f2] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
              >
                Upload Photo
              </label>
            </div>
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[14px] leading-[30px] rounded-lg px-4 py-3"
            >
              Sign Up
            </button>
          </div>

          <p className="mt-5 text-textColor text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-primaryColor font-medium ml-1">
              {" "}
              Login{" "}
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;

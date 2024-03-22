import {React ,useState}from 'react'
import { useNavigate, Link } from "react-router-dom";

function Signin() {
 const [formData, setFormData] = useState({});
 const [error, setError] = useState(null);
 const [loading, setLoading] = useState(false);
 const navigate = useNavigate();
 const handleChange = (e) => {
   setFormData({
     ...formData,
     [e.target.id]: e.target.value,
   });
 };
 console.log(formData);

 const handleSubmit = async (e) => {
   e.preventDefault();
   try {
     setLoading(true);
     const res = await fetch("api/v1/auth/signin", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(formData),
     });
     const data = await res.json();
     if (data.success === false) {
       setLoading(false);
       setError(data.message);

       return;
     }
     setLoading(false);
     setError(null);
     console.log(data);
     setFormData({});
     navigate("/");
   } catch (error) {
     setLoading(false);
     setError(error.message);
   }
 };
 return (
   <div className="py-3 max-w-lg mx-3 sm:mx-auto">
     <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
     <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
       <input
         type="email"
         placeholder="email"
         className="outline-none border rounded-md p-3"
         id="email"
         onChange={handleChange}
       />
       <input
         type="password"
         placeholder="password"
         className="outline-none border rounded-md p-3"
         id="password"
         onChange={handleChange}
       />
       <button
         disabled={loading}
         className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-95"
       >
         {loading ? "Loading..." : "Sign In"}
       </button>
     </form>
     <div className="flex py-3">
       <p>Dont Have an account ? </p>
       <Link to={"/sing-up"}>
         <span className="text-blue-700">Sign Up</span>
       </Link>
     </div>
     <div>{error && <p className="text-red-500 mt-5">{error}</p>}</div>
   </div>
 );
}

export default Signin
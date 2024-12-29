import {React,useState} from "react";
import { AnimatePresence, motion, warning } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";
import { addDoc, collection } from "firebase/firestore";
import {db} from "../config/firebase.config"
import {Alert} from "./";
import {contact} from "../assets";

const Contact = () => {
  const [data, setdata] = useState({
    firstname : "",
    lastname : "",
    email: "",
    message : ""
  });

  const [alert, setalert] = useState({
    isALert: false,
    message : "",
    status : null,
  })

  const handleTextChange = (e) => {
    const {name,value} = e.target;
    setdata((prevData) => ({...prevData, [name]: value}))
  };

  const sendMessage = async () => {
    if(data.email === "" || data.email === null){
      setalert({isALert : true, message : "please fill all the required fields",status:"warning"});
      setInterval(()=>{
        setalert({isALert : false, message : "",status:"null"});
      },4000)
    }else{
      await addDoc(collection(db, "messages"),{...data}).then(() => {
        setdata({firstname:"",lastname:"",email:"",message:""})
        setalert({isALert : true, message : "Thanks for contacting me!!",status:"warning"});
        setInterval(()=>{
          setalert({isALert : false, message : "",status:"null"});
        },4000)
      }).catch(err => {
        setalert({isALert : true, message : `Error: ${err.message}`,status:"danger"});
        setInterval(()=>{
          setalert({isALert : false, message : "",status:"null"});
        },4000)
      })
    }
  }
  return (
    <section id="contact"
      className="flex flex-col items-center justify-start w-full min-h-screen px-8">
      {/* Centered Title */}
      <div className="w-1/2 flex items-center justify-center pt-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex item-center justify-center py-24">
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary px-15 text-2xl">Contact Me</p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>  

      <div className="w-full flex items-center justify-between mt-8">
        <div className="w-1/2 flex items-center justify-center -mt-20">
          <img src={contact} className="w-[90%] h-auto object-contain" alt="contact" />
        </div>

        <div className="w-1/2 flex flex-col items-center justify-center">
          <div className="w-full lg:p-2 flex flex-col items-center justify-start gap-4">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input type="text" 
              name="firstname" 
              value={data.firstname}
              onChange={handleTextChange}
              placeholder="First Name" className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-texlight" />
              <input type="text" 
              name="lastname" 
              value={data.lastname}
              onChange={handleTextChange}
              placeholder="Last Name" className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-texlight" />
            </div>
            <input type="email" 
              name="email" 
              value={data.email}
              onChange={handleTextChange}
              placeholder="Email" className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-texlight" />
            {/* <input type="email" 
            value={data.email}
            onChange={handleTextChange}
            placeholder="Email" className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-texlight" /> */}
            <textarea name="message"
            value={data.message}
            onChange={handleTextChange}
            id="" cols="0" rows="10" placeholder="Type the message here.." className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-texlight">

            </textarea>
            <div className="w-full flex items-center justify-center lg:justify-end">
              <button className="px-12 py-3 mb-20 bg-gradient-to-br from-primary to-secondary rounded-md w-full lg:w-auto hover:bg-gradient-to-br hover:from-black hover:to-black hover:border hover:border-primary hover:text-primary"
              onClick={sendMessage}
              >
                Send
              </button>

            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {alert.isALert && (
          <Alert status={"success"} message={alert.message}/>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;

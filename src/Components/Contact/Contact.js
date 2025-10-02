import { useState } from "react"
import Title from "../layouts/Title"
import ContactLeft from "./ContactLeft"
const Contact = ()=>{
    const [username, setUsername] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [successMsg, setSuccessMsg] = useState("")
    const [errMsg,setErrMsg] = useState("")

    const handlesend=(e)=>{
        e.preventDefault()
        if (username === ""){
            setErrMsg("Username is required!")
        }else if(phoneNumber === ""){
            setErrMsg("Phone number is required!")
        }else if(email === ""){
            setErrMsg("Please give your Email!")
        }else if (!(email)){

        }else if(subject ===""){
            setErrMsg("Please give your subject!")
        
        }else if (message === ""){
            setErrMsg("Message is required!")
        }else{
            setSuccessMsg(`Thank you for contacting me ${username}, "Your Messages has been sent Successfully!"`)
            setErrMsg("")
            setUsername("")
            setPhoneNumber("")
            setEmail("")
            setSubject("")
            setMessage("")
            console.log(username,phoneNumber,subject,message)
        }
    }
    return (
        <section id="contact" className="w-full py-20 border-b-[1px] border-b-black p-2">
            <div className="flex justify-center items-center text-center">
                <Title des="Contact with Me" title="Contact" />
            </div>
            <div className="w-full">
                <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-5">

                    <ContactLeft/>

                    <div className="lgl:w-[60%] w-full h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 ">
                         <form className="w-full flex flex-col gap-4 lgl:gap-6 lgl:py-5 py-2">
                            {
                                errMsg && ( <p className="py-3 bg-gradient-to-r from-[#1b1d21]
                                to-[#0b0c0c] shadow-shadowone  text-orange-500 text-base
                                tracking-wide animate-bounce text-center">{errMsg}</p>
                            )}
                            {
                                successMsg && <p className="py-3 bg-gradient-to-r from-[#1b1d21]
                                to-[#0b0c0c] shadow-shadowone  text-green-500 text-base
                                tracking-wide animate-bounce text-center">{successMsg}</p>
                            }
                            <div className="w-full flex flex-row gap-10">
                                <div className="w-1/2 flex flex-col gap-4">
                                    <p className="text-sm text-gray-400 tracking-wide uppercase">
                                        Your Name
                                    </p>
                                    <input onChange={(e)=>setUsername(e.target.value)} className={`${errMsg==="Username is required!!" && "outline-designColor"} contactInput`} type="string" value={username}/>
                                </div>
                                <div className="w-1/2 flex flex-col gap-4 ">
                                    <p className="text-sm text-gray-400 tracking-wide uppercase">
                                        Phone
                                    </p>
                                    <input onChange={(e)=>setPhoneNumber(e.target.value)} className={`${errMsg==="Phone number is required!" && "outline-designColor"} contactInput`} type="integer" value={phoneNumber}/>
                                </div>
                            </div>
                            <div className="w-full flex flex-col gap-4">
                                    <p className="text-sm text-gray-400 tracking-wide uppercase">
                                        Email
                                    </p>
                                    <input onChange={(e)=>setEmail(e.target.value)} className={`${errMsg==="Please give your Email!" && "outline-designColor"} contactInput`}  type="email" value={email}/>
                            </div>
                            <div className="w-full flex flex-col gap-4">
                                    <p className="text-sm text-gray-400 tracking-wide uppercase">
                                        Subject
                                    </p>
                                    <input onChange={(e)=>setSubject(e.target.value)} className={`${errMsg==="Please give your subject!" && "outline-designColor"} contactInput`} type="email" value={subject}/>
                            </div>
                            <div className="w-full flex flex-col gap-4">
                                    <p className="text-sm text-gray-400 tracking-wide uppercase">
                                        Message
                                    </p>
                                    <textarea onChange={(e)=>setMessage(e.target.value)} className={`${errMsg==="Message is required:!" && "outline-designColor"} contactInput`} cols="30" rows="10" value={message} ></textarea>
                            </div>
                            <div className="w-full">
                                <button onClick={handlesend} className="w-full h-12 bg-[#141518] rounded-lg text-base
                                text-gray-400 tracking-wider uppercase hover:text-white duration-300
                                hover:border-[1px] hover:border-designColor border-transparent">
                                    Send Message
                                </button>
                            </div>
                            {
                                errMsg && ( <p className="py-3 bg-gradient-to-r from-[#1b1d21]
                                to-[#0b0c0c] shadow-shadowone  text-orange-500 text-base
                                tracking-wide animate-bounce text-center">{errMsg}</p>
                            )}
                            {
                                successMsg && <p className="py-3 bg-gradient-to-r from-[#1b1d21]
                                to-[#0b0c0c] shadow-shadowone  text-green-500 text-base
                                tracking-wide animate-bounce text-center">{successMsg}</p>
                            }
                         </form>
                    </div>
                </div>
            </div>
        </section>
        
    )
}


export default Contact
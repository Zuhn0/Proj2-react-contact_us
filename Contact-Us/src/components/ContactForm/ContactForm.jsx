import styles from "./Contact.module.css"
import Button from "../Button/button"
import { MdMessage } from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa"
import {HiMail} from "react-icons/hi"
import {useState} from 'react'
const ContactForm =()=>{

 const[name,SetName]=useState("Aakash") ;
 const[email,SetEmail]=useState("harshsingh0063@gmail.com") ;
 const[text,SetText]=useState("TEXT") ;


const onSubmit=(event)=>{
    event.preventDefault();  //stops the page from reloading 

     SetName(event.target[0].value);
     SetEmail(event.target[1].value);
     SetText(event.target[2].value);
    console.log("Name:",event.target[0].value);
    console.log("email:",event.target[1].value);
    console.log("text:",event.target[2].value);
};
const onViaCallSubmit=()=>{
     console.log("I am from Call");
     
};


    return <section
    className={styles.container}>
           <div className={styles.contact_form}>
   <div className={styles.top_btn}>
                <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
            <Button 
              onClick={onViaCallSubmit}
            text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}/>

    </div>

 <Button 
 isoutLine={true}
 text="VIA EMAIL FORM" 
 icon={<HiMail fontSize="24px"/>}/>
<form onSubmit={onSubmit}>
    <div className={styles.form_control}>
   <label htmlFor="name">Name</label>
   <input type="text" id="name" name="name" />
   </div>
    <div className={styles.form_control}>
   <label htmlFor="email">Email</label>
   <input type="email" id="email" name="email" />
   </div>
    <div className={styles.form_control}>
   <label htmlFor="text">Text</label>
   <textarea id="text" name="text" rows="8"/>
   </div>
   <div style={
    {
        display:"flex",
        justifyContent:"end",
    }
   }>
    <Button 
 text="SUBMIT BUTTON" 
/>
</div>

</form>
<div>{name+ " \n" +email+" \n"+text}</div>
</div>
           <div className={styles.contact_Image}>
            <img src="../public/images/contact.svg" alt="Contact_image" />
           </div>
    </section>;
};

export default ContactForm;
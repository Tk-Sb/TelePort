'use client'

import { useEffect, useState } from "react";
import NotificationPopup from "./notification";
import { AnimatePresence, motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function EmailForm() {

  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [state, setState] = useState('')

  const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  const sendEmail = (e) => {
    e.preventDefault();

    if (!emailPattern.test(email)) {
        setState(<NewNotification success={false} ></NewNotification>);
    }
    else {
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

      emailjs.sendForm(serviceId, templateId, e.target, userId)
      .then((result) => {
          setState(<NewNotification success={true} ></NewNotification>)
          setName('')
          setEmail('')
          setMessage('')
      }, (error) => {
          console.log(error)
          setState(<NewNotification success={false} ></NewNotification>)
      });
    }
  };

  return (
    <>
      <form onSubmit={sendEmail} className="flex flex-col gap-[5px] ">
        <label className="indent-[15px] text-[#000000] ">
          الاسم
        </label>
        <input type="text"
          name="from_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required 
          className="w-full md:w-[300px] h-[50px] border border-[#7E7E7E] bg-transparent rounded-[15px] indent-[15px] " 
          placeholder="الاسم" 
        />
        <label className="indent-[15px] text-[#000000] ">
          البريد الإلكتروني
        </label>
        <input 
          type="text" 
          name="from_contact"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
          className="w-full md:w-[300px] h-[50px] border border-[#7E7E7E] bg-transparent rounded-[15px] indent-[15px] " 
          placeholder="you@company.com" 
        />
        <label className="indent-[15px] text-[#000000] ">
          الرسالة
        </label>
        <textarea 
          type="text" 
          name="message" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required 
          className="w-full md:w-[300px] h-[150px] resize-none border border-[#7E7E7E] bg-transparent rounded-[15px] indent-[15px] " 
          placeholder="اترك لنا رسالة..." 
        />
        <button type="submit" disabled={false} className="md:text-[18px] w-full md:w-[300px] h-[50px] flex justify-center items-center rounded-[15px] border-[2px] border-[#8B5CF6] bg-[#8B5CF6] font-medium text-white transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:border-gray-600 hover:shadow-[4px_4px_0px_#6643B6] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none">
          تواصل معنا
        </button>
      </form>
      <div className="fixed bottom-4 right-4 flex flex-col items-end z-50">
        {state}
      </div>
    </>
  )
}

function NewNotification ({ success }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const id = Math.random().toString(36).substr(2, 9);
    if (success) {
      setNotifications([{ id }]);
    }
    else {
      setNotifications([{ id }]);
    }
    
  }, [success])
  
  const removeNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return(
    <>
      <AnimatePresence>
        {notifications.map((notification, index) => (
          <motion.div key={index} layout>
            <NotificationPopup
              id={notification.id}
              title={`${success? "تم إرسال الرسالة" : "خطأ"}`}
              subtitle={`${success? "شكرا على رسالتك" : "تأكد من إدخال المعلومات بالشكل الصحيح"}`}
              onClose={removeNotification}
              number={index}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  )
}
'use client'

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiBell } from 'react-icons/fi';

const notificationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 500, damping: 30 } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.5 } },
};

export default function NotificationPopup ({ id, title, subtitle, onClose }) {
  return (
    <motion.div
      className="notification-outer bg-white rounded-2xl p-2 mb-2 w-80 border border-[#8B5CF6] shadow-lg relative mr-4"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={notificationVariants}
    >
      <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#8B5CF6] text-white rounded-full flex items-center justify-center text-xs">
        
      </div>
      <div className="notification-inner bg-white rounded-2xl p-4 border border-[#8B5CF6] relative">
        <button
          type='reset'
          onClick={() => onClose(id)}
          className="absolute top-0 right-2 text-gray-500 text-xl"
        >
          &times;
        </button>
        <div dir='rtl' className="flex items-start gap-4 px-2 space-x-2">
          <div className="flex-shrink-0 w-10 h-10 bg-[#8a5cf644] rounded-xl flex items-center justify-center">
            <FiBell className="text-[#8B5CF6] text-2xl" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold">{title}</span>
            <span className="text-sm text-gray-600">{subtitle}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// function Notification () {
//   const [notifications, setNotifications] = useState([]);

//   const addNotification = () => {
//     const id = Math.random().toString(36).substr(2, 9);
//     setNotifications([...notifications, { id, message: 'شكرا على رسالتك' }]);
//   };

//   const removeNotification = (id) => {
//     setNotifications(notifications.filter((notification) => notification.id !== id));
//   };

//   return (
//     <div className="relative h-52 w-full">
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <button
//           onClick={addNotification}
//           className="px-4 py-2 bg-slate-900 text-white rounded-lg shadow-md pointer-events-auto hover:bg-slate-800"
//         >
//           Add Notification
//         </button>
//       </div>
//       <div className="fixed bottom-4 right-4 flex flex-col items-end z-50">
//         <AnimatePresence>
//           {notifications.map((notification, index) => (
//             <motion.div key={notification.id} layout>
//               <NotificationPopup
//                 id={notification.id}
//                 title={`تم إرسال الرسالة`}
//                 subtitle={notification.message}
//                 onClose={removeNotification}
//                 number={index + 1}
//               />
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

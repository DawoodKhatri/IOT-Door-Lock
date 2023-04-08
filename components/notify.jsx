import React, { useRef } from "react";
import 'animate.css';

const Notify = ({ notification, setNotification }) => {
  const notificationRef = useRef();
  return (
    <>
      {notification && (
        <div
          ref={notificationRef}
          className={`${
            notification.danger ? "bg-red-600" : "bg-blue-600"
          } animate__animated animate__fadeInRight bottom-0 right-0 fixed text-white w-fit px-6 py-4 border-0 rounded-2xl mb-4 mr-4 flex`}
        >
          <span className="my-auto mr-8 font-semibold text-xl">
            {notification.text}
          </span>
          <button
            className="bg-transparent my-auto  text-lg font-medium outline-none focus:outline-none"
            onClick={() => {
              notificationRef.current.classList.add("animate__fadeOutRight");
              setTimeout(() => {
                setNotification();
              }, 2000);
            }}
          >
            X
          </button>
        </div>
      )}
    </>
  );
};

export default Notify;

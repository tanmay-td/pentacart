import React from 'react';

  import { ToastContainer, toast, Zoom } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  export const enterAllFieldsToastMessage = (msg)=>{
    toast.error(msg, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
  } 
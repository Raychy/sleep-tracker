/* eslint-disable prettier/prettier */
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export function successToastAlert(msg) {
     toast.success(msg, {
          autoClose: 2000,
          theme:'colored',
          toastStyle:{
               backgroundColor:'#00CA6B',
               color:'white',  
               fontSize:'15px',                        
          },
          progressStyle:{
               color:'white',
               backgroundColor:'white',
               caretColor:'white',
               scrollbarColor:'white'
          },
     });
}

export function failedToastAlert(msg) {
     toast.error(msg, {
          autoClose: 2000,
          theme:'colored',
          toastStyle:{
               backgroundColor:'#EE325B',
               color:'white',  
               fontSize:'15px',
                         
          },
          progressStyle:{
               color:'white',
               backgroundColor:'white',
               caretColor:'white',
               scrollbarColor:'white'
          },
     });
}
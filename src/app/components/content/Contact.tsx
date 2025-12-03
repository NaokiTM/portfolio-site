import React from 'react'
import { useState } from 'react';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "3a2dc76c-6388-4be3-9bf1-8e99c95553b6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
<div className={`leading-none tracking-tighter pb-8`}>
  <div className='text-7xl leading-none tracking-tighter font-semibold'>Contact</div>
  <div className='mt-12 flex flex-row space-x-10'>
    <div className='flex-1 flex text-xl'>
      Thank you for deciding to reach out! drop me a message and I will aim to reply in at most 2 days. Feel free to visit my Github or LinkedIn too!
    </div>

    <form onSubmit={onSubmit} className='flex flex-col items-center justify-center flex-1'>
      <div className="w-full max-w-xl space-y-4"> 
        <div className='flex space-x-4 w-full'>
          <input type="text" name="name" required placeholder="Name" className='outline-none bg-black border-2 border-neutral-500 w-1/2 p-3'/>
          <input type="email" name="email" required placeholder="Email" className='outline-none border-2 bg-black border-neutral-500 w-1/2 p-3'/>
        </div>
        
        <div>
          <textarea name="message" required placeholder="Your Message" className=' resize-none outline-none bg-black border-2 border-neutral-500 w-full h-[200px] p-3'></textarea>
        </div>
      </div>
      
      <button type="submit" className='border-2 border-neutral-500 rounded-xl p-2 mt-8 w-32 hover:bg-neutral-800 transition'>
        Submit
      </button>
      <p className='mt-4'>{result}</p>
    </form>

    <div className='flex-1'>

    </div>
  </div>
  <div className='h-[300px]'>

  </div>
</div>
  )
}
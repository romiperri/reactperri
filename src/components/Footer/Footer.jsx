import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
    return (
        <div className="bg-slate-900 text-center bg-black text-white font-extralight text-xs py-3 mt-10 ">
            <p className="mr-1 text-xs text-slate-300">© 2021 handmade with ♥️ by </p><a className='text-xs text-slate-200	' href="https://www.linkedin.com/in/romina-perri-b015a410a/">Romina Perri</a>
            <div className='flex justify-center p-2 gap-2 '>
                <button><FacebookIcon /></button> 
                <button><WhatsAppIcon /></button>
            </div>
        </div>)
}

export default Footer
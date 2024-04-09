"use client"
import Link from "next/link";
import {linkWhatsapp, linkPhone}  from "@/app/contstants/const"
import { FaWhatsapp } from "react-icons/fa6";




export default function Contact() {

    function isMobile() {
        try {
            if(navigator) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
         } 
            
        } catch (error) { } 

        return false
   }

function modal() {
    console.log("s")
}


    return (
        <div className="flex justify-center gap-3 col-span-2">
            {
                // isMobile() ? 
                <Link href={linkWhatsapp}><span className="border p-1 flex items-center text-2xl" ><FaWhatsapp /></span></Link> 
                // :
                // <span onClick={modal} className="border p-1 flex items-center text-2xl cursor-pointer" ><FaWhatsapp /></span>
            } 
            <span className="border p-1 black"><a href={linkPhone}>+7 (985) 630-93-36</a></span>
        </div>
    )
}
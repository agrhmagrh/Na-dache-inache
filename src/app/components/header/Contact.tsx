"use client"
import Link from "next/link";
import {linkWhatsapp, linkPhone}  from "@/app/contstants/const"
import { FaWhatsapp } from "react-icons/fa6";
import { TypeDesktopProps, TypeMobileProps } from "@/types";




export default function Contact({type, isMain}: TypeMobileProps | TypeDesktopProps) {
    
    function isMobile() {
        try {
            if(navigator) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
         } 
            
        } catch (error) { } 

        return false
   }
    return (
        <div className={`flex ${type == "desktop" ? "justify-center" : "justify-end px-10 col-span-6"} gap-3 ${isMain ? "col-span-2" : "col-span-6"}`}>
            {
                // isMobile() ? 
                <Link href={linkWhatsapp}><span className="border p-1 flex items-center text-2xl md:text-md" ><FaWhatsapp /></span></Link> 
                // :
                // <span onClick={modal} className="border p-1 flex items-center text-2xl cursor-pointer" ><FaWhatsapp /></span>
            } 
            <span className="border p-1 black md:text-sm text-nowrap"><a href={linkPhone}>+7 (985) 630-93-36</a></span>
        </div>
    )
}
"use client";

import Image from "next/image";
import RiseLogo from "@/public/RiseLogo.svg"
import Link from "next/link";
import ManageIcon from "@/public/ManageIcon.svg"
import TickIcon from "@/public/TickIcon.svg"
import TickClosedIcon from "@/public/TickClosedIcon.svg"
import { useState } from "react";

export default function NavMenu() {

  const [OpenManage,SetOpenManage] = useState(false)

  return (
    <div className="h-screen w-64 flex items-center flex-col border-r border-[#CBD0DD]" >
      <Link href="/" >
      <Image src={RiseLogo} alt="Rise Logo" />
      </Link>
      <div> 
          <ul>
            <li className="mb-4 flex gap-3 cursor-pointer " onClick={ () => SetOpenManage(!OpenManage) } > 
              <Image src={ManageIcon} alt="ManageIcon" width={22} height={17} /> 
              <h1> Manage </h1> 
              <Image className="ml-9" src={ OpenManage ? TickIcon : TickClosedIcon } alt="TickIcon" />  
            </li>

            {OpenManage && (
              <ul className="" > 
                <li className="" > <Link href="/manage/clients" > Clients </Link> </li>
              </ul>
            )}

          </ul>
      </div>
    </div>
  );

}

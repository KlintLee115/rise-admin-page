"use client";

import Image from "next/image";
import RiseLogo from "@/public/RiseLogo.svg"
import Link from "next/link";

export default function NavMenu() {
  return (
    <div className="h-screen w-64 flex items-center flex-col border-r border-[#CBD0DD]" >
      <Link href="/" >
      <Image src={RiseLogo} alt="Rise Logo" />
      </Link>
      <div className="" > 
          <ul>
            <li className="mb-4">
              <Link href="/manage/clients"> Clients </Link>
            </li>
          </ul>
      </div>
    </div>
  );

}

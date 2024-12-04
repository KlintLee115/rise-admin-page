"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import PageName from "@/app/components/pagename";

export default function Clients() {

  return (
    <div>
      <PageName PageName="Clients" />
    </div>
  );

}

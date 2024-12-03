import Image from "next/image";
import RiseLogo from "@/public/RiseLogo.svg"

export default function Login() {
  return (
    <div className="justify-center flex h-screen w-screen" > 
        <Image src={RiseLogo} alt="RiseLogo" /> 
    </div>
  );
}

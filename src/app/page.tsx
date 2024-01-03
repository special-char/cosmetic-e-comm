import Addcart from "@/components/Addcart/index";
import Homenav from "@/components/Homenav";
import Image from "next/image";
import Link from "next/link";





export default function Home() {
  return (
    <main>
     <div>
       <Homenav />
       <Addcart />
     </div>
    </main>
  );
}

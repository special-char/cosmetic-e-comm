import Homebaner from "@/components/Homebaner";
import Homenav from "@/components/Homenav";
import Items from "@/components/Item";
import Productbrands from "@/components/ProductBrands";
import Productaddinfo from "@/components/Productaddcart";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <main>
      <Homenav />
       <Homebaner />
       <Productbrands />
       <Items />
       <Productaddinfo />
       
       
    </main>
  );
}

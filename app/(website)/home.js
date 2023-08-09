import Image from "next/image";
import Logo from "../../public/img/kartewoodworks.svg";

export default function Home() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <Image
          src={Logo}
          alt="Karte Woodworks"
          unoptimized={true}
          width="200"
        />
        <br />- 準備中 -
      </div>
    </>
  );
}

import Image from "next/image";
import BG from "../../public/img/bg.jpg";
import Logo from "../../public/img/kartewoodworks.svg";

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full">
        <div className="t-0 l-0 absolute -z-10 h-full w-full">
          <Image
            src={BG}
            alt="Karte Woodworks"
            className="h-full w-full object-cover opacity-50"
          />
        </div>
        <div className="z-10 flex h-full w-full flex-col items-center justify-center">
          <Image
            src={Logo}
            alt="Karte Woodworks"
            unoptimized={true}
            width="200"
          />
          <br />- 準備中 -
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import BG from "../../public/img/bg.jpg";
import Logo from "../../public/img/kartewoodworks.svg";

export default function Home() {
  return (
    <>
      <div className="relative w-full" style={{ height: "90vh" }}>
        <div
          className="t-0 l-0 absolute -z-10 w-full"
          style={{ height: "90vh" }}>
          <Image
            src={BG}
            alt="Karte Woodworks"
            className="h-full w-full object-cover opacity-50"
            priority={true}
            placeholder="blur"
          />
        </div>
        <div
          className="md:gap-18 z-10 flex w-full flex-col items-center justify-center gap-12"
          style={{ height: "80vh" }}>
          <div>
            <Image
              src={Logo}
              alt="Karte Woodworks"
              unoptimized={true}
              width="250"
            />
          </div>
          <div className="flex flex-col gap-4 text-sm md:flex-row md:gap-6 md:text-base">
            <a
              className="flex w-64 items-center justify-center gap-2 rounded-full bg-white bg-opacity-50 px-5 py-3 font-medium uppercase leading-normal shadow transition duration-150 ease-in-out hover:shadow-md focus:shadow-md focus:outline-none focus:ring-0 active:shadow-md md:w-72"
              href="https://www.instagram.com/karte_woodworks/"
              target="_blank"
              rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.725.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              インスタで活動を確認
            </a>
            <a
              className="flex w-64 items-center justify-center gap-2 rounded-full bg-white bg-opacity-50 px-5 py-3 text-sm font-medium uppercase leading-normal shadow transition duration-150 ease-in-out hover:shadow-md focus:shadow-md focus:outline-none focus:ring-0 active:shadow-md md:w-72"
              href="https://karte.theshop.jp/"
              rel="noreferrer"
              target="_blank">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512">
                <path d="M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z" />
              </svg>
              ショップを見る
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

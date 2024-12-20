import Image from "next/image";
import Scramble from "./components/scramble";
import Find from "./components/find";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center px-8 sm:px-20 font-[family-name:var(--font-geist-mono)] bg-white text-black relative">

      {/* Vertical Text on Right */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
        <p className="text-vertical-right text-xs transform rotate-90 origin-top-right">@AWHMAISY</p>
      </div>

      {/* Header */}
      <header className="text-center my-4 w-full max-w-[300px]">
        <div className="w-full h-32 relative mb-2">
          <Image
            src="/JAC.png"
            alt="Description of image"
            fill
            className="object-contain p-8"
            priority
          />
        </div>
      </header>
      {/* Main Content */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-32 w-full max-w-3xl">
        {/* Left Column */}
        <div className="space-y-4 text-[10px] md:text-xs text-justify">
        <Scramble />

          {/* Photo Gallery */}
          <div className="mt-8 space-y-0">
            <Image
              src="/image 35.jpg"
              alt="Gallery Image 35"
              width={150}
              height={150}
              className="object-cover w-full"
            />
            <Image
              src="/image 36.jpg"
              alt="Gallery Image 36"
              width={150}
              height={150}
              className="object-cover w-full"
            />
            <p>
              player of games by grimes & anton tammi
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4 text-[10px] md:text-xs text-justify">
          <h2 className="font-bold">currently</h2>
            <p>i<br/>building a DEX<br/>hahahhahah yeah</p>
            <p>ii<br/>accelerating U.S. ISR LOEs<br/>and building force-multipliers at PM</p>
            <p>iii<br/>investing in defense and<br/>cyber at [shh]</p>
          <br />          <br />          <br />          <br />
          <h2 className="font-bold mt-4">do you seek to find?</h2>
          <p>
            <a href="https://awhmaisy.substack.com" className="hover:italic">i write</a>
            <br />
            <a href="https://are.na/mei-higashi" className="hover:italic">i collect images</a>
            <br />
            <a href="https://pinterest.com/awhmaisy" className="hover:italic">and more images</a>
            <br />
            <a href="https://open.spotify.com/user/msf84l3xh0uyy5vvf1nn0idon?si=0d9006fa10e149b7" className="hover:italic">i jump around</a>
            <br />
            <a>i render (&& will show you soon)</a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="space-y-4 text-[10px] md:text-xs mt-8 fixed bottom-0 w-full bg-white">
        <p className="text-center">C:/PRECISION_MACHINERY/MAISYWORLD/CONCEPTUAL</p>
      </footer>
    </div>
  );
}

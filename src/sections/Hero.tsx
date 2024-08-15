import Button from "@/components/Button";
import startsBg from '@/assets/stars.png'
import Image from "next/image";

export const Hero = () => {
  return (
      <section 
        className="h-[492px] flex items-center w-full"
        style={{
          backgroundImage: `url(${startsBg.src})`
        }}
      >
        <div className="absolute w-64 h-64 bg-purple-500 rounded-full border border-white/20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]">
        </div>
        <div className="absolute w-[344px] h-[344px] border rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 ">
          <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2">
          </div>
          <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2">
          </div>
        </div>
        <div className="container relative">
          <h1 className="text-8xl font-semibold tracking-tighter bg-white text-center bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138.5))] bg-clip-text text-transparent">AI SEO</h1>
          <p className="text-lg text-white/70 my-5 text-center">
            Elevate your site's visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
          </p>
          <div className="justify-center flex">
            <Button>
              Join waitlist
            </Button>
          </div>
        </div>
      </section>
    );
};

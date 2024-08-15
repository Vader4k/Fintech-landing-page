import Button from "@/components/Button";
import startsBg from '@/assets/stars.png'
import Image from "next/image";

export const Hero = () => {
  return (
      <section 
        className="h-[492px] md:h-[800px] flex items-center w-full overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
        style={{
          backgroundImage: `url(${startsBg.src})`
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"/>
          {/* start planet */}
        <div className="absolute size-64 md:size-96 bg-purple-500 rounded-full border border-white/20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"/>
        {/* end planet */}
        {/* ring 1 */}
        <div className="absolute size-[344px] md:size-[580px] border border-white rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 ">
          <div className="absolute h-5 w-5 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2">
          </div>
          <div className="absolute h-5 w-5 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2">
          </div>
          <div className="absolute h-5 w-5 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
            <div className="h-2 w-2 bg-white rounded-full"/>
          </div>
        </div>
        {/* end of ring1 */}
        {/* start of ring 2 */}
        <div className="absolute size-[444px] md:size-[780px] rounded-full border border-dashed border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
        {/* end of ring 2 */}
        {/* start of ring 3 */}
        <div className="absolute size-[544px] md:size-[980px] rounded-full border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute h-5 w-5 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"/>
          <div className="absolute h-5 w-5 left-full bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"/>
        </div>
        {/* end of ring 3 */}
        <div className="container relative mt-16">
          <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white text-center bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138.5))] bg-clip-text text-transparent">AI SEO</h1>
          <p className="text-lg md:text-xl text-white/70 my-5 text-center max-w-xl mx-auto">
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

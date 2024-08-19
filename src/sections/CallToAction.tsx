"use client"
import Button from "@/components/Button";
import starsBg from '@/assets/stars.png'
import gridLines from '@/assets/grid-lines.png'
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { RefObject, useEffect, useRef } from "react";

const useRelativeMouseValue = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();
    mouseX.set(event.clientX - left)
    mouseY.set(event.clientY - top)
  }

  useEffect(() => {
    const element = to.current;
    if (!element) return;

    element.addEventListener('mousemove', updateMousePosition);

    return () => {
      element.removeEventListener('mousemove', updateMousePosition);
    };
  }, [to]);


  return [mouseX, mouseY]
}


export const CallToAction = () => {

  const scrollRef = useRef<HTMLElement>(null)
  const divRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start']
  })

  const translateY = useTransform(scrollYProgress, [0,1], [-300, 300])

  const [mouseX, mouseY] = useRelativeMouseValue(divRef)

  const maskImage = useMotionTemplate `radial-gradient(ellipse 50% 50% at ${mouseX}px ${mouseY}px,black,transparent)`


  return (
    <motion.section className="py-20 md:py-24" ref={scrollRef}>
      <div className="container">
        <motion.div
          ref={divRef} 
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative group" 
          style={{
            backgroundImage: `url(${starsBg.src})`,
            backgroundPositionY: translateY
          }}
          animate={{
            backgroundPositionX: starsBg.width
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div 
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(ellipse_50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          />
          <motion.div 
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{
              backgroundImage: `url(${gridLines.src})`,
              maskImage
            }}
          />
          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">AI-driven SEO for everyone.</h2>
            <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight">Achieve clear, impactful results without the complexity.</p>
            <div className="flex justify-center mt-8">
              <Button>
                Join waitlist
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

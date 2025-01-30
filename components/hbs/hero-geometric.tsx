"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type React from "react"; // Import React
import toast from "react-hot-toast";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-sm",
            "bg-gradient-to-r from-[#C90016]/10 to-transparent",
            "backdrop-blur-[2px] border border-[#C90016]/20",
            "after:absolute after:inset-0",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(201,0,22,0.1),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export default function HeroGeometric() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const emailInputRef = useRef<HTMLInputElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (emailInputRef.current?.value) {
        const email = emailInputRef.current.value;
        if (!email.endsWith("@mba2026.hbs.edu")) {
          toast.error(
            "Only @mba2026.hbs.edu email addresses are allowed, sorry!"
          );
          return;
        }

        console.log("Submitted email:", email);
        setIsSubmitted(true);
        emailInputRef.current.value = ""; // Clear the input
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#C90016]/[0.02] via-transparent to-[#C90016]/[0.02]" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate="visible" className="mb-8 md:mb-12">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UugDg3fAK18rrpj1w2HecIuZCxhBN4.png"
              alt="Harvard Business School"
              width={400}
              height={86}
              className="mx-auto"
            />
          </motion.div> */}

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tight text-gray-900">
              Why are you still using ChatGPT every day?
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              Enter your email to get tomorrow's case summaries and assignment
              question answers{" "}
              <span className="text-[#C90016]">
                delivered straight to your inbox
              </span>
              .
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            {!isSubmitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
              >
                <Input
                  type="email"
                  placeholder="your.name@mba2026.hbs.edu"
                  ref={emailInputRef}
                  required
                  pattern=".+@mba2026\.hbs\.edu"
                  className="border-gray-300"
                />
                <Button
                  type="submit"
                  className="bg-[#C90016] text-white hover:bg-[#A80012] transition-colors"
                >
                  Subscribe
                </Button>
              </form>
            ) : (
              <p className="text-[#C90016] font-medium">
                Thank you for signing up. If you don't receive an email in the
                next 1-2 minutes, please check your spam folder.
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

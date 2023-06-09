import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex text-center items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-20 h-20 bg-dark text-light justify-center items-center rounded-full text-xl font-semibold p-3 border border-solid border-transparent dark:border-light"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212"
          ],
          transition: { duration: 1, repeat: Infinity }
        }}
      >
        EZE DAS
      </MotionLink>
    </div>
  );
};

export default Logo;

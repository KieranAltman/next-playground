"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useInterval } from "usehooks-ts";

const carouselList = [
  [
    "/ChatGPT-enterprise/logo-black-bcg.svg",
    "/ChatGPT-enterprise/logo-black-bill-melinda-gates.svg",
    "/ChatGPT-enterprise/logo-black-greystar.png",
    "/ChatGPT-enterprise/logo-black-krafton.svg",
    "/ChatGPT-enterprise/logo-black-pennsylvania.svg",
  ],
  [
    "/ChatGPT-enterprise/logo-black-carlyle.svg",
    "/ChatGPT-enterprise/logo-black-estee-lauder.svg",
    "/ChatGPT-enterprise/logo-black-jetblue-travel-products.svg",
    "/ChatGPT-enterprise/logo-black-syneos-health.svg",
    "/ChatGPT-enterprise/logo-black-zendesk.svg",
  ],
  [
    "/ChatGPT-enterprise/logo-black-moderna.svg",
    "/ChatGPT-enterprise/logo-black-lowes.svg",
    "/ChatGPT-enterprise/logo-black-shopify.svg",
    "/ChatGPT-enterprise/logo-black-klarna.svg",
    "/ChatGPT-enterprise/riot.svg",
  ],
  [
    "/ChatGPT-enterprise/logo-black-amgen.svg",
    "/ChatGPT-enterprise/logo-black-pwc.svg",
    "/ChatGPT-enterprise/logo-black-matchgroup.png",
    "/ChatGPT-enterprise/logo-black-samsara.svg",
    "/ChatGPT-enterprise/logo-black-softbankgroup.svg",
  ],
  [
    "/ChatGPT-enterprise/logo-black-bain.svg",
    "/ChatGPT-enterprise/logo-black-university-of-oxford.svg",
    "/ChatGPT-enterprise/logo-black-genmab.svg",
    "/ChatGPT-enterprise/logo-black-syneos-health.svg",
    "/ChatGPT-enterprise/logo-black-genmab.svg",
  ],
];
const carouselCount = 5;

export default function Page() {
  const [isPlaying, setPlaying] = useState(false);
  const [order, setOrder] = useState(0);
  useInterval(
    () => {
      const newOrder = (order + 1) % carouselCount;
      setOrder(newOrder);
    },
    isPlaying ? 3000 : null
  );

  function pageVisibilityHandler() {
    if (document.visibilityState === "hidden") {
      setPlaying(false);
    } else {
      setPlaying(true);
    }
  }

  useEffect(() => {
    // @note: mounted
    setPlaying(true);
    document.addEventListener("visibilitychange", pageVisibilityHandler);

    // @note: unmounted
    return () => {
      setPlaying(false);
      document.removeEventListener("visibilitychange", pageVisibilityHandler);
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-white text-black flex items-center justify-center">
      <div className="grid max-w-screen-lg w-full grid-cols-5 gap-6 mx-auto">
        {carouselList.map((carousels, carouselsIndex) => {
          return (
            <div className="relative aspect-square w-full">
              <AnimatePresence>
                <motion.div
                  key={carousels[order] + order}
                  initial={{ opacity: 0, translateY: 32, scale: 1.1, filter: "blur(6px)" }}
                  animate={{
                    opacity: 1,
                    translateY: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: { ease: "easeOut", duration: 0.5, delay: carouselsIndex * 0.1 },
                  }}
                  exit={{
                    opacity: 0,
                    translateY: -32,
                    scale: 0.9,
                    filter: "blur(6px)",
                    transition: { ease: "easeIn", duration: 0.3, delay: carouselsIndex * 0.1 },
                  }}
                  className="absolute inset-0 p-4 opacity-0"
                >
                  <img src={carousels[order]} alt={carousels[order]} className="w-full h-full" />
                </motion.div>
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

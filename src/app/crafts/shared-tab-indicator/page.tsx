"use client";

import clsx from "clsx";
import { useState } from "react";
import { motion } from "framer-motion";

type Direction = "horizontal" | "vertical";

export default function Page() {
  const [direction, setDirection] = useState<Direction>("horizontal");

  const tabs = ["Home", "Stake", "Assets", "Dashboard"];
  const [tab, setTab] = useState(tabs[0]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center pb-24">
      <motion.button
        layout
        className="mb-12 text-xs transition-opacity hover:opacity-50"
        onClick={() => setDirection((d) => (d === "horizontal" ? "vertical" : "horizontal"))}
      >
        Toggle Direction
      </motion.button>

      <motion.ul
        layout
        className={clsx(
          "flex gap-2 text-xs",
          direction === "horizontal" ? "flex-row items-center" : "flex-col items-start"
        )}
      >
        {tabs.map((item) => {
          return (
            <motion.li
              layout
              key={item}
              onClick={() => setTab(item)}
              className={clsx(
                "relative cursor-pointer py-[5px] px-3 transition-colors",
                tab === item ? "text-zinc-800" : "text-zinc-300 hover:text-zinc-800"
              )}
            >
              {tab === item && (
                <motion.div
                  layoutId="tabIndicator"
                  className="absolute inset-0 bg-zinc-900/5 rounded-md"
                />
              )}
              <span className="">{item}</span>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}

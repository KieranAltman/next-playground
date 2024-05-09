"use client";

import Image from "next/image";
import Link from "next/link";
import "./page.css";

const resources = [
  "https://framerusercontent.com/images/5lkPW6aHsAseUDp1TbL58kreM3Y.jpg",
  "https://framerusercontent.com/images/y5bdjEcTF5v7SYa93dEZjNpS1IA.png",
  "https://framerusercontent.com/images/fmVc9VYwiWKBsMM1691J8Kjo.png",
  "https://framerusercontent.com/images/STnMeWIhVqnDlvCukqt89SIJs.png",
  "https://framerusercontent.com/images/94VRDAnjV7tA4DUcYSs1JxwUOc.jpg",
  "https://framerusercontent.com/images/Qi0311yW9so13GaaAKYQXKIOGk.png",
  "https://framerusercontent.com/images/9TSYHt1WaAgUxkPc1nt9i1Uc.png",
  "https://framerusercontent.com/images/AtfjxOmcqcxnsa8Cral2nCsjho.png",
  "https://framerusercontent.com/images/HORAEsZhkZHBOmviyNxRyXg8xhs.png",
  "https://framerusercontent.com/images/qkkYn6AAT4h8ZGZdDr8JPYTW5Yk.jpg",
  "https://framerusercontent.com/images/TIz9SX8FMatGjhO2Ae1w0aD9zo.png",
  "https://framerusercontent.com/images/r07fD48rzsNnP4VwLMCGv3QS8.png",
  "https://framerusercontent.com/images/k5Gd3XaoJiuCfhed5UMMpqA5apg.png",
  "https://framerusercontent.com/images/bUJp54Zsg98coNgnxZ4uPUtYUVo.jpg",
  "https://framerusercontent.com/images/kmv7nIDfOFxDM1C8NmAJUf1bWw8.jpg",
  "https://framerusercontent.com/images/pljYF798V7Yr6rXcp4Qiw6RcG9Q.png",
  "https://framerusercontent.com/images/2kWiycaTvAZ0yhNPZPPkTINS8g0.jpg",
  "https://framerusercontent.com/images/HfCEH0rvwJvHtLmhZd6O3uRjg.png",
  "https://framerusercontent.com/images/JuLkRWKFpKT2OpD4k9jzL4ILnD8.png",
  "https://framerusercontent.com/images/1U8tBKJfgTdHbCyppWe5ulNRs.jpg",
  "https://framerusercontent.com/images/XWkktGhEkqe6GSMFdbMSfLDiPr0.png",
  "https://framerusercontent.com/images/C3Fns5HnEjr8tBiSzvR4aRA5Qn0.jpg",
  "https://framerusercontent.com/images/RaO5TleHkRwVcNUzF3u8jp9I1sc.png",
  "https://framerusercontent.com/images/72NJ6I5PGAYWyVWFaDEVA3mGY.jpg",
  "https://framerusercontent.com/images/5rpHvpxQzFfz9b4XuBzVs6yddc.jpg",
  "https://framerusercontent.com/images/R6mBvQaD7Xdzf28Y40CATETNDE.jpg",
  "https://framerusercontent.com/images/jrVm1lW4rXQKYyVQzCpbl6BrZI.jpg",
  "https://framerusercontent.com/images/fgcA7RQa4pFe7DkZb6iyIZQc.png",
  "https://framerusercontent.com/images/xQQeXeJVEwiG3Fx8OQLeGf4Nz0.jpg",
  "https://framerusercontent.com/images/zYhxvgYOd2dJyzwc8jG8JtFIz0s.png",
];

export default function Page() {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-black">
      <div
        className="w-[3000px] h-[130vh] absolute top-[calc(50%-65vh)] left-[calc(50%-1500px)]"
        style={{
          transform: "perspective(1200px) rotateX(30deg) translateY(0px) translateZ(0px)",
          mask: "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgb(0,0,0) 50%,rgba(0,0,0,0) 80%)",
        }}
      >
        <div className="w-full srcoll-background">
          {[...new Array(2)].map((_, index) => (
            <ul key={"wrap" + index} className="w-full h-full grid grid-cols-10 gap-2 py-1">
              {resources.map((item) => {
                return (
                  <li key={item + "1"}>
                    <a href={item} target="_blank" className="item block relative">
                      <Image
                        src={item}
                        width={600}
                        height={960}
                        alt="Picture"
                        className="w-full h-full object-cover object-center rounded-md"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>

      <Link
        href="/crafts"
        className="relative py-2 px-4 z-10 text-white bg-zinc-800 rounded-lg text-sm hover:bg-white hover:text-black transition-colors"
      >
        Back
      </Link>
    </div>
  );
}

import { ComponentProps } from "react";

import { cn } from "@/lib/utils/cn";

const Composer = (props: ComponentProps<"section">) => {
  return (
    <section
      {...props}
      className={cn("mx-[70px] grid grid-cols-18 gap-5", props.className)}
    >
      {props.children}
    </section>
  );
};

const Heading = (props: ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={cn("mt-32 col-start-4 col-span-12", props.className)}
    >
      <h1 className="font-londrina text-8xl uppercase">{props.children}</h1>
      <div>
        <svg
          width="64"
          height="12"
          viewBox="0 0 64 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.00009 8.29822C3.46739 7.72295 7.2033 5.39996 10.6238 3.53288C11.8021 2.88969 13.0764 2.93469 13.9409 3.11974C16.0154 3.56379 16.3302 6.87922 17.6126 8.09472C19.5297 9.9119 22.8332 7.31241 25.0247 6.17445C27.1229 5.08499 29.3704 4.20362 31.6851 3.38785C34.9754 2.22821 38.4295 4.03306 44.3289 4.66195C50.8987 4.00247 54.83 3.23564 56.4328 3.23493C57.516 3.2868 59.1471 3.44472 60.8276 3.60743"
            stroke="#FD2A2A"
            stroke-width="6"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

const Content = (props: ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={cn(
        "pb-32 col-start-4 col-span-12 font-mansalva text-5xl",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};

const Footer = (props: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "flex justify-center pb-8 col-start-1 col-span-18",
        props.className,
      )}
    >
      <svg
        width="186"
        height="28"
        viewBox="0 0 186 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.0011 15.5186C7.16626 14.4529 17.1094 12.3428 24.2231 9.31082C25.9382 8.5798 27.7665 8.42098 29.3757 8.94318C36.7801 11.3459 38.0934 20.1224 40.5711 22.2538C45.6954 26.6618 55.816 16.9679 63.8302 14.6341C73.9932 11.6745 87.7874 7.37651 95.6258 4.86682C99.0674 3.76488 102.739 3.79568 105.931 4.49907C113.352 6.13447 121.187 12.6624 133.794 12.8596C142.24 12.9916 153.137 8.07984 164.348 6.10833C167.375 5.92717 170.892 5.92717 173.583 6.103C176.274 6.27883 178.032 6.63049 181.975 8.05866"
          stroke="#FD2A2A"
          stroke-width="8"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export { Composer, Heading, Content, Footer };

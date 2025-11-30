"use client";

import * as Section from "@/components/shared/Section";
import { cn } from "@/lib/utils/cn";
import { useState, type ComponentProps, type MouseEvent } from "react";

interface Streamer {
  image: string;
  socials: {
    youtube: string;
    instagram: string;
  };
}

const streamers: Streamer[] = [
  {
    image: "abc",
    socials: {
      youtube: "ac",
      instagram: "bc",
    },
  },
  {
    image: "abc",
    socials: {
      youtube: "ac",
      instagram: "bc",
    },
  },
  {
    image: "abc",
    socials: {
      youtube: "ac",
      instagram: "bc",
    },
  },
];

const positions = [0, 1, 2] as const;

interface StreamerCardProps extends ComponentProps<"div"> {
  streamer: Streamer;
  position: (typeof positions)[number];
}

const StreamerCard = (props: StreamerCardProps) => {
  const colStart = `col-start-${4 * props.position + 1}`;

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("col-span-3 relative", colStart)}
    >
      <div
        className={cn(
          "aspect-video border-white border-4 -rotate-3 rounded-4xl transition-all duration-100 bg-blue-200",
          hovered && "-rotate-6",
        )}
      ></div>
      <div className="absolute font-mansalva text-2xl bg-white text-black px-10 py-4 rounded-2xl top-4 left-0 -translate-x-[80%] hover:bg-red-300">
        visit youtube
      </div>
    </div>
  );
};

export const Streamers = () => {
  return (
    <Section.Composer>
      <Section.Heading>Streamers</Section.Heading>
      <Section.Content>
        <p>
          We live rent-free on your second monitor. Roster so diverse, we bet
          you’re watching one of us at any given time.
        </p>
        <div className="grid grid-cols-11 gap-5 pt-24">
          {streamers.map((streamer, i) => (
            <StreamerCard
              key={i}
              streamer={streamer}
              position={positions[i % 3]}
            />
          ))}
        </div>
      </Section.Content>
      <Section.Footer />
    </Section.Composer>
  );
};

"use client";

import * as Section from "@/components/shared/Section";
import { cn } from "@/lib/utils/cn";
import DhimanImg from "@/assets/dhiman.jpg";
import PingalImg from "@/assets/pingal.jpg";
import { useState, type ComponentProps, type MouseEvent } from "react";
import Image, { StaticImageData } from "next/image";

interface Streamer {
  name: string;
  image: StaticImageData;
  socials: {
    youtube: string;
    instagram: string;
  };
}

const streamers: Streamer[] = [
  {
    name: "Dhiman",
    image: DhimanImg,
    socials: {
      youtube: "ac",
      instagram: "bc",
    },
  },
  {
    name: "Bondhu",
    image: PingalImg,
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
      className="relative"
    >
      <a
        className={cn(
          "block absolute font-mansalva transition-all duration-300 text-2xl bg-white text-black px-10 py-4 rounded-2xl top-1/2 left-1/2 -translate-1/2 hover:bg-accent-red hover:text-white  rotate-12",
          hovered && "translate-0 -left-30 top-4",
        )}
        href={props.streamer.socials.youtube}
      >
        youtube
      </a>
      <a
        className={cn(
          "absolute font-mansalva transition-all duration-300 text-2xl bg-white text-black px-10 py-4 rounded-2xl top-1/2 left-1/2 -translate-1/2 hover:bg-accent-red hover:text-white -rotate-12",
          hovered && "translate-0 -left-30 top-24",
        )}
        href={props.streamer.socials.youtube}
      >
        instagram
      </a>
      <div
        className={cn(
          "aspect-video border-white border-4 -rotate-3 rounded-4xl transition-all duration-100 overflow-hidden",

          hovered && "-rotate-6",
        )}
      >
        <Image
          src={props.streamer.image}
          className="h-full w-full object-cover"
          alt={props.streamer.name}
        />
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
        <div className="grid grid-cols-3 gap-36 pt-24">
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

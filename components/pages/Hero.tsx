import * as Section from "@/components/shared/Section";

export const Hero = () => {
  return (
    <Section.Composer className="min-h-screen flex flex-col gap-0">
      <Section.Content className="flex-1 flex flex-col items-center justify-center gap-11 pb-0">
        <h1 className="font-londrina uppercase text-[150px] leading-[118px] text-center h-full">
          <span>We play the</span>
          <br />
          <span className="text-accent-red">long game</span>
        </h1>
        <p className="text-center font-mansalva text-4xl">
          &quot; Streaming can&apos;t be a{" "}
          <span className="text-accent-red">full-time job</span>.&quot;
          <br />
          <span>Guess you haven&apos;t heard of 6707 then.</span>
        </p>
      </Section.Content>
      <Section.Footer />
    </Section.Composer>
  );
};

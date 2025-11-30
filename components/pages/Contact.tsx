import * as Section from "@/components/shared/Section";

export const Contact = () => {
  return (
    <Section.Composer>
      <Section.Heading>Contact</Section.Heading>
      <Section.Content>
        <p>
          We love chatting. Reach out for any and all queries. Simply mail us at{" "}
          <a
            href="mailto:chat@6707group.com"
            target="_blank"
            className="text-accent-red underline"
          >
            chat@6707group.com
          </a>{" "}
          and we’ll get back to you.
        </p>
      </Section.Content>
    </Section.Composer>
  );
};

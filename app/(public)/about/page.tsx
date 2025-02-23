import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About page",
  authors: { name: "Angel Aguero" },
  keywords: ["About", "Nextjs", "TypeScript"],
};

const About = () => {
  return (
    <>
      <h2>About</h2>
      <p>This is the about page</p>
    </>
  );
};
export default About;

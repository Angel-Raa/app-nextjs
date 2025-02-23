import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page",
  authors: { name: "Angel Aguero" },
  keywords: ["Contact", "Nextjs", "TypeScript"],
};

const Contact = () => {
  return (
    <>
      <div>
        <span>Contact</span>
      </div>
    </>
  );
};

export default Contact;

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Pricing page",
  authors: { name: "Angel Aguero" },
  keywords: ["Pricing", "Nextjs", "TypeScript"],
};

const Pricing = () => {
  return (
    <>
      <div>
        <span>Pricing</span>
      </div>
    </>
  );
};

export default Pricing;

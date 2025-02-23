import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      </p>
      <Link href={'/about'} >
       about
      </Link>
    </>
  );
};

export default Home;


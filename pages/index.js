import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title> Fuel Prices </title>{" "}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>{" "}
      <main>
        <div className="welcome">
          <h1 className="get-started"> GET STARTED </h1>{" "}
          <button className="open-btn">
            <Link href="main" className="link">
              {" "}
              OPEN MAP{" "}
            </Link>{" "}
          </button>{" "}
        </div>{" "}
      </main>{" "}
    </>
  );
}

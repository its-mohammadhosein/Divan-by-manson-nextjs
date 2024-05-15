import Image from "next/image";
import AppetizerAndSalads from "@/components/menu-sections/AppetizerAndSalads";

export default function Home() {
  return (
    <>
      <div>{/*<h1>menu Top bar</h1>*/}</div>
      <div className={" min-h-[100vh] "} id={"wholemenu"}>
        <AppetizerAndSalads />
      </div>
    </>
  );
}

import Button from "@/app/components/Button";
import Image from "next/image";
// import natureImg from "/imgs/nature.png";
import natureImg from "@/public/imgs/nature.png";

const vision = () => {
  return (
    <div>
      <h1>This is vision page</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, iure?
        Tenetur, in recusandae ab eveniet saepe est incidunt eius fugiat,
        possimus at voluptates distinctio accusantium voluptatibus quos et autem
        accusamus.
      </p>
      <div className="max-w-[400px] my-6">
        {/* <Image
          width={300}
          height={300}
          src={"/imgs/nature.png"}
          alt="Nature Image"
          quality={100}
        /> */}

        <Image src={natureImg} alt="Nature Img" placeholder="blur" />
      </div>
      <Button />
    </div>
  );
};

export default vision;

export const metadata = {
  title: "Vision",
};

"use client"
import Button from "@/components/Button";
import Image from "next/image";
import image1 from "../assets/imagen-1.jpg";
import { useState } from "react";

function HomePage() {

  const [value,setValue] = useState("")

  return (
    <div>

      <Button>
        click me
      </Button>

      <Button children="click me" />

      {/* Cumulative Layout Shift (CLS) */}
      {/* <img src="/imagen-1.jpg" alt="fondo"/> */}
      {/* <Image src="/imagen-1.jpg" alt="fondo" width={500} height={500}/> */}

      <Image
        src={image1}
        alt="fondo"
        placeholder="blur"
        sizes="(max-width: 768px) 10vw, (max-width: 1200px) 50vw, 33vw"
      />

    </div>
  );
}

export default HomePage
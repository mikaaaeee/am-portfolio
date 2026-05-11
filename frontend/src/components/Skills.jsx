import React, { useEffect, useState } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";
import { Canvas } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const GlobeGrid = () => {
  return (
    <mesh>
      <sphereGeometry args={[3.0, 35, 35]} />
      <meshBasicMaterial color="#4A0E4E" wireframe transparent opacity={0.1} />
    </mesh>
  );
};

const iconSlugs = [
  "javascript",
  "react",
  "laravel",
  "php",
  "nodedotjs",
  "mysql",
  "typescript",
  "dotnet",
  "openjdk",
  "amazoncloudwatch",
  "html5",
  "css3",
  "postgresql",
  "postman",
  "mongodb",
  "express",
  "xampp",
  "tailwindcss",
  "laragon",
  "github",
  "git",
  "gitlab",
];

const Skills = () => {
  const [icons, setIcons] = useState(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs })
      .then((data) => {
        const rendered = Object.values(data.simpleIcons).map((icon) =>
          renderSimpleIcon({
            icon,
            size: 42,
            aProps: {
              onClick: (e) => e.preventDefault(),
              style: { cursor: "pointer" },
            },
          }),
        );
        setIcons(rendered);
      })
      .catch((err) => console.error("Gagal tarik icon:", err));
  }, []);

  return (
    <section className="w-full py-20 flex flex-col items-center justify-center min-h-[600px]">
      <h2 className="text-4xl font-black text-[#4A0E4E] mb-10 tracking-tighter uppercase">
        My Skills
      </h2>

      <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-50">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <GlobeGrid />
          </Canvas>
        </div>

        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {icons ? (
            <Cloud
              options={{
                reverse: true,
                depth: 1,
                wheelZoom: false,
                imageScale: 2,
                activeCursor: "pointer",
                tooltip: "native",
                initial: [0.1, -0.1],
                clickToFront: 500,
                maxSpeed: 0.04,
                minSpeed: 0.01,
              }}
            >
              {icons}
            </Cloud>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 border-4 border-[#4A0E4E] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-[#4A0E4E] font-bold animate-pulse text-sm">
                Loading Orbit...
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;

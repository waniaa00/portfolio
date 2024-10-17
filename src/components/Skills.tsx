import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="container pt-32">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div data-aos="zoom-in">
          <h2 className="text-4xl md:text-5xl">Technologies I work with</h2>
          <p className="text-gray-500 pt-2">
            As a multifaceted UI designer and front-end
            developer, I seamlessly blend creativity with technical expertise.
            With a strong foundation in Next.js, React.js, and JavaScript, I
            craft visually stunning and responsive digital experiences. Driven
            by a passion for innovation and a commitment to excellence, I
            continually seek out cutting-edge technologies to enhance my skills.
            With a meticulous approach and dedication to hard work, I deliver
            high-quality solutions that exceed expectations. My portfolio
            showcases a curated selection of my work, demonstrating my ability
            to balance aesthetics with functionality. I'm excited to collaborate
            on projects that challenge me creatively and technologically, and
            look forward to contributing my expertise to dynamic teams.
          </p>
        </div>
        <div>
            <div className='grid grid-cols-2  text-purple-400 text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">Next.JS</h2>
                    <h2 data-aos="zoom-in-up">React.JS</h2>
                    <h2 data-aos="zoom-in-up">Typescript</h2>

                </div>

                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">CSS</h2>
                    <h2 data-aos="zoom-in-up">Node.JS</h2>
                    <h2 data-aos="zoom-in-up">Tailwind</h2>

                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

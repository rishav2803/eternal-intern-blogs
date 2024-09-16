import { UserCircleIcon, UserIcon } from "@heroicons/react/20/solid";

const AboutMe = () => {
  return (
    <>
      <h1 className="text-xl font-bold mt-[3rem] ">About Me</h1>
      <section
        className="mt-[1rem]  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 sm:gap-10">
        <div>
          <UserIcon size="sm" />
        </div>
        <div className="flex" >
          <ul className="list-disc ml-5 mt-9 space-y-2">
            <p className="mb-4">
              Hi!&#128075; My name is <strong>Rishav Thapliyal</strong>
            </p>
            <li>I am currently Interning at Secure Blink as a Backend Developer</li>
            <li>I have worked on a range of personal projects and i enjoy the time when i am building a new project and learn new things while building the project</li>
            <li>I know various languages like Javascript,Java,Python,Golang</li>
            <li>I am currently enjoying my time with golang and nestjs farmework</li>
            <li>When I am  not coding, I enjoy reading, watching anime, playing video games.</li>
          </ul>
        </div >
      </section >

    </>
  );
};

export default AboutMe;


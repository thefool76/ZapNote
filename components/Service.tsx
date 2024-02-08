import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import cubeleg from '../public/cube-leg.png';
import { MagnifyingGlassIcon, CalendarIcon, MixIcon} from "@radix-ui/react-icons";
import Image from "next/image";

interface ServiceProps {
    title: string;
    description: string;
    icon: JSX.Element;
  }
  
  const serviceList: ServiceProps[] = [
    {
      title: "Track Task",
      description:
        "Track Task Description provides the functionality you need to streamline your workflow and achieve your goals.",
      icon: <CalendarIcon className="w-10 h-10"/>,
    },
    {
      title: "Project Management",
      description:
        "Zapnote ensures your projects stay on track and team members stay connected. Simplify project management and unleash your productivity with ProjectMate.",
      icon: <MixIcon className="w-10 h-10"/>,
    },
    {
      title: "Search Feature",
      description:
        "Effortlessly navigate through search results with minimal clutter, allowing you to focus on what matters most.",
      icon: <MagnifyingGlassIcon className="w-10 h-10"/>,
    },
  ];

const Service = () => {
  return (
    <section className="container py-24 sm:py-32">
    <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Client-Centric{" "}
          </span>
          Services
        </h2>

        <p className="text-muted-foreground text-xl mt-4 mb-8 ">
        Elevate your note-taking journey with our client-focused service. From capturing ideas to organizing meeting minutes, our app is tailored to prioritize your needs.
        </p>

        <div className="flex flex-col gap-8">
          {serviceList.map(({ icon, title, description }: ServiceProps) => (
            <Card key={title}>
              <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                  {icon}
                </div>
                <div>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription className="text-md mt-2">
                    {description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <Image
        src={cubeleg}
        className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
        alt="About services"
      />
    </div>
  </section>
  )
}

export default Service
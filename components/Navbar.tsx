import { Button } from "./ui/button";
import Link from "next/link";
import { ModeToggle } from "./ui/toggle";
import {
  LightningBoltIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const Navbar = () => {
  const github = "https://www.github.com/thefool76";
  const twitter = "https://www.twitter.com";

  return (
    <nav>
      <div className="flex items-center py-2 mx-4 justify-between">
        <Link href="/" className="flex space-x-1">
          <LightningBoltIcon className="w-7 h-7" />
          <h1 className="text-xl font-bold">ZapNote</h1>
        </Link>

        <div className="space-x-2">
          <Link href={twitter}>
            <Button variant="ghost" size="icon">
              <TwitterLogoIcon className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </Link>

          <Link href={github}>
            <Button variant="ghost" size="icon">
              <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
      <div className="border my-1 grey-200"></div>
    </nav>
  );
};

export default Navbar;

 
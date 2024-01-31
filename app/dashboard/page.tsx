import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RocketIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Pad from "@/components/Pad";

const dashboard = () => {
  return (
    <Card className=" mt-10 mx-7">
      <CardHeader>
        <CardTitle>Welcome back! 
          <RocketIcon  className="inline ml-3 h-7 w-7"/>
        </CardTitle>
        <CardDescription>Here's a list of your tasks!</CardDescription>
      </CardHeader>
      <CardContent>
        <Button>
          <PlusCircledIcon className="mr-1 h-4 w-4 "/> Add task
        </Button>
        <Pad />
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default dashboard;

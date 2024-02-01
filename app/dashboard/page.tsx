import Noter from "@/components/Noter";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RocketIcon, PlusCircledIcon } from "@radix-ui/react-icons";



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
      <Noter />
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default dashboard;

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileIcon, TargetIcon, LapTimerIcon, EyeNoneIcon } from "@radix-ui/react-icons";


const Sections = () => {
  return (
    <div className="mt-10 px-6">
      <h1 className="text-4xl font-bold text-center">ZapNote in a Nutshell</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 space-x-4 mx-5">
        <Card className=" mt-7">
          <CardHeader>
            <CardTitle>
              <FileIcon  className="w-8 h-8"/>
            </CardTitle>
            <h1 className="text-2xl">Create Docs</h1>
          </CardHeader>
          <CardContent className="text-muted-foreground ">
          Write and edit documents effortlessly, whether it's for personal notes, work projects, or school assignments.
    Enjoy basic text formatting options to structure your docs.
          </CardContent>
        </Card>
        
        <Card className=" mt-7 mx-7">
          <CardHeader>
            <CardTitle>
              <TargetIcon  className="w-8 h-8"/>
            </CardTitle>
            <h1 className="text-2xl">Set Goals</h1>
          </CardHeader>
          <CardContent className="text-muted-foreground ">
             Enable users to categorize their tasks into different lists or categories, allowing for better organization and clarity.
    Implement features for setting priorities, deadlines, and reminders to help users focus on the most important tasks and meet deadlines effectively.
          </CardContent>
        </Card>

        <Card className=" mt-7 mx-7">
          <CardHeader>
            <CardTitle>
              <LapTimerIcon className="w-8 h-8"/>
            </CardTitle>
            <h1 className="text-2xl">Track Projects</h1>
          </CardHeader>
          <CardContent className="text-muted-foreground">
          Offer productivity features such as task completion tracking, progress visualization, and performance analytics to help users stay motivated and accountable.
    Provide insights into task completion trends, patterns, and productivity habits, empowering users to optimize their workflow and achieve their goals more efficiently.
          </CardContent>
        </Card>

        <Card className=" mt-7 mx-7">
          <CardHeader>
            <CardTitle>
              <EyeNoneIcon  className="w-8 h-8"/>
            </CardTitle>
            <h1 className="text-2xl">Secure and Safe</h1>
          </CardHeader>
          <CardContent className="text-muted-foreground">
          Prioritize user data security and privacy by implementing robust encryption protocols and data protection measures to safeguard sensitive information.
Provide transparency and control over user data, including clear privacy policies and options for data management and deletion
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Sections;

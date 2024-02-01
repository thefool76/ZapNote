import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

const Noter = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <PlusCircledIcon className="mr-1 h-4 w-4 " /> Add task
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Note 📝</DialogTitle>
            <DialogDescription>
            Capture your thoughts and reminders with a quick note.
            </DialogDescription>
                
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Noter;

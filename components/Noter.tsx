'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

const Noter = () => {
  const {toast} = useToast();

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
              <div className="grid gap-2 py-2">
                <Label htmlFor="Title">Title</Label>
                <Input type="text" id="title" placeholder="Title"/>
                <Label htmlFor="Description">Description</Label>
                <Textarea placeholder="Write here" />
                </div>
          </DialogHeader>
          <DialogFooter>
                          <Button type="button" onClick={() => {
                  toast({
                    description: "Your note has been added successfully 👍"
                  })
                }}>Done</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Noter;

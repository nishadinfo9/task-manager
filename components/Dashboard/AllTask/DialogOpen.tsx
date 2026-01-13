"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import EditProfileDialog from "../DialogTask/DialogTask";

const DialogOpen = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          All Tasks
        </h2>
        <Button onClick={() => setOpen(true)}>Add Task</Button>
        <EditProfileDialog open={open} onOpenChange={setOpen} />
      </div>
    </>
  );
};

export default DialogOpen;

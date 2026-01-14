"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import TaskForm from "../Overview/DialogTask/DialogTask";

interface Head {
  headline: string;
}

const DialogOpen = ({ headline }: Head) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {headline}
        </h2>
        <Button onClick={() => setOpen(true)}>Add Task</Button>
        <TaskForm open={open} onOpenChange={setOpen} />
      </div>
    </>
  );
};

export default DialogOpen;

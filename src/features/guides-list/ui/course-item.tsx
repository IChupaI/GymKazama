"use client"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { useTransition } from "react";

export function GuideItem({
  guide,
  onDelete
}: {
  guide: GuideListElement;
  onDelete: () => Promise<void>;
}) {


  const [isLoadingDelete, startDeleteTransition] = useTransition();
  const handleDelete = () => {
    startDeleteTransition(async () => await onDelete());
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>{guide.name}</CardTitle>
        <CardDescription>{guide.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button disabled={isLoadingDelete} onClick={handleDelete}>Delete</Button>
      </CardFooter>
    </Card>
  )
}
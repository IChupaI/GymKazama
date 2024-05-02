"use server"

import { revalidatePath } from "next/cache";
import { guidesRepository } from "@/features/guides-list/guides.repository";

export const createCourseAction = async (
  command: CreateGuideListElement,
  revalidatePagePath: string
) => {
  await guidesRepository.createGuideElement(command);
  revalidatePath(revalidatePagePath);
};
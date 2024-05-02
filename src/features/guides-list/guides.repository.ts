import { dbClient } from "@/shared/lib/db";
import { cache } from "react";
import { Guide } from "@prisma/client";

class GuidesRepository {
  getGuideList = cache((): Promise<GuideListElement[]> => dbClient.guide.findMany());
  createGuideElement = (command: CreateGuideListElement): Promise<GuideListElement> => {
    return dbClient.guide.create({
      data: command,
    })
  }
  deleteGuideElement = (command: DeleteGuideListElement) => {
    return dbClient.guide.delete({
      where: {id: command.id},
    })
  }
}

export const guidesRepository = new GuidesRepository()
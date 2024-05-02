import { guidesRepository } from "@/features/guides-list/guides.repository";
import { GuideItem } from "@/features/guides-list/ui/course-item";
import { revalidatePath } from "next/cache";

export async function GuidesList({
                                   revalidatePagePath
                                 }: {
  revalidatePagePath: string
}) {
  const guidesList = await guidesRepository.getGuideList();

  const handleDeleteAction = async (guideId: string) => {
    "use server";

    await guidesRepository.deleteGuideElement({ id: guideId });
    revalidatePath(revalidatePagePath);
  };

  return (
    <div className="flex flex-col gap-3">
      {guidesList.map((guide) => (
        <GuideItem key={guide.id}
                   guide={guide}
                   onDelete={handleDeleteAction.bind(null, guide.id)}>
        </GuideItem>
      ))}
    </div>
  );
}
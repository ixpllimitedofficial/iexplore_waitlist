import SharedPage from "@/components/sharing/SharedPage";
import { publicMetadata } from "@/lib/public-content";

export const dynamic = "force-dynamic";
type Props = { params: Promise<{ id: string }> };
export async function generateMetadata({ params }: Props) {
  return publicMetadata("spots", (await params).id);
}
export default async function Page({ params }: Props) {
  return <SharedPage kind="spots" id={(await params).id} />;
}

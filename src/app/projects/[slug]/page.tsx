import { BlockProject } from "@/ui/blocks/BlockProject/BlockProject";
import { PROJECTS_LIST } from "@/shared/projects";
import { Page } from "@/ui/components/Page/Page";

export async function generateStaticParams() {
  return PROJECTS_LIST.map(({slug}) => ({slug}));
}

export default async function ProjectPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;

  const project = PROJECTS_LIST.find((project) => project.slug === slug)!;

  return (
    <Page maxWidth="l">
      <BlockProject project={project} />
    </Page>
  );
}

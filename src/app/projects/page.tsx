import { BlockProjects } from "@/ui/blocks/BlockProjects/BlockProjects";
import { PROJECTS_LIST } from "@/shared/projects";
import { Page } from "@/ui/components/Page/Page";

export default function Projects() {
  return (
    <Page title="Projects" maxWidth="l">
        <BlockProjects projects={PROJECTS_LIST} />
    </Page>
  );
}

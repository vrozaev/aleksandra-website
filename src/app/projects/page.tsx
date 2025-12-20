import { BlockProjectsList } from "@/ui/blocks/BlockProjectsList/BlockProjectsList";
import { PROJECTS_LIST } from "@/shared/projects";
import { Page } from "@/ui/components/Page/Page";

export default function Projects() {
  return (
    <Page title="Projects" maxWidth="l">
        <BlockProjectsList projects={PROJECTS_LIST} />
    </Page>
  );
}

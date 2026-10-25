import { BlockTextAndImage } from "@/ui/blocks/BlockTextAndImage/BlockTextAndImage";
import { Page } from "@/ui/components/Page/Page";
import { ABOUT_PAGE } from "@/shared/content";

export default function About() {
  return (
    <Page title={ABOUT_PAGE.title} maxWidth="l">
        <BlockTextAndImage 
          image={ABOUT_PAGE.image}
          imageAlt="Marina and Aleksandra, founders of Formae Bureau"
          caption="Marina & Aleksandra / Founders of Formae Bureau"
          eyebrow="The people behind Formae"
          title="Creating beauty that works."
          paragraphs={ABOUT_PAGE.paragraphs}
        />
    </Page>
  );
}

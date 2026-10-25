import { Page } from "@/ui/components/Page/Page";
import { SERVICES_PAGE } from "@/shared/content";
import { ServiceDescription } from "@/ui/blocks/ServiceDescription/ServiceDescription";

export default function Services() {
  return (
    <Page title={SERVICES_PAGE.title} maxWidth="l" compactTitleSpacing>
      <ServiceDescription services={SERVICES_PAGE.services} />
    </Page>
  );
}

import ApplicationGate from "@/components/layouts/application-gate";
import FormLayout from "../_components/formLayout";

const pageName = "grant";

export default function GrantApply() {
  return (
    <FormLayout page={pageName}>
      <ApplicationGate page={pageName} />
    </FormLayout>
  );
}

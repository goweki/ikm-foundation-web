// import AirtableForm from "@/components/forms/AirtableForm";
import FormLayout from "../_components/formLayout";
import ApplicationGate from "@/components/layouts/application-gate";

const pageName = "fap";

export default function FapApply() {
  return (
    <FormLayout page={pageName}>
      {/* <AirtableForm form={pageName} /> */}
      <ApplicationGate page={pageName} />
    </FormLayout>
  );
}

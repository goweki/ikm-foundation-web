import AirtableForm from "@/components/forms/AirtableForm";
import FormLayout from "../../_components/formLayout";

const page = "headstart";

export default function HeadStartApply() {
  return (
    <FormLayout page={page}>
      <AirtableForm form={page} />
    </FormLayout>
  );
}

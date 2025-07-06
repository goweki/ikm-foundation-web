import AirtableForm from "@/components/forms/AirtableForm";
import FormLayout from "../_components/formLayout";

const page = "grant";

export default function GrantApply() {
  return (
    <FormLayout page={page}>
      <AirtableForm form={page} />
    </FormLayout>
  );
}

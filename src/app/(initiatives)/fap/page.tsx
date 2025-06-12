import AirtableForm from "@/components/forms/AirtableForm";
import FormLayout from "../_components/formLayout";

const pageName = "fap";

export default function FapApply() {
  return (
    <FormLayout page={pageName}>
      <AirtableForm form={pageName} />
    </FormLayout>
  );
}

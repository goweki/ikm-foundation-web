// import AirtableForm from "@/components/forms/AirtableForm";
// import FormLayout from "../../_components/formLayout";

// const page = "scholarship";

// export default function ScholarshipApply() {
//   return (
//     <FormLayout page={page}>
//       <AirtableForm form={page} />
//     </FormLayout>
//   );
// }

import ApplicationGate from "@/components/layouts/application-gate";
import FormLayout from "../../_components/formLayout";

const pageName = "scholarship";

export default function ScholarshipApply() {
  return (
    <FormLayout page={pageName}>
      <ApplicationGate page={pageName} />
    </FormLayout>
  );
}

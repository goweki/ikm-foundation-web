// import AirtableForm from "@/components/forms/AirtableForm";
// import FormLayout from "../../_components/formLayout";

// const page = "headstart";

// export default function HeadStartApply() {
//   return (
//     <FormLayout page={page}>
//       <AirtableForm form={page} />
//     </FormLayout>
//   );
// }

import ApplicationGate from "@/components/layouts/application-gate";
import FormLayout from "../../_components/formLayout";

const pageName = "headstart";

export default function HeadStartApply() {
  return (
    <FormLayout page={pageName}>
      <ApplicationGate page={pageName} />
    </FormLayout>
  );
}

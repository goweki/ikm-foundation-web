import FormLayout from "../../_components/formLayout";

export default function ScholarshipApply() {
  return (
    <FormLayout page="scholarship">
      {/* <ApplyEducationForm applicationFor="scholarship" /> */}
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/appGQZtROtfry9TUl/pagADGDGnXlDAT25a/form"
        width="100%"
        height="533"
        style={{ background: "transparent", border: "1px solid #ccc" }}
      />
    </FormLayout>
  );
}

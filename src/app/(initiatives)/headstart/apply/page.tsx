import FormLayout from "../../_components/formLayout";

export default function HeadStart() {
  return (
    <FormLayout page="headstart">
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/appGQZtROtfry9TUl/pagO48MkzMYYF6y2B/form"
        width="100%"
        height="533"
        style={{ background: "transparent", border: "1px solid #ccc" }}
      />
    </FormLayout>
  );
}

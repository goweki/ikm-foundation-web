import FAQcomponent from "@/components/atoms/faqComponent";
import ApplyLayout from "../_components/layout";

const FAQs = [
  {
    question: "Who can apply for the Head Start Africa programme?",
    answer:
      "Students who have completed their KCSE and are transitioning to university. We prioritise academically promising students from low-income households, orphans, vulnerable children, and students with disabilities. Students must have been accepted to study law, IT or business-related program such as finance, marketing, commerce or accounting.",
  },
  {
    question: "Will the Program pay for all program expenses?",
    answer:
      "We will pay for all travel and accommodation costs relating to the placements and events, including the Head Start Africa Academy. We will work with you to arrange travel. Please be advised that the Head Start Africa, Kenya programme does not provide stipend for food costs or other living costs such as transport if living outside university housing. The support therefore includes only the following: 1. Tuition fees and accommodation costs (up to a certain amount) if unable to secure sufficient HEF or bursary funds  2. Laptop  3. Subscription for internet or relevant learning content if/when required  4. Travel, participation fees and related costs during the Head Start Academy and other training organised by us, work placements and DLA Piper (IKM) events  5. Business attire",
  },
  {
    question:
      "Does the programme support students to study in universities abroad?",
    answer:
      "No, the programme supports students admitted to local universities based in Kenya only.",
  },
  {
    question: "Does the program sponsor students in private universities?",
    answer:
      "No, the programme sponsors students admitted to public universities or those admitted as government-sponsored students to private universities i.e. within band 1-3 under HEF funding",
  },
  {
    question: "Can I apply for the programme if I am not an IKMF Scholar?",
    answer:
      "Yes. The programme accepts applications from students who are not IKMF Scholars.",
  },
  {
    question: "When will the programme begin?",
    answer:
      "The program will formally commence once you complete the Head Start Africa Academy and we receive your signed contract.",
  },
  {
    question: "How is my programme structured?",
    answer:
      "At the start of the programme, you will work with the program co-ordinator to create your individual learning plan. This will help us to create a support plan that is tailored to your specific career aspirations and reflects your support needs at different points of your educational journey.",
  },
  {
    question: "When do applications open and close?",
    answer:
      "Applications open in mid May and close around the first or second week of June, depending on the closing of the KUCCPS portal.",
  },
  {
    question: "How does the selection process work?",
    answer:
      "Applications are reviewed based on financial need, academic merit, and supporting documents. Shortlisted applicants are invited for virtual interviews and home visits before final decisions are made.",
  },
];

export default function Headstart() {
  return (
    <ApplyLayout page="headstart">
      <>
        <p>
          The Head Start Africa Academy is a transformative three-week adventure
          bootcamp designed to ignite leadership, confidence, and critical life
          skills in ambitious youth. Held annually in Sagana, Kenya, the Academy
          blends outdoor adventure, workshops, and peer collaboration to help
          participants discover who they are—and who they can become.
        </p>
        What You&apos;ll Learn
        <ul className="max-w-full space-y-1 text-gray-800 list-disc list-inside m-3 mb-0 font-semibold">
          <li>Leadership and self-awareness</li>
          <li>Goal setting and personal vision</li>
          <li>Responsible relationships</li>
          <li> Employability and professional skills</li>
          <li> Healthy living and resilience</li>
          <li> Critical thinking and problem solving</li>
        </ul>
        <br />
        <h3 className="font-semibold text-xl mb-2">Eligibility</h3>
        <p>To be eligible for Head Start Africa, one must be:</p>
        <ul className="max-w-full space-y-1 text-gray-800 list-disc list-inside m-3 mt-2 font-semibold">
          <li>A Recent high school graduate: (KCSE/IGCSE) or equivalent</li>
          <li>Aged 18–20</li>
          <li>Committed to personal growth and responsible citizenship</li>
          <li>
            Come from a low-income household; is orphaned or vulnerable; is
            living with disability
          </li>
          <li>
            Have an interest to pursue a legal career or law-related career such
            as finance or IT
          </li>
          <li>
            Scored in the 70th percentile in KCSE based on school and background
            (B+ and above, B minimum will be considered for those from
            traditionally marginalised communities)
          </li>
          <li>
            Maintained good grades based on school and background (B+ and above,
            B minimum will be considered for those from traditionally
            marginalised communities)
          </li>
          <li>Attended a government public secondary school</li>
          <li>Completed the application form</li>
          <li>
            Have a leadership and moral fitness letter from the secondary school
          </li>
          <li>Have a letter from the local Chief</li>
          <li>
            Have a university admission letter, if already admitted to
            university
          </li>
        </ul>
        <br />
        <h3 className="font-semibold text-xl mb-2">Programme Details</h3>
        <ul className="max-w-full space-y-1 text-gray-800 list-disc list-inside m-3 mt-2 font-semibold">
          <li>Location: Camp Malta, Sagana</li>
          <li>Duration: 2 weeks in August</li>
          <li>
            Cost: KES 65,000 (includes return transport from Nairobi, food,
            accommodation, facilitation)
          </li>
          <li>Application Period: Opens in July, closes early August</li>
          <li>
            Selection: Based on application form, motivation and alignment for
            the programme, and availability of spots
          </li>
        </ul>
        <br />
        <h3 className="font-semibold text-xl mb-2">Why Join?</h3>
        <ul className="max-w-full space-y-1 text-gray-800 list-disc list-inside m-3 mt-2 font-semibold">
          <li>Build skills that last a lifetime</li>
          <li>Prepare for university and career</li>
          <li>Join a growing community of passionate changemakers</li>
          <li>Receive a certificate of participation</li>
        </ul>
        <br />
        <section id="faq-section">
          <h3 className="font-semibold text-xl mb-2">FAQs</h3>
          <FAQcomponent FAQs={FAQs} />
        </section>
      </>
    </ApplyLayout>
  );
}

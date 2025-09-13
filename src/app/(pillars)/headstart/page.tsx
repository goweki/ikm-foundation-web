import FAQcomponent from "@/components/atoms/faqComponent";
import PillarsLayout from "../_components/layout";
import { BookOpen, Check, TrendingUp, DoorOpen } from "lucide-react";

const support = [
  "Leadership and self-awareness",
  "Goal setting and personal vision",
  "Responsible relationships",
  "Employability and professional skills",
  "Healthy living and resilience",
  "Critical thinking and problem solving",
];

const eligibility = [
  "A Recent high school graduate: (KCSE/IGCSE) or equivalent",
  "Aged 18–20",
  "Committed to personal growth and responsible citizenship",
  "Come from a low-income household; is orphaned or vulnerable; is living with disability",
  "Have an interest to pursue a legal career or law-related career such as finance or IT",
  "Scored in the 70th percentile in KCSE based on school and background (B+ and above, B minimum will be considered for those from traditionally marginalised communities)",
  "Maintained good grades based on school and background (B+ and above, B minimum will be considered for those from traditionally marginalised communities)",
  "Attended a government public secondary school",
  "Completed the application form",
  "Have a leadership and moral fitness letter from the secondary school",
  "Have a letter from the local Chief",
  "Have a university admission letter, if already admitted to university",
];

const programmeDetails = {
  location: "Camp Malta, Sagana",
  duration: "2 weeks in August",
  cost: "KES 65,000 (includes return transport from Nairobi, food, accommodation, facilitation)",
  applicationPeriod: "Opens in July, closes early August",
  selection:
    "Based on application form, motivation and alignment for the programme, and availability of spots",
};

const whyJoin = [
  "Build skills that last a lifetime",
  "Prepare for university and career",
  "Join a growing community of passionate changemakers",
  "Receive a certificate of participation",
];

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
    <PillarsLayout page="headstart">
      <>
        <div className="relative bg-white rounded-2xl shadow-lg transition-all duration-500 overflow-hidden border border-gray-100">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>

          <div className="relative p-8">
            <p className="text-gray-600 mb-6 leading-relaxed">
              The Head Start Africa Academy is a transformative three-week
              adventure bootcamp designed to ignite leadership, confidence, and
              critical life skills in ambitious youth. Held annually in Sagana,
              Kenya, the Academy blends outdoor adventure, workshops, and peer
              collaboration to help participants discover who they are—and who
              they can become. What You&apos;ll Learn:
            </p>

            <div className="space-y-3 mb-8">
              {support.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center text-sm text-gray-600"
                >
                  <TrendingUp className="w-4 h-4 mr-2 text-blue-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 font-bold mb-4 leading-relaxed">
              Eligibility
            </p>

            <div className="space-y-3 mb-8">
              {eligibility.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center text-sm text-gray-600"
                >
                  <Check className="w-4 h-4 mr-2 text-blue-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 font-bold mb-4 leading-relaxed">
              Program Details
            </p>

            <div className="space-y-3 mb-8">
              <div className="space-y-3">
                {Object.entries(programmeDetails).map(([key, value], i) => (
                  <div
                    key={i}
                    className="flex items-start text-sm text-gray-700"
                  >
                    <BookOpen className="w-4 h-4 mr-2 mt-0.5 text-blue-500 shrink-0" />
                    <span>
                      <span className="font-medium capitalize">
                        {key.replace(/([A-Z])/g, " $1")}:
                      </span>{" "}
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-600 font-bold mb-4 leading-relaxed">
              Why Join
            </p>

            <div className="space-y-3 mb-8">
              {whyJoin.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center text-sm text-gray-600"
                >
                  <DoorOpen className="w-4 h-4 mr-2 text-blue-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* <Link
              href="/headstart/apply"
              className="group inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02]"
            >
              Apply for Headstart
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link> */}
          </div>
        </div>
        <br />

        <section id="faq-section">
          <h3 className="font-semibold text-xl mb-2">FAQs</h3>
          <FAQcomponent FAQs={FAQs} />
        </section>
      </>
    </PillarsLayout>
  );
}

import PillarsLayout from "../_components/layout";
import Link from "next/link";
import { ArrowRight, GraduationCap, Users } from "lucide-react";

export default function Headstart() {
  return (
    <PillarsLayout page="education">
      <>
        <div className="bg-gradient-to-br from-blue-50 via-white to-purple-100">
          {/* Hero Section */}
          <div className="container mx-auto">
            {/* Options Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Scholarship Option */}
              <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>

                <div className="relative p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                    <GraduationCap className="w-8 h-8 text-blue-600" />
                  </div>

                  <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                    IKMF Scholarship
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Increasing access to learning for children from
                    disadvantaged backgrounds
                  </p>

                  {/* <div className="space-y-3 mb-8">
                    <div className="flex items-center text-sm text-gray-600">
                      <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
                      <span>Full or partial tuition coverage</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
                      <span>Learning materials and resources</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
                      <span>Academic support services</span>
                    </div>
                  </div> */}

                  <Link
                    href="/scholarship"
                    className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 group-hover:scale-[1.02]"
                  >
                    Learn more
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>

              {/* Mentorship Option */}
              <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-teal-500/5 group-hover:from-purple-500/10 group-hover:to-teal-500/10 transition-all duration-500"></div>

                <div className="relative p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>

                  <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                    Head Start Africa, Kenya
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Nurturing future professionals within the legal field and
                    beyond
                  </p>

                  <div className="space-y-3 mb-8">
                    {/* items */}

                    {/* <div className="flex items-center text-sm text-gray-600">
                      <Heart className="w-4 h-4 mr-2 text-purple-500" />
                      <span>One-on-one guidance sessions</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Heart className="w-4 h-4 mr-2 text-purple-500" />
                      <span>One-on-one guidance sessions</span>
                    </div> */}
                  </div>

                  <Link
                    href="/headstart"
                    className="inline-flex items-center justify-center w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 group-hover:scale-[1.02]"
                  >
                    Learn more
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <p>
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
        </section> */}
      </>
    </PillarsLayout>
  );
}

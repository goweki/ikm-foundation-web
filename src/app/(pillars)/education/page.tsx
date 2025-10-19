import PillarsLayout from "../_components/layout";
import Link from "next/link";
import { ArrowRight, GraduationCap, Users } from "lucide-react";

export default function Headstart() {
  return (
    <PillarsLayout page="education">
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
                  Increasing access to learning for children from disadvantaged
                  backgrounds
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
                  Nurturing future professionals within the legal industry
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
    </PillarsLayout>
  );
}

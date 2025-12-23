import { Users, Target, Lightbulb, Award } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ImageSlider, { SlideItem } from "../ui/image-slider";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To create lasting social impact by investing in education, supporting vulnerable communities, and advancing meaningful special projects that improve lives and build sustainable futures.",
    },
    {
      icon: Lightbulb,
      title: "Purpose-Driven Impact",
      description:
        "We focus our resources where they matter most—empowering learners, protecting vulnerable groups, and funding innovative projects that address real societal challenges.",
    },
  ];

  const team = [
    { name: "-", role: "Director", initials: "JD" },
    { name: "-", role: "Operations", initials: "SA" },
    { name: "-", role: "Relations", initials: "FB" },
  ];

  const _images: SlideItem[] = [
    {
      id: 6926,
      image: "/images/pillars/ikmf-2023-DSC_6926.jpg",
      // name: "Headstart Africa",
    },
    {
      id: 401,
      image: "/gallery/special-projects-loitoktok/DSC_4404.JPG",
      // name: "Special Projects",
    },
    {
      id: 402,
      image: "/gallery/special-projects-loitoktok/DSC_4448.JPG",
      // name: "Special Projects",
    },
    {
      id: 403,
      image: "/gallery/special-projects-loitoktok/DSC_5024.JPG",
      // name: "Special Projects",
    },
    {
      id: 102,
      image: "/images/pillars/headstart_great.jpg",
      // name: "Headstart Africa",
    },
  ];

  return (
    <>
      {/* Story Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto overflow-auto">
          {/* <Card className="border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl text-blue-600">
                Our Journey
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Founded in 2020, our company started with a simple vision: to
                bridge the gap between complex technology and user-friendly
                solutions. What began as a small startup has grown into a
                trusted partner for businesses worldwide.
              </p>
              <p>
                Today, we've helped over 500 companies transform their digital
                presence, building everything from enterprise applications to
                innovative consumer products. Our team has grown, but our core
                values remain the same.
              </p>
              <p>
                We believe that great software is built by great people. That's
                why we invest in our team, foster a culture of continuous
                learning, and maintain an environment where creativity and
                innovation thrive.
              </p>
            </CardContent>
          </Card> */}
          <ImageSlider _slides={_images} />
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="border-blue-200 hover:border-blue-400 transition-all hover:shadow-xl bg-blue-100"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16 max-w-5xl bg-blue-100 rounded-3xl my-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl font-bold text-white">
                  {member.initials}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Team Members</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 mb-16">
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 border-0 text-white">
          <CardContent className="text-center py-12 px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with
              innovative solutions and expert craftsmanship.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
              Get In Touch
            </button>
          </CardContent>
        </Card>
      </section>
    </>
  );
}

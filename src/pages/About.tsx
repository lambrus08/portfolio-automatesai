import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Award, Users, Target } from "lucide-react";

const About = () => {
  const skills = [
    "Artificial Intelligence & Machine Learning",
    "Full-Stack Development",
    "Cloud Architecture & DevOps",
    "Data Engineering & Analytics",
    "Product Strategy & Leadership",
    "Technical Consulting"
  ];

  const achievements = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "10+ Years Experience",
      description: "Deep expertise in AI and software development"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "200+ Projects",
      description: "Successfully delivered solutions across industries"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Enterprise Scale",
      description: "Built systems serving millions of users"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-dark text-neutral-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About Dave
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed">
              Passionate about building AI systems that solve real-world problems 
              and sharing knowledge to help others navigate the evolving landscape of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/lovable-uploads/0110f188-f0a3-4a4e-a9e4-bac825c43a77.png"
                    alt="Dave - AI Systems Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-dark rounded-2xl opacity-20"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary-100">
                My Journey in AI & Technology
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  With over a decade of experience in software development and artificial intelligence, 
                  I've had the privilege of working with organizations across various industries to 
                  implement cutting-edge AI solutions that drive real business outcomes.
                </p>
                <p>
                  My journey began in traditional software development, but I quickly became fascinated 
                  by the potential of AI to transform how we work and live. This passion led me to 
                  specialize in machine learning, natural language processing, and automated systems.
                </p>
                <p>
                  Today, I focus on bridging the gap between complex AI technologies and practical 
                  business applications. I believe in making AI accessible, understandable, and 
                  beneficial for organizations of all sizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-neutral-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-100 text-center mb-12">
              Core Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-100 flex-shrink-0" />
                  <span className="text-neutral-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-100 text-center mb-12">
            Key Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-primary-100">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-100 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-neutral-600">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
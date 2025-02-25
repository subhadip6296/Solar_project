import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Target,
  Users,
  Sun,
  Award,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Building2,
  TrendingUp,
  Medal,
  Leaf,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
const milestones = [
  {
    year: "2025",
    title: "Evoltriv Founded",
    description:
      "Started with a mission to revolutionize renewable energy and student-led innovations.",
    icon: Rocket,
    stats: "Initial team of 5 members",
    tags: ["Startup", "Innovation", "Vision"],
  },
  {
    year: "2025",
    title: "Solar Division Launched",
    description:
      "Successfully installed our first solar project for sustainable energy solutions.",
    icon: CheckCircle2,
    stats: "50kW solar installation",
    tags: ["Solar", "Sustainability", "Growth"],
  },
  {
    year: "2026",
    title: "E-Bike Development",
    description:
      "Initiated the development of e-bike prototypes to promote green mobility.",
    icon: Building2,
    stats: "3 innovative prototypes developed",
    tags: ["Electric Mobility", "Innovation", "Green Tech"],
  },
  {
    year: "2027",
    title: "Student Consulting Services Introduced",
    description: "Expanded to provide hands-on projects and consulting for students.",
    icon: Users,
    stats: "100+ students engaged",
    tags: ["Education", "Consulting", "Hands-on Learning"],
  },
  {
    year: "2027",
    title: "Commercial Solar Projects",
    description: "Scaled operations to offer solar solutions for businesses and industries.",
    icon: TrendingUp,
    stats: "5MW+ total solar installations",
    tags: ["Business", "Renewable Energy", "Expansion"],
  },
  {
    year: "2028",
    title: "Industry Recognition",
    description: "Recognized for pioneering efforts in renewable energy and student innovation.",
    icon: Award,
    stats: "95% customer satisfaction",
    tags: ["Award", "Recognition", "Excellence"],
  },
  {
    year: "2028",
    title: "Future Goals",
    description: "Aiming for 20MW+ solar installations and expanding student projects.",
    icon: Target,
    stats: "Targeting 20MW+ installations",
    tags: ["Future", "Goals", "Vision"],
  },
];
const TimelineSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Journey of Impact
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From humble beginnings to industry leadership, explore our journey
            of innovation and sustainable impact
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#009a8d] to-[#00c4b4] rounded-full hidden md:block" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 relative">
              <div
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}>
                {/* Content */}
                <div className="md:w-1/2 p-4">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[#009a8d] text-xl font-bold">
                        {milestone.year}
                      </span>
                      <div className="h-6 w-[2px] bg-gray-200 mx-2" />
                      <milestone.icon className="w-6 h-6 text-[#009a8d]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {milestone.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Medal className="w-4 h-4 mr-2 text-[#009a8d]" />
                      {milestone.stats}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {milestone.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-[#009a8d]/10 text-[#009a8d] rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:flex w-8 h-8 absolute left-1/2 transform -translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-8 h-8 bg-[#009a8d] rounded-full border-4 border-white shadow-lg"
                  />
                </div>

                {/* Spacer for opposite side */}
                <div className="md:w-1/2" />
              </div>
            </motion.div>
          ))}

          {/* Final node */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-8 h-8 bg-[#00c4b4] rounded-full border-4 border-white shadow-lg absolute left-1/2 transform -translate-x-1/2 bottom-0 hidden md:block"
          />
        </div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Looking Ahead</h3>
          <p className="text-gray-600">
  As we move forward, we stay dedicated to advancing solar energy solutions, promoting sustainable e-mobility, and empowering students through hands-on consulting. Join us in shaping a cleaner, smarter, and more sustainable future.
</p>

        </motion.div>
      </div>
    </section>
  );
};

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const stats = [
    { number: "500+", label: "Installations" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "50+", label: "Expert Team" },
    { number: "24/7", label: "Support" },
  ];
  const values = [
    {
      icon: Sun,
      title: "Solar Energy Solutions",
      description:
        "Providing high-efficiency solar installations for homes, businesses, and industries.",
    },
    {
      icon: Zap,
      title: "E-Bike Innovation",
      description:
        "Developing cutting-edge electric bicycles for sustainable and smart mobility.",
    },
    {
      icon: Users,
      title: "Student Consulting",
      description:
        "Empowering students with hands-on projects and industry-driven learning experiences.",
    },
  ];
  
  const achievements = [
    "500+ Solar Installations for Homes & Businesses",
    "10MW+ Clean Energy Generated Through Solar Solutions",
    "200+ E-Bikes Designed for Sustainable Mobility",
    "1000+ Students Trained in Hands-on Renewable Energy Projects",
    "50+ Successful Collaborations with Industries & Institutions",
    "Recognized for Advancing Green Technology & Education",
  ];
  

  return (
    <div className="pb-16">
      {/* Hero Section with Background */}
      <div className="relative py-20 bg-gradient-to-b from-[#009a8d]/10 to-transparent overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            className="text-center space-y-8 mb-16">
            <motion.div {...fadeInUp} className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Powering a{" "}
                <span className="text-[#009a8d] relative">
                  Sustainable
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 100 10">
                    <motion.path
                      d="M0 5 H100"
                      fill="none"
                      stroke="#009a8d"
                      strokeWidth="2"
                    />
                  </motion.svg>
                </span>{" "}
                Future
              </h1>
              <motion.p
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
                Evoltriv is committed to driving a sustainable future through advanced solar 
  solutions, innovative e-bike technology, and hands-on student consulting, making 
  renewable energy and green mobility accessible to all.
              </motion.p>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#009a8d]">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-7xl mx-auto px-4 mb-20 mt-[-64px]">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#009a8d]/5 rounded-full transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-500" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-[#009a8d]/10 rounded-xl">
                  <Sun className="text-[#009a8d] w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
  To accelerate India's transition to sustainable energy by providing innovative 
  solar solutions, advancing e-bike technology, and empowering students through 
  hands-on consulting, ensuring a greener and smarter future.
</p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Leaf className="text-[#009a8d] w-5 h-5" />
                  <span className="text-gray-700">
                    Sustainable Energy Solutions
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="text-[#009a8d] w-5 h-5" />
                  <span className="text-gray-700">
                    Efficient Implementation
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#009a8d]/5 rounded-full transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-500" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-[#009a8d]/10 rounded-xl">
                  <Target className="text-[#009a8d] w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
  To be the leading provider of sustainable energy solutions in India by pioneering 
  solar innovations, advancing e-bike technology, and empowering students through 
  hands-on consulting, driving the nation towards a cleaner and greener future.
</p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Leaf className="text-[#009a8d] w-5 h-5" />
                  <span className="text-gray-700">
                    Sustainable Energy Solutions
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="text-[#009a8d] w-5 h-5" />
                  <span className="text-gray-700">
                    Efficient Implementation
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gradient-to-b to-[#009a8d]/10 from-transparent py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center">
                <value.icon className="w-12 h-12 text-[#009a8d] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Journey Timeline */}
      <TimelineSection />

      {/* Achievements */}
      <div className="bg-[#009a8d] text-white py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-2">
                <Award className="w-6 h-6 flex-shrink-0 mt-1" />
                <span className="text-lg">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-6">Ready to Go Solar?</h2>
        <p className="text-gray-600 mb-8">
  Join us in building a sustainable future. Whether it's solar energy, 
  e-bike technology, or hands-on student consulting, let's work together 
  to drive innovation and create a greener tomorrow.
</p>

<Link to={"/contact"}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#009a8d] text-white px-8 py-3 rounded-lg font-semibold flex items-center mx-auto hover:bg-[#008075] transition-colors">
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;

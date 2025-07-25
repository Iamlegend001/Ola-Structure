import React from "react";

const jobs = [
  {
    title: "Software Engineer",
    location: "Bangalore, India",
    description:
      "Work on cutting-edge EV technology and scalable digital platforms.",
    email: "careers@olaelectric.com",
  },
  {
    title: "Product Designer",
    location: "Remote / Bangalore, India",
    description: "Design intuitive and beautiful experiences for our users.",
    email: "careers@olaelectric.com",
  },
  {
    title: "Manufacturing Specialist",
    location: "Futurefactory, Tamil Nadu, India",
    description:
      "Drive innovation and efficiency in the world’s largest 2W factory.",
    email: "careers@olaelectric.com",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Careers at Ola Electric
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow">
          Join us in building the future of mobility. We’re looking for
          passionate innovators to help us drive change.
        </p>
      </section>

      {/* Open Positions */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Open Positions
        </h2>
        <div className="space-y-8">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl shadow-md p-8 flex flex-col md:flex-row md:items-center md:justify-between hover:shadow-xl transition-shadow"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                <div className="text-gray-600 mb-2">{job.location}</div>
                <p className="text-gray-700 mb-4 md:mb-0">{job.description}</p>
              </div>
              <a
                href={`mailto:${
                  job.email
                }?subject=Application for ${encodeURIComponent(job.title)}`}
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full text-lg transition-colors shadow-md mt-4 md:mt-0"
              >
                Apply
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-black text-white py-12 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Don’t see a role that fits?
        </h2>
        <p className="mb-6 max-w-xl mx-auto text-lg">
          We’re always looking for talented people. Send your resume to
          <a
            href="mailto:careers@olaelectric.com"
            className="text-yellow-400 font-semibold hover:underline ml-2"
          >
            careers@olaelectric.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default Careers;

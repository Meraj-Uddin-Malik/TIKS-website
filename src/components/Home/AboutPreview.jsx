const AboutPreview = () => (
  <section className="container mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      
      {/* Image */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <img 
          src="https://media.istockphoto.com/id/1462063082/photo/hispanic-school-children-enjoying-books-in-library.jpg?s=612x612&w=0&k=20&c=jVkcaGNr-Ga3wJzU8bIO9uFqAloP4paI7LRw2wrFRPM=" 
          alt="Students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-600/10" />
      </div>

      {/* Text */}
      <div>
        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
          About Us
        </span>

        <h2 className="text-4xl font-bold mt-4 mb-6 text-slate-900 dark:text-white">
          A Legacy of Academic Superiority
        </h2>

        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          Founded in 2026, TIKSchool has been at the forefront of modern education. 
          We combine traditional values with cutting-edge technology to provide a holistic learning experience.
        </p>

        <ul className="space-y-4">
          <li className="flex items-center gap-3">✔ Globally recognized curriculum</li>
          <li className="flex items-center gap-3">✔ Educated and passionate faculty</li>
          <li className="flex items-center gap-3">✔ Environmentally conscious campus</li>
        </ul>
      </div>

    </div>
  </section>
);

export default AboutPreview;
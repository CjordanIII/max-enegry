"use client";

const SectionTwo = () => {
  return (
    <div className="bg-yellow-500">
      {/* Main Content */}
      <div className="bg-white text-center py-20">
        <h1 className="text-blue-900 font-bold text-4xl mb-6">Our Story</h1>
        <div className="bg-blue-900 text-white p-10 mx-auto max-w-4xl rounded-lg">
          <ul className="text-left list-disc pl-5">
            <li className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
            <li className="mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </li>
            <li className="mb-4">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;

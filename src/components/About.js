import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Parent component mounted
  }

  render() {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Header Hero Section */}
        <div className="text-center mb-10 space-y-3">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            About Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This is the about page of our food ordering app, built with React and Tailwind CSS.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Team / User Profile Section */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-100 pb-3">
            Developer Information
          </h2>

          <div className="grid grid-cols-1 gap-6">
            <UserClass
              name={"Yash Panchal (class)"}
              location={"Delhi"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
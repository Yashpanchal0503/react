import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch("https://api.github.com/users/yashpanchal0503");
      const json = await data.json();
      console.log(json);
      this.setState({
        userInfo: json,
      });
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  }

  render() {
    const { name, location, avatar_url, bio, html_url } = this.state.userInfo;

    return (
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
        {/* Avatar Image */}
        <div className="relative group shrink-0">
          <img
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-200"
            src={avatar_url || "https://via.placeholder.com/150"}
            alt={name || "User Avatar"}
          />
          <span className="absolute bottom-1 right-1 bg-emerald-500 w-4 h-4 rounded-full border-2 border-white" title="Online" />
        </div>

        {/* User Info Container */}
        <div className="flex-1 text-center sm:text-left space-y-2">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {name || "Loading..."}
            </h1>
            <h2 className="text-amber-600 font-medium text-sm mt-0.5">
              📍 {location || "Location not set"}
            </h2>
          </div>

          {bio && (
            <p className="text-gray-600 text-sm max-w-md line-clamp-2">
              {bio}
            </p>
          )}

          <div className="pt-1">
            <span className="inline-block text-gray-500 text-xs font-medium bg-white px-3 py-1 rounded-md border border-gray-200 shadow-2xs">
              ✉️ yash2007panchal@gmail.com
            </span>
          </div>

          {/* GitHub Action Button */}
          {html_url && (
            <div className="pt-2">
              <a
                href={html_url}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-4 py-2 bg-gray-900 text-white text-xs font-bold rounded-lg hover:bg-gray-800 active:scale-95 transition-all shadow-sm"
              >
                View GitHub Profile →
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default UserClass;
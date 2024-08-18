import React, { useState, useEffect } from "react";
import SearchBar from "./searchBar";

function HelpCenter() {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/api/v1/getcards`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data); // Log the data for debugging
        setCards(data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  // const dummyDataCards = [
  //   {
  //     id: "1",
  //     title: "Branches",
  //     description:
  //       "Abstract Branches lets you manage, version, and document your designs in one place.",
  //   },
  //   {
  //     id: "2",
  //     title: "Manage your account",
  //     description:
  //       "Configure your account settings, such as your email, profile details, and password.",
  //   },
  //   {
  //     id: "3",
  //     title: "Manage organizations, teams, and projects",
  //     description:
  //       "Use Abstract organizations, teams, and projects to organize your people and your work.",
  //   },
  //   {
  //     id: "4",
  //     title: "Manage billing",
  //     description: "Change subscriptions and payment details.",
  //   },
  //   {
  //     id: "5",
  //     title: "Authenticate to Abstract",
  //     description:
  //       "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
  //   },
  //   {
  //     id: "6",
  //     title: "Abstract support",
  //     description: "Get in touch with a human.",
  //   },
  //   {
  //     id: "7",
  //     title: "Project management",
  //     description:
  //       "Manage all your projects efficiently with Abstract's tools.",
  //   },
  //   {
  //     id: "8",
  //     title: "Collaboration",
  //     description: "Collaborate with your team members in real-time.",
  //   },
  //   {
  //     id: "9",
  //     title: "Design sharing",
  //     description: "Easily share your designs with stakeholders.",
  //   },
  //   {
  //     id: "10",
  //     title: "Version control",
  //     description: "Keep track of all versions of your designs with ease.",
  //   },
  // ];

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <SearchBar onSearch={(term) => setSearchTerm(term)} />
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCards.map((card) => (
              <div
                key={card.id}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {card.title}
                </h2>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default HelpCenter;

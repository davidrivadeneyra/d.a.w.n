import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl mb-8 text-center">
          Privacy Policy for Half Byte Games
        </h1>

        <p className="mb-6">
          <strong>Effective Date</strong>: 1/1/2025
        </p>

        <p className="mb-6">
          <strong>Half Byte Games</strong> ("we," "our," or "us") is committed to respecting and protecting 
          your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information 
          across all our games, websites, and services.
        </p>

        <p className="mb-12">
          By using any of our products, you agree to the practices described in this policy.
        </p>

        <div className="space-y-6 mb-6">
          <section>
            <h2 className="text-xl mb-2">1. Information We Collect</h2>
            <p className="mb-4">
              We may collect the following types of information when you interact with our games, 
              websites, or services:
            </p>
            
            <h3 className="text-lg mb-2">1.1 Personal Information</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">
                <strong>Account Details</strong>: Information such as your name, email address, and 
                profile when you register for an account or link third-party accounts (e.g., Google, 
                Facebook, or Apple).
              </li>
              <li className="mb-2">
                <strong>In-Game Purchases</strong>: Transaction details associated with purchases made 
                within our games, processed securely by third-party payment platforms.
              </li>
            </ul>

            <h3 className="text-lg mb-2">1.2 Non-Personal Information</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">
                <strong>Device Information</strong>: Data about your device, including the model, 
                operating system, browser type, IP address, and unique identifiers.
              </li>
              <li className="mb-2">
                <strong>Gameplay Analytics</strong>: Information about your gameplay behavior, 
                achievements, and interactions with in-game features.
              </li>
              <li className="mb-2">
                <strong>Crash Reports</strong>: Data collected to identify and fix technical issues 
                within our games.
              </li>
            </ul>

            <h3 className="text-lg mb-2">1.3 Cookies and Similar Technologies</h3>
            <p>
              We may use cookies, beacons, or similar technologies to analyze usage, remember your 
              preferences, and enhance your experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-2">2. How We Use Your Information</h2>
            <ul className="list-disc ml-6">
              <li className="mb-2">Deliver and maintain our games, websites, and services.</li>
              <li className="mb-2">Improve gameplay experiences and optimize game performance.</li>
              <li className="mb-2">Process transactions and provide customer support.</li>
              <li className="mb-2">Send notifications about updates, features, and promotions.</li>
              <li className="mb-2">Monitor usage patterns to improve features and security.</li>
              <li className="mb-2">Comply with legal and regulatory obligations.</li>
            </ul>
          </section>

          {/* Sections 3-10 following the same pattern */}
          <section>
            <h2 className="text-xl mb-2">10. Contact Us</h2>
            <p>For questions or concerns about this Privacy Policy, please contact us:</p>
            <ul className="list-disc ml-6 mt-2">
              <li className="mb-2"><strong>Email</strong>: Support@HalfByteGames.net</li>
              <li className="mb-2"><strong>Mailing Address</strong>: 325 Sunset Drive Clyde TX, 79510</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
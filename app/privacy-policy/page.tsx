import React from "react";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-4xl p-6 text-gray-800">
        <h1 className="mb-6 text-center text-3xl font-bold">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">1. Introduction</h2>
          <p className="mb-4">
            Welcome to [Your Website/App Name]. Your privacy is important to us,
            and this policy explains how we collect, use, and protect your
            information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">
            2. Information We Collect
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Personal Information:</strong> Name, email, phone number,
              etc.
            </li>
            <li>
              <strong>Usage Data:</strong> Information on how you interact with
              our services.
            </li>
            <li>
              <strong>Cookies and Tracking:</strong> We use cookies to enhance
              user experience.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>To provide and improve our services.</li>
            <li>To personalize user experience.</li>
            <li>For security and fraud prevention.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">
            4. Data Sharing & Protection
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>We do not sell your data to third parties.</li>
            <li>We implement security measures to protect your information.</li>
            <li>
              Data may be shared with service providers for operational
              purposes.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">
            5. Your Rights & Choices
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>You can access, update, or delete your personal data.</li>
            <li>You can opt out of marketing communications.</li>
            <li>You can manage cookie preferences.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">
            6. Changes to This Policy
          </h2>
          <p className="mb-4">
            We may update this policy. Changes will be communicated through our
            website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">7. Contact Us</h2>
          <p>
            If you have any questions, contact us at{" "}
            <strong>support@[yourdomain].com</strong>.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;

import React from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";

const TermsAndConditionsPage = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-4xl p-6 text-gray-800">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Terms and Conditions
        </h1>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">1. Introduction</h2>
          <p className="text-gray-600">
            Welcome to [Your Website]. These terms and conditions outline the
            rules and regulations for the use of our website and services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">2. Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing or using our website, you agree to be bound by these
            terms. If you do not agree with any part of these terms, you must
            not use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">3. User Obligations</h2>
          <ul className="list-inside list-disc text-gray-600">
            <li>You must be at least 18 years old to use our services.</li>
            <li>
              You are responsible for keeping your account information secure.
            </li>
            <li>
              Any misuse of our platform will result in immediate termination of
              access.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">
            4. Intellectual Property
          </h2>
          <p className="text-gray-600">
            All content on this website, including text, images, and logos, is
            our property or used with permission. Unauthorized use is
            prohibited.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-600">
            We are not responsible for any direct, indirect, or incidental
            damages resulting from the use of our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">6. Changes to Terms</h2>
          <p className="text-gray-600">
            We may update these terms from time to time. Your continued use of
            our website after changes means you accept the updated terms.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold">7. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about these Terms and Conditions, please
            contact us at [Your Contact Email].
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditionsPage;

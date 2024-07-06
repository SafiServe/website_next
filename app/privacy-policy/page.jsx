import React from "react";
import Layout from "../layout";
import styles from "./page.module.css";

export default function PrivacyPolicy() {
  return (
    <>
      <main className="flex flex-col items-center gap-10 p-4 md:p-6 lg:p-8 pb-20">
        <section className="w-full md:w-3/4 lg:w-1/2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl pt-24">
            Privacy Policy
          </h1>
          <div className="mt-6 space-y-4 text-gray-800 dark:text-gray-600">
            <h2 className="text-2xl font-semibold">Data Collection</h2>
            <p>
              We collect data to operate effectively and provide you the best
              experiences with our services. You provide some of this data
              directly, such as when you create a personal account. We get some
              of it by recording how you interact with our services by, for
              example, using technologies like cookies, and receiving error
              reports or usage data from software running on your device.
            </p>
            <h2 className="text-2xl font-semibold">Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users of
              our website. This helps us to provide you with a good experience
              when you browse our website and also allows us to improve our
              site.
            </p>
            <h2 className="text-2xl font-semibold">User Rights</h2>
            <p>
              You have the right to access and control your personal data. You
              can also request what personal data we hold about you and to ask
              us to update or delete it.
            </p>
          </div>
        </section>
        <section className="w-full md:w-3/4 lg:w-1/2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Terms of Service
          </h1>
          <div className="mt-6 space-y-4 text-gray-800 dark:text-gray-600">
            <h2 className="text-2xl font-semibold dark:text-gray-600">
              User Responsibilities
            </h2>
            <p>
              As a user, you are responsible for your own communications and are
              responsible for the consequences of their posting. You must not do
              the following things: post material that is copyrighted, unless
              you are the copyright owner or have the permission of the
              copyright owner to post it.
            </p>
            <h2 className="text-2xl font-semibold">Prohibited Activities</h2>
            <p>
              Users are required to use the website responsibly and to respect
              the rights and dignity of others. Prohibited activities include,
              but are not limited to: posting any information which is invasive
              of another's privacy or publicity rights or that is harmful,
              threatening, abusive or hateful.
            </p>
            <h2 className="text-2xl font-semibold">Dispute Resolution</h2>
            <p>
              Any dispute arising out of or in connection with this agreement,
              including any question regarding its existence, validity or
              termination, shall be referred to and finally resolved by
              arbitration under the rules of the national arbitration law.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

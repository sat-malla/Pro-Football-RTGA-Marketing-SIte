import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Pro Football RTGA" },
      {
        name: "description",
        content:
          "How Pro Football RTGA collects, uses, and protects your data across team generation, simulation, and AI analysis features.",
      },
      { property: "og:title", content: "Privacy Policy — Pro Football RTGA" },
      {
        property: "og:description",
        content: "How Pro Football RTGA handles your data.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{children}</p>
);

const H = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-12 text-xl font-bold tracking-tight text-foreground md:text-2xl">{children}</h2>
);

const B = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-2 flex gap-2 pl-4 text-sm leading-relaxed text-muted-foreground md:text-base">
    <span className="text-primary">&bull;</span>
    <span>{children}</span>
  </p>
);

const Mail = () => (
  <a className="text-primary underline underline-offset-4 hover:text-primary/80" href="mailto:sathvikmalla17@gmail.com">
    sathvikmalla17@gmail.com
  </a>
);

const Ext = ({ href }: { href: string }) => (
  <a
    className="text-primary underline underline-offset-4 hover:text-primary/80"
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {href}
  </a>
);

export function BackLink() {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/40 px-4 py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
    >
      <ArrowLeft className="size-4" />
      Back to home
    </Link>
  );
}

function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
      <BackLink />
      <p className="label-kicker mt-8">Legal</p>
      <h1 className="mt-4 text-4xl md:text-5xl">Privacy Policy</h1>
      <P>
        This privacy policy applies to the Pro Football Random Team Generator &amp; Analysis app for mobile devices,
        together with any related services operated by Sathvik Malla (collectively, the "Application"). Sathvik Malla is
        hereby referred to as the "Service Provider".
      </P>

      <H>Information Collection and Use</H>
      <P>
        The Application collects information when you download and use it. This information may include information such
        as
      </P>
      <B>Your device's Internet Protocol address</B>
      <B>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</B>
      <B>The time spent on the Application</B>
      <B>Your mobile operating system you use</B>

      <H>Cookies and tracking technologies</H>
      <P>
        The Application or its third-party SDKs may use cookies, SDKs, pixels, and similar technologies to support
        functionality, analytics, or service delivery. Where required by applicable law, the Service Provider will
        obtain consent before using non-essential tracking technologies.
      </P>

      <H>Your Rights</H>
      <P>
        You may request access to, correction of, or deletion of your personal data held by the Service Provider. To
        exercise these rights, or to withdraw consent where processing is based on consent, contact the Service Provider
        at <Mail />.
      </P>

      <H>Your California privacy rights (CCPA/CPRA)</H>
      <P>
        If you are a California resident, you have the right to know what personal information is collected, the right
        to delete personal information, the right to opt out of the sale or sharing of personal information, and the
        right to non-discrimination for exercising these rights. To exercise your CCPA/CPRA rights, contact the Service
        Provider at <Mail />.
      </P>

      <H>Artificial Intelligence</H>
      <P>
        The Application uses Artificial Intelligence (AI) technologies to enhance user experience and provide certain
        features. The AI components may process user data to deliver personalized content, recommendations, or automated
        functionalities. All AI processing is performed in accordance with this privacy policy and applicable laws. If
        you have questions about the AI features or data processing, please contact the Service Provider.
      </P>
      <P>
        The Service Provider may use the information you provide to send important information, required notices, and,
        where permitted by law, marketing communications.
      </P>
      <P>
        For a better experience while using the Application, the Service Provider may require you to provide certain
        personally identifiable information, including but not limited to Email. The information the Service Provider
        requests will be retained and used as described in this privacy policy.
      </P>

      <H>Third Party Access</H>
      <P>
        The Application integrates with third-party services to provide core functionality, communications, and payment
        processing. Some of these services may process personal data you provide directly (such as your email address or
        messages sent through AI chat features). Others are backend infrastructure providers used by the Service
        Provider to operate the Application and do not interact with you directly. Below are the third-party services
        used by the Application and links to their respective privacy policies:
      </P>
      <B>
        Brevo (email communications) — <Ext href="https://www.brevo.com/legal/privacypolicy/" />
      </B>
      <B>
        Formspree (contact/feedback forms) — <Ext href="https://formspree.io/legal/privacy-policy/" />
      </B>
      <B>
        Groq (AI-powered analysis features) — <Ext href="https://groq.com/privacy-policy/" />
      </B>
      <B>
        Stripe (payment processing, if applicable) — <Ext href="https://stripe.com/privacy" />
      </B>
      <P>
        The Application also relies on the following backend infrastructure providers to store data and operate its
        services. These providers do not independently collect information from you; they process data on the Service
        Provider's behalf:
      </P>
      <B>
        Supabase (database hosting): <Ext href="https://supabase.com/privacy" />
      </B>
      <B>
        MongoDB (database hosting): <Ext href="https://www.mongodb.com/legal/privacy/privacy-policy" />
      </B>
      <B>
        Render (application hosting): <Ext href="https://render.com/privacy" />
      </B>
      <B>
        Weights &amp; Biases (internal machine learning infrastructure):{" "}
        <Ext href="https://wandb.ai/site/privacy-policy/" />
      </B>
      <P>The Service Provider may disclose User Provided and Automatically Collected Information:</P>
      <B>As required by law, such as to comply with a subpoena, or similar legal process;</B>
      <B>
        When they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the
        safety of others, investigate fraud, or respond to a government request;
      </B>
      <B>
        With their trusted services providers who work on their behalf, do not have an independent use of the
        information the Service Provider discloses to them, and have agreed to adhere to the rules set forth in this
        privacy statement.
      </B>

      <H>International Data Transfers</H>
      <P>
        The Service Provider or its third-party service providers may transfer personal data to countries outside your
        country of residence, including outside the European Economic Area (EEA). Where applicable law requires
        safeguards for international transfers, the Service Provider will use appropriate mechanisms.
      </P>
      <B>Standard Contractual Clauses (SCCs) approved by the European Commission</B>
      <B>Adequacy decisions or other legally recognized transfer mechanisms</B>
      <B>Your consent, where required and legally permitted</B>
      <P>
        Data protection laws in other countries may differ from those in your jurisdiction. Where required by law, the
        Service Provider will apply appropriate safeguards and obtain any consent required for the transfer.
      </P>
      <P>
        Please note that the Application utilizes third-party services that have their own Privacy Policy about handling
        data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:
      </P>
      <B>
        Google Analytics for Firebase (
        <Ext href="https://firebase.google.com/support/privacy" />)
      </B>
      <B>
        Expo (<Ext href="https://expo.io/privacy" />)
      </B>

      <H>Opt-Out Rights</H>
      <P>
        You can stop further collection of information from your mobile device by uninstalling the Application.
        Uninstalling will stop the Application from collecting data from your device, but it does not automatically
        delete information that has already been transmitted to the Service Provider or to third parties.
      </P>
      <P>
        To request deletion of your personal data, to withdraw consent, or to exercise any of your rights, contact the
        Service Provider at <Mail />.
      </P>

      <H>Data Retention Policy</H>
      <P>The Service Provider retains personal data based on its necessity for the stated purposes:</P>
      <B>
        User Provided Data: Retained for the duration of your use of the Application plus 12 months thereafter, unless
        longer retention is required by law
      </B>
      <B>
        Automatically Collected Data: Retained for up to 24 months from collection, unless longer retention is required
        for legal compliance
      </B>
      <B>Aggregated and Anonymized Data: Retained indefinitely as it no longer identifies you</B>
      <B>Data required for legal compliance: Retained as long as required by applicable law</B>
      <P>
        You may request deletion of your personal data, subject to any legal obligation to retain it. If you want the
        Service Provider to delete User Provided Data submitted through the Application, please contact them at <Mail />
        . Please note that some User Provided Data may be required for the Application to function properly.
      </P>

      <H>Data Deletion</H>
      <P>
        You can request deletion of your personal data or account by contacting the Service Provider at <Mail />. The
        Service Provider will process your request within the timeframes required by applicable law.
      </P>
      <P>
        Upon verification of your identity, the Service Provider will delete your personal data from its systems, except
        where retention is required for legal compliance or legitimate business purposes.
      </P>

      <H>Children</H>
      <P>
        The Application is rated for all ages (4+) and may be used by children. The Service Provider is committed to
        protecting the privacy of children who use the Application and complies with the Children's Online Privacy
        Protection Act (COPPA) and other applicable children's privacy laws.
      </P>
      <P>
        The Application does not knowingly collect more personal information from children than is reasonably necessary
        to provide the Application's core functionality. The Application does not require users to create an account or
        provide personal information such as an email address in order to use its core features (such as generating and
        simulating teams). Certain optional features, such as AI-powered chat or email communications, may involve
        information being sent to third-party services as described in the "Third Party Access" section above; these
        features are optional and not required to use the Application.
      </P>
      <P>
        If you are a parent or guardian and believe your child has provided personal information through the Application
        in a manner inconsistent with this policy, please contact the Service Provider at <Mail /> so that appropriate
        action can be taken, including deletion of that information.
      </P>

      <H>Security</H>
      <P>
        The Service Provider is concerned about safeguarding the confidentiality of your information. The Service
        Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider
        processes and maintains.
      </P>

      <H>Data Breach Notification</H>
      <P>
        If a data breach occurs that affects your personal data, the Service Provider will notify you in accordance with
        applicable legal requirements, including, where required, providing information about the nature of the breach
        and the steps being taken to address it.
      </P>

      <H>Changes</H>
      <P>
        The Service Provider may update this Privacy Policy from time to time. The Service Provider will notify you of
        material changes by posting the updated Privacy Policy with an effective date. Where required by law, the
        Service Provider will seek your consent to material changes before they take effect.
      </P>
      <P>
        Previous versions of this Privacy Policy will be maintained and made available upon request by contacting the
        Service Provider at <Mail />.
      </P>
      <P>This privacy policy is effective as of 2026-08-01.</P>

      <H>Your Consent</H>
      <P>
        Where processing is based on consent, you provide that consent by affirmatively opting in to the relevant
        feature or action. You may withdraw consent at any time without affecting processing carried out before
        withdrawal. Processing based on other lawful bases is carried out as described above.
      </P>

      <H>Contact Us</H>
      <P>
        If you have any questions regarding privacy while using the Application, or have questions about the practices,
        please contact the Service Provider via email at <Mail />.
      </P>

      <p className="mt-6 text-xs text-muted-foreground/70">
        &copy; {new Date().getFullYear()} Pro Football RTGA. All rights reserved.
      </p>
    </main>
  );
}

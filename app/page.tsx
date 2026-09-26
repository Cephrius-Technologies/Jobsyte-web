import MarketingShell from "@/components/landing/marketing-shell";
import { ConstructionHome } from "@/components/landing/sections/construction-home";
import { SITE_URL } from "@/components/landing/marketing-data";

const HOME_PAGE_STRUCTURED_DATA = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JobSyte",
    url: SITE_URL,
    logo: `${SITE_URL}/jobsyte-icon.png`,
    email: "sales@jobsyte.com",
    description:
      "Construction project management software built for sub-contractors working with national home builders.",
    foundingDate: "2025",
    parentOrganization: {
      "@type": "Organization",
      name: "Cephrius Technologies",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "JobSyte",
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: "JobSyte",
      url: SITE_URL,
    },
    inLanguage: "en-US",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "JobSyte",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "ProjectManagementApplication",
    operatingSystem: "Web, iOS, Android",
    url: SITE_URL,
    description:
      "JobSyte helps contractors manage projects, schedule jobs, track invoices, and keep field and office teams aligned in one workflow.",
    featureList: [
      "Project management",
      "12-month job scheduling",
      "Crew and roster management",
      "Invoice issuance and reconciliation",
      "Payroll queue",
      "Profitability and accounting snapshots",
      "Global search across projects, jobs, employees, and invoices",
      "Role-based, company-scoped access",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/request-demo`,
    },
    audience: {
      "@type": "Audience",
      audienceType: "Contractors, subcontractors, and home builders",
    },
    publisher: {
      "@type": "Organization",
      name: "JobSyte",
      url: SITE_URL,
    },
  },
];

export default function LandingPage() {
  return (
    <>
      {HOME_PAGE_STRUCTURED_DATA.map((schema, index) => (
        <script
          key={`jobsyte-home-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <MarketingShell>
        <ConstructionHome />
      </MarketingShell>
    </>
  );
}

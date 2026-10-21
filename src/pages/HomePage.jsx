import { useState } from "react";
import Typewriter from "../components/Typewriter";
import SkillCloud from "../components/SkillCloud";
import Globe3D from "../components/Globe3D";
import { profile, experience, skillCategories, skills } from "../data/profile";
import azraPhoto from "../../azra profile.png";

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

const countryCodes = [
  { code: "+1", country: "United States" },
  { code: "+1", country: "Canada" },
  { code: "+7", country: "Russia / Kazakhstan" },
  { code: "+20", country: "Egypt" },
  { code: "+27", country: "South Africa" },
  { code: "+30", country: "Greece" },
  { code: "+31", country: "Netherlands" },
  { code: "+32", country: "Belgium" },
  { code: "+33", country: "France" },
  { code: "+34", country: "Spain" },
  { code: "+36", country: "Hungary" },
  { code: "+39", country: "Italy" },
  { code: "+40", country: "Romania" },
  { code: "+41", country: "Switzerland" },
  { code: "+43", country: "Austria" },
  { code: "+44", country: "United Kingdom" },
  { code: "+45", country: "Denmark" },
  { code: "+46", country: "Sweden" },
  { code: "+47", country: "Norway" },
  { code: "+48", country: "Poland" },
  { code: "+49", country: "Germany" },
  { code: "+51", country: "Peru" },
  { code: "+52", country: "Mexico" },
  { code: "+54", country: "Argentina" },
  { code: "+55", country: "Brazil" },
  { code: "+56", country: "Chile" },
  { code: "+57", country: "Colombia" },
  { code: "+60", country: "Malaysia" },
  { code: "+61", country: "Australia" },
  { code: "+62", country: "Indonesia" },
  { code: "+63", country: "Philippines" },
  { code: "+64", country: "New Zealand" },
  { code: "+65", country: "Singapore" },
  { code: "+66", country: "Thailand" },
  { code: "+81", country: "Japan" },
  { code: "+82", country: "South Korea" },
  { code: "+84", country: "Vietnam" },
  { code: "+86", country: "China" },
  { code: "+90", country: "Turkey" },
  { code: "+91", country: "India" },
  { code: "+92", country: "Pakistan" },
  { code: "+93", country: "Afghanistan" },
  { code: "+94", country: "Sri Lanka" },
  { code: "+95", country: "Myanmar" },
  { code: "+98", country: "Iran" },
  { code: "+212", country: "Morocco" },
  { code: "+213", country: "Algeria" },
  { code: "+216", country: "Tunisia" },
  { code: "+218", country: "Libya" },
  { code: "+220", country: "Gambia" },
  { code: "+233", country: "Ghana" },
  { code: "+234", country: "Nigeria" },
  { code: "+249", country: "Sudan" },
  { code: "+250", country: "Rwanda" },
  { code: "+251", country: "Ethiopia" },
  { code: "+254", country: "Kenya" },
  { code: "+255", country: "Tanzania" },
  { code: "+256", country: "Uganda" },
  { code: "+260", country: "Zambia" },
  { code: "+263", country: "Zimbabwe" },
  { code: "+351", country: "Portugal" },
  { code: "+352", country: "Luxembourg" },
  { code: "+353", country: "Ireland" },
  { code: "+354", country: "Iceland" },
  { code: "+358", country: "Finland" },
  { code: "+359", country: "Bulgaria" },
  { code: "+370", country: "Lithuania" },
  { code: "+371", country: "Latvia" },
  { code: "+372", country: "Estonia" },
  { code: "+380", country: "Ukraine" },
  { code: "+381", country: "Serbia" },
  { code: "+385", country: "Croatia" },
  { code: "+420", country: "Czech Republic" },
  { code: "+421", country: "Slovakia" },
  { code: "+852", country: "Hong Kong" },
  { code: "+853", country: "Macau" },
  { code: "+855", country: "Cambodia" },
  { code: "+880", country: "Bangladesh" },
  { code: "+886", country: "Taiwan" },
  { code: "+960", country: "Maldives" },
  { code: "+962", country: "Jordan" },
  { code: "+963", country: "Syria" },
  { code: "+964", country: "Iraq" },
  { code: "+965", country: "Kuwait" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+967", country: "Yemen" },
  { code: "+968", country: "Oman" },
  { code: "+971", country: "United Arab Emirates" },
  { code: "+972", country: "Israel" },
  { code: "+973", country: "Bahrain" },
  { code: "+974", country: "Qatar" },
  { code: "+975", country: "Bhutan" },
  { code: "+976", country: "Mongolia" },
  { code: "+977", country: "Nepal" },
  { code: "+992", country: "Tajikistan" },
  { code: "+993", country: "Turkmenistan" },
  { code: "+994", country: "Azerbaijan" },
  { code: "+995", country: "Georgia" },
  { code: "+998", country: "Uzbekistan" },
];

const WHATSAPP_NUMBER = "";
const CONTACT_EMAIL = profile.email || "";

function HomePage() {
  const [sent, setSent] = useState(null);
  const [countryCode, setCountryCode] = useState("+91");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!profile.email) {
      setSent("contact");
      return;
    }
    setSent("ok");
    event.currentTarget.reset();
  };

  const handleWhatsApp = () => {
    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const phone = document.getElementById("phone")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in your name, email and message before sending a WhatsApp message.");
      return;
    }

    if (!WHATSAPP_NUMBER) {
      alert("WhatsApp number is being added soon. Please use the Email button for now.");
      return;
    }

    const fullMessage = `Hi, I am ${name}. Email: ${email}. Phone: ${phone ? `${countryCode} ${phone}` : "—"}. Message: ${message}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleEmail = () => {
    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const phone = document.getElementById("phone")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    if (!CONTACT_EMAIL) {
      alert("Email is being added soon. Please reach out on LinkedIn in the meantime.");
      return;
    }

    const subject = `Message from ${name || "Portfolio visitor"}`;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone ? `${countryCode} ${phone}` : "—"}\n\n${message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="page">
      <header className="hero" id="home">
        <Globe3D variant="hero" />
        <nav className="navbar">
          <a
            className="brand"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("home");
            }}
            aria-label="Azra home"
          >
            Azra
          </a>
          <div className="nav-links">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("about");
              }}
            >
              About
            </a>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("experience");
              }}
            >
              Experience
            </a>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("skills");
              }}
            >
              Skills
            </a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("work");
              }}
            >
              Work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
            >
              Contact
            </a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-photo">
              <img src={azraPhoto} alt="Azra Fayaz" />
            </div>
          </div>
          <div className="hero-right">
            <p className="eyebrow">Greetings and warm regards</p>
            <h1>
              I&rsquo;m
              <br />
              <span className="full-name">AZRA FAYAZ</span>
              <span className="pronouns">{profile.pronouns}</span>
              <br />
              <span className="title-line">
                <Typewriter
                  words={[
                    "Marketing Executive",
                    "Social Media Manager",
                    "Brand & Content Strategist",
                    "Influencer Marketing",
                    "Events & Partnerships"
                  ]}
                />
              </span>
            </h1>
            <p className="hero-headline">{profile.headline}</p>
            <p>
              Based in {profile.location}. Currently Marketing Executive at {profile.company}, building
              brands across social, content, email and on-ground activations.
            </p>
            <a
              className="primary-btn"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
            >
              Let&rsquo;s talk
            </a>
          </div>
        </div>
      </header>

      <Globe3D variant="page" />

      <main>
        <section className="section section-about" id="about">
          <div className="section-inner">
            <h2>Who am I?</h2>
            <div className="prose">
              <p className="lead">
                A marketer who builds brands across screens and streets — social feeds, inboxes,
                creator partnerships and real-world activations.
              </p>
              <p>
                I&rsquo;m {profile.name}, a Marketing Executive at {profile.company}, working across
                social media management, content creation and design, email marketing, influencer
                marketing, brand partnerships, on-ground events and content strategy. My work sits
                where brand positioning meets day-to-day execution — planning the calendar, making
                the creatives, running the campaigns and reading the numbers afterwards.
              </p>
              <p>
                Before Bambuyu I spent a year and a half as Brand Executive at Gramiyaa, driving
                offline brand growth with four on-ground events every month, strategic barter
                collaborations with 10+ cooking academies, universities and event partners, and a new
                B2B sales channel built by onboarding those academies as customers. Over six months
                that work grew the brand&rsquo;s LinkedIn presence by 40% in followers, 147% in
                impressions and 93.8% in reactions — through content strategy, storytelling and
                audience-first communication.
              </p>
              <p>
                Alongside brand work I have always stayed close to people and community — as President
                of SPIC MACAY&rsquo;s Ram Lal Anand College chapter, Vice President of Hirav (The
                Green Society), Student Coordinator of the Women Welfare Advisory Committee, a
                volunteer with the National Service Scheme and Content Writer with AWAAZ, the English
                Debating Society. It is where I learned to organise, persuade and lead.
              </p>
              <p>
                I studied at {profile.education} and the University of Delhi, and I work across sales
                and marketing, FMCG, event management, content writing and social media management.
                Open to relocation and always up for a brand that wants to grow the interesting way.
              </p>
            </div>
            <ul className="fact-row">
              <li>
                <span className="fact-value">9</span>
                <span className="fact-label">roles across brand, campus &amp; community</span>
              </li>
              <li>
                <span className="fact-value">10+</span>
                <span className="fact-label">barter partnerships led</span>
              </li>
              <li>
                <span className="fact-value">48</span>
                <span className="fact-label">on-ground events in a year</span>
              </li>
              <li>
                <span className="fact-value">147%</span>
                <span className="fact-label">LinkedIn impressions growth</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="section section-experience" id="experience">
          <div className="section-inner">
            <h2>Experience</h2>
            <ol className="timeline">
              {experience.map((job) => (
                <li className="tl-item" key={job.company}>
                  <span className="tl-marker" aria-hidden="true">
                    <ion-icon name={job.icon}></ion-icon>
                  </span>
                  <div className="tl-body">
                    <div className="tl-head">
                      <div className="tl-company">
                        {job.company}
                        <span className="tl-type">{job.type}</span>
                      </div>
                      <div className="tl-date">
                        {job.date} · {job.duration}
                      </div>
                    </div>
                    <div className="tl-role">{job.role}</div>
                    <div className="tl-location">{job.location}</div>
                    <p className="tl-summary">{job.summary}</p>

                    {job.responsibilities.length > 0 && (
                      <ul className="tl-points">
                        {job.responsibilities.map((r) => (
                          <li key={r.title}>
                            <strong>{r.title}</strong>
                            <span>{r.desc}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {job.metrics && (
                      <div className="tl-metrics">
                        {job.metrics.map((m) => (
                          <div className="tl-metric" key={m.label}>
                            <span className="tl-metric-value">{m.value}</span>
                            <span className="tl-metric-label">{m.label}</span>
                          </div>
                        ))}
                        <p className="tl-metrics-note">{job.metricsNote}</p>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section section-skills" id="skills">
          <div className="section-inner">
            <h2>Skills</h2>
            <SkillCloud categories={skillCategories} skills={skills} />
          </div>
        </section>

        <section className="section section-work" id="work">
          <div className="section-inner">
            <h2>Selected Work</h2>

            <div className="work-feature">
              <div className="work-feature-tag">Gramiyaa · Brand growth</div>
              <h3>Growing an offline-first oil brand into a connected community</h3>
              <p>
                A year and a half of compounding brand work: monthly on-ground events for consumer
                education around wood cold-pressed oils, a barter network with cooking academies,
                universities and event partners, and a B2B channel that turned those partners into
                repeat customers.
              </p>
              <div className="work-metrics">
                <div className="work-metric">
                  <span className="work-metric-value">4 / mo</span>
                  <span className="work-metric-label">on-ground events executed</span>
                </div>
                <div className="work-metric">
                  <span className="work-metric-value">10+</span>
                  <span className="work-metric-label">barter partners onboarded</span>
                </div>
                <div className="work-metric">
                  <span className="work-metric-value">40%</span>
                  <span className="work-metric-label">follower growth</span>
                </div>
                <div className="work-metric">
                  <span className="work-metric-value">93.8%</span>
                  <span className="work-metric-label">rise in reactions</span>
                </div>
              </div>
              <ul className="work-tags">
                <li>Event Management</li>
                <li>Barter Collaborations</li>
                <li>B2B Onboarding</li>
                <li>LinkedIn Strategy</li>
                <li>FMCG</li>
              </ul>
            </div>

            <h3 className="work-subheading">What I actually do</h3>
            <ul className="work-list">
              <li>
                <strong>Social &amp; content.</strong> Plan the calendar, make the creatives, publish,
                engage and report back on what moved.
              </li>
              <li>
                <strong>Email.</strong> Run campaigns end-to-end — strategy, copy, design, send and
                performance tracking.
              </li>
              <li>
                <strong>Influencer.</strong> Source creators, negotiate deliverables and manage the
                collaboration through to published content.
              </li>
              <li>
                <strong>Partnerships.</strong> Build barter and brand collaborations that trade reach
                and relevance instead of just budget.
              </li>
              <li>
                <strong>Events.</strong> Take brand activations offline — pop-ups, campus drives and
                on-ground consumer education.
              </li>
            </ul>

            <h3 className="work-subheading">Education</h3>
            <ul className="work-list work-list-plain">
              <li>{profile.education}</li>
              <li>University of Delhi</li>
            </ul>
          </div>
        </section>

        <section className="section section-contact" id="contact">
          <div className="section-inner">
            <h2>Contact</h2>
            <p className="contact-intro">
              Open to marketing roles and brand collaborations. Phone and email are being added soon
              — for now, the quickest way to reach me is the form or LinkedIn.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required />

              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />

              <label htmlFor="phone">Phone</label>
              <div className="phone-field">
                <select
                  className="country-select"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  aria-label="Country code"
                >
                  {countryCodes.map((c) => (
                    <option key={`${c.code}-${c.country}`} value={c.code}>
                      {c.country} ({c.code})
                    </option>
                  ))}
                </select>
                <input id="phone" name="phone" type="tel" placeholder="Phone number" required />
              </div>
              <input type="hidden" name="country_code" value={countryCode} />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required />

              <div className="button-row">
                <button type="button" onClick={handleWhatsApp}>
                  <ion-icon name="logo-whatsapp"></ion-icon> WhatsApp
                </button>
                <button type="button" onClick={handleEmail}>
                  <ion-icon name="mail-outline"></ion-icon> Email
                </button>
              </div>

              {sent === "contact" && (
                <p className="submit-message" data-status="info">
                  The form is being connected to an inbox. Please reach out on LinkedIn in the
                  meantime.
                </p>
              )}
              {sent === "ok" && (
                <p className="submit-message" data-status="success">
                  Thanks for reaching out. I&rsquo;ll get back to you soon.
                </p>
              )}
            </form>

            <div className="social-row">
              <a
                href="https://www.linkedin.com/in/azra-fayaz-4307bb378/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;

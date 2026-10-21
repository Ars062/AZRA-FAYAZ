import { useState } from "react";
import Typewriter from "../components/Typewriter";
import SkillCloud from "../components/SkillCloud";
import Globe3D from "../components/Globe3D";
import { profile, experience, skillCategories, skills } from "../data/profile";
import azraPhoto from "../../azra profile.png";
import azraJps from "../../azra-jps.jpeg";

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

const WHATSAPP_NUMBER = "971524328500";
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
                    "Social Media Strategist",
                    "Community & Brand",
                    "Content & Influencer Marketing",
                    "AI-Assisted Creative"
                  ]}
                />
              </span>
            </h1>
            <p className="hero-headline">Performance-Focused. Audience-Driven. Story-Led.</p>
            <p>
              A Community &amp; Content Strategist turning performance data and human behaviour
              into content and community moments that make a brand feel like someone, not something.
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
            <h2>Who I am</h2>
            <div className="about-grid">
              <div className="prose">
                <p className="lead">
                  A Community &amp; Content Strategist who turns performance data and human behaviour
                  into content and community moments that make a brand feel like someone, not something.
                </p>
                <p>
                  My approach is simple: understand the audience, create with intent, and deliver
                  content that moves people — emotionally and analytically. Across social, email,
                  influencer and on-ground work, I plan it, make it, ship it, then read the numbers
                  to keep what wins.
                </p>
              </div>
              <figure className="about-photo">
                <img src={azraJps} alt="Azra Fayaz" />
              </figure>
            </div>

            <div className="approach-card">
              <span className="approach-tag">My approach is simple</span>
              <p>
                Understand the audience, create with intent, and deliver content that moves people —
                emotionally and analytically.
              </p>
            </div>

            <blockquote className="quote-card">
              <p>&ldquo;Her strategies helped us shift from posting randomly to posting with purpose.&rdquo;</p>
              <cite>Bashar Karoubi — Founder, Bambuyu</cite>
            </blockquote>

            <ul className="fact-row">
              <li>
                <span className="fact-value">50+</span>
                <span className="fact-label">campaigns strategised · AED 100k+ revenue</span>
              </li>
              <li>
                <span className="fact-value">45+</span>
                <span className="fact-label">brand activations handled</span>
              </li>
              <li>
                <span className="fact-value">1300+</span>
                <span className="fact-label">leads generated</span>
              </li>
              <li>
                <span className="fact-value">40+</span>
                <span className="fact-label">creators worked with</span>
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
            <h2>What I do</h2>

            <ul className="work-list">
              <li>
                <strong>Content &amp; influencer.</strong> Create brand content and lead influencer
                partnerships end-to-end.
              </li>
              <li>
                <strong>Brand collaborations.</strong> Own co-marketing and creator collaborations
                from brief to execution.
              </li>
              <li>
                <strong>Email marketing.</strong> Run retention email end-to-end — planning, design
                and execution.
              </li>
              <li>
                <strong>Brand socials.</strong> Manage daily social presence across Instagram,
                LinkedIn, TikTok and Facebook.
              </li>
              <li>
                <strong>AI-powered content.</strong> Use AI to speed up creative production and
                workflow.
              </li>
            </ul>

            <h3 className="work-subheading">Strategy principles</h3>
            <ul className="principles-list">
              <li>
                <strong>Audit before you create.</strong> Fix what&rsquo;s quietly broken before you
                build what&rsquo;s next.
              </li>
              <li>
                <strong>Segment by behaviour, not by blast.</strong> Same message to everyone wastes
                the few who&rsquo;d have converted.
              </li>
              <li>
                <strong>Chase the moment, not the feature.</strong> Creative comes from where people
                actually meet the brand.
              </li>
              <li>
                <strong>Ship it. Measure it. Keep what wins.</strong> Instinct picks the idea. Data
                picks the winner.
              </li>
            </ul>
            <p className="principles-note">
              Strategy isn&rsquo;t just a plan — it&rsquo;s a language between brand and audience.
            </p>

            <h3 className="work-subheading">Education</h3>
            <ul className="work-list work-list-plain">
              <li>{profile.education}</li>
              <li>B.Sc. (Hons) Microbiology — University of Delhi (GPA 3.8/4.0)</li>
            </ul>
          </div>
        </section>

        <section className="section section-contact" id="contact">
          <div className="section-inner">
            <h2>Contact</h2>
            <p className="contact-intro">
              Open to marketing roles and brand collaborations. Send a message through the form —
              use WhatsApp or Email below to reach me directly.
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

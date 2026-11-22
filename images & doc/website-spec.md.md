# Website Build Specification: Suja's Child Development Centre

Build a responsive, modern, and compassionate multi-page (or smooth-scrolling single-page + dedicated Contact/Booking section) pediatric therapy website for **Suja's Child Development Centre** (`sujaschilddevelopmentcenter.in`) using semantic HTML5, Tailwind CSS (or React/Next.js), and vanilla client-side JavaScript (zero backend).

---

## 1. Brand Identity, Contact Info & Location
- **Centre Name:** Suja's Child Development Centre (SCDC)
- **Founder / Lead Therapist:** Dr. J. Jansirani, B.O.T. (Bachelor of Occupational Therapy)
- **Taglines:** *"Bringing Every Child Thrive"* | *"Support • Guide • Build Skills • Grow"* | *"Play • Learn • Grow Together"*
- **Domain:** `https://sujaschilddevelopmentcenter.in`
- **Address:** No. 42A, 3rd Main Road, Radha Nagar, Perumbakkam, Chennai - 600100, Tamil Nadu, India
- **Google Maps Place / Directions Link:** `https://maps.app.goo.gl/KU3LuL8oiaaAWXEZA`
- **Operating Hours:**
  - Monday – Friday: 9:30 AM – 8:00 PM
  - Saturday: 9:30 AM – 2:00 PM
  - Sunday: Closed
- **Primary Phone / WhatsApp:** `+91 86828 70313` (Raw digits for `wa.me`: `918682870313`)
- **Secondary Phone:** `+91 63693 68177`
- **Email:** `sujascdc0313@gmail.com`

---

## 2. Design & Aesthetic Direction
- **Visual Style:** Clean, warm, accessible, and family-friendly pediatric healthcare aesthetic. Use a crisp white (`#FFFFFF`) and soft warm off-white (`#FAF9F6`) background, deep navy/slate headings (`#0F2942`) for clinical trust, clean sans-serif body copy (`Inter` / `Plus Jakarta Sans`), and playful brand accents drawn from the centre's identity (vibrant magenta/pink `#E91E8C`, leaf green `#7AC143`, warm amber/gold `#F5A623`, and sky blue `#0095DA`), using vibrant purple/magenta (`#8A3FFC` or `#D81B60`) for primary CTA buttons.
- **Logo Representation:** Heart-shaped emblem cradling two joyful children (blue and pink silhouettes) held by green caring hands with a gold star, paired with **"Suja's Child Development Centre"** wordmark.
- **Layout Architecture:**
  1. Sticky Top Navbar + Mobile Sticky Bottom Action Bar
  2. Hero Section
  3. Alternating 2-Column Core Service Sections (Sections A–D)
  4. Complete Care Overview (3-Column Grid: *Our Services*, *Conditions We Support*, *Signs to Reach Us*)
  5. Pre-Footer CTA Banner
  6. **Zero-Backend Interactive Contact & Consultation Section** (WhatsApp & Email Auto-Compiler + Embedded Map)
  7. Multi-Column Footer

---

## 3. Header & Navigation
- **Top Navbar:**
  - **Left:** Brand Logo (`Suja's Child Development Centre`)
  - **Center Links:** `HOME`, `ABOUT`, `SERVICES` (Active state with underline), `EARLY INTERVENTION`, `CONTACT`
  - **Right Buttons:**
    - Outlined Button: `CONTACT US` (scrolls smoothly to `#contact-section`)
    - Solid Primary Button: `BOOK CONSULTATION` (scrolls smoothly to `#contact-section` and pre-focuses the inquiry form)
- **Mobile Sticky Bottom Bar (`md:hidden`, fixed bottom-0, 4 equal-width icon + label tabs):**
  1. `Book` -> Scrolls to `#contact-section`
  2. `WhatsApp` -> Opens `https://wa.me/918682870313?text=Hello%20Suja's%20Child%20Development%20Centre%2C%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`
  3. `Call` -> `tel:+918682870313`
  4. `Locate` -> Opens `https://maps.app.goo.gl/KU3LuL8oiaaAWXEZA` in a new tab

---

## 4. Hero Section
- **Badge / Eyebrow:** Led by Dr. J. Jansirani, B.O.T. • Perumbakkam, Chennai
- **Centered Title (H1):** Bringing Every Child Thrive — Our Pediatric Therapy Services
- **Subtitle:** Comprehensive Occupational Therapy, Speech Therapy, Special Education, Early Intervention, and Sensory Integration programs designed to help children play, learn, and grow together.
- **Hero CTAs:** `BOOK CONSULTATION` (Primary) | `CALL +91 86828 70313` (Secondary)

---

## 5. Core Service Sections (Alternating 2-Column Layout)
Each section features a rounded-2xl illustrative photograph on one side and structured content on the other, ending with a `BOOK CONSULTATION` button that scrolls to `#contact-section`.

### Section A: Occupational Therapy & Sensory Integration
- **Image Placeholder:** Child arranging wooden blocks and sensory play materials with an occupational therapist
- **Heading (H2):** Occupational Therapy & Sensory Integration
- **Intro:** Active sensory gym therapies, motor planning, and fine motor exercises to build physical confidence, focus, and daily independence.
- **Sub-items:**
  1. **Sensory Integration Therapy:** Active sensory gym sessions helping children with Sensory Processing Disorder regulate sensory input, improve focus, and build spatial balance.
  2. **Occupational & Fine Motor Practice:** Targeted exercises for hand strength, pencil grip, handwriting practice, and daily self-care routines.
  3. **Sitting Tolerance & School Readiness:** Structured play routines designed to build sitting duration, attention span, and classroom readiness.
- **CTA:** `BOOK CONSULTATION`

### Section B: Speech & Language Therapy
- **Image Placeholder:** Child and speech therapist exploring a colorful picture book together
- **Heading (H2):** Speech & Language Therapy
- **Intro:** Interactive speech training to enhance vocabulary, speech clarity, oral motor control, and social communication confidence.
- **Sub-items:**
  1. **Speech Training & Articulation:** Targeted exercises to address speech disorders, improve sound production, word clarity, and expressive language skills.
  2. **Oral Stimulation & Motor Therapy:** Specialized oral stimulation techniques to support feeding, swallowing, and speech muscle coordination.
  3. **Social Communication & Fluency:** Interactive sessions to build conversational skills, listening comprehension, and social confidence.
- **CTA:** `BOOK CONSULTATION`

### Section C: Early Intervention & Neuro Developmental Therapy
- **Image Placeholder:** Young child practicing guided developmental milestones and play-based motor skills
- **Heading (H2):** Early Intervention & Neuro Developmental Therapy
- **Intro:** Timely, nurturing early intervention programmes and neuro-developmental support to unlock foundational milestones during a child's most critical growth years.
- **Sub-items:**
  1. **Early Intervention Programme:** Holistic milestone tracking and play-based stimulation for infants and toddlers showing early developmental delays.
  2. **Neuro Developmental Therapy (NDT):** Specialized therapeutic handling and movement facilitation for children with neurological conditions and Cerebral Palsy.
  3. **Cognitive & Play-Based Skill Building:** Guided activities rooted in our *"Support • Guide • Build Skills • Grow"* philosophy to foster curiosity and independence.
- **CTA:** `BOOK CONSULTATION`

### Section D: Behavioural Modification & Special Education
- **Image Placeholder:** Calm one-on-one structured learning and reading session with an educator
- **Heading (H2):** Behavioural Modification & Special Education
- **Intro:** Compassionate, individualized behavioral strategies and remedial academic support for children with Autism, ADHD, and learning disabilities.
- **Sub-items:**
  1. **Autism (ASD) & ADHD Care:** Individualized therapy plans tailored to autism spectrum milestones, eye contact, hyperactivity management, and social engagement.
  2. **Behavioural Modification Therapy:** Nurturing, evidence-based techniques to address behavioral disorders, tantrums, impulsivity, and emotional regulation.
  3. **Special Education & Learning Support:** Customized educational strategies for children with Learning Disabilities, Intellectual Disability, and reading/writing difficulties.
- **CTA:** `BOOK CONSULTATION`

---

## 6. Complete Care Overview (3-Column Grid Section)
- **Section Heading (H2):** Complete Care for Child Development
- **Subtitle:** *Play • Learn • Grow Together — Multi-speciality pediatric support in Perumbakkam, Chennai.*

- **Column 1 — Specialized Therapies & Services:**
  - Occupational Therapy
  - Speech Therapy
  - Special Education
  - Early Intervention Programme
  - Neuro Developmental Therapy
  - Behavioural Modification Therapy
  - Sensory Integration Therapy
  - Sitting Tolerance & School Readiness
  - Oral Stimulation & Feeding Therapy
  - Handwriting & Fine Motor Practice

- **Column 2 — Conditions We Support:**
  - Autism (ASD)
  - ADHD
  - Developmental Delay
  - Cerebral Palsy
  - Sensory Processing Disorder
  - Speech Disorder
  - Learning Disability
  - Behavioural Disorder
  - Neurological Disorder
  - Intellectual Disability

- **Column 3 — Signs to Reach Us:**
  - Delay in Speech or Unclear Speech
  - Delay in Developmental Milestones
  - Lack of Eye Contact or Social Response
  - Hyperactivity & Restlessness
  - Frequent Tantrums or Behavioral Challenges
  - Difficulty with Sensory Inputs (Sounds, Textures)
  - Poor Sitting Tolerance or Attention Span
  - Reading, Writing & Learning Difficulties

---

## 7. Pre-Footer Call to Action Banner
- **Heading (H2):** Not sure where to start?
- **Subtext:** *Consult with Dr. J. Jansirani, B.O.T. and our care team to discuss the right therapy program for your child.*
- **Button:** `CONTACT US` (scrolls to `#contact-section`)

---

## 8. Contact & Consultation Section (`#contact-section`) — Zero-Backend Redirect Architecture
Build a clean 2-column Contact & Consultation section:
- **Left Column (Clinic Details & Map):**
  - **Clinic Name:** Suja's Child Development Centre
  - **Consultant:** Dr. J. Jansirani, B.O.T.
  - **Address:** No. 42A, 3rd Main Road, Radha Nagar, Perumbakkam, Chennai - 600100
  - **Timings:** Mon–Fri: 9:30 AM – 8:00 PM | Sat: 9:30 AM – 2:00 PM | Sun: Closed
  - **Direct Call Links:** `+91 86828 70313` | `+91 63693 68177`
  - **Direct Email Link:** `sujascdc0313@gmail.com`
  - **Google Maps Card / Button:** "Open in Google Maps" linking to `https://maps.app.goo.gl/KU3LuL8oiaaAWXEZA` (plus responsive Google Maps iframe centered on Radha Nagar, Perumbakkam, Chennai 600100).

- **Right Column (Interactive Inquiry Form — No Backend Required):**
  - **Fields:**
    1. `Parent / Guardian Name` (Input `type="text"`, `id="contactName"`, required)
    2. `Email Address` (Input `type="email"`, `id="contactEmail"`, required)
    3. `Phone / WhatsApp Number` (Input `type="tel"`, `id="contactPhone"`, required)
    4. `Message / Child's Requirement` (Textarea, `id="contactMessage"`, rows=4, placeholder: *"Tell us about your child's age and the therapy or support you are looking for..."*, required)
  - **Two Action Buttons (Side-by-Side):**
    1. **Button 1 (Primary Green `#25D366` / Emerald):** `Send via WhatsApp` (with WhatsApp icon)
    2. **Button 2 (Outlined / Navy `#0F2942`):** `Send via Email` (with Mail icon)
  - **Exact Client-Side Redirect Behavior (JavaScript):**
    - Validate that `Name`, `Phone`, and `Message` (and `Email` for email button) are non-empty; show inline validation feedback if missing.
    - Compile the user's inputs into a clean, structured inquiry message:
      ```text
      Hello Suja's Child Development Centre,

      I would like to make an enquiry / book a consultation:

      *Name:* ${name}
      *Email:* ${email}
      *Phone:* ${phone}
      *Message:*
      ${message}
      ```
    - **On "Send via WhatsApp" click:**
      - Encode the compiled text with `encodeURIComponent(...)` and redirect/open:
        `https://wa.me/918682870313?text=${encodedMessage}` (using `window.open(url, '_blank', 'noopener,noreferrer')`).
    - **On "Send via Email" click:**
      - Set subject: `Consultation Enquiry - ${name} | Suja's Child Development Centre`
      - Encode subject and plain-text body (without markdown asterisks) with `encodeURIComponent(...)` and trigger:
        `window.location.href = \`mailto:sujascdc0313@gmail.com?subject=${encodedSubject}&body=${encodedBody}\`` so the user's default mail client (Gmail/Apple Mail/Outlook) opens with the pre-filled draft ready to send.

---

## 9. Footer Structure
- **Column 1 (Brand Info):**
  - Logo + Name: **Suja's Child Development Centre**
  - Tagline: *Bringing Every Child Thrive*
  - Description: Multi-speciality pediatric therapy centre led by Dr. J. Jansirani, B.O.T., dedicated to helping every child support, guide, build skills, and grow.
- **Column 2 (Quick Links):**
  - Home, About Us, Services, Early Intervention, Book Consultation, Contact Us
- **Column 3 (Our Therapies):**
  - Occupational Therapy, Speech Therapy, Special Education, Early Intervention Programme, Neuro Developmental Therapy, Behavioural Modification Therapy, Sensory Integration Therapy
- **Column 4 (Centre Address & Contact):**
  - **Address:** No. 42A, 3rd Main Road, Radha Nagar, Perumbakkam, Chennai - 600100
  - **Timings:** Mon–Fri: 9:30 AM – 8:00 PM | Sat: 9:30 AM – 2:00 PM
  - **Phone:** `+91 86828 70313` / `+91 63693 68177`
  - **Email:** `sujascdc0313@gmail.com`
  - **Directions:** [View on Google Maps](https://maps.app.goo.gl/KU3LuL8oiaaAWXEZA)
- **Bottom Bar:**
  - Copyright: `© 2026 Suja's Child Development Centre. All rights reserved.`
  - Legal Links: `Privacy Policy` | `Terms of Use`
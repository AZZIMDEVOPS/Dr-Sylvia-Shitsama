export interface Insight {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  medicalTopic?: string; // e.g. 'hydrocephalus', 'research', 'head-injury-trauma'
  content: string;
  relatedResearch?: string;
  relatedResearchSlug?: string;
}

export const insights: Insight[] = [
  {
    slug: 'understanding-hydrocephalus',
    title: 'Understanding Hydrocephalus: When Should You Seek Specialist Care?',
    category: 'Brain Health',
    date: '08 AUG 2026',
    readTime: '6 min read',
    excerpt: 'What every family needs to know about hydrocephalus — from early warning signs to modern treatment options and long-term care management.',
    image: '/images/medical/hydrocephalus.png',
    medicalTopic: 'hydrocephalus',
    relatedResearch: 'Hydrocephalus outcomes in paediatric patients in East Africa',
    relatedResearchSlug: '/research',
    content: `
      <h2>What is Hydrocephalus?</h2>
      <p>Hydrocephalus is a complex neurological condition characterised by an abnormal buildup of cerebrospinal fluid (CSF) deep within the brain's cavities, known as ventricles. This excess fluid widens the ventricles, placing potentially dangerous pressure on the brain's delicate tissues.</p>
      
      <p>While often associated with infants, hydrocephalus can affect individuals at any stage of life, from congenital presentations to normal pressure hydrocephalus (NPH) commonly seen in the elderly.</p>
      
      <div class="key-callout">
        <div class="key-callout-header">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          KEY INFORMATION
        </div>
        <p>Cerebrospinal fluid normally flows through the ventricles and bathes the brain and spinal column. Hydrocephalus occurs when this delicate balance of production and absorption is disrupted.</p>
      </div>
      
      <h2 id="ventricular-system">The Ventricular System</h2>
      <p>To understand the condition, one must understand the ventricular system. The brain contains four main ventricles connected by narrow pathways. CSF is produced within these ventricles, flows through the brain and spinal cord, and is eventually absorbed into the bloodstream.</p>
      <p>When an obstruction occurs—whether from a tumour, hemorrhage, infection, or congenital malformation—the fluid accumulates, causing the ventricles to dilate and compress surrounding neural networks.</p>

      <h2>Causes</h2>
      <p>The aetiology of hydrocephalus is diverse. In paediatric cases, it is frequently congenital (present at birth) or caused by events shortly after birth, such as intraventricular hemorrhage in premature infants. In adults, it can result from head trauma, stroke, brain tumours, or central nervous system infections like meningitis.</p>

      <h2>Symptoms</h2>
      <p>Symptoms vary drastically by age group. In infants, the most obvious sign is an unusually large head size or rapid increase in head circumference, accompanied by a bulging soft spot (fontanel). Older children and adults typically present with severe headaches, nausea, blurred vision, balance issues, and cognitive decline.</p>

      <h2>Diagnosis</h2>
      <p>Accurate diagnosis relies on advanced neuroimaging. Magnetic Resonance Imaging (MRI) is the gold standard, providing detailed cross-sectional views of the brain to identify ventricular enlargement and pinpoint potential blockages. Cranial ultrasounds are also highly effective for infants whose fontanels remain open.</p>

      <h2>Treatment</h2>
      <p>Hydrocephalus almost exclusively requires surgical intervention. The traditional and most common treatment is the surgical insertion of a shunt—a flexible tube that diverts excess CSF from the brain to another part of the body, usually the abdomen, where it can be absorbed.</p>
      <p>Increasingly, we are utilising Endoscopic Third Ventriculostomy (ETV), a minimally invasive procedure where a small hole is made in the floor of the third ventricle, allowing fluid to bypass the obstruction entirely.</p>
      
      <blockquote>
        "The shift towards endoscopic management is not just a surgical preference—it is a critical strategy to ensure sustainable, long-term neurological health."
      </blockquote>

      <h2>When to Seek Specialist Care</h2>
      <p>Hydrocephalus is a progressive condition. If you notice persistent severe headaches, unexplained cognitive decline, or gait disturbances in adults, or rapid head growth and excessive irritability in infants, it is imperative to seek neurosurgical consultation immediately.</p>
    `
  },
  {
    slug: 'breaking-glass-ceiling',
    title: 'Breaking the Glass Ceiling in African Neurosurgery',
    category: 'Neurosurgery',
    date: '15 JUL 2026',
    readTime: '8 min read',
    excerpt: 'Reflections on becoming Kenya\'s first female neurosurgeon and why mentorship is the key to lasting change.',
    image: '/images/dr-sylvia-amee-speaker-podium.jpg',
    medicalTopic: 'research',
    relatedResearch: 'Faculty perspectives on mentorship and culture in Sub-Saharan Africa',
    relatedResearchSlug: '/research',
    content: `
      <h2>The Global Workforce Gap</h2>
      <p>Neurosurgery remains one of the most demanding and historically male-dominated specialties in medicine. While female enrollment in medical schools across East Africa continues to grow, a steep attrition occurs during residency and specialized surgical fellowship training. Structural barriers, limited institutional mentorship, and inflexible training culture are key drivers of this disparity.</p>
      
      <h2>Redefining Surgical Culture & Active Sponsorship</h2>
      <p>Creating sustainable pathways for women in neurosurgery requires moving beyond passive mentorship toward intentional sponsorship. Sponsors actively advocate for candidates in crucial appointment committees, open doors to complex surgical rotations, and facilitate international research collaborations.</p>
      
      <div class="key-callout">
        <div class="key-callout-header">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          KEY RESEARCH TAKEAWAY
        </div>
        <p>In our qualitative study with Maastricht University presented at AMEE Vienna, faculty across Sub-Saharan Africa emphasized that mentorship must be tailored to local institutional realities, resource constraints, and cultural contexts.</p>
      </div>
      
      <h2>Diverse Teams Drive Superior Surgical Outcomes</h2>
      <p>Diversity in the operating theatre is not merely an equity metric—it directly enhances clinical outcomes. Multidisciplinary surgical teams with diverse perspectives demonstrate higher situational awareness, enhanced patient communication, and greater diagnostic precision.</p>
    `
  },
  {
    slug: 'head-injury-warning-signs',
    title: 'When to See a Neurosurgeon After a Head Injury',
    category: 'Patient Education',
    date: '22 JUN 2026',
    readTime: '5 min read',
    excerpt: 'Not every bump on the head requires surgery — but knowing the critical warning signs can save a life.',
    image: '/images/medical/head_injury.png',
    medicalTopic: 'head-injury-trauma',
    relatedResearch: 'Traumatic brain injury outcomes at a national referral hospital',
    relatedResearchSlug: '/research',
    content: `
      <h2>The Acute Phase</h2>
      <p>Traumatic Brain Injury (TBI) is fundamentally a time-critical surgical emergency. The initial focus is on preventing secondary brain injury by managing intracranial pressure, ensuring adequate cerebral perfusion, and performing decompressive craniectomies or hematoma evacuations when indicated.</p>
      
      <p>However, surviving the acute phase is only the beginning of a complex, highly individualised journey.</p>
      
      <div class="key-callout">
        <div class="key-callout-header">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          CRITICAL RED FLAGS
        </div>
        <p>Immediate medical attention is required if a head injury is followed by loss of consciousness, persistent vomiting, escalating severe headaches, pupil asymmetry, or clear fluid leaking from the nose or ears.</p>
      </div>

      <h2>The Role of Neuroplasticity</h2>
      <p>The human brain possesses a remarkable capacity to rewire itself—a process known as neuroplasticity. Following a TBI, undamaged neural networks attempt to compensate for injured areas. This is why aggressive, early rehabilitation is as critical as the initial neurosurgical intervention.</p>
      
      <blockquote>
        "Recovery from a severe TBI is measured in months and years, not days. Setting realistic expectations while fostering hope is a delicate but essential clinical skill."
      </blockquote>
    `
  }
];

export const categories = [
  'All',
  'Brain Health',
  'Spine',
  'Neurosurgery',
  'Research',
  'Patient Education'
];

export interface InsightSection {
  patientQuestion: string;
  whatYouShouldKnow: string;
  whenToSeekAttention: string[];
  whatHappensNext: string;
  keyTakeaway: string;
}

export interface Insight {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  medicalTopic: string;
  sections: InsightSection;
}

export const categories = ['All Articles', 'Brain Health', 'Spine Care', 'Neurotrauma'];

export const insights: Insight[] = [
  {
    slug: 'understanding-hydrocephalus',
    title: 'Understanding Hydrocephalus: When Should You Seek Specialist Care?',
    category: 'Brain Health',
    date: '10 AUG 2026',
    readTime: '5 min read',
    excerpt: 'What families need to know about hydrocephalus in infants and adults — recognizing symptoms early, modern endoscopic options, and what happens during a consultation.',
    image: '/images/services/hydrocephalus_patient.jpg',
    medicalTopic: 'hydrocephalus',
    sections: {
      patientQuestion: 'What causes fluid to accumulate in the brain, and how do we know if our child or elderly relative needs to see a specialist?',
      whatYouShouldKnow: 'The brain and spinal cord are cushioned by cerebrospinal fluid (CSF), which continuously circulates through interconnected cavities called ventricles. In a healthy state, CSF is produced and absorbed into the bloodstream at an equal rate. Hydrocephalus occurs when this natural circulation or absorption is disrupted, causing excess fluid to build up and exert pressure on surrounding neural tissue. In infants, it is often congenital or arises after premature birth or infection. In older adults, it can present as Normal Pressure Hydrocephalus (NPH), where fluid accumulates gradually over time.',
      whenToSeekAttention: [
        'Infants: Unusually rapid increase in head circumference, a tense or bulging soft spot (fontanel), prominent scalp veins, or downward deviation of the eyes ("sunset eyes").',
        'Children & Young Adults: Persistent morning headaches with nausea or vomiting, double vision, unexplained balance difficulty, or sudden lethargy.',
        'Older Adults: The classic triad of progressive walking difficulty (shuffling or "magnetic" gait), gradual cognitive slowing or memory loss, and urinary urgency or incontinence.',
      ],
      whatHappensNext: 'Your consultation with Dr. Sylvia Shitsama begins with a comprehensive neurological examination and a careful review of cranial imaging (ultrasound for infants, or MRI/CT for adults). If intervention is indicated, surgical options include a Ventriculoperitoneal (VP) Shunt—a thin, flexible tube that diverts excess fluid to the abdomen—or Endoscopic Third Ventriculostomy (ETV), a minimally invasive procedure that creates a natural bypass without implanting permanent hardware when patient anatomy allows.',
      keyTakeaway: 'Hydrocephalus is a treatable condition. Timely neurosurgical evaluation preserves cognitive and developmental function, and modern microsurgical techniques offer safe, long-term management.',
    },
  },
  {
    slug: 'head-injury-warning-signs',
    title: 'Head Injury & Concussion: When to See a Neurosurgeon After Trauma',
    category: 'Neurotrauma',
    date: '15 JUL 2026',
    readTime: '4 min read',
    excerpt: 'Practical guidance on recognizing red-flag symptoms following falls, motor vehicle accidents, or head trauma, and understanding urgent evaluation pathways.',
    image: '/images/services/head_injury_trauma_1.jpg',
    medicalTopic: 'brain-trauma',
    sections: {
      patientQuestion: 'After a blow to the head from an accident or fall, how can I tell if an injury requires urgent neurosurgical assessment?',
      whatYouShouldKnow: 'A head injury can range from a mild concussion (a temporary disruption in brain function) to an intracranial hemorrhage (bleeding inside the skull that places critical pressure on brain tissue). Because the skull is a rigid bone box, any internal bleeding or brain swelling can rapidly increase pressure. While a mild bump with a brief headache is common, certain "red flag" symptoms indicate that deeper intracranial trauma may have occurred and must be evaluated without delay.',
      whenToSeekAttention: [
        'Any loss of consciousness, even if brief (seconds to minutes).',
        'Repeated episodes of vomiting or persistent nausea following the impact.',
        'Worsening headache that does not respond to ordinary pain relief.',
        'Unequal pupil size, double vision, or slurred speech.',
        'Weakness, numbness, or clumsiness in any arm or leg.',
        'Clear fluid or blood draining from the nose or ear.',
        'Any seizure, convulsion, or unusual confusion and behavioral change.',
      ],
      whatHappensNext: 'When you arrive at an emergency facility or clinic for evaluation, a non-contrast Brain CT scan is the standard diagnostic imaging modality to rapidly rule out fractures, epidural hematomas, or subdural bleeding. If imaging is clear, careful clinical observation and cognitive rest are advised. If bleeding or mass effect is identified, Dr. Shitsama will assess whether urgent surgical evacuation (craniectomy/craniotomy) or intensive monitoring is necessary.',
      keyTakeaway: 'Never ignore a head injury accompanied by loss of consciousness, repeated vomiting, or progressive confusion. Immediate CT neuroimaging is the definitive step to ensure patient safety.',
    },
  },
  {
    slug: 'persistent-spine-pain',
    title: 'Persistent Back & Neck Pain: Understanding Spinal Conditions & When Surgery Is Needed',
    category: 'Spine Care',
    date: '28 JUN 2026',
    readTime: '5 min read',
    excerpt: 'Demystifying back and neck pain: when conservative therapy is appropriate, how to identify genuine nerve compression, and what neurosurgical consultation involves.',
    image: '/images/services/spine_surgery.jpg',
    medicalTopic: 'spine',
    sections: {
      patientQuestion: 'I have severe back or neck pain that radiates into my leg or arm. How do I know if I need spine surgery or if it will resolve with therapy?',
      whatYouShouldKnow: 'The vast majority of back and neck pain—over 90%—stems from muscular strain or minor degenerative changes that resolve with conservative measures like targeted physiotherapy, ergonomic adjustments, and short-term medication. However, when an intervertebral disc herniates or the spinal canal narrows (spinal stenosis), spinal nerves can become physically compressed. This produces radiculopathy—sharp, shooting pain, numbness, or tingling that travels down the leg (sciatica) or into the arm and hand.',
      whenToSeekAttention: [
        'Progressive muscle weakness in the leg, foot (e.g. foot drop or stumbling), or hand grip.',
        'Severe shooting pain radiating past the knee or elbow that prevents sleep or normal walking.',
        'Numbness in the "saddle area" (groin, buttocks) or sudden difficulty controlling bowel or bladder function (this is Cauda Equina Syndrome and constitutes a medical emergency).',
        'Pain that persists relentlessly for more than 6 weeks despite structured physical therapy.',
      ],
      whatHappensNext: 'Dr. Shitsama evaluates your neurological reflexes, sensation, and muscle strength alongside a dedicated high-resolution Spinal MRI. Surgery is never the first resort unless neurological emergencies are present. If conservative therapy has failed and MRI confirms nerve root compression, minimally invasive microdiscectomy or targeted decompression can remove the compressing fragment, relieving nerve tension with minimal tissue disruption.',
      keyTakeaway: 'Spine surgery is reserved for precise mechanical nerve compression with objective neurological signs. Thorough evaluation and accurate imaging ensure you receive the right care at the right time.',
    },
  },
];

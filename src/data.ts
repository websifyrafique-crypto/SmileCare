import {
  Stethoscope,
  Sparkles,
  Syringe,
  Activity,
  Smile,
  ShieldCheck,
  Baby,
  HeartPulse,
  Droplet,
  Pill,
} from 'lucide-react';

export const CLINIC_INFO = {
  name: 'SmileCare Dental Studio',
  phone: '+92 300 1234567',
  whatsapp: '+92 300 1234567',
  email: 'hello@smilecaredental.pk',
  address: '123 Premium Boulevard, Gulberg III, Lahore, Pakistan',
  timings: 'Mon - Sat: 9:00 AM - 9:00 PM',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108920.69794354247!2d74.267923!3d31.483226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sGulberg%20III%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s',
};

export const SERVICES = [
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    shortDesc: 'Permanent, natural-looking tooth replacements to restore your confident smile.',
    icon: Syringe,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    fullDesc: 'At SmileCare Dental Studio in Lahore, we offer premium dental implants that look, feel, and function just like your natural teeth. Whether you have lost a single tooth or require a full mouth reconstruction, our state-of-the-art implantology provides a durable, long-term solution. The procedure involves placing a titanium post into the jawbone, which acts as a sturdy foundation for a custom-crafted crown.',
    benefits: ['Permanent solution for missing teeth', 'Prevents bone loss in the jaw', 'Restores natural chewing and speaking', 'Enhances facial aesthetics'],
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    shortDesc: 'Professional laser whitening for a noticeably brighter, stunning smile in just one visit.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?auto=format&fit=crop&w=800&q=80',
    fullDesc: 'Achieve a radiant, stain-free smile with our advanced professional teeth whitening services. We utilize safe, high-quality whitening agents that effectively lift deep stains caused by coffee, tea, tobacco, and aging. Our in-clinic laser whitening provides immediate results, brightening your teeth by several shades in just a single session while minimizing sensitivity.',
    benefits: ['Immediate, visible results', 'Safe and supervised by experts', 'Removes deep, stubborn stains', 'Boosts self-confidence instantly'],
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment',
    shortDesc: 'Painless endodontic therapy to save infected teeth and relieve severe toothache.',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
    fullDesc: 'Don\'t let severe tooth pain disrupt your life. Our modern root canal treatment is designed to be as painless and comfortable as a routine filling. We use advanced rotary endodontics to carefully remove infected pulp, clean the root canals, and seal them securely, saving your natural tooth from extraction and restoring its function.',
    benefits: ['Eliminates severe tooth pain', 'Saves the natural tooth structure', 'Prevents infection from spreading', 'Highly successful, routine procedure'],
  },
  {
    id: 'dental-braces',
    title: 'Dental Braces',
    shortDesc: 'Traditional and ceramic braces to correct misaligned teeth for all ages.',
    icon: Smile,
    image: 'https://images.unsplash.com/photo-1593081156828-4ce8bc459419?auto=format&fit=crop&w=800&q=80',
    fullDesc: 'Straighten your teeth and improve your bite with our comprehensive orthodontic treatments. We offer high-quality metal braces for robust correction and aesthetically pleasing ceramic braces that blend with your natural tooth color. Our orthodontic specialists in Lahore create customized plans to ensure optimal alignment and a beautiful, healthy smile.',
    benefits: ['Corrects severe misalignment', 'Improves bite and jaw function', 'Durable and effective', 'Options for aesthetic ceramic brackets'],
  },
  {
    id: 'clear-aligners',
    title: 'Clear Aligners',
    shortDesc: 'Invisible, comfortable aligners for discreet teeth straightening.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1628177142898-93e46e623666?auto=format&fit=crop&w=800&q=80',
    fullDesc: 'Get the straight smile you have always wanted without the visible metal wires. Clear aligners (like Invisalign) offer a virtually invisible, removable, and comfortable way to correct mild to moderate teeth crowding and spacing issues. Enjoy the freedom to eat your favorite foods and maintain your normal brushing routine during treatment.',
    benefits: ['Virtually invisible treatment', 'Removable for eating and cleaning', 'More comfortable than traditional wires', 'Fewer clinic visits required'],
  },
  {
    id: 'veneers',
    title: 'Dental Veneers',
    shortDesc: 'Custom porcelain shells to instantly transform chipped or discolored teeth.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    fullDesc: 'Transform your smile flawlessly with premium porcelain veneers. These ultra-thin, custom-made shells are bonded to the front surface of your teeth to instantly conceal chips, severe stains, gaps, or minor misalignments. We meticulously design each veneer to complement your facial features and natural tooth shape for a stunning Hollywood smile.',
    benefits: ['Fixes chips, gaps, and severe stains', 'Natural, translucent appearance', 'Stain-resistant porcelain material', 'Long-lasting cosmetic solution'],
  },
  {
    id: 'smile-makeover',
    title: 'Smile Makeover',
    shortDesc: 'Comprehensive cosmetic treatments tailored to create your dream smile.',
    icon: Smile,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    fullDesc: 'A complete transformation tailored specifically for you. Our smile makeover process combines multiple cosmetic and restorative procedures—such as veneers, whitening, implants, or gum contouring—to achieve aesthetic perfection. We use digital smile design technology so you can preview your new look before treatment even begins.',
    benefits: ['Complete aesthetic transformation', 'Customized to your facial harmony', 'Addresses multiple dental issues at once', 'Dramatically boosts self-esteem'],
  },
  {
    id: 'scaling-polishing',
    title: 'Scaling & Polishing',
    shortDesc: 'Thorough cleaning to remove plaque, tartar, and maintain healthy gums.',
    icon: Droplet,
    image: 'https://images.unsplash.com/photo-1606265814510-928d3f7400d1?auto=format&fit=crop&w=800&q=80',
    fullDesc: 'Maintain optimal oral hygiene with our professional scaling and polishing services. Even with excellent home care, hard plaque (tartar) can build up in hard-to-reach areas. Our gentle ultrasonic scaling removes this buildup, preventing gum disease and cavities, while polishing leaves your teeth feeling incredibly smooth and refreshed.',
    benefits: ['Prevents gum disease (gingivitis)', 'Removes harmful tartar buildup', 'Freshens breath', 'Essential for long-term oral health'],
  },
  {
    id: 'crowns-bridges',
    title: 'Crowns & Bridges',
    shortDesc: 'Durable restorations to protect damaged teeth or bridge missing gaps.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1579840333246-88062f6825c3?auto=format&fit=crop&w=800&q=80',
    fullDesc: 'Restore the strength and function of compromised teeth with our custom crowns and bridges. Crowns act as protective caps for weakened or root-canal-treated teeth, while bridges seamlessly fill the gap left by one or more missing teeth. We use high-quality ceramic and zirconia materials for maximum durability and natural aesthetics.',
    benefits: ['Protects weak or fractured teeth', 'Restores ability to chew properly', 'Prevents remaining teeth from shifting', 'Highly durable and natural-looking'],
  },
  {
    id: 'childrens-dentistry',
    title: "Children's Dentistry",
    shortDesc: 'Gentle, friendly pediatric care to ensure healthy smiles from a young age.',
    icon: Baby,
    image: 'https://images.unsplash.com/photo-1629851415177-336780709a34?auto=format&fit=crop&w=800&q=80',
    fullDesc: 'We provide a welcoming, anxiety-free environment specially designed for our youngest patients. Early dental visits are crucial for preventing cavities and monitoring jaw development. Our gentle pediatric approach includes fluoride treatments, dental sealants, and fun education on proper brushing techniques to build a lifetime of healthy habits.',
    benefits: ['Anxiety-free, gentle environment', 'Preventive treatments like sealants', 'Early detection of orthodontic issues', 'Establishes positive dental habits'],
  }
];

export const DENTISTS = [
  {
    id: 'dr-ahmed-khan',
    name: 'Dr. Ahmed Khan',
    qualification: 'BDS, FCPS (Orthodontics)',
    specialty: 'Consultant Orthodontist',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    bio: 'Dr. Ahmed is a leading orthodontist in Lahore with over 12 years of experience in creating perfectly aligned smiles. He specializes in both traditional braces and modern clear aligner therapies, focusing on facial harmony and functional bite correction.',
    experience: '12+ Years',
  },
  {
    id: 'dr-sara-ali',
    name: 'Dr. Sara Ali',
    qualification: 'BDS, MSc (Cosmetic Dentistry)',
    specialty: 'Aesthetic Dentist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    bio: 'With a passion for artistry and precision, Dr. Sara leads our cosmetic department. She holds an MSc in Cosmetic Dentistry and has transformed hundreds of smiles using premium veneers, digital smile design, and advanced whitening techniques.',
    experience: '8+ Years',
  },
  {
    id: 'dr-usman-tariq',
    name: 'Dr. Usman Tariq',
    qualification: 'BDS, MDS (Oral Surgery)',
    specialty: 'Oral & Maxillofacial Surgeon / Implantologist',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    bio: 'Dr. Usman is an expert in complex dental extractions, wisdom tooth surgeries, and advanced implantology. His calm demeanor and expertise in pain management ensure that even the most complex surgical procedures are comfortable for our patients.',
    experience: '15+ Years',
  },
  {
    id: 'dr-fatima-rehman',
    name: 'Dr. Fatima Rehman',
    qualification: 'BDS, RDS',
    specialty: 'General & Pediatric Dentist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    bio: 'Dr. Fatima is dedicated to providing comprehensive family dentistry. She has a special talent for managing anxious patients and children, making every dental visit a positive and stress-free experience. Her focus is on preventive care and patient education.',
    experience: '5+ Years',
  }
];

export const PROBLEMS = [
  { title: 'Toothache', desc: 'Severe or throbbing pain, often indicating a deep cavity or infection needing a root canal.', image: 'https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?auto=format&fit=crop&w=400&q=80' },
  { title: 'Yellow Teeth', desc: 'Staining from coffee, tea, or aging. Safely resolved with professional teeth whitening.', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=400&q=80' },
  { title: 'Missing Teeth', desc: 'Gaps that affect chewing and confidence. Restored flawlessly with dental implants or bridges.', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80' },
  { title: 'Gum Disease', desc: 'Bleeding, swollen gums causing bad breath. Treated with professional deep scaling and root planing.', image: 'https://images.unsplash.com/photo-1606265814510-928d3f7400d1?auto=format&fit=crop&w=400&q=80' },
  { title: 'Crooked Teeth', desc: 'Misaligned teeth affecting your bite and smile. Corrected using braces or clear aligners.', image: 'https://images.unsplash.com/photo-1593081156828-4ce8bc459419?auto=format&fit=crop&w=400&q=80' },
  { title: 'Tooth Sensitivity', desc: 'Sharp pain when having hot or cold food, often due to worn enamel or exposed roots.', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400&q=80' },
];

export const BLOG_POSTS = [
  {
    id: 'how-often-visit-dentist',
    title: 'How Often Should You Visit a Dentist in Lahore?',
    category: 'Preventive Care',
    date: 'Oct 15, 2026',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Discover the recommended frequency for dental checkups to maintain a healthy, beautiful smile year-round.',
    content: 'Regular dental checkups are the cornerstone of good oral health. For most people, visiting a dentist every six months is the standard recommendation. During these visits at SmileCare Dental Studio in Lahore, we perform professional scaling to remove hardened plaque and thoroughly examine your teeth for early signs of cavities or gum disease. Catching problems early prevents costly and painful treatments down the road. However, if you have a history of periodontal disease, smoke, or are prone to cavities, we might recommend visits every three to four months.',
  },
  {
    id: 'braces-vs-aligners',
    title: 'Braces vs. Clear Aligners: Which is Right for You?',
    category: 'Orthodontics',
    date: 'Sep 28, 2026',
    image: 'https://images.unsplash.com/photo-1628177142898-93e46e623666?auto=format&fit=crop&w=800&q=80',
    excerpt: 'A comprehensive comparison between traditional braces and modern clear aligners for teeth straightening.',
    content: 'Choosing the right orthodontic treatment depends on your specific needs, lifestyle, and budget. Traditional metal or ceramic braces are highly effective for complex bite issues and severe crowding. They are fixed, meaning you don\'t have to worry about forgetting to wear them. Clear aligners, on the other hand, offer incredible discretion and comfort. They are removable, making eating and oral hygiene much easier. At our Lahore clinic, our specialized orthodontist will assess your smile and guide you toward the best solution for a perfect outcome.',
  },
  {
    id: 'signs-you-need-root-canal',
    title: '5 Warning Signs You Might Need a Root Canal',
    category: 'Dental Treatments',
    date: 'Sep 10, 2026',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Don\'t ignore tooth pain. Learn the critical symptoms that indicate you need immediate endodontic care.',
    content: 'A root canal is a highly effective procedure used to save a tooth that is badly decayed or infected. But how do you know if you need one? Watch out for these five signs: 1) Severe, persistent toothache that worsens when chewing. 2) Prolonged sensitivity to hot or cold temperatures, even after the source is removed. 3) Swelling or tenderness in the nearby gums. 4) A darkening or discoloration of the tooth. 5) A recurring pimple on the gums. If you experience any of these in Lahore, schedule an emergency appointment with us immediately to save your tooth.',
  }
];

export const TESTIMONIALS = [
  {
    name: 'Ayesha M.',
    city: 'Lahore',
    rating: 5,
    text: 'The best dental clinic in Lahore! I was very nervous about my root canal, but Dr. Usman made it completely painless. The clinic is incredibly clean and modern.',
  },
  {
    name: 'Salman R.',
    city: 'Lahore',
    rating: 5,
    text: 'Got my teeth whitening done here before my wedding. The results were amazing! Highly professional team and a very relaxing environment.',
  },
  {
    name: 'Zara H.',
    city: 'Lahore',
    rating: 5,
    text: 'I bring both my kids to Dr. Fatima. She is so gentle and patient with them. SmileCare truly provides a premium experience from the moment you walk in.',
  },
  {
    name: 'Fahad T.',
    city: 'Lahore',
    rating: 5,
    text: 'Excellent service! The clear aligners treatment is going very smoothly. The doctors take the time to explain everything clearly. Highly recommended.',
  }
];

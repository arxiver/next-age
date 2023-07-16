import { AGBanner } from '@/app/home/sections/Banner';
import { AGBio } from '@/app/home/sections/Bio';
import { AGFeatures } from '@/app/home/sections/Features';
import { AGCodeview } from '@/app/home/sections/Codeview';
import { AGPlans } from '@/app/home/sections/Plans';
import { AGBenefits } from '@/app/home/sections/Benefits';
import { AGOpenings } from '@/app/home/sections/Openings';
import { AGContact } from '@/app/home/sections/Contact';
import { AGFooter } from '@/app/home/sections/Footer';
import { AGNavbar } from '@/app/home/sections/Navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <AGNavbar />
      <AGBanner />
      <AGBio />
      <AGFeatures />
      <AGCodeview />
      <AGPlans />
      <AGBenefits />
      <AGOpenings />
      <AGContact />
      <AGFooter />
    </main >
  )
}
import { AGBanner } from '@/app/home/sections/banner';
import { AGBio } from '@/app/home/sections/bio';
import { AGFeatures } from '@/app/home/sections/features';
import { AGCodeview } from '@/app/home/sections/codeview';
import { AGPlans } from '@/app/home/sections/plans';
import { AGBenefits } from '@/app/home/sections/benefits';
import { AGOpenings } from '@/app/home/sections/openings';
import { AGContact } from '@/app/home/sections/contact';
import { AGFooter } from '@/app/home/sections/footer';
import { AGNavbar } from '@/app/home/sections/navbar';

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
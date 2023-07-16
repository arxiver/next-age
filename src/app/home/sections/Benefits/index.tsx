import './style.css';
import { ShareIcon, FeaturesArrow, FilterIcon, SheildIcon, PresentationIcon, InteractiveIcon, LayersIcon, MoreIcon } from '@/app/Icons';


export function AGBenefits() {
  return <>
    <div className='heading'>
      <h1>Discover more <span className='grad-color-3'>AGEDB</span> benefits</h1>
    </div>
    <div className='benefits'>
      <div className='benefits-item benefits-item-l'>
        <span className='benefits-item-icon'><ShareIcon /></span>
        <h3 className='benefits-item-header'>Graph Database Services</h3>
        <span className='benefits-item-arrow-icon'><FeaturesArrow /></span>
      </div>
      <div className='benefits-item benefits-item-s'>
        <span className='benefits-item-icon'><FilterIcon /></span>
        <h3 className='benefits-item-header'>Recommendation System</h3>
        <span className='benefits-item-arrow-icon'><FeaturesArrow /></span>
      </div>
      <div className='benefits-item benefits-item-s'>
        <span className='benefits-item-icon'><InteractiveIcon /></span>
        <h3 className='benefits-item-header'>High Availability</h3>
        <span className='benefits-item-arrow-icon'><FeaturesArrow /></span>
      </div>
      <div className='benefits-item benefits-item-l'>
        <span className='benefits-item-icon'><LayersIcon /></span>
        <h3 className='benefits-item-header'>Relational Database Services</h3>
        <span className='benefits-item-arrow-icon'><FeaturesArrow /></span>
      </div>
      <div className='benefits-item benefits-item-s'>
        <span className='benefits-item-icon'><SheildIcon /></span>
        <h3 className='benefits-item-header'>Fraud Detection System</h3>
        <span className='benefits-item-arrow-icon'><FeaturesArrow /></span>
      </div>
      <div className='benefits-item benefits-item-s'>
        <span className='benefits-item-icon'><PresentationIcon /></span>
        <h3 className='benefits-item-header'>Data Integration</h3>
        <span className='benefits-item-arrow-icon'><FeaturesArrow /></span>
      </div>
      <div className='benefits-item benefits-item-xs'>
        <span className='benefits-item-icon'><MoreIcon /></span>
      </div>
    </div>
  </>;
}

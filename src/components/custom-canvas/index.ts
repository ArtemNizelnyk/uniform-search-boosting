import { ComponentMapping } from '@uniformdev/csk-components/utils/createComponentResolver';
import Container from './Container';
import CustomComponent from './CustomComponent';
import EnrichmentScoreComponent from './klepiere/EnrichmentScore/EnrichmentScoreComponent';
import Recommendations from './klepiere/Recommendations/Recommendations';

// Here, you can add your own component or customize an existing CSK component with your logic or styles.
export const customComponentsMapping: ComponentMapping = {
  // This is a simple example of how you can add your own components.
  customComponent: { component: CustomComponent },
  recommendationsComponent: { component: Recommendations },
  enrichmentScoreComponent: { component: EnrichmentScoreComponent },
  // This is an overridden CSK Container component.
  container: { component: Container },
};

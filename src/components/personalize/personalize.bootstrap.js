import { Personalize, COMPONENT_NAME } from './personalize';

/**
 * Setup a single instance of the Personalization system on the HTML tag.
 * Personalization is top-level.
 */
const personalization = new Personalize(document.documentElement, {
  theme: 'light'
});

export { personalization, COMPONENT_NAME };

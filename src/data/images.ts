/** Category photos bundled with the app (imported through Vite so they are
 *  always served with the JS bundle — no dependency on the public/ folder). */
import burgers from '../assets/cat-burgers.jpg';
import shawarma from '../assets/cat-shawarma.jpg';
import bbq from '../assets/cat-bbq.jpg';
import fried from '../assets/cat-fried.jpg';
import desi from '../assets/cat-desi.jpg';
import drinks from '../assets/cat-drinks.jpg';

export const CATEGORY_IMAGES: Record<string, string> = {
  'Burgers': burgers,
  'Shawarma & Rolls': shawarma,
  'Pakistani BBQ': bbq,
  'Fried Items': fried,
  'Pakistani Food': desi,
  'Drinks': drinks,
};

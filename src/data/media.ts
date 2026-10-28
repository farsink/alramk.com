import heroEndurance from '../assets/images/hero-endurance.jpg';
import groupRide from '../assets/images/group-ride.jpg';
import heroCutout from '../assets/images/hero-horses-cutout.png';
import darkTexture from '../assets/images/dark-texture.jpg';
import ubidium from '../assets/images/ubidium-timer.jpg';
import transponder from '../assets/images/active-transponder.jpg';
import heart from '../assets/images/heart-rate-monitoring.jpg';
import gps from '../assets/images/gps-tracking.jpg';
import printing from '../assets/images/printing.jpg';
import races from '../assets/app/races.png';
import finalStandings from '../assets/app/final-standings.png';
import summary from '../assets/app/summary.png';
import results from '../assets/app/results.png';
import entries from '../assets/app/entries.png';

export const images = {
  heroEndurance,
  groupRide,
  heroCutout,
  darkTexture,
  ubidium,
  transponder,
  heart,
  gps,
  printing,
  races,
  final: finalStandings,
  summary,
  results,
  entries,
} as const;

export type ImageKey = keyof typeof images;

export const featureImageKeys: Record<string, ImageKey> = {
  ubidium: 'ubidium',
  transponder: 'transponder',
  'heart-rate': 'heart',
  gps: 'gps',
  reporting: 'final',
  app: 'races',
};

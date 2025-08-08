// metadata.ts

import { Metadata } from '../types/metadata';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: siteConfig.siteName,
  description: siteConfig.description,
  image: siteConfig.logoPath,
};

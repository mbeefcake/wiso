import { routes, type Redirect, type VercelConfig } from '@vercel/config/v1';

const legacyRedirect = (source: string, destination: string): Redirect => ({
  source,
  destination,
  permanent: true,
});

export const config: VercelConfig = {
  framework: 'astro',
  buildCommand: 'npm run build',
  outputDirectory: 'dist',
  cleanUrls: true,
  trailingSlash: false,
  redirects: [
    // Legacy HTML4 frameset & top-level routes from old wiso.nl
    legacyRedirect('/content/intr.html', '/'),
    legacyRedirect('/submenu/sub_intr.html', '/'),
    legacyRedirect('/content/dienst.html', '/diensten'),
    legacyRedirect('/submenu/sub_dienst.html', '/diensten'),
    legacyRedirect('/submenu/dienst.html', '/diensten'),
    legacyRedirect('/content/prod.html', '/producten'),
    legacyRedirect('/submenu/sub_prod.html', '/producten'),
    legacyRedirect('/content/tip.html', '/tips-en-advies'),
    legacyRedirect('/submenu/sub_tip.html', '/tips-en-advies'),
    legacyRedirect('/content/cont.html', '/contact'),
    legacyRedirect('/submenu/sub_cont.html', '/contact'),

    // Legacy 9 service sub-frame routes
    legacyRedirect('/content/diensten/cont_rein.html', '/diensten/rioolreiniging-en-ontstopping'),
    legacyRedirect('/content/diensten/cont_rep.html', '/diensten/rioolreparatie-en-aanleg'),
    legacyRedirect('/content/diensten/cont_stank.html', '/diensten/stankdetectie'),
    legacyRedirect('/content/diensten/cont_inspec.html', '/diensten/camera-inspectie'),
    legacyRedirect('/content/diensten/cont_onderhoud.html', '/diensten/onderhoudscontract'),
    legacyRedirect('/content/diensten/cont_vetput.html', '/diensten/septic-tank-en-vetputonderhoud'),
    legacyRedirect('/content/diensten/cont_dakgoot.html', '/diensten/dakgootreiniging'),
    legacyRedirect('/content/diensten/cont_kruipruimte.html', '/diensten/kruipruimte-inspectie'),
    legacyRedirect('/content/diensten/cont_leiding.html', '/diensten/leidingdetectie'),
  ],
  headers: [
    routes.cacheControl('/_astro/(.*)', {
      public: true,
      maxAge: '1year',
      immutable: true,
    }),
    routes.cacheControl('/favicon.svg', {
      public: true,
      maxAge: '1week',
      staleWhileRevalidate: '1month',
    }),
    routes.header('/(.*)', [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    ]),
  ],
};

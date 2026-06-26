import CubeIcon from '../../assets/icons/cube-16-solid.svg?react';
import LinkSolidIcon from '../../assets/icons/link-solid.svg?react';

const FOOTER_LINKS = {
  Company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#', external: true },
    { label: 'Careers', href: '#', external: true },
    { label: 'Contact', href: '#contact' },
  ],
  Resources: [
    { label: 'Documentation', href: '#docs' },
    { label: 'API Reference', href: '#' },
    { label: 'Changelog', href: '#' },
    { label: 'GitHub', href: 'https://github.com', external: true },
  ],
  Legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'GDPR', href: '#' },
  ],
};

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="container mx-auto py-16 md:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-6">
              <CubeIcon
                className="w-6 h-6"
                style={{ color: 'var(--color-primary)' }}
                aria-hidden="true"
              />
              <span
                className="text-lg font-bold"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--color-text)',
                }}
              >
                Novia AI
              </span>
            </a>
            <p className="leading-relaxed" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
              AI-driven data automation for modern teams. Build, deploy, and
              monitor pipelines in minutes — not months.
            </p>
          </div>

          {/* Links Sections */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3
                className="font-semibold uppercase tracking-wider mb-6"
                style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text)',
                }}
              >
                {heading}
              </h3>
              <ul className="flex flex-col gap-3.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-1.5 transition-colors duration-150 hover:text-[var(--color-primary)]"
                      style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}
                      {...(link.external && {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      })}
                    >
                      {link.label}
                      {link.external && (
                        <LinkSolidIcon className="w-3 h-3" aria-hidden="true" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div
          className="pt-12 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <p className="" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
            © {CURRENT_YEAR} Novia AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="transition-colors duration-150 hover:text-[var(--color-primary)]"
              style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="transition-colors duration-150 hover:text-[var(--color-primary)]"
              style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

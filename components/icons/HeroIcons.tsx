
import React from 'react';

// Common props interface for icons, though SVGProps<SVGSVGElement> usually covers className
interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const BriefcaseIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-3.85m16.5 0c0-1.066-.316-2.062-.865-2.885A4.502 4.502 0 0 0 16.5 9.75H7.5a4.502 4.502 0 0 0-3.385 1.515A4.507 4.507 0 0 0 3.25 14.15m16.5 0N21 12.75H3" />
  </svg>
);

export const CodeBracketIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5 0-4.5 16.5" />
  </svg>
);

// Per HeroIcons, CommandLineIcon and CodeBracketIcon share the same SVG.
export const CommandLineIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5 0-4.5 16.5" />
  </svg>
);

export const CpuChipIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l3.055-3.055A4.5 4.5 0 019.856 9h4.288a4.5 4.5 0 013.055 1.445L20.25 13.5M3.75 9V6.75A2.25 2.25 0 016 4.5h12A2.25 2.25 0 0120.25 6.75V9m0 9v2.25A2.25 2.25 0 0118 20.25H6a2.25 2.25 0 01-2.25-2.25V18m0-9h16.5" />
  </svg>
);

export const EnvelopeIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

export const LanguageIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21L5.25-11.25L21 21m-9-3.75h.008v.008H10.5v-.008Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3.75A2.25 2.25 0 015.25 6H10.5m0 0V2.25M10.5 6H12m0 0v1.5m0 0V6m0 0h.75m-1.5 6H6.75m0 0H5.25m0 0H3.75m0 0V8.25m0 0h1.5m0 0H6.75m0 0h.75M6 12m0 0V9.75M6 12m0 0v2.25m0 0V12m0 0h1.5m0 0H9m0 0H7.5m0 0H6Z" />
  </svg>
);

export const LightBulbIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.355a7.5 7.5 0 01-4.5 0M12 6.75A2.25 2.25 0 0114.25 9v1.005S13.5 11.255 12 11.255c-1.5 0-2.25-.25-2.25-1.25V9A2.25 2.25 0 0112 6.75Z" />
  </svg>
);

export const PaintBrushIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.412 15.655 9.75 21.75l3.745-4.012M9.257 13.5H3.75l-2.25-2.25 9.374-9.374a2.254 2.254 0 0 1 3.186 0l2.822 2.822a2.254 2.254 0 0 1 0 3.186l-9.374 9.374Z" />
  </svg>
);

export const ServerStackIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.252a1.5 1.5 0 0 1 .41-1.05l.83-.83A1.5 1.5 0 0 1 8.29 4h7.42a1.5 1.5 0 0 1 1.05.41l.83.83c.276.276.41.64.41 1.05V18a1.5 1.5 0 0 1-1.5 1.5H7.5A1.5 1.5 0 0 1 6 18V6.252ZM6 6.252V18m0-11.748a1.5 1.5 0 0 1 .41-1.05l.83-.83A1.5 1.5 0 0 1 8.29 4h7.42M6 18h12M6 11.25h12M6 14.625h12" />
  </svg>
);

export const ShareIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
  </svg>
);

export const UserGroupIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 00-12 0m12 0c.965-.541 1.504-1.543 1.504-2.62 0-1.736-1.666-3.146-3.721-3.146H7.221c-2.055 0-3.721 1.41-3.721 3.146 0 1.077.539 2.079 1.504 2.62M12 12.75a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM12 12.75c-1.488 0-2.803.804-3.464 2.015M12 12.75c1.488 0 2.803.804 3.464 2.015" />
  </svg>
);

export const AcademicCapIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.724 8.815c1.018-.475 2.234-.736 3.526-.736 2.373 0 4.417.84 5.998 2.24M20.25 9.75A48.973 48.973 0 0012 5.25c-2.228 0-4.363.386-6.353 1.076M20.25 9.75v.219c0 .245-.022.485-.064.718a51.612 51.612 0 01-5.932 4.406c-1.808.974-3.832 1.583-6.018 1.583A9.266 9.266 0 013.75 15.066M20.25 9.75L12 14.25 3.75 9.75m16.5 0c0 1.638-1.006 3.065-2.474 3.795" />
  </svg>
);

export const BookOpenIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.485 0 4.516.608 6.068 1.584m-6.068-1.584V6.042m6.068 1.584C13.932 18.608 15.964 19.5 18.45 19.5c1.052 0 2.062-.18 3-.512V6.262A8.987 8.987 0 0018 3.75c-2.485 0-4.516.608-6.068 1.584M18 3.75V2.25" />
  </svg>
);

export const LinkIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>
);

export const CheckBadgeIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.4-1.683 3.098s-2.397 1.05-3.817 1.05c-1.42 0-2.754-.35-3.817-1.05S9.63 13.268 9.63 12c0-1.268.63-2.4 1.683-3.098s2.397-1.05 3.817-1.05c1.42 0 2.754.35 3.817 1.05S21 10.732 21 12z" />
  </svg>
);

export const DevicePhoneMobileIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3m-3 0h3m4.5-12H6.75" />
  </svg>
);

export const MapPinIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

export const Bars3Icon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const XMarkIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const ArrowDownTrayIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

export const ArrowTopRightOnSquareIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

export const ArrowUpIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
  </svg>
);

export const GitHubIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

export const BehanceIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22.286 6.138h-5.234v1.72h5.022v3.438h-4.991c-2.738 0-3.333-2.555-3.333-3.364 0-2.029 1.238-4.303 4.258-4.303h4.278v2.51zM7.55 17.168c0 .513.016.896.016.896s-2.923.041-3.644-.016c-.72-.057-.96-.44-.96-.44s.016-.328.608-2.013c.592-1.685 2.891-6.832 2.891-6.832s.448-1.121 1.953-1.089h.031c1.472-.032 1.666 1.008 1.666 1.008s-2.029 5.053-2.607 6.309c-.579 1.256-.376 2.161-.376 2.161zM16.59 17.152c-.783 0-3.936-.048-3.936-.048s.016.4.016.88c0 .48-.016.896-.016.896s3.085.048 3.92.016c.835-.031 1.455-.432 1.455-.432s.48-1.056-.032-1.264a1.29 1.29 0 0 0-.575-.048zm-8.29-5.903c0-1.056-.816-1.871-1.84-1.871s-1.84.815-1.84 1.871.816 1.872 1.84 1.872 1.84-.816 1.84-1.872zM0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0 0 5.373 0 12zm20.505 5.168c-.687.672-1.822 1.008-3.936 1.008s-3.085-.24-3.085-.24v2.047H9.25V7.953h4.636c2.096 0 3.117.271 3.791.976.673.704.799 1.888.319 3.118-.897 2.254-1.424 2.848.736 3.656.671.305 1.071.752 1.071 1.424s-.272 1.12-.803 1.873z"/>
  </svg>
);

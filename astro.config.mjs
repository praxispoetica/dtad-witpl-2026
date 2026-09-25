// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeExquisitus from 'starlight-theme-exquisitus';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://vokapelman.online',
    integrations: [starlight({
        title: 'v. o. kapelman writings',
        defaultLocale: 'writings',
        locales: {
            writings: {
                label: 'Writings',
                lang: 'en',
            },
        },
        favicon: 'favicon.ico',
        head: [
            // Add ICO favicon fallback for Safari.
            {
                tag: 'link',
                attrs: {
                    rel: 'icon',
                    href: 'favicon.ico',
                    sizes: '32x32',
                    type: 'image/x-icon',
                },
            },
  			],
        customCss: ['./src/styles/custom.css'],
        components: {
            SocialIcons: './src/components/HeaderLinks.astro'
        },
        plugins: [starlightThemeExquisitus()],
        logo: {
        		src: './src/assets/vk-1024x1024.jpg',
        },
        social: [
            {icon: 'github', label: 'GitHub', href: 'https://github.com/praxispoetica/dtad-witpl-2026'},
            /* no space, so linktree style dot com will have to be enough for now
            {icon: 'blueSky', label: 'Bluesky', href: 'https://bsky.app/profile/vokapelman.bsky.social'},
            {icon: 'substack', label: 'Substack', href: 'https://vokapelman.substack.com'},
            {icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/victorkane' },
            */
        ],
        sidebar: [
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Example Guide', slug: 'guides/example' },
                ],
            },
            {
                label: 'Reference',
                items: [{ autogenerate: { directory: 'reference' } }],
            },
        ],
		}), icon()],
});
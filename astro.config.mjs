// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeExquisitus from 'starlight-theme-exquisitus';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			customCss: ['./src/styles/custom.css'],
			components: {
				SocialIcons: './src/components/HeaderLinks.astro'
			},
			plugins: [starlightThemeExquisitus()],
			social: [
				{
					icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight'

				},
				/* non-social social icon links can be added here, for example:
				{
					icon: 'document', label: 'About', href: '/about/'
				},
				{
					icon: 'pencil', label: 'Notes', href: '/notes/'
				}
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
		}),
	],
});

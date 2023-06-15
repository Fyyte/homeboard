const { defineConfig } = require('pollen-css/utils');
const { typeset, linearScale, linearSize, autoGrid } = require('./tool/pollen-helpers.cjs');

module.exports = defineConfig((pollen) => {
	const containerWidths = {
		...pollen.width,
		'2xl': '1600px',
		'content-max': `var(--width-xl)`
	};
	return {
		output: 'src/lib/style/pollen.css',
		modules: {
			width: containerWidths,
			font: {
				text: `'Roboto Mono', monospace`,
				display: `'Roboto Mono', monospace`,
				code: `'Roboto Mono', monospace`
			},
			size: {
				...pollen.size,
				'6-8': linearSize(containerWidths, pollen.size, 'xs', 'xl', 6, 8),
				'6-12': linearSize(containerWidths, pollen.size, 'xs', 'xl', 6, 12),
				'6-24': linearSize(containerWidths, pollen.size, 'xs', 'xl', 6, 24)
			},
			scale: {
				...pollen.scale,
				'00-0': linearScale(containerWidths, pollen.scale, 'xs', 'xl', '00', '0'),
				'0-1': linearScale(containerWidths, pollen.scale, 'xs', '2xl', '0', '1'),
				'1-2': linearScale(containerWidths, pollen.scale, 'xs', '2xl', '1', '2'),
				'2-3': linearScale(containerWidths, pollen.scale, 'xs', '2xl', '2', '3'),
				'3-4': linearScale(containerWidths, pollen.scale, 'xs', '2xl', '3', '4'),
				'4-6': linearScale(containerWidths, pollen.scale, 'xs', '2xl', '4', '6'),
				'6-8': linearScale(containerWidths, pollen.scale, 'xs', '2xl', '6', '8'),
				'8-10': linearScale(containerWidths, pollen.scale, 'xs', '2xl', '8', '10')
			},
			// Paragraph text
			text: {
				xs: typeset(000, 1.5, 'text'),
				sm: typeset(00, 1.5, 'text'),
				md: typeset(0, 1.5, 'text'),
				lg: typeset(1, 1.5, 'text'),
				xl: typeset(2, 1.55, 'text')
			},
			// Headings
			display: {
				xs: typeset(0, 1.5, 'text', 'display'),
				sm: typeset(1, 1.5, 'text', 'display'),
				md: typeset(3, 1.5, 'text', 'display'),
				lg: typeset(4, 1.3, 'display'),
				xl: typeset(5, 1.3, 'display'),
				'2xl': typeset(7, 1.25, 'display')
			},
			weight: {
				...pollen.weight,
				display: 'var(--weight-bold)',
				text: 'var(--weight-regular)'
			},
			color: {
				white: '#fff',
				/** Greyscale */
				'gray-50': 'hsl(146, 1%, 95%)',
				'gray-100': 'hsl(146, 1%, 93.7%)',
				'gray-200': 'hsl(146, 1%, 85.5%)',
				'gray-300': 'hsl(146, 1%, 80%)',
				'gray-400': 'hsl(146, 1%, 60%)',
				'gray-500': 'hsl(146, 1%, 50.2%)',
				'gray-600': 'hsl(146, 1%, 36.9%)',
				'gray-700': 'hsl(146, 1%, 29%)',
				'gray-800': 'hsl(146, 1%, 20%)',
				'gray-900': 'hsl(146, 1%, 13%)',
				black: '#10181C',

				primary: 'var(--color-primary-500)',
				'primary-50': 'hsl(140, 69%, 95%)',
				'primary-100': 'hsl(139, 69%, 90%)',
				'primary-200': 'hsl(139, 66%, 85%)',
				'primary-300': 'hsl(141, 70%, 72%)',
				'primary-400': 'hsl(143, 62%, 57%)',
				'primary-500': 'hsl(300, 100%, 83%)',
				'primary-600': 'hsl(143, 100%, 31%)',
				'primary-700': 'hsl(155, 100%, 23%)',
				'primary-800': 'hsl(166, 100%, 17%)',
				'primary-900': 'hsl(169, 100%, 12%)',

				yellow: 'var(--color-purple-500)',
				'yellow-50': 'hsl(52, 100%, 95%)',
				'yellow-100': 'hsl(54, 100%, 89%)',
				'yellow-200': 'hsl(52, 100%, 72%)',
				'yellow-300': 'hsl(52, 100%, 50%)',
				'yellow-400': 'hsl(48, 96%, 53%)',
				'yellow-500': 'hsl(45, 93%, 47%)',
				'yellow-600': 'hsl(41, 96%, 43%)',
				'yellow-700': 'hsl(35, 92%, 33%)',
				'yellow-800': 'hsl(32, 81%, 29%)',
				'yellow-900': 'hsl(28, 73%, 26%)',

				red: 'var(--color-red-500)',
				'red-promotion': 'var(--color-red-500)',
				'red-50': 'hsl(2, 100%, 95%)',
				'red-100': 'hsl(3, 100%, 80%)',
				'red-200': 'hsl(3, 100%, 67%)',
				'red-300': 'hsl(3, 100%, 57%)',
				'red-400': 'hsl(3, 100%, 50%)',
				'red-500': 'hsl(0, 100%, 45%)',
				'red-600': 'hsl(358, 100%, 43%)',
				'red-700': 'hsl(358, 100%, 40%)',
				'red-800': 'hsl(358, 100%, 30%)',
				'red-900': 'hsl(358, 100%, 20%)',

				// Error
				error: 'var(--color-error-500)',
				'error-300': 'var(--color-red-300)',
				'error-500': 'var(--color-red-500)',
				'error-700': 'var(--color-red-700)',
				// Warning
				warning: 'var(--color-warning-500)',
				'warning-300': '#fec84b',
				'warning-500': '#f79009',
				'warning-700': '#b54708',
				// Success
				success: 'var(--color-success-500)',
				'success-300': '#6ce9a6',
				'success-500': '#12b76a',
				'success-700': '#027a48'
			},
			grid: {
				...pollen.grid,
				'autofit-3': autoGrid(3),
				'autofit-4': autoGrid(4)
			},
			radius: {
				...pollen.radius,
				default: 'var(--radius-md)'
			}
		}
	};
});

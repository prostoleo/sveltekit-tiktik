interface ITopic {
	name: string;
	type: string;
	icon: string;
	iconComponent: string;
}

// IconCodeBracesBox
// IconEmoticonCool
// IconGamepadVariant
// IconFood
// IconDancePole
// IconLipstick
// IconPaw
// IconMedal

export const topics: ITopic[] = [
	{
		name: 'coding',
		// type: 'bootstrap-icon',
		// icon: 'bi bi-file-earmark-code-fill',
		type: 'mdi',
		icon: 'i-mdi-code-braces-box',
		iconComponent: 'IconCodeBracesBox'
	},
	{
		name: 'comedy',
		type: 'mdi',
		icon: 'i-mdi-emoticon-cool',
		iconComponent: 'IconEmoticonCool'
	},
	{
		name: 'gaming',
		type: 'mdi',
		icon: 'i-mdi-gamepad-variant',
		iconComponent: 'IconGamepadVariant'
	},
	{
		name: 'food',
		// icon: <GiCakeSlice />,
		type: 'mdi',
		icon: 'i-mdi-food',
		iconComponent: 'IconFood'
	},
	{
		name: 'dance',
		// icon: <GiGalaxy />,
		type: 'mdi',
		icon: 'i-mdi-dance-pole',
		iconComponent: 'IconDancePole'
	},
	{
		name: 'beauty',
		type: 'mdi',
		icon: 'i-mdi-lipstick',
		iconComponent: 'IconLipstick'
	},
	{
		name: 'animals',
		type: 'mdi',
		icon: 'i-mdi-paw',
		iconComponent: 'IconPaw'
	},
	{
		name: 'sports',
		type: 'mdi',
		icon: 'i-mdi-medal',
		iconComponent: 'IconMedal'
	}
];

export const footerList1: string[] = [
	'About',
	'Newsroom',
	'Store',
	'Contact',
	'Carrers',
	'ByteDance',
	'Creator Directory'
];
export const footerList2: string[] = [
	'TikTok for Good',
	'Advertise',
	'Developers',
	'Transparency',
	'TikTok Rewards'
];
export const footerList3: string[] = [
	'Help',
	'Safety',
	'Terms',
	'Privacy',
	'Creator Portal',
	'Community Guidelines'
];

export const Theme = {
	colors: {
		black100:"#121214",
		black900:"#000000",
		gray100:"#E1E1E6",
		gray800:"#202024",
		gray900:"#7C7C8A",
		cyan400:"#81D8F6",
		cyan500:"#61DAFB",
		green:"#34A853",
		blue:"#4285F4", 
	},
	fontFamily:{
		regular:"Inter_400Regular",
		semibold:"Inter_600SemiBold",
		bold:"Inter_700Bold",
	},
	fontSize:{
		xs:  14,
		sm:  16,
		md:  18,
		lg:  20,
		xl:  24,
		xxl: 32,
	}
};

export type ThemeColors =  typeof Theme.colors;


export type HeadingProps = {
	color? : keyof typeof Theme.colors
	fontSize?: keyof typeof Theme.fontSize
	fontWeight?: 400 | 600 | 700
	level?: 1 | 2 | 3 | 4 | 5 | 6 
}



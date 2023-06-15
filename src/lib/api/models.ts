export type CardItem = {
	posted_at: Date;
	href: string;
	text: string;
	title: string;
	src: string;
	videos?: Video[];
	images?: (string | null | undefined)[];
	srclink?: string;
	srclinkAnon?: string;
	id?: string;
};

export type Video = {
	url: string | null | undefined;
	playable: boolean;
	// TODO dimensions for gallery mode
};

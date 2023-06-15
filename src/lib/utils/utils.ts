export const isImage = (url: string) => {
	if (url === undefined) return false;
	const filetype = ['jpg', 'jpeg', 'png', 'webp', 'svg'];
	const res = filetype.some((element) => {
		if (url.indexOf(element) !== -1) {
			return true;
		}
		return false;
	});
	return res;
};

export const isVideo = (url: string) => {
	if (url === undefined) return false;
	const filetype = ['gif', 'webm', 'mp4'];
	const res = filetype.some((element) => {
		if (url.indexOf(element) !== -1) {
			return true;
		}
		return false;
	});
	return res;
};

export const isHlsVideo = (url: string) => {
	if (url === undefined) return false;
	// TODO handleHLS
};

export const serializeNonPOJOs = (obj) => {
	return JSON.parse(JSON.stringify(obj));
};

export const updateSrcArray = (current, newSource) => {
	if (current.srcs.includes(newSource)) {
		return [...current.srcs];
	} else {
		return [...current.srcs, newSource];
	}
};

export const removeItemFromArray = (arr, value) => {
	const index = arr.indexOf(value);
	if (index > -1) {
		arr.splice(index, 1);
	}
	return [...arr];
};

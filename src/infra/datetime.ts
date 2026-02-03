const generatedDateRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;

export function formatDateTime(): string {
	const now = new Date();
	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, "0");
	const day = String(now.getDate()).padStart(2, "0");
	const hours = String(now.getHours()).padStart(2, "0");
	const minutes = String(now.getMinutes()).padStart(2, "0");
	
	return `${year}-${month}-${day} ${hours}:${minutes}`;
}

export function parseGeneratedDate(value: string): string {
	if (!generatedDateRegex.test(value.trim()))
		throw new Error(`Invalid generated date: "${value}". Expected format: YYYY-MM-DD HH:mm`);
	
	return value.trim();
}

export default function generateId(prefix) {
	return `${prefix}_${crypto.randomUUID()}`;
}

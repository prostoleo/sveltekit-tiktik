export default function decodeJwt(token: string) {
	console.log('token: ', token);
	console.log('typeof token: ', typeof token);
	if (!token) {
		return null;
	}

	const segments = token.split('.');

	if (segments.length > 3) {
		throw new Error('Not enough or too many segments');
	}

	// All segment should be base64
	const headerSeg = segments?.[0] ?? null;
	const payloadSeg = segments?.[1] ?? null;
	const signatureSeg = segments?.[2] ?? null;

	// base64 decode and parse JSON
	const header = JSON.parse(base64urlDecode(headerSeg));
	const payload = JSON.parse(base64urlDecode(payloadSeg));

	return {
		header: header,
		payload: payload,
		signature: signatureSeg
	};
}

function base64urlDecode(str: string) {
	return Buffer.from(str, 'base64').toString();
}

function base64urlUnescape(str: string) {
	str += Array(5 - (str.length % 4)).join('=');
	return str.replace(/-/g, '+').replace(/_/g, '/');
}

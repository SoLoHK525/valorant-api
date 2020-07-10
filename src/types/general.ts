type ResponseErrors = {
    400: 'Bad Request';
    401: 'Unauthorized';
    403: 'Forbidden';
    404: 'Data not found';
    405: 'Method not allowed';
    415: 'Unsupported media type';
    429: 'Rate limit exceeded';
    500: 'Internal server error';
    502: 'Bad gateway';
    503: 'Service unavailable';
    504: 'Gateway timeout';
};

interface LocalizedNamesDto {
    'ar-AE': string;
    'de-DE': string;
    'en-GB': string;
    'en-US': string;
    'es-ES': string;
    'es-MX': string;
    'fr-FR': string;
    'id-ID': string;
    'it-IT': string;
    'ja-JP': string;
    'ko-KR': string;
    'pl-PL': string;
    'pt-BR': string;
    'ru-RU': string;
    'th-TH': string;
    'tr-TR': string;
    'vi-VN': string;
    'zh-CN': string;
    'zh-TW': string;
}

export { ResponseErrors, LocalizedNamesDto };

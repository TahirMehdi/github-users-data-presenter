/**
 * Totally stolen from react-github-login
 * */

export function toParams(query) {
    const q = query.replace(/^\??\//, '');

    return q.split('&').reduce((values, param) => {
        const [key, value] = param.split('=');

        values[key] = value;

        return values;
    }, {});
}

export function toQuery(params, delimiter = '&') {
    const keys = Object.keys(params);

    return keys.reduce((str, key, index) => {
        let query = `${str}${key}=${params[key]}`;

        if (index < (keys.length - 1)) {
            query += delimiter;
        }

        return query;
    }, '');
}

export function safeJsonStringify(json) {
    let response;
    try {
        response = JSON.stringify(json)
    } catch (e) {
        console.warn('safeJsonStringify', e);
        response = '';
    }
    return response;
}

export function safeJsonParse(json) {
    let response;
    try {
        response = JSON.parse(json)
    } catch (e) {
        console.warn('safeJsonParse', e);
        response = {};
    }
    return response;
}
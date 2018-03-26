import {toQuery} from './utils';

function createPopup(id, url, options = {}) {
    const window = window.open(url, id, toQuery(options, ','));


}
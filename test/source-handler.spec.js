'use strict';
import {h} from 'dom-chef';
const test = require('ava');
const sourceHandler = require('../src/syntax-highlight/source-handler');

import './setup-jsdom';

test('Changes <pre> element to <code> and wraps it in a <pre> element', t => {
    const pre = <pre>var hello = "world"</pre>;
    const result = sourceHandler.getCodeElementFromPre(pre);

    t.is(result.nodeName, 'CODE', '<code> element created');
    t.is(result.innerHTML, 'var hello = "world"', '<code> content is correct');
});

test('Adds a language-xxxx class to the element that has a data-filename attr', t => {
    const element = <div data-filename="z/path/to/file/the-file.java"></div>;
    const languageClass = sourceHandler.getClassBasedOnExtension(element);
    t.is(languageClass, 'language-java', 'proper language-xxxx class added to the element');
});

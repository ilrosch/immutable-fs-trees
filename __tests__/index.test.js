import { strict as assert } from 'node:assert';
import buildTree from '../index.js';

const expected = {
  name: "nodejs-package", children: [
    { name: "Makefile", meta: {}, type: "file" },
    { name: "README.md", meta: {}, type: "file" },
    { name: "dist", children: [], meta: {}, type: "directory" },
    {
      name: "__tests__", children: [
        { name: "half.test.js", meta: { type: "text/javascript" }, type: "file" }
      ], meta: {}, type: "directory"
    },
    { name: "babel.config.js", meta: { type: "text/javascript" }, type: "file" },
    {
      name: "node_modules", children: [
        {
          name: "@babel", children: [
            {
              name: "cli", children: [
                { name: "LICENSE", meta: {}, type: "file" }
              ], meta: {}, type: "directory"
            }], meta: {}, type: "directory"
        }], meta: { owner: "root", hidden: false }, type: "directory"
    }], meta: { hidden: true }, type: "directory"
};

assert.deepEqual(buildTree(), expected);

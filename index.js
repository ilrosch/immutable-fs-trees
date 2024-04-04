import { mkfile, mkdir } from '@hexlet/immutable-fs-trees';

const buildTree = () => (
  mkdir('nodejs-package', [
    mkfile('Makefile'),
    mkfile('README.md'),
    mkdir('dist', []),
    mkdir('__tests__', [
      mkfile('half.test.js', { type: 'text/javascript' }),
    ]),
    mkfile('babel.config.js', { type: 'text/javascript' }),
    mkdir('node_modules', [
      mkdir('@babel', [
        mkdir('cli', [
          mkfile('LICENSE'),
        ])
      ])
    ], { owner: 'root', hidden: false })
  ], { hidden: true })
);

export default buildTree;

/**
 * @license
 * Copyright (c) 2017, Sopar Sihotang.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import path from 'path';
import {
  execSync,
  spawnSync,
} from 'child_process';

const SEPARATOR = process.platform === 'win32' ? ';' : ':';
const envModules = Object.assign({}, process.env);

envModules.PATH = path.resolve('./node_modules/.bin') + SEPARATOR + envModules.PATH;

const exec = function exec(command, name, cwd = process.cwd()) {
  return execSync(command, {
    cwd,
    env: envModules,
    stdio: 'inherit',
  });
};

const spawn = function spawn(command, args = [], cwd = process.cwd()) {
  return spawnSync(command, args, {
    cwd,
    env: envModules,
    stdio: 'inherit',
  }).on('error', process.exit);
};

export {
  exec as execSync,
  spawn as spawnSync,
};

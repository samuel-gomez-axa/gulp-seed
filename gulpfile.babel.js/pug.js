import { src, dest } from 'gulp';
import pug from 'gulp-pug';
import fs from 'fs';
import fetch from 'node-fetch';
import { reload } from './serve';
import config from './config';

global.fetch = fetch;

const { pathSrc, pathDest, pugFiles } = config;

const basedir = './';
const baseData = './src/data/';

const fetchRepo = () => fetch('https://api.github.com/users/axaguildev/repos')
  .then(res => res.json())
  .catch(() => console.log('failed'));

const fetchRepoApi = repo => type => fetch(`https://api.github.com/users/axaguildev/${repo}/${type}`)
  .then(res => res.json())
  .catch(() => console.log('failed'));

const getRepos = () => fetchRepo();
const getContributors = () => fetchRepoApi('react-toolkit')('contributors');
const getTags = () => fetchRepoApi('react-toolkit')('tags');

const getFileData = fileName => JSON.parse(fs.readFileSync(`${baseData}${fileName}.json`));

const pugTsk = async () => {
  const base = getFileData('base');
  const general = getFileData('general');
  const menu = getFileData('menu');
  const home = getFileData('home');
  const repos = await getRepos();
  const contributors = await getContributors();
  const tags = await getTags();

  const data = {
    tags,
    contributors,
    repos,
    base,
    general,
    menu,
    home,
    basedir,
  };

  return src(`${pathSrc}${pugFiles}`)
    .pipe(
      pug({
        locals: data,
        pretty: true,
      }),
    )
    .pipe(dest(pathDest))
    .pipe(reload({ stream: true }));
};

export default pugTsk;

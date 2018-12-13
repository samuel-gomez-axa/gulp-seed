import { src, dest } from 'gulp';
import pug from 'gulp-pug';
import fs from 'fs';
import fetch from 'node-fetch';
import co from 'co';
import { reload } from './serve';
import config from './config';

global.fetch = fetch;

const { pathSrc, pathDest, pugFiles } = config;

const basedir = './';
const baseData = './src/data/';
const secretApp = '?client_id=1aa2d218b6767c22cd2a&client_secret=9762db2dfc39e0b0e8d9988b89ebe8ad0221488e';

const fetchRepo = () => fetch(`https://api.github.com/users/axaguildev/repos${secretApp}`)
  .then(res => res.json())
  .catch(() => console.log('failed'));

const fetchRepoApi = repo => type => fetch(`https://api.github.com/repos/AxaGuilDEv/${repo}/${type}${secretApp}`)
  .then(res => res.json())
  .catch(() => console.log('failed'));

const getRepos = () => fetchRepo();
const getContributors = name => fetchRepoApi(name)('contributors');
const getTags = name => fetchRepoApi(name)('tags');

const getFileData = fileName => JSON.parse(fs.readFileSync(`${baseData}${fileName}.json`));

const pugTsk = async () => {
  const base = getFileData('base');
  const general = getFileData('general');
  const menu = getFileData('menu');
  const home = getFileData('home');

  const repos = await getRepos();

  const contributorsByRepo = await Promise.all(
    repos.map(async ({ name }) => ({
      name,
      users: await getContributors(name),
    })),
  );

  const tagsByRepo = await Promise.all(
    repos.map(async ({ name }) => ({
      name,
      users: await getTags(name),
    })),
  );

  const data = {
    contributorsByRepo,
    tagsByRepo,
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

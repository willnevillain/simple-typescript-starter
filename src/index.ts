/* eslint-disable no-console */
import express from 'express';

const PORT = 3000;

const main = () => {
  const app = express();

  app.get('/', (_, res) => {
    res.send('Hello World!');
  });

  app.get('/china', async (_, res) => {
    const data = await fetch('https://restcountries.com/v3.1/name/china').then(
      (res) => res.json(),
    );
    console.log(JSON.stringify(data));
    res.send(data);
  });

  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
};

void main();

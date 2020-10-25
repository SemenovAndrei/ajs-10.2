import GameSavingLoader from './gameSavingLoader';
import GameSaving from './gameSaving';

const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

GameSavingLoader.load(data)
  .then((saving) => console.log(new GameSaving(JSON.parse(saving))))
  .catch((error) => {
    throw new Error(error);
  });

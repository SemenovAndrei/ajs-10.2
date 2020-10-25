import read from './reader';
import json from './parser';

/**
 * @class GameSavingLoader
 */
class GameSavingLoader {
  /**
   * return new Promise(string)
   */
  static load(data) {
    return new Promise(
      (resolve, reject) => read(data)
        .catch((error) => reject(error))
        .then((readData) => json(readData))
        .then((result) => resolve(result)),
    );
  }
}

export default GameSavingLoader;

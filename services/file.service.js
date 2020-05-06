import { readLinesFromFile } from "../utils.js";

export default class FileService {
  static async getItems(firstIndex, lastIndex) {
    return readLinesFromFile(firstIndex, lastIndex);
  }

  static async printItems(firstIndex, lastIndex) {
    console.log(`Data:`);
    console.log(await FileService.getItems(firstIndex, lastIndex));
  }
}

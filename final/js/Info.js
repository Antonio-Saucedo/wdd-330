import { getJSON } from "./utilities.js";
// Info Model
export default class Info {
  constructor() {
    this.baseUrl = "https://api.spacexdata.com/v4/";
    // store the last batch of retrieved info in the model.
    this._info = [];
  }
  async getInfo(type) {
    this._info = await getJSON(this.baseUrl + type);
    return this._info;
  }
}

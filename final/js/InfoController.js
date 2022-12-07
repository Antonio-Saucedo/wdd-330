import { getLocation } from "./utilities.js";
import Info from "./Info.js";
import InfoView from "./InfoView.js";

// Info controller
export default class InfoController {
  constructor(parent, item) {
    this.parent = parent;
    this.parentElement = null;
    this.item = item;
    this.info = new Info();
    this.infoView = new InfoView();
  }
  async init() {
    this.parentElement = document.querySelector(this.parent);
    this.getDetails();
  }
  async getDetails() {
    //set loading message
    this.parentElement.innerHTML = "<li>Loading...</li>";
    // get the list of info
    const infoList = await this.info.getInfo(this.item);
    // render the list to html
    this.infoView.renderInfoList(infoList, this.parentElement, this.item);
  }
}

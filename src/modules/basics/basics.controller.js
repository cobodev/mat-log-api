//import { validateBasic } from "./basics.schemas.js";

export class BasicsController {
  constructor({ basicsModel }) {
    this.basicsModel = basicsModel;
  }

  getAll = async (req, res) => {
    const rooms = await this.basicsModel.getAll();
    res.json(rooms);
  };
}

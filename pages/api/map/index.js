import {map} from "../../../data/map";

export default function handler(req, res) {
  res.status(200).json(map);
}

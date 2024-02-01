export const ElementType = {
  Text: 0,
  Image: 1,
  Button: 2,
};

export const ElementTypeTagMap = {
  [ElementType.Text]: "v-text",
  [ElementType.Image]: "v-img",
  [ElementType.Button]: "v-btn",
};

export const ElementEventype = {
  ShowPage: 0,
  MoveRandom: 1,
  Diving: 2,
  SetElementValue: 3,
  Disable: 4,
};

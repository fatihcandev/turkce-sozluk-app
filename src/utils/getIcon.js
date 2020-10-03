import React from "react";
import * as Icon from "../components/icons";

export const getIcon = (type, color, fillColor) => {
  let icon;
  switch (type) {
    case "bookmark":
      icon = <Icon.Bookmark color={color} fill={fillColor} />;
      break;
    case "chevronLeft":
      icon = <Icon.ChevronLeft color={color} fill={fillColor} />;
      break;
    case "history":
      icon = <Icon.History color={color} fill={fillColor} />;
      break;
    case "moreHorizontal":
      icon = <Icon.MoreHorizontal color={color} fill={fillColor} />;
      break;
    case "search":
      icon = <Icon.Search color={color} fill={fillColor} />;
      break;
    case "x":
      icon = <Icon.X color={color} fill={fillColor} />;
      break;
    case "voice":
      icon = <Icon.Voice color={color} fill={fillColor} />;
      break;
    case "hand":
      icon = <Icon.Hand color={color} fill={fillColor} />;
      break;
  }
  return icon;
};

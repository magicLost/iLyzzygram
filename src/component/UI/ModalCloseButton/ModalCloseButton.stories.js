import React from "react";
import { action } from "@storybook/addon-actions";
import ModalCloseButton from "./ModalCloseButton";

export default {
  component: ModalCloseButton,
  title: "Button/ModalCloseButton",
  decorators: [],
  //decorators: [withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return (
    <>
      <ModalCloseButton
        onClick={() => console.log("onClick")}
        ariaLabel="close something"
        closeIconSize="default"
      />
    </>
  );
};

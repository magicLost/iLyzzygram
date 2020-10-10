import React from "react";
import { action } from "@storybook/addon-actions";
import AddPhotoForm from ".";
import { MockedProvider } from "@apollo/client/testing";

import { mockQueriesData as tagsMockQueriesData } from "../../../hooks/photos/useTags.mock";
//import { mockQueriesData } from "./mock";

export default {
  component: AddPhotoForm,
  title: "Forms/AddPhotoForm",
  decorators: [],
  //decorators: [withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

//const mockQueries = tagsMockQueriesData.concat(mockQueriesData);

export const Default = () => {
  return (
    <MockedProvider mocks={tagsMockQueriesData} addTypename={false}>
      <AddPhotoForm
        title="Fucking add photo form."
        onSuccessUpload={() => console.log("success upload")}
      />
    </MockedProvider>
  );
};

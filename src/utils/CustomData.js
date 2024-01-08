import React, { createContext, useContext } from "react";

const CustomData = createContext();

export const useCustomData = () => useContext(CustomData);

export const UserInfo = ({ children }) => {
  const userData = {
    name: "Jane Doe",
    jobTitle: "Software Engineer",
    shortDescription: "Passionate about coding and creating awesome software.",
    longDescription:
      "Experienced software engineer with a focus on web development and a strong background in JavaScript and React.",
    basedOn: "Brazil",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/janedoe",
      github: "https://github.com/janedoe",
      twitter: "https://twitter.com/janedoe",
      devTo: "https://dev.to/janedoe",
      email: "sarahcosiqueira@gmail.com",
    },
    apiToConsume: {
      devTo: "https://dev.to/api/articles?username=sarahcssiqueira",
      github: "https://api.github.com/users/sarahcssiqueira/repos",
    },
    gitHubPageDesc:
      "Say something about why you share projects on GitHub (or leave blank)",
    blogPageDesc: "Say a few words about why do you have a Blog",
  };

  return <CustomData.Provider value={userData}>{children}</CustomData.Provider>;
};

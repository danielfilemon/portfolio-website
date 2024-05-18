import React, { createContext, useContext } from "react";

const CustomData = createContext();

export const useCustomData = () => useContext(CustomData);

export const UserInfo = ({ children }) => {
  const userData = {
    name: "Daniel Filemon",
    jobTitle: "Software Engineer",
    shortDescription: "Passionate about coding and creating awesome software.",
    longDescription:
      "Experienced software engineer with a focus on web development and a strong background in JavaScript and React.",
    basedOn: "Brazil",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/danielfilemon",
      github: "https://github.com/danielfilemon",
      twitter: "https://twitter.com/danielffilemon",
      devTo: "https://dev.to/danielfilemon",
      email: "danielfilemon@yahoo.com",
    },
    apiToConsume: {
      devTo: "https://dev.to/api/articles?username=danielfilemon",
      github: "https://api.github.com/users/danielfilemon/repos",
    },
    gitHubPageDesc:
      "Say something about why you share projects on GitHub (or leave blank)",
    blogPageDesc: "Say a few words about why do you have a Blog",
  };

  return <CustomData.Provider value={userData}>{children}</CustomData.Provider>;
};

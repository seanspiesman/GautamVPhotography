import React from "react";
import Album from "./Album";

const images = [
  {
    src:
      "https://images.unsplash.com/photo-1524613032530-449a5d94c285?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1517330357046-3ab5a5dd42a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1573398643956-2b9e6ade3456?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1532664189809-02133fee698d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1526487816299-f15eea7f3efd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1486548730767-5c679e8eda6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1502685904007-66914fdd9118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1481873098652-b87c7a2fd98c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1528034342377-c406327f14b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1484026127540-d8fe960b53d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1465046099577-a121a6ab11b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1470075446540-4391a96ec621?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1537531653369-236e00309977?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1504705759706-c5ee7158f8bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1506462945848-ac8ea6f609cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1524129426126-1b85d8c74fd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=914&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1489864341077-e204d82219b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1524309199871-1817307e6d36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1529733772151-bab41484710a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
  },
];

const India = () => {
  return (
    <>
      <Album title={"India"} images={images} />
    </>
  );
};

export default India;

import React from "react";
import Album from "./Album";

const photoset = [
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3fpl1fcwpUQ5ZTWJPDDKsG9gF7RfJuzRAaMh1G8G6wvfdfAlVZXL3KvccmfPjwwvy5MAtQkWrwdUh9NOsUMfaQ6-_rQKfgBGzQlbxd52pkQNU3ggDiD8KgPsAFiQmus_F_2QcQkor1A2JZ3ir40Avdu=w1238-h1853-no?authuser=0",
    width: 4,
    height: 6,
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3czFuFsmB6ddBaCckjO_sg4lJNHGGstoqYza1pArBrZ3X9tfZAeI7Z9T31STV869r0AOboDk564GeteFwh-fLgcTtc7roNJuI8nGbAPUXqGUmWpSUc_qNFLTrwCfFhniHF1kA5yGODsqZ7dDP47uEDl=w1238-h1853-no?authuser=0",
    width: 4,
    height: 6,
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3eQGgk7dDNQ0Q9FpfMhEenmhuR6-Hd1uf1NH_UVpy6XxRl4lK31nM-oquQ-gvZM-5CSuyVjjHcOHwhP5Q_oHzUAi7Cl6GiBbV7-KDYeP_HkfFfTvS-uBoq4Y1bwUAo6wHx39V7HuRi6AiTWXH8lRFS-=w1541-h1853-no?authuser=0",
    width: 5,
    height: 6,
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3fUuAMMMSqTM8IghocyLOAnTZoGN98FSbL4UgXeqt5_DkzuXfky3UujBhVVFWHCGQKnMMZUvbw8cNLc7UKJuaWWarW3qjDNaVYVSAoo1AN22R4ScVRPT_4DPJ4PG06FNa8KNHndRhFsOjTsxqoq7nR9=w2223-h1485-no?authuser=0",
    width: 5,
    height: 4,
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3cqO_m1Rd9fydJ9XKTL7zeDFUXfp0BxrvgIF-4zcSppPiY5cO9QiXFHHtt9x3jpLFoi3fM_7qReIP98aRxZwZFraCbf776hgBrdoKszHxvHI4DVZXEpmernrKJzCnv-bH6sJSeziHe0fnWSAUuY92Rw=w1482-h1853-no?authuser=0",
    width: 4,
    height: 6,
  },
];

const India = () => {
  return (
    <>
      <Album title={"India"} photoset={photoset} />
    </>
  );
};

export default India;

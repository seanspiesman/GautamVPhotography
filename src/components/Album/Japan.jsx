import React from "react";
// import Sandbox from "../sandbox/Sandbox";
import Album from "./Album";

const images = [
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3fpl1fcwpUQ5ZTWJPDDKsG9gF7RfJuzRAaMh1G8G6wvfdfAlVZXL3KvccmfPjwwvy5MAtQkWrwdUh9NOsUMfaQ6-_rQKfgBGzQlbxd52pkQNU3ggDiD8KgPsAFiQmus_F_2QcQkor1A2JZ3ir40Avdu=w1263-h1890-no?authuser=0",
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3czFuFsmB6ddBaCckjO_sg4lJNHGGstoqYza1pArBrZ3X9tfZAeI7Z9T31STV869r0AOboDk564GeteFwh-fLgcTtc7roNJuI8nGbAPUXqGUmWpSUc_qNFLTrwCfFhniHF1kA5yGODsqZ7dDP47uEDl=w1263-h1890-no?authuser=0",
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3eQGgk7dDNQ0Q9FpfMhEenmhuR6-Hd1uf1NH_UVpy6XxRl4lK31nM-oquQ-gvZM-5CSuyVjjHcOHwhP5Q_oHzUAi7Cl6GiBbV7-KDYeP_HkfFfTvS-uBoq4Y1bwUAo6wHx39V7HuRi6AiTWXH8lRFS-=w1572-h1892-no?authuser=0",
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3fUuAMMMSqTM8IghocyLOAnTZoGN98FSbL4UgXeqt5_DkzuXfky3UujBhVVFWHCGQKnMMZUvbw8cNLc7UKJuaWWarW3qjDNaVYVSAoo1AN22R4ScVRPT_4DPJ4PG06FNa8KNHndRhFsOjTsxqoq7nR9=w1869-h1248-no?authuser=0",
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3de1iKbCXCbi-EfV8hoErtJnU-TCyrs-dxaMmkwRWpRda06JxWPP-oTgaq6JYNGbR8qexu4q7eLbwCqWmiLiWbFx7CxTqH9CCwoQPGg3PrZ33xaiyJt_ZSV0R7CzTJtRxqi411Sjt860qd6CnTBuA9l=w1869-h1337-no?authuser=0",
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3f6zAkrQqgxEv2ewgTPoSoZAy1Hf1jSzZCPbM9eBhQLN7fcqIgJJg6oW7t8n3pP4NMdu8c8JWwNpsRqdLiG1__pZUuK4gZRDSQ4wO_p57Kng9b7wcoNat7FBk55NuEtGH88lXsfk-7IhYkNQO6i_n1P=w1640-h1080-no?authuser=0",
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3eYd5eB3Panzbe_7xpg3ZzOQAlwwoUoTjA9F5hRBYxlOdv51h9JvlpCmpui7CRdChkPKDXHwvDoYf-HXgsSMdcZfC1tyJA1b1GcVht5MmpVSNUPcrp1XPzfD5UlfsLBlD2TntuamPxCkzL6MfCBAdrK=w1080-h1512-no?authuser=0",
  },
];

const Japan = () => {
  return (
    <>
      <Album title={"Japan"} images={images} />
    </>
  );
};

export default Japan;

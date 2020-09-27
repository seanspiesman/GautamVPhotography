import React from "react";
import Album from "./Album";

const photoset = [
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3cey85SxIW32IPjYDoroWC7jpl73sEdFfeJLT1DhQCq9H4F4iyWMIeEfH2GV4Jm6Vx9ETlHTFInY24ZVewdPvG_Lr-XLgH_yav_x55OwiifqYtm9_VAa1crMdEgLMO5E4G-zUinlAU4hWhS3lJzkQ-r=w1512-h1080-no?authuser=0",
    width: 4,
    height: 3,
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3eYd5eB3Panzbe_7xpg3ZzOQAlwwoUoTjA9F5hRBYxlOdv51h9JvlpCmpui7CRdChkPKDXHwvDoYf-HXgsSMdcZfC1tyJA1b1GcVht5MmpVSNUPcrp1XPzfD5UlfsLBlD2TntuamPxCkzL6MfCBAdrK=w1080-h1512-no?authuser=0",
    width: 2,
    height: 3,
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3cqyjNztBQQvqqd5_QpLyCBuT9pnesgxv59fIf0gWq5Sj78xVlqOy09A6spvVP7cVrGzPJM3YA4u44CLBG7zLNlkBoAQeUn2i3lsH9bLBAtQ8btUKNQozM1fiL_m58XEMfp11Fwo03VR7EcZz3ibGYF=w1080-h1512-no?authuser=0",
    width: 3,
    height: 4,
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3fpqg3f8XUI3DqELnAygXLqlNxecDJOi77o_sE3NWUFMpVxusIWjp20gU2y2Xx2ono8bBY3RWE-OQusTweRaagraskKm9PiwIVO_dAgvmrLJdhbip3Rr0wkCllzTPuR0RI1gZau4i0Iyw44AUZf075y=w1618-h1080-no?authuser=0",
    width: 4,
    height: 3,
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3dp7WaX6UovPTWttdGLfwE6sUhmL7BLgGDK41DtEcnYKl0WZRkwyM8cdD1asvN6fe3-lUFUpBMGL6MI_78lfIFq_aez-DuCRUaz5CEYrOpfGcddf-rEr16-kLvkey4go1Pc3iKLJvcO0zf5AfbufzOS=w1080-h1512-no?authuser=0",
    width: 1,
    height: 2,
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3d5xUY-V7fLggbsal95Vy4AFiEInmiN548lWKMKSIy819GSTu6AbyCqWYx2_GZ6uMs3mbuqbI3rr5egJOWbIvHOT17Xf5uUJOvx393y9JU_jo7QosoctpS2W8iTpEEYLIaAnWL0VuJzsD8YyNsz0KbC=w1618-h1080-no?authuser=0",
    width: 6,
    height: 4,
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3cxbeIO3vG-YQU6EBiZaDMugGu4eVdQGsIE-BVXUfUiyjZdXxEEk50720HCRm1FTnGE1oBNNAiaqKMIruRaC08bie0eeefZNIj551Bfm1QANjCa6riKX7a-VjM9ro12Ril9Iifvmc1WQNtXvcGWfHih=w1618-h1080-no?authuser=0",
    width: 6,
    height: 4,
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3e4TX1RjhRajd5_3R5nmJRA1thjKjbPjd3qne8b-BfU9Yy9TeBnMEehcO7eer86zppFONSrAOq8SdAqj3zsbFTr8oilbv1KcU4XQ6Hb4-Z58dBbkEeAJdsBppd1nyuX4pVzlkjdtDb5mFrViiqLQxH1=w1080-h1618-no?authuser=0",
    width: 3,
    height: 4,
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3dTtZF_A2Z_KR4XNt_XKt0m9lnkg4dqIaLGToubduuNX9yxP1uyxktcHCsHR4CKIS0jGRuHfzrmuQPxdn05tGGxYuA-fXrNcSe7OEOZbKhC_0hEqY9x-M4IDOtziiON4i9nTLUAdi0Q5khkwPQOTsRI=w1512-h1080-no?authuser=0",

    width: 4,
    height: 3,
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3fyuMPAoVqtSP8-Iwqh0ulyWf96OoZ3MuMFdRm_Uw2NLGKQnLphfvkhE343xej2vefqVr8ehRc3sdEtYFHwAsW1VlZQj7Ms1UJ6dpmoeKVr044x9J-aHIy6Qxh23XNMHnQu2SOm2dDDR0YGaCRifjZu=w1618-h1080-no?authuser=0",
    width: 5,
    height: 3,
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3fySkbhQIY2kf4pvQ3G8cWIV-9E4Il2UWA7url10auXPt5I4qE7TdqQqWvBFKdY917AhnkznTID9PtTbs79xwsfOBywirAlBUeD7yDxDj_YDlcIFq7SRcAS2LdZqZc-zVRSCqJwl-KzPYLzUuuYN-4r=w1618-h1080-no?authuser=0",
    width: 5,
    height: 3,
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3fPorzWHB8SzQg7C_Y2D-TmbY6l7V1emXhX1Jk77zQWYOQj83-DhflkPTm38U_ejn3l684kpb5Zqgl0RPdPDKXOgPR2CYAFIc9cC1d9niUnidNElEZCTmFLFabf7BBwFfXNOWaIWL-H1AenzZa8PGvv=w2223-h903-no?authuser=0",
    width: 6,
    height: 3,
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3dygzIQk4BO5GR0NgIXmERzCNEVf0L0KrLyawroYN2W6UBRHxS6UZ_0S_Sqlo9W53OODWeNBeVukkjYMjyxKFbqj-JZ_drTNyHl699FHIlrc8wAPCWDtadUuT2hZFKXYMzeGPIv2w_-5-cw3Qu3N0OA=w1618-h1080-no?authuser=0",
    width: 4,
    height: 3,
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3dd35I23_dNZJlfRyeT9vbphUxiY1RCvu4KRwnU648OBrEnplKPPzPmT9lPGNDOWd23IdAekKrkMGnNfLwJ6ylmw8JZ6U6rwm95QQSgrp-jDNLgW3zJU7Ex78bpjqVzt30UmPgCE1oc-FRRM1pFQyQF=w1618-h1080-no?authuser=0",
    width: 4,
    height: 3,
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3d5YX4FJMb8lvkONOtqWbxwkOyTmAgfMu2a1M1YlQzjmYuOI-UMlKHgCNe__z6CvirZ9JUIQtQFqI5xX4GXUZzUWwA_z48K8XjseIgQ_ITYWCE7yyCM5JL8YylBjbrxazH3vLxONb_5TkLw_8HyloMx=w1080-h1618-no?authuser=0",

    width: 2,
    height: 3,
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3cvOWP76m4A0asFS34VuCc4oUWyoFk3bOrtYIY4271u28OcUaPcHii80P6YP_D3G0fBpL9d38cJpsBmD_cYzP2pT_XlIZKySgGJnyUKeG7LtbZcygXQNdoEYmMg9THsZ6w4zjeJd2kEe9fa9Soy6MsU=w1618-h1080-no?authuser=0",
    width: 4,
    height: 3,
  },
  // {
  //   src: "",
  //   width: 1,
  //   height: 1,
  // },
];

const Adventure = () => {
  return (
    <div>
      <Album photoset={photoset} title={"Adventure"} />
    </div>
  );
};

export default Adventure;

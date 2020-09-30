import React from "react";
import Album from "./Album";

const images = [
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3cey85SxIW32IPjYDoroWC7jpl73sEdFfeJLT1DhQCq9H4F4iyWMIeEfH2GV4Jm6Vx9ETlHTFInY24ZVewdPvG_Lr-XLgH_yav_x55OwiifqYtm9_VAa1crMdEgLMO5E4G-zUinlAU4hWhS3lJzkQ-r=w1512-h1080-no?authuser=0",
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3epBN6tYKGXoJqHa_lcJ4LIpV9QiB7Q1cMyo9ShSmqobuI3L7vXwNe9i1XFw7HwrAfDddqPGQ2uAgDJMEisqey5SECuhHt_tMQTXgQvcul6FNQuXJl08B1SCjKy-pwiKpamXaRkILi9xh1JMe8mL62d=w1512-h1080-no?authuser=0",
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3eFcw9U5Q-AzzO8s_X_9ZgZoKDenyl9inh_Ju8ZWNq1wlvzMczVW1NShAvU2RAtaMYcKuKs3hsULqxiwrRhi_Gf_iQnmI2t__qCdurZVkZm2EZrj3BEN7jQIn16OECQ-WHSGwOXkgx2n3ZZFJEB0Zfq=w1512-h1080-no?authuser=0",
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3f6zAkrQqgxEv2ewgTPoSoZAy1Hf1jSzZCPbM9eBhQLN7fcqIgJJg6oW7t8n3pP4NMdu8c8JWwNpsRqdLiG1__pZUuK4gZRDSQ4wO_p57Kng9b7wcoNat7FBk55NuEtGH88lXsfk-7IhYkNQO6i_n1P=w1640-h1080-no?authuser=0",
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3eYd5eB3Panzbe_7xpg3ZzOQAlwwoUoTjA9F5hRBYxlOdv51h9JvlpCmpui7CRdChkPKDXHwvDoYf-HXgsSMdcZfC1tyJA1b1GcVht5MmpVSNUPcrp1XPzfD5UlfsLBlD2TntuamPxCkzL6MfCBAdrK=w1080-h1512-no?authuser=0",
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3cqyjNztBQQvqqd5_QpLyCBuT9pnesgxv59fIf0gWq5Sj78xVlqOy09A6spvVP7cVrGzPJM3YA4u44CLBG7zLNlkBoAQeUn2i3lsH9bLBAtQ8btUKNQozM1fiL_m58XEMfp11Fwo03VR7EcZz3ibGYF=w1080-h1512-no?authuser=0",
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3ffT3g5tQLvsLTsfhZiOOKr6BHJ1jMUA0TuO6A43YQToB4yNYJ5s5lMFNHnVWiV5H-1BWj5yF0Vyip0tZCKtXNuf1zfwlNVRx2uBnFoDKsoZt3g2axt06Hhc81PciAflmN25fT7FMpL7ciVgrpFxxc-=w1080-h1512-no?authuser=0",
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3dp7WaX6UovPTWttdGLfwE6sUhmL7BLgGDK41DtEcnYKl0WZRkwyM8cdD1asvN6fe3-lUFUpBMGL6MI_78lfIFq_aez-DuCRUaz5CEYrOpfGcddf-rEr16-kLvkey4go1Pc3iKLJvcO0zf5AfbufzOS=w1080-h1512-no?authuser=0",
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3d5xUY-V7fLggbsal95Vy4AFiEInmiN548lWKMKSIy819GSTu6AbyCqWYx2_GZ6uMs3mbuqbI3rr5egJOWbIvHOT17Xf5uUJOvx393y9JU_jo7QosoctpS2W8iTpEEYLIaAnWL0VuJzsD8YyNsz0KbC=w1618-h1080-no?authuser=0",
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3cxbeIO3vG-YQU6EBiZaDMugGu4eVdQGsIE-BVXUfUiyjZdXxEEk50720HCRm1FTnGE1oBNNAiaqKMIruRaC08bie0eeefZNIj551Bfm1QANjCa6riKX7a-VjM9ro12Ril9Iifvmc1WQNtXvcGWfHih=w1618-h1080-no?authuser=0",
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3f0VXiEfPGjSWhyYb_OeTnWzNw_bI0Z_YL4XD7Erpet22sQ1olPoW-LL-cgk3DZBsh9W1eBEm9KhsGwEanA2_tG6VOVtJThzkzjwDpbNLz-dMrGuEtr-7OugRa3hqSDwPXBgUFgx5hd3n-eUQjwYvVL=w1618-h1080-no?authuser=0",
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3c-tSxYwwFJPMaJ7b2KG_XE5W4nQkl63zvTs6DIapWmvsZW862sYLmiF3o8K36CHZw5CLHSu-LKMtwaQa7ek9A16300mZv1Orn447RFitu7liWH3a2cFKFyX7b5QEP4TUextglt1YzGtpPQvzVTd7Im=w1618-h1080-no?authuser=0",
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3cBq6_VitVIgyWjFsb7R8x7Dv5JhtaTJ1gM_mSDevHERiMVkacle7QLNQMSYOjDGFhnysvnig1GJs9i7Wi7N6ifAGpt4y8Imql2vJgfpYEeIjQdpX7_V8duY94CFB5joSGLODL7UquQrGAMr1oTs5sQ=w1512-h1080-no?authuser=0",
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3dTtZF_A2Z_KR4XNt_XKt0m9lnkg4dqIaLGToubduuNX9yxP1uyxktcHCsHR4CKIS0jGRuHfzrmuQPxdn05tGGxYuA-fXrNcSe7OEOZbKhC_0hEqY9x-M4IDOtziiON4i9nTLUAdi0Q5khkwPQOTsRI=w1512-h1080-no?authuser=0",
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3fyuMPAoVqtSP8-Iwqh0ulyWf96OoZ3MuMFdRm_Uw2NLGKQnLphfvkhE343xej2vefqVr8ehRc3sdEtYFHwAsW1VlZQj7Ms1UJ6dpmoeKVr044x9J-aHIy6Qxh23XNMHnQu2SOm2dDDR0YGaCRifjZu=w1618-h1080-no?authuser=0",
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3fgP-3sbPqaXwKJACOLB0Yhwf37LMNvEtGyMGLUi54uSKshhTthFO9CMT3L113V3Wr0yASrbxWs9JZxf9tEAGM1-5t0Vh3MakPfye6Ktll_O1_yEhVyWu1iQvuQjMo14i9-qogXgqkdFPUndnlWc3kx=w1618-h1080-no?authuser=0",
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3fySkbhQIY2kf4pvQ3G8cWIV-9E4Il2UWA7url10auXPt5I4qE7TdqQqWvBFKdY917AhnkznTID9PtTbs79xwsfOBywirAlBUeD7yDxDj_YDlcIFq7SRcAS2LdZqZc-zVRSCqJwl-KzPYLzUuuYN-4r=w1618-h1080-no?authuser=0",
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3fPorzWHB8SzQg7C_Y2D-TmbY6l7V1emXhX1Jk77zQWYOQj83-DhflkPTm38U_ejn3l684kpb5Zqgl0RPdPDKXOgPR2CYAFIc9cC1d9niUnidNElEZCTmFLFabf7BBwFfXNOWaIWL-H1AenzZa8PGvv=w1811-h735-no?authuser=0",
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3dygzIQk4BO5GR0NgIXmERzCNEVf0L0KrLyawroYN2W6UBRHxS6UZ_0S_Sqlo9W53OODWeNBeVukkjYMjyxKFbqj-JZ_drTNyHl699FHIlrc8wAPCWDtadUuT2hZFKXYMzeGPIv2w_-5-cw3Qu3N0OA=w1618-h1080-no?authuser=0",
  },
];

const Adventure = () => {
  return (
    <div>
      <Album images={images} title={"Adventure"} />
    </div>
  );
};

export default Adventure;

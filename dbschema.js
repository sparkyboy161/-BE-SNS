let db = {
  screams: [
    {
      userHandle: "user",
      body: "this is scream body",
      createdAt: "2020-10-20T08:04:09.761Z",
      likeCount: 5,
      commentCount: 2,
    },
  ],
  users: [
    {
      usersId: "ajkshdjashdjkashjkd",
      email: "kalsjdklas@gmail.com",
      handle: "user",
      createdAt: "2020-10-20T08:04:09.761Z",
      imageURL: "googleapis.com",
      bio: "Hello, Iam Huy",
      website: "https:/google.com",
      location: "London UK",
    },
  ],
  comments:[
      {
          userHandle: 'user',
          screamId: 'aslkdjlkasjdkla',
          body: 'nice one mate',
          createdAt: "2020-10-20T08:04:09.761Z",
      }
  ]
};

const userDetails = {
    //redux data
    credentials = {
        userId: 'asjdhasja',
        email: 'asdhjas@gmail.com',
        handle: 'huy',
        createdAt: "2020-10-20T08:04:09.761Z",
        imageURL: 'googleapis.com',
        bio: "Hello, Iam Huy",
        website: "https:/google.com",
        location: "London UK",
    },
    likes:[
        {
            userHandle: 'user',
            screamId: 'jkasdjklaskl'
        },
        {
            userHandle: 'user',
            screamId: 'jkasdjklaskl'
        }
    ]
}
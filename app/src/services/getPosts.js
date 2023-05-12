export default async () => {
  let data = await fetch("/database/posts.json")
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((res) => {
      return res.posts;
    })
    .catch((err) => {
      throw new Error(err);
    });

  return data;
};

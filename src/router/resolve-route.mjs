const resolveRoute = (route) => {
  switch (route) {
    case "#/":
      return "home";
    case "#/posts":
      return "posts";
    default:
      return "notFound";
  }
};

export { resolveRoute };

export default function auth({ next, store }) {
  if (!store.token) {
    return next({
      path: "/",
    });
  }

  return next();
}

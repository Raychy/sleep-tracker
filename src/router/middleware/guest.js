export default function guest({ next, store }) {
  if (store.token) {
    return next({
      path: "/home",
    });
  }

  return next();
}

export default function onboard({ next, store }) {
  if (!store.token) {
    return next({
      path: "/",
    });
  }

  return next();
}

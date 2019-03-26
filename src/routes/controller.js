import Router from "helpers/router";
import NotFound from "pages/NotFound.html";
import Area from "components/Area.html"
// pages
// import Index from "pages/Index.html";

const router = new Router("index");
const store = window.store;

// landing route
// router.route("/", context => router.view.set({ Page: Index }));

router.route("/:area/:page", context => {
  let { areas } = window.store.get();
  console.log("hit", context.params.area, context.params.page);
  const area = areas[context.params.area];
  if (area) {
    const page = area.pages[context.params.page.toLowerCase()];

    if (page) {

      router.view.set({
        Page: Area,
        pageData: { area, page }
      });
    }
  }
});


export default router;
import Router from "helpers/router";
import NotFound from "pages/NotFound.html";
import Area from "components/Area.html"

const Page = Area;

export const router = new Router("index");

export const index = (store) => {

  if (!store) {
    throw new Error("A store is required");
  }
  
  const { areas, defaultAreaName } = store.get();

  const indexArea = areas[defaultAreaName];
  
  console.log(`initializing routes — %cdefault area is "${defaultAreaName}"`, "color: #0bb")
  
  if (!indexArea) {
    throw new Error("No defaultAreaName was provided");
  }


  // log each route
  router.route("*", (context, next) => (console.log("Route:", context), next()));

  // landing route
  router.route("/:page?", (context, next) => {

    console.log("hit route")
    console.log("hey")
    
    let pageName = context.params.page;
    const indexPageName = "information";
    const hasPage = indexArea.pages[pageName];
    // index was hit: "/"
    if (typeof pageName === "undefined") {
      pageName = indexPageName;
    }
    // this page doesn't exist
    else if (!hasPage) {
      return next();
    }
    
    // a page was hit: "/:page"
    return router.view.set({
      Page,
      pageData: {
        area: indexArea,
        page: indexArea.pages[pageName]
      }
    });
    
  
  });
  

  router.route("/:area/:page", context => {
    console.log("hey2?")
    const area = areas[context.params.area];
    
    if (area) {
      const page = area.pages[context.params.page.toLowerCase()];
  
      if (page) {
  
        router.view.set({
          Page,
          pageData: { area, page }
        });
      }
    }
  });
    
}

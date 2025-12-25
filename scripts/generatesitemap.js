import { SitemapStream, streamToPromise } from "sitemap"
import fs from "fs"

const pages = [
  "/",
  "/about",
  "/contact",
  "/faqs",
]

const sitemap = new SitemapStream({
  hostname: "https://pacemakerconciergeservice.com/",
})

pages.forEach(url => sitemap.write({ url }))
sitemap.end()

streamToPromise(sitemap).then(data => {
  fs.writeFileSync("./public/sitemap.xml", data)
  console.log("✅ Sitemap generated")
})

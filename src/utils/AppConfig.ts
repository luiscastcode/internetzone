
import type { MarkdownInstance } from 'astro';
export const AppConfig = {
  site_name: "Mejor Fibra Óptica",
  titleweb: "Mejor Fibra Óptica",
  descriptionweb:
    "Los mejores proveedores de fibra óptica de Venezuela em una sola web",
};

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function formatearBlogPost(
  posts:any,
  { filterOutDraft = true, filterOutFuturePost = true,sortPostsByDate=true, limit = undefined } = {}
) {
const filteredPost = posts.reduce((acc,post)=>{
  const {pubDate,draft} = post.frontmatter;
  if(filterOutDraft && draft) return acc;
  if(filterOutFuturePost && new Date(pubDate) > new Date()) return acc;

  //agregar post a acc
  acc.push(post)
  return acc;

}, [])

 

//limite
if(typeof limit === "number"){
  return filteredPost.slice(0,limit);
}
return filteredPost.sort(()=>Math.random()-0.5);


}

export const SITE = {
  metatitle: "Encuentra Proveedores de Fibra Óptica En Tu Área | Venezuela",
  tagline: "Top-quality Hardware Tools",
  metadescrip: "Compara proveedores de fibra óptica en tu área o ciudad, proveedores en Caracas, proveedores en Valencia, proveedores en Barquisimeto, muchas más ciudades y proveedores..",
  description_short: "Compara proveedores de fibra óptica en tu área o ciudad",
  slug: "https://mejorfibraoptica.site",
  author: "Emil Gulamov",
};

export const SEO = {
  title: SITE.metatitle,
  description: SITE.metadescrip,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.slug,
    url: SITE.slug,
    name: SITE.metatitle,
    description: SITE.metadescrip,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.slug,
      name: SITE.metatitle,
      description: SITE.metadescrip,
    },
  },
};
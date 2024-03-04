export const projectsSlides = {
  portfolio: [
    { id: 'portfolio', alt: 'portfolio', url: '/public/portfolio/1.png' },
    { id: 'portfolio-2', alt: 'portfolio', url: '/public/portfolio/2.png' },
    { id: 'portfolio-3', alt: 'portfolio', url: '/public/portfolio/3.png' },
    { id: 'portfolio-4', alt: 'portfolio', url: '/public/portfolio/4.png' },
    { id: 'portfolio-5', alt: 'portfolio', url: '/public/portfolio/5.png' },
    { id: 'portfolio-6', alt: 'portfolio', url: '/public/portfolio/6.png' },
    { id: 'portfolio-7', alt: 'portfolio', url: '/public/portfolio/7.png' }
  ],
  shop: [
    {
      id: 'cart_dark',
      alt: 'cart_dark',
      url: '/public/shop/cart_dark.png'
    },
    {
      id: 'cart_light',
      alt: 'cart_light',
      url: '/public/shop/cart_light.png'
    },
    {
      id: 'cart_page_light',
      alt: 'cart_page_light',
      url: '/public/shop/cart_page_light.png'
    },
    {
      id: 'catalog_dark',
      alt: 'catalog_dark',
      url: '/public/shop/catalog_dark.png'
    },
    {
      id: 'categories_dark',
      alt: 'categories_dark',
      url: '/public/shop/categories_dark.png'
    },
    {
      id: 'categories_light',
      alt: 'categories_light',
      url: '/public/shop/categories_light.png'
    },
    {
      id: 'collections_dark',
      alt: 'collections_dark',
      url: '/public/shop/collections_dark.png'
    },

    {
      id: 'product_dark',
      alt: 'product_dark',
      url: '/public/shop/product_dark.png'
    },
    {
      id: 'product_light',
      alt: 'product_light',
      url: '/public/shop/product_light.png'
    },
    {
      id: 'strapi_comments',
      alt: 'strapi_comments',
      url: '/public/shop/strapi_comments.png'
    },
    {
      id: 'strapi_products',
      alt: 'strapi_products',
      url: '/public/shop/strapi_products.png'
    }
  ],
  nest_auth: [
    {
      id: 'nest_auth',
      alt: 'nest_auth',
      url: '/public/nest_auth/nest_auth.png'
    }
  ]
}
export type ProjectSlideType = (typeof projectsSlides)['portfolio']
